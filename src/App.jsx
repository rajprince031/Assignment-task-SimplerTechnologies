import HomePage from './component/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SingUpPage from './component/SignUpPage'
import UserCard from './component/UserCard'

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' Component={HomePage} />
            <Route path="/signup" Component={SingUpPage} />
            <Route path="/user" Component={UserCard} />
        </Routes>
      </Router>
    </>
  )
}

export default App
