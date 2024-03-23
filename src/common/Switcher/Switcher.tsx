import { FC } from 'react'
import { Icon } from '../Icon'
import { useThemeHook } from './hooks'
import styles from './Switcher.module.css'

export const Switcher: FC = () => {
	const { changeModeHandler, mode } = useThemeHook()

	return (
		<div className={styles.root}>
			<Icon src='/img/light_icon.png' alt='sun' width={20} height={20} />
			<input
				type='checkbox'
				onChange={() => changeModeHandler(mode)}
				checked={mode === 'dark'}
				color='warning'
			/>
			<Icon src='/img/dark_icon.png' alt='moon' width={20} height={20} />
		</div>
	)
}
