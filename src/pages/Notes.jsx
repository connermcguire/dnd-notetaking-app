/* 

TODO New addCard should be called by seperate functions depending on which functionality is needed
TODO *defaultNoteCard.tags* Create array to hold tag types || add functionality to pass new tags into tags array
TODO *addCard.id* each array that gets passed into noteCards needs to have a unique id as well as the objects inside the passed array, how do I give an array that contians objects its own id

*/

import Card from '../components/Card'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const defaultNoteCard = {
	name: 'name',
	path: 'path', // TODO
	text: 'text',
	id: uuidv4()
};

export const Notes = () => {
	// contains a set of notes the entire party has access and priviledges to. all updatable and extendable, with folders and so on(can be attached to a monsterdex id)
	const [noteCards, setNoteCards] = useState([]) 

	function addCard() {
		setNoteCards(
			noteCards.concat([{
				name: 'name',
				path: 'path',
				text: 'text',
				id: uuidv4()
			}])
		)
		console.log(noteCards)
	}

	const handleDeleteCard = (index) => {
		console.log(index)
		noteCards.splice(index, 1)
		setNoteCards([...noteCards])
		console.log(noteCards, 'updatedNoteCards')
	}

	return (
		<>
			<div id="noteHeader">
				<h3 id="notesHeader">Notes</h3>
				<button id="newNoteButton" onClick={addCard}>
					+
				</button>
			</div>
			<div id="cardListBody">
				{/* {noteCards} */}
				{noteCards.map((noteCard, index) => {
					return <Card key={noteCard.id} index={index} noteCard={noteCard} noteCards={noteCards} setNoteCards={setNoteCards} handleDeleteCard={handleDeleteCard} />
				})}
			</div>
		</>
	)
}