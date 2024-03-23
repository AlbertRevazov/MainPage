import { FC } from 'react'
import styles from './About.module.css'

export const AboutBlock: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<section className={styles.hero}>
					<div className={styles.head_wrapper}>
						<div className={styles.heading}>
							<h3 className={styles.count_hero}>01</h3> about me
						</div>
					</div>
					<span className={styles.span}>
						I am engaged in web development. I love and know how to work in a
						team, I am able to break a complex task into several simple
						subtasks, I am always looking for optimal solutions, alternative
						ways to improve the quality of the product.
					</span>
					<span className={styles.span}>
						The plans are to master React Native.
					</span>
					<span className={styles.span}>
						My position: "Respect and mutual assistance are the basis of
						teamwork"
					</span>
				</section>
				<section className={styles.about_blocks}>
					<div className={styles.card}>
						<img
							src='/img/ave.jpg'
							alt=''
							className={styles.img}
							loading='lazy'
						/>
						<div className={styles.title}>
							and more tools have been studied
							<h3 className={styles.count}>10</h3>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.title}>
							<h3 className={styles.count}>+2</h3>Year of experience
						</div>
						<img
							src='/img/rew.jpg'
							alt=''
							className={styles.img}
							loading='lazy'
						/>
					</div>
				</section>
			</div>
		</div>
	)
}
