import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="py-4 bg-white shadow-md">
      <div className="flex justify-center space-x-4 text-sm text-gray-600">
        <button
          className="hover:underline"
          onClick={() => navigate('/get-started')}
        >
          Get Started
        </button>
        <span>•</span>
        <button className="hover:underline">Terms Policy</button>
      </div>
    </footer>
  );
};

export default Footer;
