import { FC } from 'react'
import { Contacts } from './sections/Contacts'
import { Form } from './sections/Form'
import styles from './ContactData.module.css'
import { ScrollButton } from '../../common/ScrollButton'

export const ContactData: FC = () => {
	return (
		<div id='contact' className={styles.contact}>
			<div className={styles.contact__container}>
				<Contacts />
				<Form />
			</div>
			<ScrollButton />
		</div>
	)
}
