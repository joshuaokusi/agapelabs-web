'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;
    const image = imageRef.current;

    if (heading) {
      heading.classList.add('translate-y-0', 'opacity-100');
    }

    if (subheading) {
      setTimeout(() => {
        subheading.classList.add('translate-y-0', 'opacity-100');
      }, 300);
    }

    if (cta) {
      setTimeout(() => {
        cta.classList.add('translate-y-0', 'opacity-100');
      }, 600);
    }

    if (image) {
      setTimeout(() => {
        image.classList.add('translate-y-0', 'opacity-100');
      }, 400);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 
              ref={headingRef}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6 transform translate-y-8 opacity-0 transition-all duration-700"
            >
              Spreading God's Love <span className="text-blue-600">Through Technology</span>
            </h1>
            <p 
              ref={subheadingRef}
              className="text-xl text-gray-700 mb-8 max-w-lg transform translate-y-8 opacity-0 transition-all duration-700"
            >
              We create innovative technology solutions inspired by faith and service, dedicated to making a positive impact in the digital world.
            </p>
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform translate-y-8 opacity-0 transition-all duration-700"
            >
              <Link href="/services" className="btn btn-primary">
                Our Services
              </Link>
              <Link href="/contact" className="btn bg-white border border-black text-black hover:bg-gray-100">
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="lg:justify-self-end transform translate-y-16 opacity-0 transition-all duration-1000"
          >
            <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200 rounded-lg">
              <div 
                className="absolute inset-0 flex items-center justify-center text-gray-400"
                style={{ display: imgError ? 'flex' : 'none' }}
              >
                <p className="text-sm">Hero image placeholder</p>
              </div>
              <Image 
                src="/images/hero-image.jpg" 
                alt="Christian Technology" 
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                onError={() => setImgError(true)}
                style={{ display: imgError ? 'none' : 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 