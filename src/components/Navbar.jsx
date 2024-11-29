import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShowNav, setShouldShowNav] = useState(true);
  const cartItems = useSelector((state) => state.cart.items);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShouldShowNav(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: shouldShowNav ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-white/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            ChitraKar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/gallery" className="hover:text-gray-600 transition">
              Gallery
            </Link>
            <Link to="/artists" className="hover:text-gray-600 transition">
              Meet Our Artists
            </Link>
            <Link to="/about" className="hover:text-gray-600 transition">
              About
            </Link>
          </div>

          {/* Auth & Cart */}
          <div className="hidden md:flex items-center gap-4">
            {isSignedIn ? (
              <>
                <UserButton afterSignOutUrl="/" />
                <Link
                  to="/cart"
                  className="relative p-2 hover:bg-black/5 rounded-full transition"
                >
                  <ShoppingCartIcon className="w-6 h-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <SignInButton mode="modal">
                  <button className="hover:text-gray-600 transition">
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                    Sign up
                  </button>
                </SignUpButton>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-black/5 rounded-full transition"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                to="/gallery"
                className="block hover:text-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/artists"
                className="block hover:text-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Meet Our Artists
              </Link>
              <Link
                to="/about"
                className="block hover:text-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              {isSignedIn ? (
                <div className="flex items-center gap-4">
                  <UserButton afterSignOutUrl="/" />
                  <Link
                    to="/cart"
                    className="relative p-2 hover:bg-black/5 rounded-full transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <ShoppingCartIcon className="w-6 h-6" />
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <SignInButton mode="modal">
                    <button className="w-full text-left hover:text-gray-600 transition">
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                      Sign up
                    </button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
