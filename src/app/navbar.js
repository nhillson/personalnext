import Link from "next/link"
import './globals.css'

export default function NavBar() {
    return (
        <div className="flex-container">
            <Link href="/" className="navbar-brand">
                <img src="images/brand.png" alt="Cute Mushroom" width="40"/>
            </Link>
            <Link href="/" className="navbar-link">Homepage</Link>
            <Link href="/mushapp" className="navbar-link">Mushroom App</Link>
            <Link href="/about" className="navbar-link">About Me</Link>
        </div>
        
    )
}