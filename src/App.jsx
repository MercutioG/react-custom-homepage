import GoogleSearchBar from "./components/SearchBar"
import gitHubLogo from './images/github-logo.png'

const App = () => {
  return (
    <>
      <header>
        <nav>
          <GoogleSearchBar/>
        </nav>
      </header>
      <section className="box-links-container">
        <a href="https://mail.google.com/chat/u/0/" className="box-links">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Google_Chat_icon_%282020%29.svg/1200px-Google_Chat_icon_%282020%29.svg.png'/>
        </a>
        <a href="https://west-mec.instructure.com/" className="box-links">
          <img src="https://copyleaks.com/wp-content/uploads/2022/08/Canvas_Logo.webp"/>
        </a>
        <a href="https://west-mec.onelogin.com/portal" className="box-links">
          <img src='https://www.onelogin.com/press-center/wp-content/themes/oceanwp-child-theme-master/assets/Onelogin_Mark_white_RGB.png'/>
        </a>
        <a href="https://github.com" className="box-links">
          <img src={gitHubLogo}/>
        </a>
        <a href="https://www.gmetrix.net/" className="box-links">
          <img src="https://content.gmetrix.net/images/GMetrix/GMetrix-Logo-Reverse.png"/>
        </a>
        <a href="https://docs.google.com/document/u/0/" className="box-links">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png'/>
        </a>
      </section>
    </>
  )
}

export default App