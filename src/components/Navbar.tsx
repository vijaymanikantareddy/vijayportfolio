"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"#home"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"#projects"}>
        <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
          {/* <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#project1">Project 1</HoveredLink>
              <HoveredLink href="#project2">Project 2</HoveredLink>
              <HoveredLink href="#project3">Project 3</HoveredLink>
              <HoveredLink href="#project4">Project 4</HoveredLink>
              <HoveredLink href="#project5">Project 5</HoveredLink>
              <HoveredLink href="#project6">Project 6</HoveredLink>
            </div>
          </MenuItem> */}
        </Link>
        <Link href={"#about"}>
        <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
          {/* <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#about1">About 1</HoveredLink>
              <HoveredLink href="#about2">About 2</HoveredLink>
              <HoveredLink href="#about3">About 3</HoveredLink>
            </div>
          </MenuItem> */}
        </Link>
        <Link href={"#contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="mailto:svmreddy7799@gmail.com">
                Email
              </HoveredLink>
              <HoveredLink href="https://www.linkedin.com/in/vijaymanikantareddy/">
                LinkedIn
              </HoveredLink>
              <HoveredLink href="https://www.instagram.com/vijay_square">
                Instagram
              </HoveredLink>
              <HoveredLink href="tel:+91 1234567890">Mobile</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
