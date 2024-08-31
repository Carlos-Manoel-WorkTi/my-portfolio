'use client'
import "./Active.css"
import Link, {LinkProps} from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

type ActiveProps = LinkProps & {
    children: React.ReactNode;
}
export default function ActiveLink({href,children,...rest}:ActiveProps) {
    const pathName:string = usePathname();
    const activeLink:boolean = pathName === href.toString();

    return (
        <Link href={href} {...rest} 
            className={`hover:text-green-400  -z-50
                ${activeLink ? ' font-bold border-b-2 border-green-400 act': 'text-white '}
                `}
        >
        {children}
        </Link>
    )
}

