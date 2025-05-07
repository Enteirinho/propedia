// components/Header.js
import Link from 'next/link'
import Image from 'next/image'
import logo_propedia from '../public/images/logo_propedia.svg' // ajuste o caminho conforme a localização da imagem

export default function Header() {
  return (
    <header className="bg-success text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Image src={logo_propedia} alt="Propedia Logo" width={230} height={60} />
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/explore" className="nav-link text-white">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
