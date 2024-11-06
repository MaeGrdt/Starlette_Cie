import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  Avatar,
} from "@nextui-org/react";
import caddie from "../../assets/icons/icon-caddie.svg";
import home from "../../assets/icons/icon-accueil.svg";
import contour from "../../assets/icons/pdp-contour.svg";
import icon_avatar from "/img/pdp.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function HeaderProfile() {
  return (
    <>
      <Navbar className="bg-default-100">
        <NavbarContent justify="start">
          <NavbarItem>
            <NavLink to="/">
              <img src={home} alt="icon home" className="w-12" />
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link href="#">
              <img src={caddie} alt="icon caddie" />
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="flex justify-center bg-logo border-2 border-y-danger-200">
        <Image
          alt="logo"
          src="./logo(1).png"
          className="w-36 md:w-24 lg:w-64 my-2"
        />
      </div>
      <div className="">
        <Avatar
          src={icon_avatar}
          className="avatar absolute inset-y-0"
        />
        <Avatar src={contour} className="avatar absolute inset-y-0" />
      </div>
    </>
  );
}
