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
            <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="All Items">
                
                </MenuItem>
            </Link>

            <MenuItem setActive={setActive} active={active} item="Instructors">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/data">Mr franco di</HoveredLink>
            <HoveredLink href="/data">Alex Rodriguez</HoveredLink>
            <HoveredLink href="/data">Sarah Lee</HoveredLink>
            <HoveredLink href="/data">Laura Garcia</HoveredLink>
            <HoveredLink href="/data">Chris Evans</HoveredLink>
            <HoveredLink href="/data">Sophia Patel</HoveredLink>
            <HoveredLink href="/data">Michael Brown</HoveredLink>
            </div>
            </MenuItem>

            <Link href={"/contact "}>
                <MenuItem setActive={setActive} active={active} item="Contact">
                
                </MenuItem>
            </Link>
        
       
       
        </Menu>
    </div>
  )
}

export default Navbar
