import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const stats = [
  { label: 'Artists', value: '50+' },
  { label: 'Artworks', value: '1000+' },
  { label: 'Collectors', value: '5000+' },
  { label: 'Countries', value: '25+' },
];

const values = [
  {
    title: 'Artist-First Approach',
    description: 'We prioritize fair compensation and recognition for our artists, ensuring they can thrive in their creative pursuits.',
    icon: '🎨',
  },
  {
    title: 'Quality Curation',
    description: 'Each piece in our collection is carefully selected to maintain the highest standards of artistic excellence.',
    icon: '✨',
  },
  {
    title: 'Global Community',
    description: 'We connect artists and art lovers from around the world, fostering cultural exchange and creative dialogue.',
    icon: '🌍',
  },
  {
    title: 'Innovation',
    description: 'Embracing new technologies and mediums while respecting traditional artistic practices.',
    icon: '💡',
  },
];

const placeholderImages = {
  aboutHero: '/about-hero.jpg',
};

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${placeholderImages.aboutHero})` }}
        />
        <div className="relative z-20 h-full flex items-center justify-center text-white">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl leading-relaxed">
              Artiste is more than just a marketplace - we're a community dedicated to 
              celebrating creativity and connecting exceptional artists with art lovers worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur rounded-2xl p-12 shadow-xl"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe that art has the power to transform spaces, inspire minds, and connect souls. 
                Our mission is to make exceptional art accessible to everyone while supporting artists 
                in building sustainable careers. Through technology and community, we're creating a 
                more vibrant and inclusive art world.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Explore Gallery
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-white/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Whether you're an artist looking to join our community or a collector seeking 
              the perfect piece, we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Contact Us
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
