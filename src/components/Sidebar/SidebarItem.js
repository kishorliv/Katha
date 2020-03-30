// import React from 'react';
// import classNames from 'classnames';
// import './style.css';

// const SidebarItem = (props) => {
//     const { label, img, active } = {...props};
//     return(
//         <div className={active ? "sidenav-elem sidenav-elem-active" : "sidenav-elem"}>
//             <i className={classNames(img, "")}></i>
//             <span className="sidebar-label">{label}</span>
//         </div>
//     );
// };

// export default SidebarItem;

import React from 'react';
import classNames from 'classnames';
import './style.css';
import Icon from '../../assets/icons/home-icon.png';

const SidebarItem = (props) => {
    const { label, img, active } = {...props};
    return(
        <div className={active ? "sidenav-elem sidenav-elem-active" : "sidenav-elem"}>
            <img src={Icon} alt="" className="sidebar-icon" />
            <h3 className="sidebar-label">{label}</h3>
        </div>
    );
};

export default SidebarItem;
