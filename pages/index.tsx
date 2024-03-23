import React from 'react'
import { Analytics } from '@vercel/analytics/react'

const Layout = React.lazy(() => import('../src/common/Layout'))
const Home = React.lazy(() => import('../src/components/Home'))

const Index = () => {
	return (
		<Layout>
			<Home />
			<Analytics />
		</Layout>
	)
}

export default Index
