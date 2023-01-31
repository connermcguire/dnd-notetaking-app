/* 


TODO *defaultNoteCard.tags* Create array to hold tag types || add functionality to pass new tags into tags array


*/

// import Card from '../components/Card'
import NewNoteSet from '../components/NewNoteSet';
import { useState } from 'react';

const defaultNoteCard = {
	name: 'name',
	tags: [], // TODO
	text: 'text',
	id: 1
};

const Notes = () => {
	// contains a set of notes the entire party has access and priviledges to. all updatable and extendable, with folders and so on(can be attached to a monsterdex id)
	// const [ noteCards, setNoteCards ] = useState([<NewNoteSet name="name" path="path" text="text" key={1}/>])
	const [noteCards, setNoteCards] = useState([defaultNoteCard]);
	const [incrementor, setIncrementor] = useState(2);

	function addCard() {
		setNoteCards(
			noteCards.concat({
				name: 'name',
				path: 'path',
				text: 'text',
				id: noteCards[noteCards.length - 1].id + 1
			})
		);
		setIncrementor(incrementor + 1);
	}

	return (
		<>
			<div className="noteHeader">
				<h3 className="notesHeader">Notes</h3>
				<button className="newNoteButton" onClick={addCard}>
					+
				</button>
			</div>
			<div className="cardListBody">
				{/* {noteCards} */}
				{noteCards.map((noteCard) => {
					return <NewNoteSet noteCard={noteCard} key={noteCard.id} />;
				})}
			</div>
		</>
	);
};

export default Notes;
