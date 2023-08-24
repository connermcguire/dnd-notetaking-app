//
// This file is supposed to take a field that should be updated
// This is used atm to update that cards array on a user in order to store origin card ids
// After that is done get user cards should only get cards that have the user card array ids instead of all cards
//
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useUpdateUser = (cardId) => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(null)
	const { user } = useAuthContext()

	const updateUser = async () => {
		setIsLoading(true)
		setError(null)

		try {
			const response = await fetch(
				`http://localhost:4000/api/user/${user.id}`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${
							JSON.parse(localStorage.getItem('user')).token
						}`,
					},
					body: JSON.stringify({ cardId }),
				}
			)

			const json = await response.json()

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

	return { updateUser, isLoading, error }
}
