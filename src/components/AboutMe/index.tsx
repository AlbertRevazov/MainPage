import React, { FC } from 'react'
import { AboutBlock } from './sections/About'
import { Trusted } from './sections/Trusted'
import { LetsWork } from './sections/LetsWork'

export const AboutMe: FC = () => {
	return (
		<>
			<AboutBlock />
			<Trusted />
			<LetsWork />
		</>
	)
}
