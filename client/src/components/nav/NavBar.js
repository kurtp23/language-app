import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const NavBar = (props) => (
  <>
    <MobileNav user={props.user} auth={props.auth} userState={props.userState}/>
    <DesktopNav user={props.user} auth={props.auth} userState={props.userState}/>
  </>
);

export default NavBar;
