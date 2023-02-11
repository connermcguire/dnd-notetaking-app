/*


TODO *CreateCard.createCard* add logic to return parent id



*/


const CreateCard = ({ noteCard }) => {
	const { name, path, text, id } = noteCard;
	console.log({ name, path, text, id });
	const createCard = (id) => {
		// TODO
	};

	const deleteCard = (id) => {
		// TODO
	};

	// {createCard, deleteCard, id}
	return (
		<>
			<form className="noteCard">
				<div>
					<input type="text" placeholder="name" id="name" />
				</div>
				<div contentEditable="true" onInput={(text) => {
					console.log(text)
				}}>someText
					{/* <textarea placeholder="text" id="text"/> */}
					{/* <input type="text" placeholder="text" id="text" /> */}
				</div>
				<div>
					<button onClick={createCard(id)}>New</button>
					<button onClick={deleteCard(id)}>Delete</button>
				</div>
			</form>
		</>
	);
};

export default CreateCard;
