"use client"
import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const NavItems= () => {
    const [activeIndex, setActiveIndex]= useState< null | number >(null);

    useEffect(() => {
        const handler= (e: KeyboardEvent) => {
            if(e.key === "Escape" || "Backspace"){
                setActiveIndex(null)
            }
        }

        document.addEventListener("keydown", handler);

        return () => {
            document.removeEventListener("keydown", handler)
        }
    }, [])

    const isAnyItemOpen= activeIndex !== null;

    const navRef= useRef<HTMLDivElement | null>(null)

    useOnClickOutside(navRef, () => setActiveIndex(null));

    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {PRODUCT_CATEGORIES.map((category, index) => {

                //function to track the correct active index in Navbar
                const handleOpen= () => {
                    if(activeIndex === index){
                        setActiveIndex(null);
                    } else {
                        setActiveIndex(index);
                    }
                }

                //check if current item/index is open or not
                const isItemOpen= (index === activeIndex);

                return(
                    <NavItem 
                        category={category} 
                        handleOpen={handleOpen} 
                        isItemOpen={isItemOpen} 
                        isAnyItemOpen={isAnyItemOpen}
                        key={category.value} 
                    />
                )
            })}
        </div>
    )
}

export default NavItems;