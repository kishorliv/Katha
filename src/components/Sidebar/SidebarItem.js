import React from 'react';
import classNames from 'classnames';
import './style.css';

const SidebarItem = (props) => {
    const { label, img, active, index, clicked } = {...props};
    return(
        <div className={active ? "sidenav-elem sidenav-elem-active" : "sidenav-elem"} onClick={clicked.bind(this, index)}>
            <img src={img} alt="" className="sidebar-icon" />
            <h3 className="sidebar-label">{label}</h3>
        </div>
    );
};

export { SidebarItem };
