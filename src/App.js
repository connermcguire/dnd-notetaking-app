import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CardList } from './pages/CardList'
import { MonsterDex } from './pages/MonsterDex.jsx'
import { About } from './pages/About.jsx'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

function App() {
	return (
		<>
			<Navbar />
			<div id='container'>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='signup'
						element={<SignUp />}
					/>
					<Route
						path='login'
						element={<LogIn />}
					/>
					<Route
						path='/notes'
						element={<CardList />}
					/>
					<Route
						path='/monsterdex'
						element={<MonsterDex />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
				</Routes>
			</div>
		</>
	)
}

export default App
