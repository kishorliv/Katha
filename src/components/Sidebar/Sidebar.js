import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarItem } from './SidebarItem';
import './style.css';


class Sidebar extends React.Component {
    state = {
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
                            <SidebarItem key={label+`${i}`} index={i} clicked={this.onClickItem} label={label} img={img} active={active} />
                        </Link>
                    ); 
                })}

                
            </div>
        );
    }
}

export { Sidebar };
