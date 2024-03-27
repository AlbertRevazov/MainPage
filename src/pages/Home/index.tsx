import { FC } from 'react'
import { Welcome } from '../../components/Welcome'
import { AboutMe } from '../../components/AboutMe'
import { Service } from '../../components/Service'
import { WorkExperience } from '../../components/WorkExperience'
import { ContactData } from '../../components/ContactData'
import { Footer } from '../../common/Layout/sections/Footer'

export const HomePage: FC = () => {
	return (
		<>
			<Welcome />
			<AboutMe />
			<Service />
			<WorkExperience />
			<ContactData />
			{/* <Footer /> */}
		</>
	)
}
export default HomePage
