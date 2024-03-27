import { FC, ReactNode } from 'react'
import { Nav } from './sections/Nav'
import { Footer } from './sections/Footer'

type LayoutProps = {
	children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	)
}
export default Layout
