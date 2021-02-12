import React from 'react';
import styles from './Button.module.scss'

const Button = ({onClick, color='black', children, type='button'}) => {

  const buttonStyle = {
    backgroundColor: color
  }

  return ( 
    <button style={buttonStyle} type={type} onClick={onClick} className={styles.button}>{children}</button>
   );
}
 
export default Button;