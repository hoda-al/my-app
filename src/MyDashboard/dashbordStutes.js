import React from 'react';

function DashboardStats() {
  return (
    <>
    <div className="app-title">
    <div>
      <h1><i className="bi bi-archive"></i> Widgets</h1>
      <p>Widgets to interactively display data</p>
    </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i class="bi bi-house-door fs-6"></i></li>
      <li className="breadcrumb-item">UI</li>
      <li className="breadcrumb-item"><a href="#">Widgets</a></li>
    </ul>
  </div>
    <div className="row dash-row">
      <div className="row">
        <div className="col-md-3">
          <div className="widget-small primary">
            <i className="icon bi bi-people fs-1"></i>
            <div className="info">
              <h4>Users</h4>
              <p><b>5</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="widget-small info">
            <i className="icon bi bi-heart fs-1"></i>
            <div className="info">
              <h4>Likes</h4>
              <p><b>25</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="widget-small warning">
            <i className="icon bi bi-folder2 fs-1"></i>
            <div className="info">
              <h4>Uploads</h4>
              <p><b>10</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="widget-small danger">
            <i className="icon bi bi-star fs-1"></i>
            <div className="info">
              <h4>Stars</h4>
              <p><b>500</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default DashboardStats;
