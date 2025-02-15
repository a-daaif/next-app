'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
    const {t} = useLanguage()
    const pathName = usePathname()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" href="/">{t('title')}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${pathName === '/' ? 'active fw-bold' : ''}`}
                                aria-current="page" href="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${pathName === '/products' ? 'active fw-bold' : ''}`}

                                href="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${pathName === '/cart' ? 'active fw-bold' : ''}`}

                                href="/cart">{t('cart')}</Link>
                        </li>
                       

                    </ul>
                </div>
                <div>
                    <LanguageSelector />
                </div>
            </div>
        </nav>
    )
}