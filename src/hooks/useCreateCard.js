import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useCreateCard = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(null)
	const { user } = useAuthContext()

	// const parentId = (thisCard) => {
	// 	if(!thisCard.parentId) {
	// 		thisCard.parentId = user.id
	// 	}
	// 	return thisCard.parentId
	// }

	const createCard = async (cardName, cardText, parentId) => {
		setIsLoading(true)
		setError(null)

		console.log(
			JSON.parse(localStorage.getItem('user'))._id,
			'parentId',
			user
		)
		console.log(cardName, cardText, parentId)

		// if no parent card then the user is the parent
		if (!parentId) {
			parentId = JSON.parse(localStorage.getItem('user'))._id
		}

		try {
			const response = await fetch('http://localhost:4000/api/card/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization:
						'Bearer ' +
						JSON.parse(localStorage.getItem('user')).token,
				},
				body: JSON.stringify({ cardName, cardText, parentId }),
			})

			console.log('res1', response)

			const json = await response.json()

			console.log('res2', response)

			if (!response.ok) {
				setError(json.error)
			}
			setIsLoading(false)
		} catch (error) {
			setError(error.message)
			setIsLoading(false)
			throw error
		}
	}

	return { createCard, isLoading, error }
}
