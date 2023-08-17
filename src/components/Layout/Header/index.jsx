import React from 'react'
import styles from './Header.module.scss'
const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>Blog</div>
        <button className={styles.logoutBtn}>Logout</button>
      </div>
    </header>
  )
}

export default Header
