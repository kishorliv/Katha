import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import DashboardArea from '../Dashboard';
import StoryPreviewArea from '../StoryPreviewArea';
import { StoryList }from '../StoryList';
import { CreateStory } from '../CreateStory';


/**
 * MainArea component exists besides the sidebar below header.
 * It renders any component matched by Route path.
 */
const MainArea = () => {
    return (
      <div>
        <Switch>
          <Route path="/dashboard" component={DashboardArea} />
          <Route exact path="/stories" component={StoryList} />
          <Route path="/stories/:title" component={StoryPreviewArea} />
          <Route path="/create" component={CreateStory} />
          <Route exact path='/edit/:title' component={CreateStory} />
          <DashboardArea />
        </Switch>
      </div>
    )
}

export default MainArea;
