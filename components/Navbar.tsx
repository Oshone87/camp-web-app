import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"



const Navbar = () => {
  return (
   <nav className="padding-container py-8 flex justify-between relative z-30">
    <Link href="/">
    <Image src ="/hilink-logo.svg" alt="logo" width={74} height={29}/>
    </Link>
    <ul className="hidden h-full gap-12 lg:flex">
    {NAV_LINKS.map((link)=>(
        <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flex justify-center cursor-pointer  transition-all hover:font-extrabold">
        {link.label}
        </Link>
    ))}
    </ul>
    <div className="lg:flex justify-center items-center hidden">
    <Button
    type="button"
    title="Login"
    icon="/user.svg"
    variant="btn_dark_green"
    
    />
    </div>
   


   <Image src="/menu.svg" alt="menu" width={24} height={24} className="lg:hidden"/>
   </nav>
  )
}

export default Navbar
