import { FC } from 'react'
import { Icon } from '../../../../common/Icon'
import styles from './LetsWork.module.css'

export const LetsWork: FC = () => {
	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<p className={styles.title}>Let’s work together on your next project</p>
				<a href='#Email'>
					<button className={styles.button}>hire me now</button>
				</a>
				<div className={styles.download}>
					<Icon src='/img/icons/download.png' alt='' width={16} height={16} />
					<a href='/files/CV.pdf' download=''>
						Download CV
					</a>
				</div>
			</div>
		</section>
	)
}
