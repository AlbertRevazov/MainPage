import React, { FC } from 'react'
import { useThemeHook } from './hooks'
import styles from './Switcher.module.css'

export const Switcher: FC = () => {
	const { changeModeHandler, mode } = useThemeHook()

	return (
		<div className={styles.toggle_switch}>
			<label className={styles.label}>
				<input
					type='checkbox'
					className={styles.input}
					onChange={() => changeModeHandler(mode)}
					checked={mode === 'dark'}
				/>
				<span className={styles.slider}></span>
			</label>
		</div>
	)
}
