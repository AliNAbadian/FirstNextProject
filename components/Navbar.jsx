'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()

    // const handleClick = () => {
    //     router.push('/login')
    //     router.replace('/login')
    //     router.back('/login')
    //     router.forward('/login')

    return (
        <div className="top-area">
            <div className="header-area">
                <nav
                    className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
                    data-minus-value-desktop="70"
                    data-minus-value-mobile="55"
                    data-speed="1000"
                >
                    <div className="container">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#navbar-menu"
                            >
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                carvilla<span></span>
                            </a>
                        </div>
                        <div
                            className="collapse navbar-collapse menu-ui-design"
                            id="navbar-menu"
                        >
                            <ul
                                className="nav navbar-nav navbar-right"
                                data-in="fadeInDown"
                                data-out="fadeOutUp"
                            >
                                <li className=" scroll" style={{ colro: pathName == '/' && 'blue' }}>
                                    <Link href="/">home</Link>
                                </li>
                                <li className="scroll" style={{ colro: pathName == '/cars/services' && 'blue' }}>
                                    <Link replace href="/cars/services">service</Link>
                                </li>
                                <li className="scroll" style={{ colro: pathName == '/cars' && 'blue' }}>
                                    <Link href="/cars">featured cars</Link>
                                </li>
                                <li className="scroll" style={{ colro: pathName == '/login' && 'blue' }}>
                                    <Link href="/login">login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="clearfix"></div>
        </div>

    )
}

export default Navbar