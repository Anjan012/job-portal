import { Link } from "react-router-dom";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2 } from "lucide-react";

export const Navbar = () => {
    const user = false;
    return (
        <div className='bg-white'>
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <h1 className='text-2xl font-bold'>Job <span className='text-[#f83002]'>Portal</span></h1>
                </div>
                <div className="flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-5">
                        {/* <li><Link >Home</Link></li>
                    <li><Link >Jobs</Link></li>
                    <li><Link >Browse</Link></li> */}

                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>

                    {
                        !user ? (
                            <div className="flex items-center gap-2">
                                <Button variant="outline">Login</Button>
                                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
                            </div>
                        )
                            :
                            (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className='w-80'>
                                        <div className="flex gap-5 space-y-2">
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                            </Avatar>
                                            <div>
                                                <h4 className="font-medium">Anjan MERN Stack</h4>
                                                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col text-gray-600 my-2">
                                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                <User2 />
                                                <Button variant="link" >View Profile</Button>
                                            </div>
                                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                <LogOut />
                                                <Button variant="link" >Logout</Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )

                    }


                </div>
            </div>
        </div>
    )
}
