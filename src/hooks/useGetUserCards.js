import { useState } from 'react'

export const useGetUserCards = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(null)
	const [cards, setCards] = useState([])

	const getCards = async () => {
		setIsLoading(true)
		setError(null)

		try {
			const response = await fetch('http://localhost:4000/api/card/', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${
						JSON.parse(localStorage.getItem('user')).token
					}`,
				},
			})

			const json = await response.json()

			if (!response.ok) {
				setError(json.error)
			} else {
				setCards(json)
			}
			console.log('cards', cards)
			setIsLoading(false)
		} catch (error) {
			setError(error.message)
			setIsLoading(false)
			throw error
		}
	}

	return { getCards, cards, isLoading, error }
}
