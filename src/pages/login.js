// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // استيراد useAuth

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // استخدام دالة login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: '', password: '' });
    setServerError('');

    const newErrors = { email: '', password: '' };
    if (!email) newErrors.email = "البريد الالكتروني لا يمكن أن يكون فارغًا";
    if (!password) newErrors.password = "كلمة المرور لا يمكن أن تكون فارغة";

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {
          email,
          password,
        });

        if (response.status === 200) {
          login(response.data); // تحديث حالة تسجيل الدخول
          navigate('/'); // إعادة التوجيه بعد تسجيل الدخول الناجح
        }
      } catch (error) {
        if (error.response) {
          setServerError(error.response.data.message || 'فشل تسجيل الدخول.');
        } else {
          setServerError('خطأ في الشبكة. يرجى المحاولة لاحقًا.');
        }

        if (error.response && error.response.status === 401) {
          setServerError('كلمة المرور أو البريد الالكتروني غير صحيحة.');
        }
      }
    }
  };

  return (
    <div className="container-fluid overflow-hidden py-5 mt-5">
      <div style={{ marginBottom: '20px', textAlign: "right" }} className="title">
        <h2>تسجيل الدخول</h2>
        <div className="etd-left-page-controls pull-right text-right"></div>
      </div>
      <hr style={{ marginBottom: '40px' }} />
      <p style={{ fontSize: '22px', textAlign: "right" }} className="tajawal-regular">...اهلا بك في منصتنا</p>

      <br />
      <div className="wrapper">
        <header>تسجيل الدخول</header>
        {serverError && <div className="error error-txt">{serverError}</div>} {/* عرض خطأ الخادم */}
        <form onSubmit={handleSubmit}>
          <div className={`field email ${errors.email ? 'error' : ''}`}>
            <div className="input-area">
              <input
                type="email" // تغيير هنا
                placeholder="البريد الالكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="icon fas fa-envelope"></i>
              <i className="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div className="error error-txt">{errors.email}</div>
          </div>

          <div className={`field password ${errors.password ? 'error' : ''}`}>
            <div className="input-area">
              <input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="icon fas fa-lock"></i>
              <i className="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div className="error error-txt">{errors.password}</div>
          </div>

          <div className="pass-txt">
            <Link to="#">هل نسيت كلمة المرور ؟</Link>
          </div>
          <input type="submit" value="تسجيل دخول" className="submit-btn" />
        </form>
      </div>
    </div>
  );
}

export default Login;
