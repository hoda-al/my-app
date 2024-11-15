// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/App.css';
import './css/Style.css'; 
import './css/bootstrap.min.css';
import './css/animate.min.css'; 

import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

import Service from './pages/service';
import Login from './pages/login';
import SignUp from './pages/singUp'; // تأكد من الاسم الصحيح
import Jobs from './pages/jobs';
import JobsDetail from './pages/jobsDetaile'; // تأكد من الاسم الصحيح


import Show from './test/show';
import Header from './content/header';
import Footer from './content/footer';


import Dashboard from './MyDashboard/index';
import PostJob from './MyDashboard/content/postJops';
import TableUser from './MyDashboard/content/tableUser';
import JobRequests from './MyDashboard/content/JobRequests';




import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import { AuthProvider } from './AuthContext'; // استيراد AuthProvider

import axios from 'axios';

axios.defaults.withCredentials = true;

const getCsrfToken = async () => {
    try {
        await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
    } catch (error) {
        console.error('CSRF Token could not be set', error);
    }
};

getCsrfToken();

function App() {
    
    return (
        <AuthProvider> {/* تضمين AuthProvider هنا */}
            <Router>
            
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/jobs/jobDetail" element={<JobsDetail />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/postjob" element={<PostJob />} />
                    <Route path="/dashboard/tableUser" element={<TableUser />} />
                    <Route path="/dashboard/jobRequests" element={<JobRequests />} />





                  
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
