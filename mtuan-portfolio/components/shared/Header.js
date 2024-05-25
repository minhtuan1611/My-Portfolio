import { useState } from 'react'
import Link from 'next/link'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'

const BsNavLink = ({ href, title }) => (
  <div>
    <Link href={href} passHref legacyBehavior>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  </div>
)

const LoginLink = () => (
  <a className="nav-link port-navbar-link" href="api/auth/login">
    Login
  </a>
)

const LogoutLink = () => (
  <a className="nav-link port-navbar-link" href="/api/auth/logout">
    Logout
  </a>
)

const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
        dark
        expand="md"
      >
        <div>
          <Link href="/" className="port-navbar-brand" passHref legacyBehavior>
            <a className="nav-link port-navbar-link">Tuan Nguyen</a>
          </Link>
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="SecretSSR" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadmin" title="Admin" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="AdminSSR" />
            </NavItem>
          </Nav>
          <Nav navbar>
            {!loading && (
              <>
                {user && (
                  <NavItem className="port-navbar-item">
                    <LogoutLink />
                  </NavItem>
                )}
                {!user && (
                  <NavItem className="port-navbar-item">
                    <LoginLink />
                  </NavItem>
                )}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
