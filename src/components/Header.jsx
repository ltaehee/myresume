import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const navigate = useNavigate();
  const handleClickMenu = (path) => {
     //path => "home" | "portfolio" | "contact";
    navigate(path);
  }
  return (
    <header className='appHeader'>
      <button onClick={() => handleClickMenu("/")}>home</button>
      <button onClick={() => handleClickMenu("/portfolio")}>portfolio</button>
      <button onClick={() => handleClickMenu("/contact")}>contact</button>
    </header>
  )
}

export default Header