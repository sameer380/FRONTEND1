import React, { useState } from "react";
import Card from "./Card"; // Import your card component

const CardsList = ({ cards }) => {
	const [showAll, setShowAll] = useState(false);
	const initialCardsToShow = 3; // Number of cards to show initially
	const cardsToShow = showAll ? cards.length : initialCardsToShow;

	const toggleShowAll = () => {
		setShowAll(!showAll);
	};

	return (
		<div>
			{cards.slice(0, cardsToShow).map((card, index) => (
				<Card key={index} {...card} />
			))}
			<button onClick={toggleShowAll}>
				{showAll ? "Show Less" : "Show More"}
			</button>
		</div>
	);
};

export default CardsList;
