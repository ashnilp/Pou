import './header.css'
import { Link } from 'react-router-dom';
import Pou from '../Images/pou.jpg'
//import MenuIcon from '@material-ui/icons/Menu';
//import CloseIcon from '@material-ui/icons/Close'


const Header = (props) => {
    const {isMenuOpen, setIsMenuOpen} = props;

    return (
        <div className="header">
          <div className="header__logo">
            <Link to="/">
              <img className="header__logoImg" src={Pou} alt=""></img>
            </Link>
          </div>
          <div className="header__links">
            <Link to="/">About Us</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Content</Link>
            <Link to="/">Messages</Link>
            <Link to="/">Contact Us</Link>
          </div>
          {/*<div className="header__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            { isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
          </div> */}
        </div>
    )
}
export default Header