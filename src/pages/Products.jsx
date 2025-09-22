import React from 'react'
import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1708388064672-6536507fdf6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a29yZWFuJTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MHwwfDB8fHwy", // food image 1
  "https://images.unsplash.com/photo-1698133468645-d62daaea2e83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMHBsYXR0ZXJ8ZW58MHx8MHx8fDA%3D", // food image 2
  "https://images.unsplash.com/photo-1654870032519-9db00597cd78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2QlMjBwbGF0dGVyfGVufDB8fDB8fHww", // food image 3
  "https://images.unsplash.com/photo-1718114243715-8252d5382319?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGZvb2QlMjBwbGF0dGVyfGVufDB8MXwwfHx8Mg%3D%3D", // food image 4
  "https://images.unsplash.com/photo-1672858502748-fb7dc81ef830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGFzaWFuJTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MHwxfDB8fHwy", // food image 5
];


function Products() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
   <div className="w-full max-w-6xl mx-auto overflow-hidden relative py-10">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 flex justify-center px-2"
          >
            <img
              src={src}
              alt={`slide-${idx}`}
              className="rounded-2xl shadow-lg w-[300px] h-[400px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-gray-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>;
  




    </>
  )
}

export default Products
