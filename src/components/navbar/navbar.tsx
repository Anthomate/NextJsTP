import NavarbarIcon from "@/components/navbar/navarbar-icon";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { PiWallet } from "react-icons/pi";
import { PiBag } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";
import Image from "next/image";


export default function Navbar()
{
    return(
        <nav className="flex p-5 bg-white h-1/12">
            <div className="w-3/12 flex pl-3 justify-between">
                <Image src={"/menu-icon1.png"} alt={"Icone 5"} width={40} height={40} />
                <NavarbarIcon>
                    <AiOutlineAppstore className="text-yellow-500" />
                </NavarbarIcon>
                <NavarbarIcon>
                    <AiOutlinePieChart />
                </NavarbarIcon>
                <NavarbarIcon>
                    <PiWallet />
                </NavarbarIcon>
                <NavarbarIcon>
                    <PiBag />
                </NavarbarIcon>
            </div>
            <div className="w-9/12 flex justify-end pr-3">
                <NavarbarIcon>
                    <LuSettings />
                </NavarbarIcon>
            </div>
        </nav>
    )
}