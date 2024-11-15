import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';


function TableComponent({ rows, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="display table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th style={{ width: '10%' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.position}</td>
              <td>{row.office}</td>
              <td>
  <ButtonGroup>
    <button
      type="button"
      className="btn btn-link btn-primary btn-lg"
      onClick={() => onEdit(index)}
    >
      <i className="fa fa-edit"></i>
    </button>
    <button
      type="button"
      className="btn btn-link btn-danger"
      onClick={() => onDelete(index)}
    >
      <i className="fa fa-times"></i>
    </button>
  </ButtonGroup>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
