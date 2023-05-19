import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      {sidebarVisible ? (
        <div>
          <FontAwesomeIcon
            icon={faTimes}
            style={{ marginLeft: '70px', width: '30px', height: '20px', cursor: 'pointer' }}
            alt="Close Sidebar"
            onClick={toggleSidebar}
          />
          <button
            className="btn btn-primary"
            style={{ marginLeft: '10px' }}
            onClick={toggleSidebar}
          >
            Close
          </button>
        </div>
      ) : (
        <img
          src="https://icon-library.com/images/sidebar-icon/sidebar-icon-16.jpg"
          style={{ marginLeft: '70px', width: '30px', height: '20px', cursor: 'pointer' }}
          alt="Open Sidebar"
          onClick={toggleSidebar}
        />
      )}

      {sidebarVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '200px',
            backgroundColor: 'white',
          }}
        >
          <ul className="nav flex-column">
            <li className="nav-item">
              <Nav.Link href="/collection" style={{ color: 'black', fontFamily: 'Sans-serif', fontSize: '15px', marginLeft: '50px' }}>
              collection
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/women" style={{ color: 'black', fontFamily: 'Sans-serif', fontSize: '15px', marginLeft: '50px' }}>
               Woman
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/Men" style={{ color: 'black', fontFamily: 'Sans-serif', fontSize: '15px', marginLeft: '50px' }}>
                Men
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/Kids" style={{ color: 'black', fontFamily: 'Sans-serif', fontSize: '15px', marginLeft: '50px' }}>
                kids
              </Nav.Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
