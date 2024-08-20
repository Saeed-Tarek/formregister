import React, { useState } from 'react';
import axios from 'axios';
import { validateForm } from './validation';
import { Eye, EyeOff } from 'lucide-react'; 

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); 
  const [imagePreview, setImagePreview] = useState(null); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
    setImagePreview(URL.createObjectURL(file)); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('image', formData.image);

      try {
        await axios.post('https://www.appssquare.sa/api/submit', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (error) {
        console.error('Form submission error', error);
      }
    }
  };

  return (
    <div className='home'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='element'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div className='element'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div className='element'>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        </div>

        <div className='element password-container'>
          <label htmlFor="password">Pass:</label>
          <div className='password-wrapper'>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <div className='element'>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
          {imagePreview && <img src={imagePreview} alt="Preview" className='image-preview' />} 
          {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
        </div>

        <button type="submit" className='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;
