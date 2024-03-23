import { FC, ReactNode } from 'react'
import { Nav } from '../Nav'

type LayoutProps = {
	children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
			footer
		</>
	)
}
export default Layout
