import { FC } from 'react'
import { Icon } from '../Icon'
import styles from './Label.module.css'
interface ILabelProps {
	title: string
	subtitle: string
	src: string
}

export const Label: FC<ILabelProps> = ({ title, subtitle, src }) => {
	return (
		<div className={styles.wrapper}>
			<Icon src={src} alt='icon' width={19} height={19} />
			<div className={styles.item}>
				<h4 className={styles.title}>{title}</h4>
				<h6 className={styles.subtitle}>{subtitle}</h6>
			</div>
		</div>
	)
}
