import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Uncomment if you are using react-router-dom

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  // const navigate = useNavigate(); // Uncomment if you are using react-router-dom

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    // to initiate the password reset process.
    console.log('Password reset requested for email:', email);

    // After sending the request, you might want to show a success message
    // or navigate the user to a confirmation page.
    alert(`If an account with ${email} exists, a password reset link has been sent.`);
    setEmail(''); // Clear the email input
  };

  const handleBack = () => {
    // This function would typically navigate back to the login page
    // if you are using a router like react-router-dom.
    // For example: navigate('/login');
    console.log('Navigating back...');
    // If not using a router, you might just want to show the login form
    // by changing the parent component's state.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        {/* Back Link */}
        <button
          onClick={handleBack}
          className="flex items-center text-green-600 hover:underline mb-8 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <h2 className="text-3xl font-bold mb-4">Forgot your password?</h2>
        <p className="text-gray-600 mb-8">
          Please enter the email address associated with your account, and we'll email you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Address Input */}
          <div className="mb-6">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500 text-lg"
              required
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;