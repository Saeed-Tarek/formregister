export const validateForm = (formData) => {
    let errors = {};
  
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
  
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be exactly 11 digits';
    }
  
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
  
    if (!formData.image) {
      errors.image = 'Image is required';
    }
  
    return errors;
  };
  