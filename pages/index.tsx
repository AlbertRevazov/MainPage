import React from 'react'

const Layout = React.lazy(() => import('../src/common/Layout'))
const Home = React.lazy(() => import('../src/pages/Home'))

const Index = () => {
	return (
		<Layout>
			<Home />
		</Layout>
	)
}

export default Index
