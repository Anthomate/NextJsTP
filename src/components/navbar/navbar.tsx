'use client';

import Image from "next/image";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { PiWallet } from "react-icons/pi";
import { PiBag } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";
import NavbarIcon from "@/components/navbar/navarbar-icon";
import {useState} from "react";

export default function Navbar() {
    const [activeIcon, setActiveIcon] = useState<string>('');

    const handleIconClick = (iconName: string) => {
        setActiveIcon(iconName);
    }

    return (
        <nav className="flex p-5 bg-white h-1/12">
            <div className="w-3/12 flex pl-3 justify-between items-center">
                <Image src={"/menu-icon1.png"} alt={"Icone 5"} width={40} height={40} />
                <NavbarIcon href="/dashboard" onClick={() => handleIconClick('dashboard')} active={activeIcon === 'dashboard'}>
                    <AiOutlineAppstore />
                </NavbarIcon>
                <NavbarIcon href="/dashboard/statistics" onClick={() => handleIconClick('statistics')} active={activeIcon === 'statistics'}>
                    <AiOutlinePieChart />
                </NavbarIcon>
                <NavbarIcon href="/dashboard/cards" onClick={() => handleIconClick('cards')} active={activeIcon === 'cards'}>
                    <PiWallet />
                </NavbarIcon>
                <NavbarIcon href="/dashboard/wallet" onClick={() => handleIconClick('wallet')} active={activeIcon === 'wallet'}>
                    <PiBag />
                </NavbarIcon>
            </div>
            <div className="w-9/12 flex justify-end pr-3">
                <NavbarIcon href="/dashboard/settings" onClick={() => handleIconClick('settings')} active={activeIcon === 'settings'}>
                    <LuSettings />
                </NavbarIcon>
            </div>
        </nav>
    );
}
