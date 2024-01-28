import { useEffect, RefObject } from 'react'

type EventListener = (event: MouseEvent) => void

const useOnClickOutside = (
	ref: RefObject<HTMLElement>,
	handler: EventListener
): void => {
	useEffect(() => {
		const listener: EventListener = (event) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}
			handler(event)
		}

		document.addEventListener('mousedown', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
		}
	}, [ref, handler])
}

export default useOnClickOutside
