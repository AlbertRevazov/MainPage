import { FC, ReactNode } from 'react'
import { Nav } from './sections/Nav'

type LayoutProps = {
	children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
			<h2>footer</h2>
		</>
	)
}
export default Layout
