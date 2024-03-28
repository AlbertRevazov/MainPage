import { FC, memo } from 'react'
import { data } from './ServiceData'
import { Card } from '../../common/Card'
import styles from './Service.module.css'

export const Service: FC = memo(() => {
	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.title}>
						<h3 className={styles.count}>02</h3>
						<h4>My Service</h4>
					</div>
					<div className={styles.cards}>
						{data.map(item => (
							<Card key={item.title} item={item} alt='' />
						))}
					</div>
				</div>
			</div>
		</section>
	)
})
