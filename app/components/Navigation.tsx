"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

type Navlink = {
    label:string;
    href:string;
}

type Props = {
    navLinks: Navlink[];
}


const Navigation = ({navLinks} : Props) => {
    const pathname = usePathname();//хранит текущий путь

  return (
    <>
    {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
            <Link 
            href={link.href}
            key={link.label}
            className={isActive? 'active' : ''}
            >{link.label}</Link> 
        )
    })}
    </>
  )
}

export {Navigation}
