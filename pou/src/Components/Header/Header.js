import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { AppBar, Toolbar, IconButton, Button, Hidden, Drawer } from '@material-ui/core'
import { Menu } from '@material-ui/icons/Menu'
import styles from './headerStyle'

const useStyles = makeStyles(styles)

export default function Header(props) {

}

Header.defaultProp = {
    color: "white"
}
Header.PropTypes = {
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
}
