import React from 'react';
import './css/spur.css';



import Sidbar from './sidbar';
import Header from './header';

import DashboardStutes from './dashbordStutes';
import BarChar from './barchar';
import Notification from './notification';








function Dashboard() {
  return (

    <div className="dash">
<Sidbar/>
<div className="dash-app">
<Header/>
    <main className="dash-content">

    <div className="container-fluid">
       <DashboardStutes/>

        <div className="row">

         <BarChar/>

      <Notification/>
        </div>
    </div>
    </main>
</div>
        </div>

  );
}

export default Dashboard;
