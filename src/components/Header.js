import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold">Lyf-</div>
      <div>
        <button
          className="px-4 py-2 mr-2 border rounded"
          onClick={() => navigate('/login')}
        >
          Log In
        </button>
        <button
          className="px-4 py-2 bg-black text-white rounded"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
