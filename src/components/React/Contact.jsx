import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required.';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format.';
      }
    }

    if (!formData.message.trim()) {
        newErrors.message = 'Message is required.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);

    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" class="mt-16">
      <div class="flex items-baseline justify-center mb-10">
        <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <span class="text-green text-[2.5rem] font-normal">C</span>
        </div>
      
        <h3 class="text-green text-2xl font-light -ml-[1.1rem]">
          ontact Me
        </h3>
      </div>
      <div class="flex flex-col md:flex-row bg-white rounded-lg justify-center">
        <div className="w-full md:w-2/4 mx-auto">
        <form onSubmit={handleSubmit} className="mt-20">
        {/* First Name */}
        <div className="space-y-6 mb-7">
          <label htmlFor="firstName" className="block text-sm font-normal text-black">
            First Name <span className="text-orange">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-0 border-b border-black focus:border-black focus:ring-0 focus:outline-none p-0 text-black"
          />
          {errors.firstName && <p className="text-orange text-sm">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div className="space-y-6 mb-7">
          <label htmlFor="lastName" className="block text-sm font-normal text-black">
            Last Name <span className="text-orange">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-0 border-b border-black focus:border-black focus:ring-0 focus:outline-none p-0 text-black"
          />
          {errors.lastName && <p className="text-orange text-sm">{errors.lastName}</p>}
        </div>

        {/* Email */}
        <div className="space-y-6 mb-7">
          <label htmlFor="email" className="block text-sm font-normal text-black">
            Email <span className="text-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-0 border-b border-black focus:border-black focus:ring-0 focus:outline-none p-0 text-black"
          />
          {errors.email && <p className="text-orange text-sm">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="space-y-6 mb-7">
          <label htmlFor="message" className="block text-sm font-normal text-black">
            Leave me your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border-0 border-b border-black focus:border-black focus:ring-0 focus:outline-none p-0 text-black"
          />
          {errors.message && <p className="text-orange text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-8">
          <button
            type="submit"
            className="bg-green hover:bg-green-deep text-xl text-white font-light px-10 py-1 rounded-md transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  </section>
  );
}