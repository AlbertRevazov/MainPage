import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../src/styles/reset.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Albert Revazov</title>
				<link rel='icon' href='svg/logo_bx.svg' />
				<link
					href='https://fonts.googleapis.com/css2?&family=Anton:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:ital,wght@0,400;0,500;0,600;1,700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
