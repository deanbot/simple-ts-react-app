import { Button, Menu, MenuItem, Popover, Position } from "@blueprintjs/core";
import { History } from "history";
import React from 'react';
import { Route } from "react-router";

interface LinkProps {
  activeOnlyWhenExact: boolean
  history: History
  icon: any
  label: string
  to: string
}

// Replicate react-router NavItem to present blueprint MenuItems
const RouteMenuItem = (props: LinkProps) => (
  <Route
    path={props.to}
    exact={props.activeOnlyWhenExact}
    children={(item: any) => (
      <MenuItem active={item.match} text={props.label}
        icon={props.icon}
        onClick={() => props.history.push(props.to)} />
    )}
  />
)

interface MobileNavMenuProps {
  history: History
}

interface MobileNavMenuState {
  readonly active?: boolean
}

class MobileNavMenu extends React.Component<MobileNavMenuProps, MobileNavMenuState> {
  readonly state: MobileNavMenuState = {
    active: false
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  render() {
    const { history } = this.props,
      { active } = this.state;
    return <Popover
      isOpen={active}
      onClose={this.handleCloseMenu}
      onOpened={this.handleOpenMenu}
      position={Position.BOTTOM_LEFT}
      content={
        <Menu>
          <RouteMenuItem label="Home" to="/" activeOnlyWhenExact history={history} icon="home" />
          <RouteMenuItem label="Router Params" to="/routerParams" activeOnlyWhenExact history={history} icon="path-search" />
          <RouteMenuItem label="Counter" to="/counter" activeOnlyWhenExact history={history} icon="numerical" />

          {/* // alternate 404 example url so it doesn't show as active */}
          <RouteMenuItem label="404" to={history.location.pathname.indexOf('asdf') === -1 ? "/asdf" : "/dsaf"} activeOnlyWhenExact={true} history={history} icon="error" />
        </Menu>
      } >
      <Button icon="menu" onClick={this.handleToggleMenu} />
    </Popover>
  }

  handleResize = () => this.handleCloseMenu()

  handleToggleMenu = () => this.setState({ active: !this.state.active })

  handleCloseMenu = () => this.setState({ active: false })

  handleOpenMenu = () => this.setState({ active: true })
}

export default MobileNavMenu;