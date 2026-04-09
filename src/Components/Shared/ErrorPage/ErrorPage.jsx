import React from 'react';
import { Link } from 'react-router'; // Make sure you have react-router-dom installed

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
            <div className="text-center">
                {/* 404 Text */}
                <h1 className="text-9xl font-bold text-white tracking-tighter mb-4">
                    404
                </h1>

                {/* Subtitle */}
                <h2 className="text-4xl font-semibold text-gray-300 mb-6">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        ← Back to Home
                    </Link>

                    <button
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300"
                    >
                        Reload Page
                    </button>
                </div>

                {/* Optional Illustration */}
                <div className="mt-16 text-[120px] opacity-10">
                    😵‍💫
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;