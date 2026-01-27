"use client";

import { Nav, NavItem, NavLink } from "react-bootstrap";

export default function TOC() {
  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink href="/labs">Labs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/labs/lab1">Lab 1</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/labs/lab2">Lab 2</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/labs/lab2/tailwind">Tailwind</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">Kambaz</NavLink>
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