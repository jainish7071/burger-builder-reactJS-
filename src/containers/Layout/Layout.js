import { Component } from "react";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
  };
  render() {
    return (
      <>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
