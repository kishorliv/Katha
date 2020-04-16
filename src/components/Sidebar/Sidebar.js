import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarItem } from './SidebarItem';
import './style.css';
import DashboardIcon from '../../assets/icons/dashboard-icon.png';
import HomeIcon from '../../assets/icons/home-icon.png';
import CreateIcon from '../../assets/icons/create-icon.png';


class Sidebar extends React.Component {
    state = {
        items:[
            {
                img: DashboardIcon,
                label: "Dashboard",
                path: "dashboard",
                active: true
            },
            {
                img: HomeIcon,
                label: "Stories",
                path: "stories",
                active: false
            },
            {
                img: CreateIcon,
                label: "Create",
                path: "create",
                active: false
            },
    ]};


    onClickItem = (id) => {
        var newItems = JSON.parse(JSON.stringify(this.state.items));    //deep copy of array
        newItems.forEach( (item, i) => {
            item.active = i === id ? true : false;
        });
        this.setState({
            items: [...newItems]
        })
    }


    render(){
        const {items} = this.state;
        return(
            <div className="sidenav">
                {items.map(({path, label, img, active}, i) => {
                    return(
                        <Link to={`/${path}`} key={label}>
                            <SidebarItem key={label+`${i}`} index={i} clicked={this.onClickItem}label={label} img={img} active={active} />
                        </Link>
                    ); 
                })}

                
            </div>
        );
    }
}

export { Sidebar };
