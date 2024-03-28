import { FC } from 'react'
import styles from './Footer.module.css'

export const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				Copyright 2024 | All Right Reserved | Powered by <span>A.Revazov</span>
			</div>
		</div>
	)
}
