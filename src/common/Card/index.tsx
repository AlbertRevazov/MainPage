import { FC } from 'react'
import { Icon } from '../Icon'
import { useHookCards } from './hooks'
import { IServiceCardProps } from '../../types'
import styles from './Card.module.css'

interface CardProps extends IServiceCardProps {
	isWork?: boolean
}

export const Card: FC<CardProps> = ({ item, alt, isWork }) => {
	const { hoverStyle, handleMouseEnter, handleMouseLeave } = useHookCards()
	return (
		<>
			{isWork ? (
				<div
					className={styles.work_wrapper}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<Icon
						className={styles.work_image}
						src={item.src}
						alt={alt}
						width={item.width}
						height={item.height}
					/>
					<div className={styles.work_icon} style={hoverStyle}>
						<h2>{item.title}</h2>
						<h4>
							{item.description.split('\n').map(string => (
								<div key={string}>
									{string}
									<br />
								</div>
							))}
						</h4>
					</div>
				</div>
			) : (
				<div className={styles.service_wrapper}>
					<div className={styles.service_head}>
						<div className={styles.service_title}>{item.title}</div>
						<Icon
							className={styles.service_icon}
							src={item.src}
							alt={alt}
							width={item.width}
							height={item.height}
						/>
					</div>

					<div className={styles.service_desc}>{item.description}</div>
				</div>
			)}
		</>
	)
}
