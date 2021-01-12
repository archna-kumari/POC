import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import Lists from "./components/Lists/Lists";
import Search from "./components/Search/Search"
import Home from "./components/Home/Home";
import FileUpload from "./components/FileUpload/FileUpload";
import Forms from "./components/Forms/Forms";
import Modal from "./components/Modal/Modal";
import Notification from "./components/Notification/Notification";
import Grid from "./components/Grid/Grid";
import CRUD from "./components/CRUD/CRUD";
import Redux from "./components/Redux/Redux";
import Session from "./components/Session/Session";


import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';
import ReorderIcon from '@material-ui/icons/Reorder';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import BackupIcon from '@material-ui/icons/Backup';
import GridOnIcon from '@material-ui/icons/GridOn';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import HttpIcon from '@material-ui/icons/Http';
import Table from "./components/Table/Table";


const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap style={{paddingLeft: '400px'}}>
          Sample POC
        </Typography>
      </Toolbar>
    </AppBar>
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "300px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>

            <Link to="/lists" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary={"Lists"} />
              </ListItem>
            </Link>           

            <Link to="/search" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary={"Search"} />
              </ListItem>
            </Link>


            <Link to="/file" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <BackupIcon />
                </ListItemIcon>
                <ListItemText primary={"File Upload"} />
              </ListItem>
            </Link>

            <Link to="/forms" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ReorderIcon />
                </ListItemIcon>
                <ListItemText primary={"Forms and Validatins"} />
              </ListItem>
            </Link>


            <Link to="/notification" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <NotificationsActiveIcon />
                </ListItemIcon>
                <ListItemText primary={"Notification"} />
              </ListItem>
            </Link>

            <Link to="/grid" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <GridOnIcon />
                </ListItemIcon>
                <ListItemText primary={"Grid"} />
              </ListItem>
            </Link>

            <Link to="/redux" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Redux"} />
              </ListItem>
            </Link>

            <Link to="/modal" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <ListItemText primary={"Modal"} />
              </ListItem>
            </Link>

            <Link to="/session" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Session/Loading"} />
              </ListItem>
            </Link>


            <Link to="/service" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HttpIcon />
                </ListItemIcon>
                <ListItemText primary={"Common Service"} />
              </ListItem>
            </Link>
            <Link to="/table" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HttpIcon />
                </ListItemIcon>
                <ListItemText primary={"Table"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lists" component={Lists} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/file" component={FileUpload} />
          <Route path="/forms" component={Forms} />
          <Route exact path="/modal" component={Modal} />
          <Route path="/grid" component={Grid} />
          <Route exact path="/notification" component={Notification} />
          <Route path="/service" component={CRUD} />
          <Route path="/session" component={Session} />
          <Route path="/redux" component={Redux} />
          <Route path="/table" component={Table} />


        </Switch>
      </div>
    </Router>
  
    </div>
    );
}

export default App;
