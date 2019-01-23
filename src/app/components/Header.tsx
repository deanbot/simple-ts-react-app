import { Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './Header.scss';
import MobileNavMenu from "./MobileNavMenu";

const Header = (props) => {
  // const activeStyle = { color: 'blue' };
  const { history } = props;

  return (
    <div id="masthead" className="container">
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>Simple TS React App</NavbarHeading>
          <NavbarDivider />
          <div className="mobileNavItems">
            <MobileNavMenu history={history} />
          </div>
          <div className="navItems">
            <NavLink exact to="/" activeClassName="active">
              <Button className={Classes.MINIMAL} icon="home" text="Home" />
            </NavLink>
            <NavLink to="/routerParams">
              <Button className={Classes.MINIMAL} icon="path-search" text="Router Params" />
            </NavLink>
            <NavLink to="/counter">
              <Button className={Classes.MINIMAL} icon="numerical" text="Counter" />
            </NavLink>
            <Link to="/asdf">
              <Button className={Classes.MINIMAL} icon="error" text="404" />
            </Link>
          </div>
        </NavbarGroup>
      </Navbar>
    </div>
  )
}

export default withRouter(Header);