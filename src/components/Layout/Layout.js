import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { StoryList, StoryPreviewArea } from '../StoryList';
import { CreateStory } from '../CreateStory';
import './layout.scss';
import Logo from '../../assets/icons/logo.png';
import { LogOut } from '../LogOut';


const MainArea = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/stories" component={StoryList} />
        <Route path="/stories/:title" component={StoryPreviewArea} />
        <Route path="/create" component={CreateStory} />
        <Route exact path='/edit/:id' component={CreateStory} />
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

export { Layout };
