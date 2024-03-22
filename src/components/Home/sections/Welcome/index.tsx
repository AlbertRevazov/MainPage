import { FC } from 'react'
import { Links } from '../../../../common/Links'
import { Icon } from '../../../../common/Icon'
import styles from './Welcome.module.css'

export const Welcome: FC = () => {
	return (
		<div className={styles.welcome_root}>
			<div className={styles.welcome__container}>
				<div className={styles.hello_wrapper}>
					<h2 className={styles.title}>
						<span className={styles.hello}> Hello,</span> I’m
					</h2>
					<div className={styles.bio}>
						<h1>ALBERT REVAZOV</h1>
					</div>
					<h3 className={styles.subtitle}> Frontend Developer</h3>
				</div>
				<div className={styles.image_wrapper}>
					<Icon className={styles.image} src='/img/abe.png' alt='pic' />
				</div>
			</div>
			<Links className={styles.media} />
			<img
				className={styles.welcome_bottom_bg}
				src='/img/welcome_bg.png'
				alt='welcome_bg'
				loading='lazy'
			/>
		</div>
	)
}
