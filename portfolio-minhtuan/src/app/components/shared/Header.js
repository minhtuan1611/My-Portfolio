import Link from 'next/link'

const Header = () => {
  return (
    <nav>
      <Link href="/" passHref>
        Home
      </Link>
      <Link href="/about" passHref>
        About
      </Link>
      <Link href="/portfolios" passHref>
        Portfolios
      </Link>
      <Link href="/blogs" passHref>
        Blogs
      </Link>
      <Link href="/cv" passHref>
        Cv
      </Link>
    </nav>
  )
}

export default Header
