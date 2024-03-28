import { useEffect, useState } from 'react'

export const useScrollToTop = () => {
	const [visible, setVisible] = useState<boolean>(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop

		if (scrolled > 500) {
			setVisible(true)
		} else if (scrolled <= 500) {
			setVisible(false)
		}
	}

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
	useEffect(() => {
		window.addEventListener('scroll', toggleVisible)
	}, [visible])

	return { scrollToTop, visible }
}
