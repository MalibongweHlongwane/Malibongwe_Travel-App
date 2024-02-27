import Link from "next/link";
import Image from "next/image";
import { link } from "fs";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 cursor-pointer flexCenter pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>
        <div className="lg:flexCenter hidden">
            <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            />
        </div>

        <Image className="inline-block cursor-pointer lg:hidden"
        height={32}
        alt="menu"
        width={32}
        src="/menu.svg"/>
    </nav>
  )
}

export default NavBar
