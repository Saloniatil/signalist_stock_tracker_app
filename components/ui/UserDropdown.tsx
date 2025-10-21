'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {LogOut} from "lucide-react";
import NavItems from "@/components/ui/NavItems";
const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        await handleSignOut()
        router.push("/sign-in")
    }

    const user = { name: 'John', email: 'conatct@jsmastery.com' }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-centergap-3 text-gray-4 hover:text-yellow-500">
                    <Avatar className ="h-8 w-8" >       
                        
                    </Avatar>
                    <div className= "hidden md-flex flrx-col items-start">
                        <span className = "text-base font-medium text-gray-400">
                            {user.name}
                            </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuLabel>
                    <div className= "flex relative items-center gap-3 py-2">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://e4ubusiness.com/wp-content/uploads/2024/05/Untitled-design-8.png" />  
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className= "flex flex-col">
                        <span className = "text-base font-medium text-gray-400">
                            {user.name}
                            </span>
                            <span className="tex-sm text-grau-500">{user.email}</span>
                    </div>
                 </div> 
                </DropdownMenuLabel>
                  
                <DropdownMenuSeparator className="bg-gray-600"/>
                <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2 hdden sm:block"/>
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden am:block bg-gray-600"/>
                <nav className="sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
