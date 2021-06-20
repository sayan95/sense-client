// @ts-nocheck
import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// component imports
import NavCollapsible from "./NavCollapsible/NavCollapsible";
import NavbarBrand from "./NavCollapsible/NavbarBrand";
import NavItemsCenter from "./NavCollapsible/NavItemsCenter";
import NavItemRight from "./NavCollapsible/NavItemRight";
import NavCollapseControl from "./NavCollapsible/NavCollapseControl";

// navbar component
const Navbar = ({ navItemsCenter, navItemsRight, page }) => {
  // local state
  const scrollAllowedInPages = ["therapist-create-profile", "sense-landing"];

  // side effects
  useEffect(() => {
    // allow scroll behaviour for white-listed pages
    if (scrollAllowedInPages.includes(page)) {
      window.onscroll = () => {
        if (
          document.body.scrollTop > 10 ||
          document.documentElement.scrollTop > 10
        ) {
          const element = document.getElementById("navBar");
          element && element.classList.add("floatingNav");
        } else {
          const element = document.getElementById("navBar");
          element && element.classList.remove("floatingNav");
        }
      };
    }
  }, [page]);

  // small screen collapse behaviour handler
  const navCollapseHandler = () => {
    const collapsible = document.querySelector(".collpsible");
    const collapsible2 = document.querySelector(".collpsible-right");
    collapsible.classList.toggle("h-full");
    collapsible2.classList.toggle("h-full");
  };

  // jsx content
  return (
    <Fragment>
      <nav id="navBar" className="navbar">
        {/* collapsible content */}
        <NavCollapsible>
          {/* Navbar brand  */} 
          <NavbarBrand/>

          {/* Center aligned nav items */}
          <NavItemsCenter navItemsCenter={navItemsCenter}/>

          {/* Right aligned nav items  */}
          <NavItemRight navItemsRight={navItemsRight}/>

          {/* Collapsible contrlol */}
          <NavCollapseControl event={navCollapseHandler}/>
        </NavCollapsible>
      </nav>
    </Fragment>
  );
};

// props validation
Navbar.propTypes = {
  navItemsCenter: PropTypes.array,
  navItemsRight: PropTypes.array,
};

export default Navbar;
