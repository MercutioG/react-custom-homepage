import GoogleSearchBar from "./components/SearchBar"
import BoxSection from "./components/BoxSection"
import Accordion from "./components/Accordion"

const App = () => {
  return (
    <>
      <header>
        <nav>
          <GoogleSearchBar/>
          <button type="button" className="switch-btn">Homepage</button>
        </nav>
      </header>
      <article className="body-container">
        <BoxSection />
        <Accordion />
      </article>
    </>
  )
}

export default App