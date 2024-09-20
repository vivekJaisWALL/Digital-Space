"use client"

import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

//custom type to get one element of the array
type Category= typeof PRODUCT_CATEGORIES[number]

//Type of the props that we wil recieve in this component
interface NavItemProps{
    category: Category
    handleOpen: () => void
    isItemOpen: boolean
    isAnyItemOpen: boolean
}

const NavItem= ({handleOpen, isItemOpen, isAnyItemOpen, category}: NavItemProps) => {
    return(
        <div className="flex">
            <div className="relative flex items-center">
                <Button className="gap-1.5" onClick={handleOpen} variant={isItemOpen ? "secondary" : "ghost"}>
                    {category.label}
                    <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", 
                        {
                            "-rotate-180" : isItemOpen
                        })}/>
                </Button>
            </div>
        </div>
    )
}

export default NavItem;