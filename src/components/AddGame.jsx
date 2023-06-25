import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AddGame = () => {
	const [isUser, setIsUser] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsUser(true);
			} else {
				setIsUser(false);
				navigate("login");
			}
		});
	}, []);

	return (
		<div>
			<h2>AddGame</h2>
		</div>
	);
};
export default AddGame;
