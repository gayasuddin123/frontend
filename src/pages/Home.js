import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (email.trim()) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Life Planning, Making Easy to Turn Dreams a Reality.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Get Exclusive offers on purchase of any plans
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded-l-md focus:outline-none"
          />
          <button
            onClick={handleSignUp}
            className="px-4 py-2 text-white bg-black rounded-r-md"
          >
            Sign Up
          </button>
        </div>
      </main>
      <section className="py-8 px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Cards */}
          {[
            { title: 'Money Momentum', cagr: '7.20%', duration: '3 yrs' },
            { title: 'Long-Term', cagr: '14.20%', duration: '25 yrs' },
            { title: 'Focussed', cagr: '11.20%', duration: '1 yr' },
            { title: 'Fixed Income', cagr: '8.20%', duration: '5 yrs' },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow-md text-left"
            >
              <h3 className="font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">CAGR: {plan.cagr}</p>
              <p className="text-gray-600">{plan.duration}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
