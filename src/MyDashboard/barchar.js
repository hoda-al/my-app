import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { createPopper } from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChartCard() {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: 'Blue',
        data: [12, 19, 3, 5, 2],
        backgroundColor: '#007bff',
        borderColor: 'transparent',
      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true
      },
    },
  };

  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (dropdownRef.current && menuRef.current) {
      createPopper(dropdownRef.current, menuRef.current, {
        placement: 'bottom-end',
      });
    }
  }, []);

  return (
    <div className="col-xl-6">
      <div className="card spur-card">
        <div className="card-header">
          <div className="spur-card-icon">
            <i className="fas fa-chart-bar"></i>
          </div>
          <div className="spur-card-title">Bar Chart</div>
          <div className="spur-card-menu">
            <div className="dropdown show">
              <a 
                ref={dropdownRef}
                className="spur-card-menu-link" 
                href="#" 
                role="button" 
                onClick={(e) => {
                  e.preventDefault();
                  menuRef.current.classList.toggle('show');
                }}
              >
                <i className="fas fa-ellipsis-v"></i>
              </a>
              <div 
                ref={menuRef} 
                className="dropdown-menu dropdown-menu-right" 
                aria-labelledby="dropdownMenuLink"
              >
                <a className="dropdown-item" href="#action1">Action</a>
                <a className="dropdown-item" href="#action2">Another action</a>
                <a className="dropdown-item" href="#action3">Something else here</a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body spur-card-body-chart">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default BarChartCard;
