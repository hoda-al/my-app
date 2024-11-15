import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import TableComponent from './TableComponent';

import Sidbar from '../sidbar';
import Header from '../header';



import '../css/customStyles.css';

function TableUser() {
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState([
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo' },
    { name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco' },
    { name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh' },
    // ... بيانات أخرى
  ]);

  const handleAddRow = (newRow) => {
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handleEditRow = (index) => {
    alert(`Editing row ${index + 1}`);
  };

  return (
    <div className="dash d-flex">
      <Sidbar />
      <div className="dash-app flex-grow-1">
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
  </div>            <div className="container mt-5">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <h4 className="card-title">Add Row</h4>
                    <button
                      className="btn btn-primary btn-round ms-auto"
                      onClick={() => setShowModal(true)}
                    >
                      <i className="fa fa-plus"></i> Add Row
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <TableComponent rows={rows} onEdit={handleEditRow} onDelete={handleDeleteRow} />
                </div>
              </div>
              <ModalComponent
                showModal={showModal}
                onClose={() => setShowModal(false)}
                onAddRow={handleAddRow}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
  
}

export default TableUser;
