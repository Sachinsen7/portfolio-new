import { useContext } from "react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from "@/components/ui/Button";
import { ThemeContext } from "@/context/ThemeContext";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header(){
    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <header className="sticky top-0 z-50 bg-[var(--background)] shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">Sachin</h1>
                <div className="hidden md:flex space-x-6">
                    {NAV_LINKS.map((link) => {
                        <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
                            {link.label}
                        </a>
                    })}
                </div>
                <Button variant="outline" onClick={toggleTheme}>
                    {theme === "light" ? "Dark" : "Light"} Mode
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger className="md:hidden">
                        <Button variant="ghost">
                            <Menu/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent  className="bg-[var(--card-bg)] p-2 rounded-md shadow-lg">
                        {NAV_LINKS.map((link) => {
                            return (
                                <DropdownMenuItem key={link.href} className="hover:text-primary transition-colors">
                                    <a href={link.href}>{link.label}</a>
                                </DropdownMenuItem>
                            )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </header>
    )
}