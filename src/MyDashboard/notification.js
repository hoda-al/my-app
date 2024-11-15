import React from 'react';

function NotificationsCard() {
  const notifications = [
    { icon: 'fas fa-inbox', text: 'New comment', time: '21 days ago' },
    { icon: 'fas fa-inbox', text: 'New comment', time: '21 days ago' },
    { icon: 'fas fa-inbox', text: 'New comment', time: '21 days ago' },
  ];

  return (
    <div className="col-xl-6">
      <div className="card spur-card">
        <div className="card-header">
          <div className="spur-card-icon">
            <i className="fas fa-bell"></i>
          </div>
          <div className="spur-card-title">Notifications</div>
        </div>
        <div className="card-body">
          <div className="notifications">
            {notifications.map((notification, index) => (
              <a href="#!" className="notification" key={index}>
                <div className="notification-icon">
                  <i className={notification.icon}></i>
                </div>
                <div className="notification-text">{notification.text}</div>
                <span className="notification-time">{notification.time}</span>
              </a>
            ))}
            <div className="notifications-show-all">
              <a href="#!">Show all</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsCard;
