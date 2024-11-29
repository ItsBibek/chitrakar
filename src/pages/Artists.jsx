import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/28.jpg';
import artist1 from '../assets/images/1.jpeg';
import artist2 from '../assets/images/3.jpg';
import artist3 from '../assets/images/4.jpg';
import artist4 from '../assets/images/6.jpg';
import artist5 from '../assets/images/7.jpg';
import artist6 from '../assets/images/8.jpg';

const artists = [
  {
    id: 1,
    name: 'Sarah Chen',
    specialty: 'Contemporary Abstract',
    image: artist1,
    bio: 'Sarah\'s work explores the intersection of emotion and color, creating vibrant abstract pieces that speak to the soul.',
    featured: true,
  },
  {
    id: 2,
    name: 'Marcus Rivera',
    specialty: 'Digital Art & Photography',
    image: artist2,
    bio: 'Blending traditional photography with digital manipulation, Marcus creates surreal landscapes and portraits.',
    featured: true,
  },
  {
    id: 3,
    name: 'Emma Thompson',
    specialty: 'Sculpture & Installation',
    image: artist3,
    bio: 'Emma\'s large-scale installations challenge perspectives and create immersive experiences.',
    featured: true,
  },
  {
    id: 4,
    name: 'James Wilson',
    specialty: 'Oil Painting',
    image: artist4,
    bio: 'With a focus on realism and light, James captures moments of quiet beauty in everyday life.',
    featured: false,
  },
  {
    id: 5,
    name: 'Aisha Patel',
    specialty: 'Mixed Media',
    image: artist5,
    bio: 'Aisha combines traditional techniques with modern materials to create unique textural pieces.',
    featured: false,
  },
  {
    id: 6,
    name: 'David Kim',
    specialty: 'Minimalist Design',
    image: artist6,
    bio: 'Through simplicity and precision, David creates powerful statements in minimal forms.',
    featured: false,
  },
];

const Artists = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-20 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Meet Our Artists</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover the talented creators behind our exceptional collection
            </p>
          </div>
        </div>
      </div>

      {/* Featured Artists */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.filter(artist => artist.featured).map((artist) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{artist.name}</h3>
                    <p className="text-white/90">{artist.specialty}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{artist.bio}</p>
                  <Link
                    to={`/artist/${artist.id}`}
                    className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                  >
                    View Profile
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Artists */}
      <section className="py-20 px-4 bg-white/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">All Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.filter(artist => !artist.featured).map((artist) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{artist.name}</h3>
                    <p className="text-white/90">{artist.specialty}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{artist.bio}</p>
                  <Link
                    to={`/artist/${artist.id}`}
                    className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                  >
                    View Profile
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artists;
