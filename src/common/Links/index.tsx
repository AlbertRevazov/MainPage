import { FC } from 'react'
import styles from './Links.module.css'

interface LinksProps {
	className?: string
}

export const Links: FC<LinksProps> = ({ className }) => {
	return (
		<div className={className}>
			<a
				href='https://www.instagram.com/aberevaz'
				target='_blank'
				className={styles.link__item}
			>
				<img src='/img/icons/inst.png' alt='icon-inst' loading='lazy' />
			</a>

			<a
				href='https://vk.com/abe_revaz'
				target='_blank'
				className={styles.link__item}
			>
				<img src='/img/icons/vk.png' alt='icon-vk' loading='lazy' />
			</a>
			<a
				href='https://www.linkedin.com/in/albertrevazov17/'
				target='_blank'
				className={styles.link__item}
			>
				<img src='/img/icons/linkedin.png' alt='icon-linked' loading='lazy' />
			</a>
			<a
				href='https://github.com/AlbertRevazov'
				target='_blank'
				className={styles.link__item}
			>
				<img src='/img/icons/git.png' alt='icon-git' loading='lazy' />
			</a>
		</div>
	)
}
