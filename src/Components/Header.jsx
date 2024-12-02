import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar className="bg-[#002228] w-full" maxWidth="xl">
      {/* Logo Section */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <img src="Logo.png" alt="Logo" className="w-16" />
        </NavbarBrand>
      </NavbarContent>

      {/* Main Navigation */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Buttons Section */}
      <NavbarContent justify="end" className="gap-4">
        {/* Book a Demo Button */}
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            href="#"
            className="text-[#002228] bg-[#0FF1F6] rounded-full px-4 py-2"
          >
            Book a Demo
          </Button>
        </NavbarItem>
        {/* Contact Us Button */}
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            className="text-[#FFFFFF] bg-[#002228] border border-gray-400 rounded-full px-4 py-2"
            href="#"
            variant="flat"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Hamburger Menu */}
      <NavbarContent className="sm:hidden justify-end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </NavbarContent>

      {/* Mobile Dropdown Menu */}
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
              className="w-full text-lg"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
