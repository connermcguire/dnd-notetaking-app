// import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useLogOut } from '../hooks/useLogOut'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
	const { logOut } = useLogOut()
	const { user } = useAuthContext()

	const handleClick = () => {
		logOut()
	}

	return (
		<nav id='nav'>
			<Link
				to='/'
				id='home'
			>
				Home
			</Link>
			<ul>
				<Link to='/notes'>Notes</Link>
				<Link to='/monsterdex'>MonsterDex</Link>
				{/* <CustomLink to='/notes'>Notes</CustomLink>
				<CustomLink to='/monsterdex'>MonsterDex</CustomLink> */}
			</ul>
			{user && (
				<div>
					<span>{user.email}</span>
					<button onClick={handleClick}>Log Out</button>
				</div>
			)}
			{!user && (
				<div>
					<Link to='/signup'>Sign Up</Link>
					<Link to='/login'>Log In</Link>
				</div>
			)}
		</nav>
	)
}

// export function CustomLink({ to, children, ...props }) {
// 	const resolvedPath = useResolvedPath(to)
// 	const isActive = useMatch({ path: resolvedPath.pathname, end: true })
// 	return (
// 		<li id={isActive ? 'active' : ''}>
// 			<Link
// 				to={to}
// 				{...props}
// 			>
// 				{children}
// 			</Link>
// 		</li>
// 	)
// }

export default Navbar
