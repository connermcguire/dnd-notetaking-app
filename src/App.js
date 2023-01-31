import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Notes from './pages/Notes.jsx'
import MonsterDex from './pages/MonsterDex.jsx'
import About from './pages/About.jsx'

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/monsterdex' element={<MonsterDex />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Router>
        </>
    )
}

export default App