import { useState } from 'react'
import { useSignUp } from '../hooks/useSignUp'

const SignUp = () => {
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const { signup, error, isLoading } = useSignUp()

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log('submitted')
		await signup(email, username, password)
		console.log('submitted after handlesubmit await')
	}

	return (
		<form
			className='signUp'
			onSubmit={handleSubmit}
		>
			<h3>Sign Up</h3>

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

			<button disabled={isLoading}>Sign up</button>
			{error && <p>{error}</p>}
		</form>
	)
}

export default SignUp
