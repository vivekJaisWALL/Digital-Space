"use client"
import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems= () => {
    const [activeIndex, setActiveIndex]= useState< null | number >(null);

    const isAnyItemOpen= activeIndex !== null;
    
    return (
        <div className="flex gap-4 h-full">
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