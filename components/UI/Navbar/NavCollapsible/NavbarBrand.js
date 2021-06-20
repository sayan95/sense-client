// @ts-nocheck
// dependency imports
import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

// Navbar brand component
const NavbarBrand = () => {
    // states from store
    const settings = useSelector((state) => state.app.settings); // app settings info

    // jsx content
    return (
        <Fragment>
            <div className="navbar-brand">
                {settings && (
                <Image
                    className="brand-image"
                    src={settings.app_logo}
                    alt={settings.app_name}
                    width="45"
                    height="45"
                    quality="100"
                    priority={true}
                />
                )}
                <Link href="/">
                    <a>{settings && <span>{settings.app_name}</span>}</a>
                </Link>
            </div>
        </Fragment>
    )
}


export default NavbarBrand
