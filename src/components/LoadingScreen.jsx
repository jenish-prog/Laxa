import React from 'react';

const LoadingScreen = ({ isLoading }) => {
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="relative h-16 w-16">
                    <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-20"></div>
                    <div className="absolute inset-2 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
                </div>
                <p className="animate-pulse text-sm font-medium tracking-widest text-gray-500">
                    LOADING
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
