import * as React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import { useStyles } from "../Layout/nav_cmp";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { main_routes } from "../Constants/_routes";

export default function() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div>
      <div className={classes.toolbar} />
      <Router>
        <Divider />
        <List>
          {main_routes.map((route, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <NavLink
                to={`${route.path}`}
                activeClassName="selected"
                exact={route.exact}
              >
                <ListItemText
                  primary={route.path.length > 1 ? route.path : "create"}
                />
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Router>
    </div>
  );
}
