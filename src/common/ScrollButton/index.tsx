import React, { FC } from 'react'
import { useScrollToTop } from './hooks'
import { Icon } from '../Icon'
import styles from './ScrollButton.module.css'

export const ScrollButton: FC = () => {
	const { scrollToTop, visible } = useScrollToTop()

	return (
		<div>
			<button
				className={styles.scroll}
				style={{ opacity: visible ? 1 : 0 }}
				onClick={scrollToTop}
			>
				<Icon src='svg/arrow_up.svg' alt='top' className={styles.icon} />
			</button>
		</div>
	)
}
