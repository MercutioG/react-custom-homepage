import { useState } from 'react';

const GoogleSearchBar = () => {
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
    <div>
      <input className='searchbar'
        type="text"
        placeholder="Search Google..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default GoogleSearchBar;