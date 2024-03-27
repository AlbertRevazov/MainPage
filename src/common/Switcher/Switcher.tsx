import React, { FC } from 'react'
import { useThemeHook } from './hooks'
import styles from './Switcher.module.css'

export const Switcher: FC = () => {
	const { changeModeHandler, mode } = useThemeHook()

	return (
		<>
			<input
				className={styles.input}
				type='checkbox'
				id='switch'
				onChange={() => changeModeHandler(mode)}
				checked={mode === 'dark'}
			/>
			<label className={styles.label} htmlFor='switch' />
		</>
	)
}
