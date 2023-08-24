import { useState } from 'react'
import { useLogIn } from '../hooks/useLogIn'
const LogIn = () => {
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const { logIn, isLoading, error } = useLogIn()

	const handleSubmit = async (e) => {
		e.preventDefault()

		await logIn(email, username, password)
	}

	return (
		<form
			className='login'
			onSubmit={handleSubmit}
		>
			<h3>Log In</h3>

			<label>Email</label>
			<input
				type='email'
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<label>Username</label>
			<input
				type='username'
				onChange={(e) => setUsername(e.target.value)}
				value={username}
			/>
			<label>Password</label>
			<input
				type='password'
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>

			<button disabled={isLoading}>Log In</button>
			{error && <div className='error'>{error}</div>}
		</form>
	)
}

export default LogIn
