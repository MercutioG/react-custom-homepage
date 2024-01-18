import React from 'react'
import gitHubLogo from '../images/github-logo.png'

const BoxSection = () => {
  return (
    <section className="box-links-container">
      <a href="https://mail.google.com/chat/u/0/" className="box-links">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Google_Chat_icon_%282020%29.svg/1200px-Google_Chat_icon_%282020%29.svg.png' alt='Google Chat Logo'/>
      </a>
      <a href="https://west-mec.instructure.com/" className="box-links">
        <img src="https://copyleaks.com/wp-content/uploads/2022/08/Canvas_Logo.webp" alt='Canvas Logo'/>
      </a>
      <a href="https://west-mec.onelogin.com/portal" className="box-links">
        <img src='https://www.onelogin.com/press-center/wp-content/themes/oceanwp-child-theme-master/assets/Onelogin_Mark_white_RGB.png' alt='One-Login Logo'/>
      </a>
      <a href="https://github.com" className="box-links">
        <img src={gitHubLogo} alt='GitHub Logo'/>
      </a>
      <a href="https://www.gmetrix.net/" className="box-links">
        <img src="https://content.gmetrix.net/images/GMetrix/GMetrix-Logo-Reverse.png" alt='GMetrix Logo'/>
      </a>
      <a href="https://docs.google.com/document/u/0/" className="box-links">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png' alt='Google Docs Logo'/>
      </a>
    </section>
  )
}

export default BoxSection