import { db, auth } from "../config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import GameDataCard from "../components/GameDataCard";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

const Home = () => {
	const [gameData, setGameData] = useState([]);
	const [isUser, setIsUser] = useState(false);

	const docRef = collection(db, "games");

	onSnapshot(docRef, (snapshot) => {
		let gameInfo = [];

		snapshot.docs.forEach((doc) => {
			gameInfo.push({ ...doc.data(), id: doc.id });
		});

		setGameData(gameInfo);
	});

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsUser(true);
			} else {
				setIsUser(false);
			}
		});
	}, []);

	return (
		<div>
			<h2 className="mt-9 text-center font-bold text-3xl">Game List</h2>

			{isUser ? (
				<div className="flex justify-end">
					<Link to="/add" className="bg-green-700 text-zinc-200 p-2 rounded my-4 inline-block">
						Add Game
					</Link>
				</div>
			) : null}

			{gameData.map((game) => (
				<GameDataCard game={game} key={game.id} />
			))}
		</div>
	);
};
export default Home;
