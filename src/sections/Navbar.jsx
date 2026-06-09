import {X, Menu } from "lucide-react";
import { useState } from "react";   


const navItems = [
    {name: "Inicio", href: "#"},
    {name: "Sobre", href: "#about"},
    {name: "Servicos", href: "services"},
    {name: "Contato", href: "#contact"},
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);    
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <nav className="fixed w-full bg-gray-800 top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12
            lg:px-2 py-3 md:py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center text-xl sm:text-2xl font-bold text-gray-100 flex-shrink-0">                                        
                    <div className="flex items-center justify-center whitespace-nowrap"> 
                       Auto Lavagem
                    </div>
                    <div className="text-yellow-500 ml-4">
                        Samuel&reg;
                    </div>          
                 </div>
                {/*Links*/}
                <ul className="
                hidden 
                md:flex 
                items-center 
                gap-6 lg:gap-8 
                text-gray-100 
                font-medium">
                    {navItems.map(({ name, href }) => (
                        <li key={name}>
                            <a
                             href={href}
                            className="
                            hover:text-yellow-500 
                            cursor-pointer 
                            transition-colors ">
                        {name}
                            </a>
                        </li>
                    ))}
                    </ul>
                {/*button*/}
                <div className="hidden md:block">
                    <button 
                className="
                    whitespace-nowrap
                    px-4 py-2 lg:px-5 lg:py-2
                    rounded-lg sm:rounded-xl 
                    bg-yellow-500 
                    text-black  
                    text-sm sm:text-base
                    font-medium 
                    hover:bg-gray-600 
                    hover:text-yellow-500
                    transition-colors
                    flex-shrink-0"                    >
                   
                    <span className="hidden lg:inline">
                    Peça já seu orçamento
                    </span>
                    <span className="lg:hidden">
                    orçamento
                    </span>
                    </button>
                </div>
                {/*Mobile menu button*/}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        {isMenuOpen ? (
                                <X className="h-6 w-6 text-gray-700" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-700" /> 
                            )}
                    </button>   
                </div>            
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
                    <div className="px-4 py-3 space-y-3">
                        {navItems.map(({ name, href }) => (
                            <a
                             key={name}
                             href={href}
                             className="block py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                             onClick={() => setIsMenuOpen(false)}>
                                {name}
                            </a>
                        ))}
                        <div className="pt-2">
                            <button className="w-full py-2 rounded-lg bg-yellow-500 text-black font-medium hover:bg-gray-600 transition-colors">
                                Peça já seu orçamento
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </nav>
    )
};

export default Navbar;