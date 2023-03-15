import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar() {
    return (
        <nav id="nav">
            <Link to="/" id="home">
                Home
            </Link>
            <ul>
                <CustomLink to="/notes">Notes</CustomLink>
                <CustomLink to="/monsterdex">MonsterDex</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li id={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar