import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react'

export default class MetaDocument extends Document {
	render() {
		return (
			<Html translate='no'>
				<Head />
				<title>Albert Revazov </title>
				<link rel='icon' href='svg/logo_bx.svg' />
				<link
					href='https://fonts.googleapis.com/css2?&family=Anton:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:ital,wght@0,400;0,500;0,600;1,700&display=swap'
					rel='stylesheet'
				/>
				<body>
					<Main />
					<NextScript />
					<Analytics />
				</body>
			</Html>
		)
	}
}
