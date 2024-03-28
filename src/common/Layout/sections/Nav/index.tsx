import React, { FC } from 'react'
import { Icon } from '../../../Icon'
import { Switcher } from '../../../Switcher/Switcher'
import styles from './Nav.module.css'

export const Nav: FC = () => {
	return (
		<div className={styles.root}>
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<span className={styles.letter}>R</span>EVAZ
				</div>
				<div className={styles.switch_wrap}>
					<Icon src='/img/light.png' alt='sun' className={styles.sun} />

					<Switcher />
					<Icon src='/img/dark.png' alt='moon' className={styles.moon} />
				</div>
				<div className={styles.btn_wrap}>
					<a href='#contact' className={styles.button}>
						CONTACT
					</a>
				</div>
			</nav>
		</div>
	)
}
