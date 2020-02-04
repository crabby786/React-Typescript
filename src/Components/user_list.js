import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getUsers } from "../Store/Actions/crud_action";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));
 interface IUser {
    isLoading: Boolean,
    err: String,
    data: Array
};
function UserList(props) {
  const { users <IUser[]> } = props;
  const classes = useStyles;
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = id => () => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <Button
        onClick={e => props.getUsers(e)}
        variant="contained"
        color="primary"
      >
        get users
      </Button>
      <div>{users.isLoading && <span>...Loading</span>}</div>
      {!users.isLoading && (
        <div>
          <List dense className={classes.root} />
        </div>
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    users: state.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: e => dispatch(getUsers(e))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
