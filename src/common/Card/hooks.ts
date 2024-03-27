import { useState } from "react"

type useHookCardsReturn = {
	handleMouseEnter: () => void
	isHover: boolean
	handleMouseLeave: () => void
	hoverStyle: {
		backgroundColor: string
		top: string
		left: string | number
		padding: string
		transition: string
	}
}

export const useHookCards = (): useHookCardsReturn => {
	const [isHover, setIsHover] = useState<boolean>(false)

	const handleMouseEnter = () => {
		setIsHover(true)
	}
	const handleMouseLeave = () => {
		setIsHover(false)
	}

	const hoverStyle = {
		backgroundColor: 'rgba(0, 0, 0, 0.59)',
		top: '0',
		left: isHover ? 0 : '100%',
		padding: '15px',
		transition: 'all 0.6s ease-in',
	}

	return { handleMouseEnter, isHover, handleMouseLeave, hoverStyle }
}
