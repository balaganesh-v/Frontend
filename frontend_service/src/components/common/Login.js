import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Login({ ...props }) {
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  // Typing effect for the heading
  useEffect(() => {
    const text = `Welcome to ${props.username || 'Niraa'}!!`;
    let index = 0;
    const speed = 100;

    const type = () => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
        setTimeout(type, speed);
      }
    };

    setDisplayedText('');
    type();
  }, [props.username]);

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  // Parallax effect for background particles
  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = sectionRef.current;
      const particles = section.querySelectorAll('.particle');
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      particles.forEach((particle, idx) => {
        const moveX = (clientX / innerWidth - 0.5) * (15 + idx * 5);
        const moveY = (clientY / innerHeight - 0.5) * (15 + idx * 5);
        particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLoginClick = (userType) => {
    setLoading(true);
    setSelectedType(userType);

    setTimeout(() => {
      setLoading(false);
      setSelectedType(null);
    }, 800);
  };

  const loginTypes = [
    {
      type: 'admin',
      title: 'Admin Login',
      description: 'System administration',
      icon: '🛡️',
      color: 'bg-blue-600 hover:bg-blue-700',
      lightBg: 'bg-gray-50 hover:bg-gray-100',
      textColor: 'text-blue-600',
      route: '/admin-dashboard',
    },
    {
      type: 'teacher',
      title: 'Teacher Login',
      description: 'Manage classes & students',
      icon: '📚',
      color: 'bg-blue-600 hover:bg-blue-700',
      lightBg: 'bg-gray-50 hover:bg-gray-100',
      textColor: 'text-blue-600',
      route: '/teacher-dashboard',
    },
    {
      type: 'student',
      title: 'Student Login',
      description: 'Access courses & assignments',
      icon: '🎓',
      color: 'bg-blue-600 hover:bg-blue-700',
      lightBg: 'bg-gray-50 hover:bg-gray-100',
      textColor: 'text-blue-600',
      route: '/student-dashboard',
    },
  ];

  return (
    <div
      id="login"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="particle absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full -translate-x-1/2 translate-y-1/4 animate-pulseOrbit transition-transform duration-200"></div>
        <div className="particle absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full translate-x-1/3 -translate-y-1/3 animate-pulseOrbit animate-delay-333 transition-transform duration-200"></div>
        <div className="particle absolute top-1/2 left-1/4 w-64 h-64 bg-blue-200 rounded-full animate-pulseOrbit animate-delay-666 transition-transform duration-200"></div>
      </div>

      <section className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative z-10 bg-opacity-95">
        {/* Header */}
        <header className="text-center mb-8 animate-fadeIn">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 shadow-lg">
            <span className="text-white text-2xl font-extrabold">Y</span>
          </div>
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            aria-label={`Welcome to ${props.username || 'Niraa'}!!`}
          >
            {displayedText}
            <span className="animate-blink">|</span>
          </h1>
          <p className="text-gray-600 text-base">Select your login type to get started</p>
        </header>

        {/* Login buttons section */}
        <section className="space-y-4">
          {loginTypes.map((type, index) => {
            const isSelected = selectedType === type.type;

            return (
              <Link
                key={type.type}
                href={type.route}
                onClick={(e) => {
                  handleLoginClick(type.type);
                  createRipple(e);
                }}
                className={`
                  w-full p-4 rounded-3xl border-2 border-gray-200 
                  ${type.lightBg} ${type.textColor}
                  hover:border-gray-300 hover:shadow-lg
                  transform transition-all duration-300
                  hover:scale-105 hover:-translate-y-1
                  focus:outline-none focus:ring-4 focus:ring-blue-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                  group relative overflow-hidden block
                  ${isSelected ? 'scale-105 shadow-xl' : ''}
                `}
                style={{
                  animation: `slideIn 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Ripple effect overlay */}
                <span className="ripple absolute bg-white opacity-50 rounded-full transform scale-0 animate-ripple"></span>

                <div className="relative flex items-center space-x-4">
                  {/* Icon */}
                  <div
                    className={`
                      w-12 h-12 rounded-xl ${type.color} text-white
                      flex items-center justify-center
                      transform transition-all duration-300
                      group-hover:scale-110 group-hover:rotate-6
                      shadow-lg
                    `}
                  >
                    <span className="text-xl">{type.icon}</span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-left">
                    <h3 className="font-extrabold text-lg text-gray-800 group-hover:text-gray-900">
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-600">
                      {type.description}
                    </p>
                  </div>

                  {/* Arrow or loader */}
                  <div className="transform transition-all duration-300 group-hover:translate-x-2">
                    {loading && isSelected ? (
                      <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span className="text-xl text-gray-400 group-hover:text-gray-600">→</span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </section>

        {/* Footer section */}
        <footer className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <button
              onClick={() => alert('Support: support@niraa.edu\nPhone: +91 1234-567890')}
              className="text-blue-600 hover:text-blue-700 underline hover:no-underline transition-all duration-200 font-semibold"
            >
              Contact Support
            </button>
          </p>
        </footer>
      </section>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseOrbit {
          0% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.25;
          }
          100% {
            transform: scale(1);
            opacity: 0.15;
          }
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-pulseOrbit {
          animation: pulseOrbit 4s ease-in-out infinite;
        }
        .animate-ripple {
          animation: ripple 0.6s linear;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .animate-delay-333 {
          animation-delay: 0.333s;
        }
        .animate-delay-666 {
          animation-delay: 0.666s;
        }
      `}</style>
    </div>
  );
}