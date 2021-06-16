import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Header = (props) => {
  const [searchSubmitted, setSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  if (searchSubmitted) {
    return <Redirect to={`/search/${searchText}`} />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText) {
      setSearch(true);
    }
  }

  return (
  <header className="header">
    <Link to="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></Link>
    <div id="navigation" className="navigation">
      <nav>
        <ul>
          <li><Link to="/my-watch-list">Watch List</Link></li>
        </ul>
      </nav>
    </div>
    <form
      id="search"
      className="search"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        placeholder="Search for a title..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <div className="searchResults"></div>
    </form>
  </header>
  );
}
 
export default Header;
