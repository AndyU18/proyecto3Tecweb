import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { LlamitaLogo } from "../assets/llamita-logo.jsx"; // Cambiamos la referencia al logo personalizado

export default function NavigationBar() {
  return (
    <Navbar shouldHideOnScroll isBordered>
      {/* Marca con el logo */}
      <NavbarBrand>
        <LlamitaLogo />
        <p className="font-bold text-inherit">Llamita Sports</p>
      </NavbarBrand>

      {/* Opciones del menú */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#inicio">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#productos">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#ofertas">
            Ofertas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contacto">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Botones de Login y Sign Up */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#signup" variant="flat">
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
