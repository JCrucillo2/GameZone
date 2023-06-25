const GameDataCard = ({ game }) => {
	return (
		<div>
			<p>{game.title}</p>
			<p>{game.description}</p>
			<p>{game.rating}</p>
		</div>
	);
};
export default GameDataCard;
