import { useUser, SignInButton } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';

const RequireAuth = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Sign in Required</h2>
            <p className="text-gray-600 mb-6">
              Please sign in to access this feature
            </p>
            <SignInButton mode="modal">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                Sign in
              </button>
            </SignInButton>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return children;
};

export default RequireAuth;
