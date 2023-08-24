// import CustomLink from "../components/Navbar"

export const Home = () => {
	// Not sure what will go here, maybe an entire character sheet, maybe something that can be filled with pics and stuff about their party
	const user = false

	const userStatus = (userLoginStatus) => {
		if (userLoginStatus === false) {
		} // use CustomLink to redirect user to the login page
	}

	const main = () => {
		userStatus(user)
	}
	main()
	return 'Oh boi'
}
