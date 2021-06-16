import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles, AppBar, Toolbar, IconButton, Button, Hidden, Drawer } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import './header.css'

import styles from './headerStyle';

const useStyles = makeStyles(styles)

export default function Header(props){
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange)
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange)
      }
    }
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props
    const windowsScrollTop = window.pageXOffset

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color])
      document.body 
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color])
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color])
      document.body 
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color])
    }
  }

  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;

  const appBarClasses = classNames ({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  })

  const brandComponent = 
  <Button className={classes.title}>
    {brand}
    <a href='/'/>
  </Button>

  return (
    <AppBar className={classes.title}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}> 
          {leftLinks !== undefined ? (
            <Hidden smDown implementation='css'>
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation='css'>
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation='js'>
        <Drawer
          variant='temporary'
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  )
}

Header.defaultProp = {

}

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};




















/*const Header = (props) => {
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
          </div> }
        </div>
    )
}
export default Header */