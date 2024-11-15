import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__user">
        <h6>user</h6>
      </div>
      <ul className="app-menu">
        <SidebarItem label="Dashboard" icon="bi bi-speedometer" link="/dashboard" />
        <SidebarItem label="UI Elements" icon="bi bi-laptop">
          <SidebarSubItem label="Bootstrap" link="/dashboard/postjob" />
          <SidebarSubItem label="Font Icons" link="https://icons.getbootstrap.com/" external />
          <SidebarSubItem label="Cards" link="/ui-cards" />
          <SidebarSubItem label="Widgets" link="/widgets" active />
        </SidebarItem>
        <SidebarItem label="Forms" icon="bi bi-ui-checks">
          <SidebarSubItem label="Form Components" link="/form-components" />
          <SidebarSubItem label="Form Samples" link="/form-samples" />
        </SidebarItem>
        <SidebarItem label="Docs" icon="bi bi-code-square" link="/docs" />
      </ul>
    </aside>
  );
}

function SidebarItem({ label, icon, link, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <li className={`treeview ${isOpen ? 'is-expanded' : ''}`}>
      {link ? (
        <Link to={link} className="app-menu__item" onClick={children ? toggleOpen : undefined}>
          <i className={`app-menu__icon ${icon}`}></i>
          <span className="app-menu__label">{label}</span>
          {children && <i className={`treeview-indicator bi ${isOpen ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>}
        </Link>
      ) : (
        <a href="#" className="app-menu__item" onClick={children ? toggleOpen : undefined}>
          <i className={`app-menu__icon ${icon}`}></i>
          <span className="app-menu__label">{label}</span>
          {children && <i className={`treeview-indicator bi ${isOpen ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>}
        </a>
      )}
      {children && (
        <ul className={`treeview-menu ${isOpen ? 'show' : ''}`}>
          {React.Children.map(children, (child) => (
            <li>{child}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

function SidebarSubItem({ label, link, active, external }) {
  return external ? (
    <a
      href={link}
      className={`treeview-item ${active ? 'active' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  ) : (
    <Link to={link} className={`treeview-item ${active ? 'active' : ''}`}>
      {label}
    </Link>
  );
}

export default Sidebar;
