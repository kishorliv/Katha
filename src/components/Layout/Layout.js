import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './layout.scss';
import { Sidebar } from '../Sidebar';
import Logo from '../../assets/icons/logo.png';
import { StoryList } from '../StoryList';

const MainArea = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/stories" component={StoryList} />
        <Route path="/create" component={Create} />
        <Dashboard />
      </Switch>
    </div>
  )
}

const Dashboard = () => {
  return(
    <p>Dashboard Component</p>
  );
};

// const Stories = () => {
//   return(
//     <p>Stories Component</p>
//   );
// };

const Create = () => {
  return(
    <p>Create Component</p>
  );
};


class Layout extends React.Component {
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
                      <p>
                        <Sidebar />
                      </p>
                  </div>
              </div>
          </div>

          <div id='main'>
              <div className='header'>
                  {/* <h3 className={`title
                      ${'left-' + leftOpen}
                  `}>
                  </h3> */}
                  <img src={Logo} alt="" />
              </div>
              <div className='content'>
                  <MainArea />
              </div>
          </div>

      </div>
    );
  }
}

export default Layout;
