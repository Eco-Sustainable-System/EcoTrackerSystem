"use client";
import React, { useState } from 'react';
import { Battery, Zap, Wind, Sun, Droplet, DollarSign, Award, X } from 'lucide-react';

const products = [
  {
    title: "SolarFlare Panel Kit",
    description: "High-efficiency solar panels for residential use",
    icon: <Sun className="h-6 w-6 text-[#fdb713]" />,
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-48">
        <rect width="100" height="100" fill="#87CEEB" />
        <rect x="10" y="10" width="80" height="80" fill="#4169E1" />
        <circle cx="50" cy="50" r="30" fill="#FFD700" />
      </svg>
    ),
    metric: "5kW capacity",
    price: 2999.99,
    points: 29999,
  },
  {
    title: "WindWhisper Turbine",
    description: "Compact wind turbine for urban environments",
    icon: <Wind className="h-6 w-6 text-[#fdb713]" />,
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-48">
        <rect width="100" height="100" fill="#87CEEB" />
        <path d="M50 20 L80 80 L20 80 Z" fill="#FFFFFF" />
        <circle cx="50" cy="50" r="10" fill="#C0C0C0" />
      </svg>
    ),
    metric: "3kW output",
    price: 1499.99,
    points: 14999,
  },
  {
    title: "HydroFlow Home System",
    description: "Micro-hydro power generator for properties with water sources",
    icon: <Droplet className="h-6 w-6 text-[#fdb713]" />,
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-48">
        <rect width="100" height="100" fill="#4169E1" />
        <path d="M20 80 Q50 20 80 80 Z" fill="#FFFFFF" />
        <circle cx="50" cy="60" r="10" fill="#C0C0C0" />
      </svg>
    ),
    metric: "2kW continuous",
    price: 3499.99,
    points: 34999,
  },
  {
    title: "BioVolt Converter",
    description: "Convert organic waste into electricity",
    icon: <Zap className="h-6 w-6 text-[#fdb713]" />,
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-48">
        <rect width="100" height="100" fill="#228B22" />
        <path d="M30 70 L50 30 L70 70 L50 50 Z" fill="#FFD700" />
      </svg>
    ),
    metric: "500W output",
    price: 999.99,
    points: 9999,
  },
  {
    title: "EcoCharge Battery Bank",
    description: "High-capacity storage for renewable energy",
    icon: <Battery className="h-6 w-6 text-[#fdb713]" />,
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-48">
        <rect width="100" height="100" fill="#D3D3D3" />
        <rect x="10" y="30" width="80" height="40" fill="#32CD32" />
        <rect x="90" y="40" width="10" height="20" fill="#32CD32" />
      </svg>
    ),
    metric: "10kWh capacity",
    price: 4999.99,
    points: 49999,
  },
  {
    title: "SmartGrid Home Hub",
    description: "Intelligent energy management system",
    icon: <Zap className="h-6 w-6 text-[#fdb713]" />,
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-48">
        <rect width="100" height="100" fill="#F0F0F0" />
        <rect x="20" y="20" width="60" height="60" fill="#4169E1" />
        <circle cx="50" cy="50" r="20" fill="#FFD700" />
        <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="#FFFFFF" />
      </svg>
    ),
    metric: "30% energy savings",
    price: 799.99,
    points: 7999,
  },
];

const ProductCard = ({ product, onBuy }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  return (
    <div className="bg-[#FAF8ED] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
      <div className="w-full h-48">{product.image}</div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-[#2D3134] rounded-full p-2">{product.icon}</div>
          <span className="text-sm font-medium text-[#2D3134]">{product.metric}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#2D3134]">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 rounded-full text-sm ${
                paymentMethod === 'cash' ? 'bg-[#2D3134] text-[#FAF8ED]' : 'bg-gray-200 text-[#2D3134]'
              }`}
              onClick={() => setPaymentMethod('cash')}
            >
              Cash
            </button>
            <button
              className={`px-3 py-1 rounded-full text-sm ${
                paymentMethod === 'points' ? 'bg-[#2D3134] text-[#FAF8ED]' : 'bg-gray-200 text-[#2D3134]'
              }`}
              onClick={() => setPaymentMethod('points')}
            >
              Points
            </button>
          </div>
          <span className="text-[#fdb713] font-bold">
            {paymentMethod === 'cash' ? `$${product.price.toFixed(2)}` : `${product.points} pts`}
          </span>
        </div>
        <button 
          className="w-full bg-[#2D3134] text-[#FAF8ED] py-2 rounded-full hover:bg-opacity-90 transition duration-300 flex items-center justify-center"
          onClick={() => onBuy(product, paymentMethod)}
        >
          {paymentMethod === 'cash' ? (
            <>
              <DollarSign className="h-5 w-5 mr-2" />
              Buy Now
            </>
          ) : (
            <>
              <Award className="h-5 w-5 mr-2" />
              Redeem with Points
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const CheckoutPopup = ({ product, paymentMethod, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">{product.title}</h3>
          <p>{product.description}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Payment Method:</p>
          <p>{paymentMethod === 'cash' ? 'Cash' : 'Points'}</p>
        </div>
        <div className="mb-6">
          <p className="font-semibold">Total:</p>
          <p className="text-xl text-[#fdb713]">
            {paymentMethod === 'cash' ? `$${product.price.toFixed(2)}` : `${product.points} pts`}
          </p>
        </div>
        <button
          onClick={onConfirm}
          className="w-full bg-[#2D3134] text-[#FAF8ED] py-2 rounded-full hover:bg-opacity-90 transition duration-300"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

const OrderConfirmation = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
        <p className="mb-6">Thank you for your order. We're preparing it for delivery.</p>
        <button
          onClick={onClose}
          className="bg-[#2D3134] text-[#FAF8ED] py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const EcoMarketplace = () => {
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [checkoutPaymentMethod, setCheckoutPaymentMethod] = useState(null);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const handleBuy = (product, paymentMethod) => {
    setCheckoutProduct(product);
    setCheckoutPaymentMethod(paymentMethod);
  };

  const handleCloseCheckout = () => {
    setCheckoutProduct(null);
    setCheckoutPaymentMethod(null);
  };

  const handleConfirmOrder = () => {
    setCheckoutProduct(null);
    setCheckoutPaymentMethod(null);
    setShowOrderConfirmation(true);
  };

  const handleCloseOrderConfirmation = () => {
    setShowOrderConfirmation(false);
  };

  return (
    <div className="bg-[#2D3134] min-h-screen py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#FAF8ED]">
          Eco-Sustainable Energy Marketplace
        </h1>
        <p className="text-lg mb-12 text-center text-[#FAF8ED] max-w-3xl mx-auto">
          Discover cutting-edge products that harness renewable energy sources and contribute to a sustainable future.
          Choose to pay with cash or redeem your eco-points!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} onBuy={handleBuy} />
          ))}
        </div>
      </div>
      {checkoutProduct && (
        <CheckoutPopup
          product={checkoutProduct}
          paymentMethod={checkoutPaymentMethod}
          onClose={handleCloseCheckout}
          onConfirm={handleConfirmOrder}
        />
      )}
      {showOrderConfirmation && (
        <OrderConfirmation onClose={handleCloseOrderConfirmation} />
      )}
    </div>
  );
};

export default EcoMarketplace;
