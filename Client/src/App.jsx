
import './App.css'
import Layout from './Components/Layout/Layout'
import {Route,Routes} from 'react-router-dom'
import  Home  from './Pages/Home/Home'

function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
