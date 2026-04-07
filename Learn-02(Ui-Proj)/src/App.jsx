import NavBar from "./Components/Navbar_Section/NavBar"
import MainContentSection from "./Components/Content_Section/MainContentSection"
import Page2Main from "./Components/Page2_content/Page2Main"
import Page3Main from "./Components/Page3_Content/Page3Main"

const App = () => {
  return (
    <>
      <NavBar heading="Target Audience" />
      <MainContentSection/>
      <Page2Main/>
      <Page3Main/>
    </>
  )
}

export default App
