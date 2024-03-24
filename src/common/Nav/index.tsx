import React, { FC } from 'react'
import { Switcher } from '../Switcher/Switcher'

import styles from './Nav.module.css'
import { Icon } from '../Icon'

export const Nav: FC = () => {
	return (
		<div className={styles.root}>
			<nav className={styles.nav}>
				<a href='/' className={styles.logo}>
					<span className={styles.letter}>R</span>EVAZ
				</a>
				<div className={styles.switch_wrap}>
					<Icon
						src='/img/light_icon.png'
						alt='sun'
						className={styles.sun}
						width={20}
						height={20}
					/>

					<Switcher />
					<Icon
						src='/img/dark_icon.png'
						alt='moon'
						className={styles.moon}
						width={20}
						height={20}
					/>
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
