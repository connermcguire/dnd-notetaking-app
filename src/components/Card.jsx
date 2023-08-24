/*


TODO *deleteCard* use a useEffect to rerender without going back to the default

*/

import { useState, useRef, useEffect } from 'react'
import { useCreateCard } from '../hooks/useCreateCard'
// import { defaultNoteCard } from '../pages/Notes'

const Card = ({ index, noteCard, handleDeleteCard }) => {
	const textareaRef = useRef()
	const formRef = useRef(null)
	// const { name, path, text, id } = noteCard
	const [focused, setFocused] = useState(false)
	const { createCard, isLoading, error } = useCreateCard()
	const [cardName, setCardName] = useState('')
	const [cardText, setCardText] = useState('')
	const [parentId, setParentId] = useState(null)
	// const [noteCards, setNoteCards] = useState([defaultNoteCard])

	// console.log({ name, path, text, id })

	useEffect(() => {
		textareaRef.current.style.height = 'auto'
		textareaRef.current.style.height =
			textareaRef.current.scrollHeight + 'px' // Sets height

		let textareaRefHeight = parseInt(
			// Convert textareaRef to a num for the if statement
			textareaRef.current.style.height.substring(
				0,
				textareaRef.current.style.height.length - 2
			),
			10
		)

		if (focused === false && textareaRefHeight > 200) {
			textareaRef.current.style.height = '200px' // Sets height on blur, if height would have been greater than 200px
		}
	}, [focused])
	// }, [focused, noteCard])

	const handleFocus = () => {
		// delete?
		setFocused(true)
	}

	// const handleBlur = () => {
	// 	setFocused(false)
	// 	handleSubmit()
	// }

	const handleOnInput = (e) => {
		e.target.style.height = 'auto'
		e.target.style.height = e.target.scrollHeight + 'px'
	}

	const handleCreateCard = (e, id) => {
		// TODO
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData(formRef.current)
		console.log(formData)
		await createCard(cardName, cardText, parentId)
	}

	// {createCard, deleteCard, id}
	return (
		<>
			<form
				ref={formRef}
				id='noteCard'
				onSubmit={(e) => {
					handleSubmit(e)
				}}
			>
				<div>
					<input
						type='text'
						placeholder='title'
						id='cardName'
						onChange={(e) => setCardName(e.target.value)}
						value={cardName}
					/>
				</div>
				<div>
					<textarea
						id='cardText'
						ref={textareaRef}
						onInput={handleOnInput}
						placeholder='text'
						spellCheck={false}
						onFocus={handleFocus}
						// onBlur={handleBlur}
						onChange={(e) => setCardText(e.target.value)}
						value={cardText}
					/>
				</div>
				<div>
					<button
						type='button'
						onClick={(e) => {
							handleCreateCard(e, id)
						}}
					>
						New
					</button>
					<button
						type='button'
						onClick={() => {
							handleDeleteCard(index)
						}}
					>
						Delete
					</button>
					<button
						type='submit'
						hidden={false}
					>
						Submit
					</button>
				</div>
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
			</form>
		</>
	)
}

export default Card
