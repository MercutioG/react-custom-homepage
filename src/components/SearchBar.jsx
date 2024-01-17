import { useState } from 'react';
import searchLogo from '../images/icon-search.svg'
import googleLogo from '../images/google-logo.png'

const GoogleSearchBar = (gitHubLogo) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
      window.open(googleSearchURL, '_self');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div id='big-searchbar-container'>
      <img className='google-logo' src={googleLogo} alt="Google Logo" />
      <div className='searchbar-container'>
        <input className='searchbar'
          type="text"
          placeholder="Search Google..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <img src={searchLogo} alt='Search Logo' className='search-logo' onClick={() => handleSearch()}/>
      </div>
    </div>
  );
};

export default GoogleSearchBar;