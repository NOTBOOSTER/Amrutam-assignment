import React from 'react';

const Loader = () => {
  return (
    <div className="w-full h-56 flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(to bottom right, #28643B, #3A643B)'}}>
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white">
            <path
              fill="currentColor"
              d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 6.5C12.5 6.5 13 6.67 13.35 7.03L18.97 12.65C19.33 13 19.5 13.5 19.5 14S19.33 14.5 18.97 14.85L13.35 20.47C13 20.83 12.5 21 12 21S11 20.83 10.65 20.47L5.03 14.85C4.67 14.5 4.5 14 4.5 13.5S4.67 13 5.03 12.65L10.65 7.03C11 6.67 11.5 6.5 12 6.5Z"
            />
            <path
              fill="currentColor"
              opacity="0.7"
              d="M12 7L6 13L12 19C12.3 19 12.6 18.9 12.8 18.7L18.4 13.1C18.6 12.9 18.7 12.6 18.7 12.3C18.7 12 18.6 11.7 18.4 11.5L12.8 5.9C12.6 5.7 12.3 5.6 12 5.6V7Z"
            />
          </svg>
        </div>
        
        <div className="absolute inset-0 w-20 h-20 border-4 border-gray-200 rounded-full animate-spin" style={{borderTopColor: '#28643B'}}></div>
        
        <div className="absolute -inset-3 w-26 h-26 border-2 rounded-full animate-ping opacity-50" style={{borderColor: '#3A643B'}}></div>
      </div>
    </div>
  );
};

export default Loader;