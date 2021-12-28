import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
// import { getAbout } from '../services;

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container px-10 mx-auto mb-8">
      <div className="inline-block w-full py-8 border-b-4 border-red-600">
        <div className="block md:float-left">
          <Link href="/">
            <span className="px-4 py-1 text-4xl font-bold text-white transition duration-500 rounded cursor-pointer hover:bg-black">MotoRidin</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
