import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '', project: '', service: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required';
    tempErrors.mobile = formData.mobile ? '' : 'Mobile number is required';
    tempErrors.project = formData.project ? '' : 'Project description is required';
    tempErrors.service = formData.service ? '' : 'Service selection is required';
    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      tempErrors.mobile = 'Invalid mobile number. It should be 10 digits';
    }
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="w-full mx-4 md:mx-20 bg-white p-8 shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a service</option>
            <option value="website_design">Website Design</option>
            <option value="google_ads">Google Ads</option>
            <option value="facebook_ads">Facebook Ads</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project">About Project</label>
          <textarea
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
          {errors.project && <p className="text-red-500 text-xs">{errors.project}</p>}
        </div>
      
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Send Proposal
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
