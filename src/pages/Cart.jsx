import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useUser, SignInButton } from '@clerk/clerk-react';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import RequireAuth from '../components/RequireAuth';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

const Cart = () => {
  const { isSignedIn } = useUser();
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!isSignedIn) {
    return <RequireAuth />;
  }

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  if (items.length === 0) {
    return (
      <div className="flex-1 flex flex-col min-h-screen pt-24 pb-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex-grow flex items-center justify-center w-full">
          <div className="container mx-auto max-w-lg px-4">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-12 text-center shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Discover unique artworks in our gallery</p>
              <Link 
                to="/gallery" 
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition inline-flex items-center gap-2"
              >
                <ShoppingCartIcon className="w-5 h-5" />
                Browse Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full pt-24 pb-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
          
          <div className="space-y-6">
            {items.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white/50 rounded-2xl"
              >
                <div className="relative w-32 h-32 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0 text-center md:text-left">
                  <h3 className="font-semibold text-lg truncate">{item.title}</h3>
                  <p className="text-gray-600">{item.artist}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center"
                    disabled={item.quantity <= 1}
                  >
                    <MinusIcon className="w-4 h-4 text-black" />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center"
                  >
                    <PlusIcon className="w-4 h-4 text-black" />
                  </button>
                </div>
                
                <div className="text-lg font-semibold whitespace-nowrap">
                  ${(item.price * item.quantity).toLocaleString()}
                </div>
                
                <button
                  onClick={() => handleRemove(item.id)}
                  className="p-2 text-red-500 hover:text-red-600 transition"
                  aria-label="Remove item"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg">Total</span>
              <span className="text-2xl font-bold">${total.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition w-full md:w-auto">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
