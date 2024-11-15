import React from 'react';


import Sidbar from '../sidbar';
import Header from '../header';


function PostJob() {
  return (
    <div className="dash">
    <Sidbar/>
    <div className="dash-app">
    <Header/>
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
  </div>
        <div className="row">
          <div className="col-xl-12">
          <div className="card spur-card" style={{ direction: 'rtl' }}>
          <div className="card-header d-flex align-items-center">
                <div className="spur-card-icon">
                  <i className="fas fa-table"></i>
                </div>
                <h4 className="spur-card-title ms-2" style={{marginRight:"10px"}}>Default Table</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Password</label>
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">City</label>
                      <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">State</label>
                      <select id="inputState" className="form-control">
                        <option defaultValue>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip</label>
                      <input type="text" className="form-control" id="inputZip" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck4" />
                      <label className="custom-control-label" htmlFor="customCheck4">
                        Check this custom checkbox
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    </div>
    </div>
  );
}

export default PostJob;
