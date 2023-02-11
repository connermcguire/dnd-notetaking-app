import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Notes from './pages/Notes.jsx'
import MonsterDex from './pages/MonsterDex.jsx'
import About from './pages/About.jsx'

function App() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/monsterdex' element={<MonsterDex />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </>
    )
}

export default App