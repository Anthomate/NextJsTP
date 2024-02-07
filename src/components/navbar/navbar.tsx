import NavarbarIcon from "@/components/navbar/navarbar-icon";

export default function Navbar()
{
    return(
        <nav className="flex p-5 bg-white h-1/12">
            <div className="w-2/5 flex pl-3 justify-between">
                <NavarbarIcon src="/menu-icon1.png" alt="Icon 1" width={40} height={40} />
                <NavarbarIcon src="/menu-icon2.png" alt="Icon 2" width={40} height={40} />
                <NavarbarIcon src="/menu-icon3.png" alt="Icon 3" width={40} height={40} />
                <NavarbarIcon src="/menu-icon4.png" alt="Icon 4" width={40} height={40} />
                <NavarbarIcon src="/menu-icon5.png" alt="Icon 5" width={40} height={40} />
            </div>
            <div className="w-3/5 flex justify-end pr-3">
                <NavarbarIcon src="/menu-icon6.png" alt="Icon 6" width={40} height={40} />
            </div>
        </nav>
    )
}