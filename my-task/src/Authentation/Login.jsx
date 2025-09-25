import React, { useState } from 'react';

// You would need to import your own CSS file for styles
// For example: import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would handle the login logic, e.g.,
    // making an API call to authenticate the user
    console.log('Login attempt with:', { email, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    // Here you would handle the Google login logic
    console.log('Logging in with Google...');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome to ScapeSync</h2>
        <p className="text-gray-600 text-center mb-6 text-sm">
          Please share your login details so you can access the website.
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="eddie_lake@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* A simple eye icon can be added here, e.g., from an icon library */}
                👁️
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6 text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 accent-green-500"
              />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center space-x-2 text-gray-700 hover:bg-gray-50"
        >
          {/* You would use an actual Google logo image or SVG here */}
          <img src="https://www.gstatic.com/images/branding/product/2x/google_logo_48dp.png" alt="Google logo" className="w-5 h-5" />
          <span>Log in with Google</span>
        </button>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-700">
            Don't have an account?{' '}
            <a href="#" className="text-green-600 font-semibold hover:underline">
              Get started
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;