import React from 'react';

import { Sidebar } from '../Sidebar';
import './layout.scss';
import Logo from '../../assets/icons/logo.png';
import { LogOut } from '../LogOut';
import { withEmailVerification } from '../Session';
import MainArea from '../MainArea';


/**
 * LayoutPage renders Layout component.
 * It is the main or home page.
 */
const LayoutPage = () => {
  return(
    <Layout />
  );
};

/**
 * LayoutBase renders Sidebar, header and MainArea component.
 */
class LayoutBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: false,
    }
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';

    return (
      <div id='layout'>
        <div id='left' className={leftOpen} >
            <div className='icon'
                onClick={this.toggleSidebar} >
                &equiv;
            </div>
            <div className={`sidebar ${leftOpen}`} >
                <div className='header'>
                  <h3 className='title'>
                    Asmita Gaire
                  </h3>
                </div>
                <div className='sidebar-content'>
                  <Sidebar />
                </div>
            </div>
        </div>
        <div id='main'>
            <div className='header'>
                <img src={Logo} alt="" />
                <div className='float-right m-auto'>
                  <LogOut />
                </div>
            </div>
            <div className='content'>
              <MainArea />
            </div>
        </div>
      </div>
    );
  }
}

const Layout = withEmailVerification(LayoutBase);

export default LayoutPage;
export { Layout };
