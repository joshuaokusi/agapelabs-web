'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [imgError, setImgError] = useState(false);
  
  return (
    <main>
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Agape Labs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spreading God's love through innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400" style={{ display: imgError ? 'flex' : 'none' }}>
                <p className="text-sm">About image placeholder</p>
              </div>
              <Image 
                src="/images/about-image.jpg" 
                alt="About Agape Labs" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImgError(true)}
                style={{ display: imgError ? 'none' : 'block' }}
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Agape Labs was founded with a simple mission: to use technology as a vessel for spreading God's love. We believe that innovative technical solutions can be used to solve meaningful problems and make a positive impact in the world.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team consists of passionate technologists who are driven by faith and a desire to serve. We combine technical excellence with Christian values to deliver solutions that truly make a difference.
              </p>
              <p className="text-lg text-gray-700">
                Whether we're developing software for churches, creating tools for ministry, or building platforms that connect communities, our focus is always on how technology can be used to spread love, kindness, and positive change.
              </p>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Faith-Driven</h3>
                <p className="text-gray-700">
                  Our faith is the foundation of everything we do. We strive to reflect God's love in our work, relationships, and business practices.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We believe in doing everything with excellence as a reflection of our commitment to God and the people we serve.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Service</h3>
                <p className="text-gray-700">
                  We approach our work as an opportunity to serve others, focusing on meeting needs and solving real problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 