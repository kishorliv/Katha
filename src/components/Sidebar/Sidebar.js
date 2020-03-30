import React from 'react';
import { Link } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import './style.css';


const Sidebar = () => {
    const state = {
        items:[
            {
                img: "dashboard-icon.png",
                label: "Dashboard",
                path: "dashboard",
                active: true
            },
            {
                img: "home-icon.png",
                label: "Stories",
                path: "stories",
                active: false
            },
            {
                img: "create-icon.png",
                label: "Create",
                path: "create",
                active: false
            },
    ]};

    return(
        <div className="sidenav">
            {state.items.map(({path, label, img, active}, i) => {
                return(
                    <Link to={`/${path}`} key={label}>
                        <SidebarItem key={label+`${i}`} label={label} img={img} active={active} />
                    </Link>
                ); 
            })}

            
        </div>
    );
}

export { Sidebar };
