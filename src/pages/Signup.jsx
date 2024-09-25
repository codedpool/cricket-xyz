import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

const RegistrationForm = () => {
  const [stage, setStage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    favoriteTeam: '',
    playingPosition: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Demo POST method
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      console.log('Registration successful:', data);
      alert('Howzat! Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Out! Registration failed. Please try again.');
    }
  };

  const stages = [
    {
      title: 'Personal Information',
      fields: [
        { name: 'fullName', label: 'Full Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
      ],
    },
    {
      title: 'Cricket Details',
      fields: [
        { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
        { name: 'favoriteTeam', label: 'Favorite Cricket Team', type: 'text' },
        { name: 'playingPosition', label: 'Preferred Playing Position', type: 'text' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{backgroundImage: "url('/api/placeholder/1920/1080')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"></div>
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            XYZ Organisation Registration
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Pad up and join our cricket community today!
          </p>
        </div>
        <div className="flex justify-center space-x-2 mb-4">
          {stages.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index <= stage ? 'bg-green-600' : 'bg-gray-300'
              }`}
              initial={{ scale: 1 }}
              animate={{ scale: index === stage ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.form
            key={stage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {stages[stage].title}
            </h3>
            {stages[stage].fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <div className="flex justify-between">
              {stage > 0 && (
                <button
                  type="button"
                  onClick={() => setStage((prev) => prev - 1)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>
              )}
              {stage < stages.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStage((prev) => prev + 1)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Join the Team
                  <Check className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RegistrationForm;