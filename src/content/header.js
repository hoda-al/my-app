// Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // استيراد useAuth

export default function Header() {
  const { isLoggedIn, logout } = useAuth(); // استخدام السياق
  const navigate = useNavigate();

  const handleLogout = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('User data:', user); // تحقق من بيانات المستخدم

    if (!user || !user.token) {
        console.error('No token found, cannot logout');
        return;
    }

    try {
        console.log('Logging out with token:', user.token);
        await axios.post('http://127.0.0.1:8000/api/logout', {}, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });

        // حذف بيانات المستخدم من localStorage بعد تسجيل الخروج
        localStorage.removeItem('user');

        // تحديث حالة تسجيل الخروج
        logout();
        navigate('/login'); // تأكد من أن هذا هو المسار الصحيح
    } catch (error) {
        console.error('Error during logout:', error.response ? error.response.data : error);
    }
};


    return (
        <div>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0">
                    <Link to="/" className="navbar-brand p-0">
                        <h1 className="display-6 text-primary m-0"><i className="fas fa-envelope me-3"></i>Mailler</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/service" className="nav-item nav-link">Service</Link>
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu m-0">
                                    <Link to="/jobs" className="dropdown-item">Jobs</Link>
                                    <Link to="/about" className="dropdown-item">About</Link>
                                    <Link to="/service" className="dropdown-item">Service</Link>
                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                        </div>

                        {/* عرض زر تسجيل الدخول والتسجيل فقط إذا لم يكن المستخدم مسجلاً */}
                        {!isLoggedIn ? (
                            <>
                                <Link to="/login" className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">Log In</Link>
                                <Link to="/signUp" className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">Sign Up</Link>
                            </>
                        ) : (
                            <Link onClick={handleLogout} className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">Log Out</Link>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}
