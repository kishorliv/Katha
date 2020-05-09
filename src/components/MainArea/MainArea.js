import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import DashboardArea from '../Dashboard';
import StoryPreviewArea from '../StoryPreviewArea';
import { StoryList }from '../StoryList';
import { CreateStory } from '../CreateStory';

import { Provider } from 'react-redux';
import store from '../../redux/store';

/**
 * MainArea component exists besides the sidebar below header.
 * It renders any component matched by Route path.
 */
const MainArea = () => {
    return (
      <div>
        <Provider store={store}>
          <Switch>
            <Route path="/dashboard" component={DashboardArea} />
            <Route exact path="/stories" component={StoryList} />
            <Route path="/stories/:title" component={StoryPreviewArea} />
            <Route path="/create" component={CreateStory} />
            <Route exact path='/edit/:id' component={CreateStory} />
            <DashboardArea />
          </Switch>
        </Provider>
      </div>
    )
}

export default MainArea;
