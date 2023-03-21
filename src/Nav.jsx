import reactLogo from './assets/react.svg'

const Nav = ({setSearchTerm, searchingTerm, setSearchingTerm}) => {

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.target.value)
    }
  }

  const handleChange = (e) => {
    setSearchingTerm(e.target.value)
  }

  return(
    <nav className="nav">
      <div id='nav_logo'>
        <img src={reactLogo} alt="react logo" />
        <h1>Recipe App with React</h1>
      </div>
      <input type="text" onKeyPress={handleSubmit}
        value={searchingTerm} onChange={handleChange}
        placeholder='Search recipe by dish or ingredient' id='search_box' />
    </nav>
  )
}

export default Nav