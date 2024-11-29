import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-xl mb-4">Artiste</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Artists</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Collections</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Custom Art</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Art Advisory</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Framing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Address</h3>
            <ul className="space-y-2 text-gray-600">
              <li>123 Art Street</li>
              <li>Creative District</li>
              <li>contact@artiste.com</li>
              <li>+1 234 567 890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
