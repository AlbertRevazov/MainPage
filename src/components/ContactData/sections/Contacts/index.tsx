import { FC } from 'react'
import { contactItems } from './data'
import { Label } from '../../../../common/Label'
import styles from './Contacts.module.css'

export const Contacts: FC = () => {
	return (
		<div className={styles.contacts_root}>
			<div className={styles.contacts_title}>
				<h3 className={styles.count}>04</h3>contact
			</div>

			<div className={styles.contact__us}>
				{contactItems.map(item => (
					<Label
						key={item.title}
						src={item.src}
						subtitle={item.subtitle}
						title={item.title}
					/>
				))}
			</div>
		</div>
	)
}
