import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/form' element={<Form />} /> */}
        {/* /success/:name */}
      </Routes>
    </BrowserRouter>
  )
}

export default App