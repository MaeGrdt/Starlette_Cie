import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import caddie from "../../assets/icons/icon-caddie.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './style.css';

export default function Header() {
  const [activeItem, setActiveItem] = useState("Accueil");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const linkClasses = (item) =>
    `text-black ${activeItem === item ? "text-danger-600" : ""}`;

  const menuItems = [
    "Accueil",
    "Nos Produits",
    "Actualités",
    "Points de ventes",
    "Boutiques",
  ];

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
          className="md:w-24 lg:w-64 my-2"
        />
      </div>
      <Navbar className="bg-danger-100" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
        <NavbarContent>
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
          <NavbarItem isActive={activeItem === "Nos produits"}>
            <NavLink
              to="#"
              href="#"
              onClick={() => handleItemClick("Nos produits")}
              className={linkClasses("Nos produits")}
            >
              Nos produits
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
              to="#"
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
        <NavbarContent></NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
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
