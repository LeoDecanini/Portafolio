import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cerrarMenu = () => {
    setIsMenuOpen(false);
  };
  const menuItems = [
    {
      name: "Inicio",
      link: "#inicio",
    },
    {
      name: "Sobre mi",
      link: "#sobremi",
    },
    {
      name: "Estudios",
      link: "#estudios",
    },
    {
      name: "Proyectos",
      link: "#proyectos",
    },
  ];

  return (
    <Navbar
      className="fixed bg-transparent p-1"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand className="contendeor-logo">
          <h1 className="text-white text-4xl">Portfolio</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <a href="#inicio" className="link text-white text-xl pr-10">
            Inicio
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#sobremi" className="link text-white text-xl pr-10">
            Sobre mi
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#estudios" className="link text-white text-xl pr-10">
            Estudios
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#proyectos" className="link text-white text-xl pr-10">
            Proyecto
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <a
              className="w-full text-white p-2"
              href={item.link}
              size="lg"
              onClick={cerrarMenu}
            >
              {item.name}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
