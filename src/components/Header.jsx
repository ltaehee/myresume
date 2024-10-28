import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleClickMenu = (path) => {
     //path => "home" | "portfolio" | "contact";
    navigate(path);
  }
  return (
    <header className='app-header'>
      <button onClick={() => handleClickMenu("/")}>home</button>
      <button onClick={() => handleClickMenu("/portfolio")}>portfolio</button>
      <button onClick={() => handleClickMenu("/contact")}>contact</button>
    </header>
  )
}

export default Header