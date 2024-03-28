import { useEffect, useState } from 'react'

export const useThemeHook = () => {
	const [mode, setMode] = useState('light')

	const changeModeHandler: (mode: string) => void = (mode: string) => {
		if (mode !== 'dark') {
			localStorage.setItem('mode', 'dark')
			setMode('dark')
		} else {
			localStorage.setItem('mode', 'light')
			setMode('light')
		}
	}

	useEffect(() => {
		const currMode = localStorage.getItem('mode')
		document.body.setAttribute('data-theme', currMode as string)
		if (currMode) {
			setMode(currMode)
		}
	}, [mode])
	return { mode, changeModeHandler }
}
