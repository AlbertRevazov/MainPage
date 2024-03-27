import { FC } from 'react'
import { data } from './ExperienceData'
import { Card } from '../../common/Card'
import styles from './WorkExperience.module.css'

export const WorkExperience: FC = () => {
	return (
		<section className={styles.container}>
			<div className={styles.title}>
				<h3>03</h3>
				<h4>work experience</h4>
			</div>
			<div className={styles.cards}>
				{data.map(exp => (
					<Card key={exp.title} isWork alt={exp.title} item={exp} />
				))}
			</div>
		</section>
	)
}
