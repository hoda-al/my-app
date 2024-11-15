import React from 'react';
import Sidbar from '../sidbar';
import Header from '../header';

function JobRequests() {
  return (
    <div className="dash">
      <Sidbar />
      <div className="dash-app">
        <Header />
        <main className="dash-content">
          <div className="container-fluid">
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
  </div>            <div className="card spur-card" style={{ direction: 'rtl' }}>
              <div className="card-header d-flex align-items-center">
                <div className="spur-card-icon">
                  <i className="fas fa-table"></i>
                </div>
                <h4 className="spur-card-title ms-2" style={{marginRight:"10px"}}>Default Table</h4>
              </div>
              <div className="card-body">
                <table className="table table-in-card">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                      <th scope="col">Extra 1</th>
                      <th scope="col">Extra 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Extra Data 1</td>
                      <td>Extra Data 2</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Extra Data 1</td>
                      <td>Extra Data 2</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>Bird</td>
                      <td>@twitter</td>
                      <td>Extra Data 1</td>
                      <td>Extra Data 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default JobRequests;
