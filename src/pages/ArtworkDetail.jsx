import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useUser, SignInButton } from '@clerk/clerk-react';
import { addToCart } from '../store/cartSlice';
import { ArrowLeftIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import image1 from '../assets/images/1.jpeg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/6.jpg';
import image5 from '../assets/images/7.jpg';
import image6 from '../assets/images/8.jpg';
import image7 from '../assets/images/9.jpeg';
import image8 from '../assets/images/10.jpg';
import image9 from '../assets/images/11.jpeg';
import image10 from '../assets/images/12.jpg';
import image11 from '../assets/images/13.jpeg';
import image12 from '../assets/images/14.jpg';

const artworksData = {
  '1': {
    id: '1',
    title: 'Abstract Harmony',
    artist: 'Sarah Chen',
    price: 1200,
    image: image1,
    category: 'Abstract',
    medium: 'Oil on Canvas',
    dimensions: '36" x 48"',
    year: 2023,
    description: 'A stunning abstract piece that explores the harmony between form and color. The dynamic composition creates a sense of movement and energy.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '2': {
    id: '2',
    title: 'Urban Dreams',
    artist: 'Michael Torres',
    price: 950,
    image: image2,
    category: 'Urban',
    medium: 'Acrylic on Canvas',
    dimensions: '30" x 40"',
    year: 2023,
    description: 'A vibrant urban landscape that captures the energy and spirit of city life. The bold colors and dynamic brushwork bring the scene to life.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '3': {
    id: '3',
    title: 'Nature\'s Serenity',
    artist: 'Emily Lee',
    price: 1800,
    image: image3,
    category: 'Landscape',
    medium: 'Watercolor on Paper',
    dimensions: '24" x 36"',
    year: 2022,
    description: 'A peaceful landscape that captures the serenity of nature. The soft colors and delicate brushwork create a sense of calm and tranquility.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '4': {
    id: '4',
    title: 'Pop Culture',
    artist: 'David Kim',
    price: 1500,
    image: image4,
    category: 'Pop Art',
    medium: 'Acrylic on Canvas',
    dimensions: '36" x 48"',
    year: 2023,
    description: 'A vibrant pop art piece that celebrates popular culture. The bold colors and dynamic composition create a sense of energy and excitement.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '5': {
    id: '5',
    title: 'Abstract Expression',
    artist: 'Sarah Chen',
    price: 2000,
    image: image5,
    category: 'Abstract',
    medium: 'Oil on Canvas',
    dimensions: '40" x 60"',
    year: 2023,
    description: 'A dynamic abstract piece that explores the expression of emotions through color and form. The bold brushwork and vibrant colors create a sense of energy and movement.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '6': {
    id: '6',
    title: 'Cityscape',
    artist: 'Michael Torres',
    price: 1200,
    image: image6,
    category: 'Urban',
    medium: 'Acrylic on Canvas',
    dimensions: '30" x 40"',
    year: 2023,
    description: 'A vibrant cityscape that captures the energy and spirit of urban life. The bold colors and dynamic brushwork bring the scene to life.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '7': {
    id: '7',
    title: 'Seascape',
    artist: 'Emily Lee',
    price: 1800,
    image: image7,
    category: 'Landscape',
    medium: 'Watercolor on Paper',
    dimensions: '24" x 36"',
    year: 2022,
    description: 'A peaceful seascape that captures the serenity of the ocean. The soft colors and delicate brushwork create a sense of calm and tranquility.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '8': {
    id: '8',
    title: 'Portrait',
    artist: 'David Kim',
    price: 1500,
    image: image8,
    category: 'Portrait',
    medium: 'Acrylic on Canvas',
    dimensions: '36" x 48"',
    year: 2023,
    description: 'A vibrant portrait that captures the essence of the subject. The bold colors and dynamic composition create a sense of energy and personality.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '9': {
    id: '9',
    title: 'Still Life',
    artist: 'Sarah Chen',
    price: 2000,
    image: image9,
    category: 'Still Life',
    medium: 'Oil on Canvas',
    dimensions: '40" x 60"',
    year: 2023,
    description: 'A beautiful still life piece that captures the essence of everyday objects. The soft colors and delicate brushwork create a sense of calm and serenity.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '10': {
    id: '10',
    title: 'Landscape',
    artist: 'Michael Torres',
    price: 1200,
    image: image10,
    category: 'Landscape',
    medium: 'Acrylic on Canvas',
    dimensions: '30" x 40"',
    year: 2023,
    description: 'A vibrant landscape that captures the beauty of nature. The bold colors and dynamic brushwork bring the scene to life.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '11': {
    id: '11',
    title: 'Abstract',
    artist: 'Emily Lee',
    price: 1800,
    image: image11,
    category: 'Abstract',
    medium: 'Watercolor on Paper',
    dimensions: '24" x 36"',
    year: 2022,
    description: 'A beautiful abstract piece that explores the expression of emotions through color and form. The soft colors and delicate brushwork create a sense of calm and tranquility.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  },
  '12': {
    id: '12',
    title: 'Pop Art',
    artist: 'David Kim',
    price: 1500,
    image: image12,
    category: 'Pop Art',
    medium: 'Acrylic on Canvas',
    dimensions: '36" x 48"',
    year: 2023,
    description: 'A vibrant pop art piece that celebrates popular culture. The bold colors and dynamic composition create a sense of energy and excitement.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  }
};

const ArtworkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSignedIn } = useUser();

  const artwork = artworksData[id] || {
    id: '1',
    title: 'Abstract Harmony',
    artist: 'Sarah Chen',
    price: 1200,
    image: image1,
    category: 'Abstract',
    medium: 'Oil on Canvas',
    dimensions: '36" x 48"',
    year: 2023,
    description: 'A stunning abstract piece that explores the harmony between form and color. The dynamic composition creates a sense of movement and energy.',
    details: [
      'Original artwork',
      'Signed by artist',
      'Certificate of authenticity included',
      'Professional framing available',
      'Free shipping within US'
    ]
  };

  const handleAddToCart = () => {
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
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Gallery
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative aspect-w-4 aspect-h-3">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">{artwork.title}</h1>
              <p className="text-xl text-gray-600">by {artwork.artist}</p>
            </div>

            <div className="space-y-4">
              <p className="text-3xl font-bold">${artwork.price.toLocaleString()}</p>
              <p className="text-gray-600">{artwork.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Medium</h3>
                <p className="text-gray-600">{artwork.medium}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dimensions</h3>
                <p className="text-gray-600">{artwork.dimensions}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <p className="text-gray-600">{artwork.category}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Year</h3>
                <p className="text-gray-600">{artwork.year}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Details</h3>
              <ul className="space-y-2">
                {artwork.details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              Add to Cart
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
