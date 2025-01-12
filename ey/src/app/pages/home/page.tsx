import React from 'react';
import Navbar  from '@/components/Navbar';
import "@/app/globals.css";
import CardWrapper from '@/components/cardWrapper';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-yellow-400 text-white h-[70vh] flex flex-col justify-center p-9" style={{ backgroundImage: `url('/assets/bg.png')` , backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-left px-4">
          
          <h1 className="text-2xl font-bold mb-4 text-[#FFE600]">All In</h1>
          <h1 className="text-4xl font-bold mb-4">Smart Choices, Bright Futures: </h1>
          <h1 className="text-4xl font-bold mb-4">Empowering Rural India with AI-Driven Financial Advice</h1>
          <div className="flex items-center mt-8">
            <div className="w-1 h-16 bg-yellow-500 mr-4"></div>
            <p className="text-lg">
              <strong>We help organizations shape the future with confidence.</strong><br />
              <strong>We’ll continue to ask the better questions we’re known for, to get to the new and better answers the future demands.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Trending Blog Section */}
      <section className="py-12 bg-[#2E2E38] text-white">
        <div className="mx-auto px-4">
          <h2 className="text-2xl mb-8 text-left mx-9" style={{fontSize: '40px', fontWeight:'400', lineHeight: '1.5px'}}>Trending Blogs</h2>
          <CardWrapper/>
        </div>
      </section>

      {/* AI GURU Section */}
      
    </div>
  );
};

export default HomePage;