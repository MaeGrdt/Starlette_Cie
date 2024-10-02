import {Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Image} from "@nextui-org/react";
import caddie from "../../assets/icons/icon-caddie.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './style.css';

export default function Header() {
const menuItems = [
    "Accueil",
    "Actualités",
    "Points de ventes",
    "Boutiques",
  ];

  const [activeItem, setActiveItem] = useState("Accueil");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const linkClasses = (item) =>
    `text-black ${activeItem === item ? "text-danger-600" : ""}`;

  return (
    <>
      <Navbar className="bg-default-100">
        <NavbarContent justify="start">
          <NavbarItem>
            <NavLink to="/connexion" className="text-black">
              Connexion
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
      <Navbar className="bg-danger-100" disableAnimation isBordered>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarContent className="hidden sm:flex w-full" justify="center">
          <NavbarItem isActive={activeItem === "Accueil"}>
            <NavLink
              to="/"
              color="secondary"
              href="#"
              onClick={() => handleItemClick("Accueil")}
              className={linkClasses("Accueil")}
            >
              Accueil
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={activeItem === "Actualités"}>
            <NavLink
              to="#"
              href="#"
              onClick={() => handleItemClick("Actualités")}
              className={linkClasses("Actualités")}
            >
              Actualités
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={activeItem === "Points de ventes"}>
            <NavLink
              to="point-de-vente"
              href="#"
              onClick={() => handleItemClick("Points de ventes")}
              className={linkClasses("Points de ventes")}
            >
              Points de ventes
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={activeItem === "Boutique"}>
            <NavLink
              to="/boutique"
              href="#"
              onClick={() => handleItemClick("Boutique")}
              className={linkClasses("Boutique")}
            >
              Boutique
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  item === activeItem ? "danger" : "foreground"  // L'élément actif devient "danger", les autres "foreground"
                }
                href="#"
                size="lg"
                onClick={() => setActiveItem(item)} // Mise à jour de l'élément actif lors du clic
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
