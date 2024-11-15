import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // تأكد من استيراد السياق

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    retypePassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    retypePassword: '',
  });
  
  const [serverError, setServerError] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const navigate = useNavigate();
  const { login } = useAuth(); // استخدام السياق
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // عند التغيير، إعادة تعيين الأخطاء ذات الصلة
    if (id === 'email') {
      setEmailError(''); // إعادة تعيين خطأ البريد عند التغيير
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 8) {
      newErrors.password = 'Passwords must be more than 8 characters';
    }
    if (formData.password !== formData.retypePassword) {
      newErrors.retypePassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const checkEmailExists = async (email) => {

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/check-email", { email });
      return response.data.exists;
    } catch (error) {
      setServerError('Error checking email.');
      return false;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        setEmailError('Email is already registered');
        return;
      }
  
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.retypePassword,
        });
      
        console.log('Response from server:', response.data); // رسائل السيرفر
      
        // تحقق مما إذا كان الرد يحتوي على بيانات المستخدم والرمز
        if (response.data.user && response.data.token) {
          // تخزين البيانات في localStorage
          localStorage.setItem('user', JSON.stringify({
            name: response.data.user.name,
            email: response.data.user.email,
            token: response.data.token
          }));
      
          console.log('Data stored in localStorage:', localStorage.getItem('user'));
        } else {
          console.error('Response does not contain the expected fields');
        }
      
        setErrors({});
        setEmailError('');
        navigate('/');
      
  
      } catch (error) {
        if (error.response) {
          setServerError(error.response.data.message || 'Registration failed.');
        } else {
          setServerError('Network error. Please try again later.');
        }
      }
    } else {
      setErrors(validationErrors);
      setEmailError(''); // تأكد من إزالة خطأ البريد عند وجود أخطاء أخرى
    }
  };
  


  return (
    <>
      <section
        className="section-hero overlay inner-page bg-image"
        style={{ backgroundImage: "url('../images/hero_1.jpg')" }}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="text-white font-weight-bold">Sign Up/Login</h1>
              <div className="custom-breadcrumbs">
                <a href="#">Home</a>
                <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Log In</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mb-5">
              <h2 className="mb-4 text-center">Sign Up To JobBoard</h2>
              {serverError && <span className="text-danger">{serverError}</span>}
              <form onSubmit={handleSubmit} className="p-4 border rounded">
                <div className="row form-group mb-4">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="text-danger">{errors.name}</span>}
                  </div>
                </div>
                <div className="row form-group mb-4">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                    {emailError && <span className="text-danger">{emailError}</span>} {/* هنا */} 
                  </div>
                </div>
                <div className="row form-group mb-4">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                  </div>
                </div>
                <div className="row form-group mb-4">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="retypePassword">Re-Type Password</label>
                    <input
                      type="password"
                      id="retypePassword"
                      className="form-control"
                      placeholder="Re-type Password"
                      value={formData.retypePassword}
                      onChange={handleChange}
                    />
                    {errors.retypePassword && <span className="text-danger">{errors.retypePassword}</span>}
                  </div>
                </div>

                <div className="row form-group mb-5">
                  <div className="col-md-12 text-center">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn px-4 btn-primary text-white w-100"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
