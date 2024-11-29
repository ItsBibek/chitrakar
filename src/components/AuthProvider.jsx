import { ClerkProvider } from '@clerk/clerk-react';

const AuthProvider = ({ children }) => {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
};

export default AuthProvider;
