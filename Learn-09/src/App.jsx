import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import AboutPage from "./UsePharamsHook/AboutPage"
import ContactPage from "./Pages/ContactPage"
import HomePage from "./Pages/HomePage"
import Pvp from "./UselocationHook/Pvp"
import Page404 from "./UseNavigateHook/Page404"
import PrivacyPage from "./Pages/PrivacyPage"
import PoliciesPage from "./Pages/PoliciesPage"
import AboutPageQuery from "./UsePharamsHook/AboutPageQuery"

const App = () => {
  return (
    <div>
      <Header/>
      
      <Routes>
        {/* ----- routing -------*/}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>

        {/* ----- nested routing -------*/}

        {/* Type-1 */}
        {/* <Route path="/pvp/privacy" element={<PrivacyPage/>}/>
        <Route path="/pvp/policies" element={<PoliciesPage/>}/> */}

        {/* Type-2 */}
        <Route path="/pvp" element={<Pvp/>}>
          <Route path = "privacy" element={<PrivacyPage/>}/>
          <Route path = "policies" element={<PoliciesPage/>}/>
        </Route>

        {/* ............. if the url not exits  ................... */}
        <Route path="*" element={<Page404/>}/>
        
        {/* using usepharams handle every search query shown - to see goto /about and write after /about/ anything */}
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/about/:query" element={<AboutPageQuery/>}/>

      </Routes>
    </div>
  )
}

export default App
