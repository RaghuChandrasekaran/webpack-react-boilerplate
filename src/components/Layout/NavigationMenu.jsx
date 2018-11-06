import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewList from '@material-ui/icons/ViewList';
import BugReport from '@material-ui/icons/BugReport';

export default (
  <div>
    <NavLink style={{ textDecoration: 'none' }} to="/about/">
      <ListItem button>
        <ListItemIcon>
          <ViewList />
        </ListItemIcon>
        <ListItemText primary="Requests" />
      </ListItem>
    </NavLink>
    <NavLink style={{ textDecoration: 'none' }} to="/users/">
      <ListItem button>
        <ListItemIcon>
          <BugReport />
        </ListItemIcon>
        <ListItemText primary="Report" />
      </ListItem>
    </NavLink>
  </div>
);
