import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  // Ripple effect for button
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }
      `}</style>

      <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center">
        <section
          id="about"
          className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 w-full scroll-mt-24"
        >

          {/* Text Section */}
          <div className="max-w-lg w-full text-center lg:text-left space-y-6 animate-slideInLeft">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
              About Niraa!!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Niraa!! is dedicated to transforming education by providing a comprehensive school management system that simplifies operations and enhances collaboration.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Our mission is to empower educators, engage parents, and support students with intuitive tools designed for modern schools.
            </p>
            {/* CTA Button with Link */}
            <Link
              href="/signup"
              className="relative inline-block bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-semibold px-8 py-4 rounded-3xl hover:from-blue-800 hover:to-indigo-800 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-lg overflow-hidden"
              onClick={createRipple}
            >
              Join Us Today
              <span className="ripple absolute bg-white opacity-50 rounded-full transform scale-0"></span>
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-lg animate-slideInRight">
            <Image
              src="/images/chats_images.png"
              alt="School collaboration illustration"
              width={400}
              height={300}
              className="rounded-xl ml-20 shadow-md object-cover"
            />
          </div>
        </section>
      </div>
    </>
  );
}