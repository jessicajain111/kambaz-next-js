"use client";

import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";

export default function TOC() {
  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink href="/labs" as={Link as React.ElementType}>Labs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/labs/lab1" as={Link as React.ElementType}>Lab 1</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/labs/lab2" as={Link as React.ElementType}>Lab 2</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/labs/lab2/tailwind" as={Link as React.ElementType}>Tailwind</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/labs/lab3" as={Link as React.ElementType}>Lab 3</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/" as={Link as React.ElementType}>Kambaz</NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="https://github.com/jessicajain111/kambaz-next-js"
          id="wd-github"
          target="_blank"
        >
          My GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}