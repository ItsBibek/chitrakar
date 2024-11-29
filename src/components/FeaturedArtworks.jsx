import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useUser, SignInButton } from '@clerk/clerk-react';
import { addToCart } from '../store/cartSlice';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import image1 from '../assets/images/1.jpeg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/6.jpg';
import image5 from '../assets/images/7.jpg';
import image6 from '../assets/images/8.jpg';

const featuredArtworks = [
  {
    id: '1',
    title: 'Abstract Harmony',
    artist: 'Sarah Chen',
    price: 1200,
    image: image1,
  },
  {
    id: '2',
    title: 'Urban Dreams',
    artist: 'Michael Torres',
    price: 950,
    image: image2,
  },
  {
    id: '3',
    title: "Nature's Serenity",
    artist: 'Emily Lee',
    price: 1800,
    image: image3,
  },
  {
    id: '4',
    title: 'Pop Culture',
    artist: 'David Kim',
    price: 1500,
    image: image4,
  },
  {
    id: '5',
    title: 'Ethereal Light',
    artist: 'Jessica Parker',
    price: 1100,
    image: image5,
  },
  {
    id: '6',
    title: 'Modern Perspective',
    artist: 'Robert Black',
    price: 1300,
    image: image6,
  },
];

const FeaturedArtworks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSignedIn } = useUser();

  const handleAddToCart = (artwork, e) => {
    e.stopPropagation(); // Prevent image click navigation when clicking the cart button
    
    if (!isSignedIn) {
      toast((t) => (
        <div className="flex items-center gap-4">
          <p>Please sign in to add items to cart</p>
          <SignInButton mode="modal">
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
              Sign in
            </button>
          </SignInButton>
        </div>
      ));
      return;
    }

    dispatch(addToCart(artwork));
    toast.success('Added to cart!');
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              onClick={() => navigate(`/artwork/${artwork.id}`)}
            >
              <div className="relative aspect-w-4 aspect-h-3">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={(e) => handleAddToCart(artwork, e)}
                    className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                <p className="text-gray-600 mb-4">{artwork.artist}</p>
                <p className="text-2xl font-bold">${artwork.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtworks;
