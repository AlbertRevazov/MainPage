import { FC } from 'react'
import { Switcher } from '../Switcher/Switcher'
import './Nav.module.css'

export const Navbar: FC = () => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Switcher />
		</div>
	)
}
