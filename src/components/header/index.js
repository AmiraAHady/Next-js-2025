"use client"
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './header.module.css'
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function NavBar() {
  const currentPath=usePathname()
  // console.log(currentPath);
  return (
    // <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="/logonext.jpeg" width={50} height={50} alt='logo' quality={100}/>
          </Navbar.Brand>
          <Nav className={`me-auto ${styles.link}`} >
            <Link href="/" className={(currentPath=='/'?"bg-danger":"")}>Home</Link>
            <Link href="/about" className={(currentPath=='/about'?"bg-danger":"")}>about</Link>
            <Link href="/products" className={(currentPath=='/products'?"bg-danger":"")}>Products</Link>
            <Link href="/contact-us" className={(currentPath=='/contact-us'?"bg-danger":"")}>ContactUs</Link>
            <Link href="/login" className={(currentPath=='/login'?"bg-danger":"")}>Login</Link>
          </Nav>
        </Container>
      </Navbar>
      // </>
  )
}
