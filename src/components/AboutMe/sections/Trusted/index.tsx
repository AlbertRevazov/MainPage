import { FC } from 'react'
import { trustItems } from './data'
import { Icon } from '../../../../common/Icon'
import styles from './Trusted.module.css'

export const Trusted: FC = () => {
	return (
		<section className={styles.trusted}>
			<div className={styles.trusted__container}>
				{trustItems.map(item => (
					<div className={styles.trust__item} key={item.alt}>
						<Icon src={item.src} alt={item.alt} />
					</div>
				))}
			</div>
		</section>
	)
}
