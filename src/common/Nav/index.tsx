import { FC } from 'react'
import { Switcher } from '../Switcher/Switcher'
import styles from './Nav.module.css'

export const Nav: FC = () => {
	return (
		<div className={styles.root}>
			<nav className={styles.nav}>
				<a href='/' className={styles.logo}>
					<span className={styles.letter}>R</span>EVAZ
				</a>
				<div className={styles.menu}> </div>
				<div className={styles.btn_wrap}>
					<a href='#contact' className={styles.button}>
						CONTACT
					</a>
				</div>
			</nav>
			<Switcher />
		</div>
	)
}
