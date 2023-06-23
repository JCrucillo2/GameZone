import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isUser, setIsUser] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsUser(true);
				navigate("/");
			} else {
				setIsUser(false);
			}
		});
	}, []);

	const handleRegister = (e) => {
		e.preventDefault();

		try {
			createUserWithEmailAndPassword(auth, email, password);
			useNavigate("/");
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className="grid place-items-center min-h-[calc(100vh-4rem)]">
			<form onSubmit={handleRegister}>
				<h2 className="text-3xl font-bold text-center my-9 text-slate-900">Register</h2>
				<div className="relative mt-4">
					<input type="email" className="peer w-full border-b placeholder:text-transparent rounded p-2" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<label htmlFor="email" className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">
						Email Address
					</label>
				</div>
				<div className="relative mt-4">
					<input type="password" className="peer w-full border-b placeholder:text-transparent rounded p-2" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<label htmlFor="password" className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">
						Password
					</label>
				</div>
				<div className="grid place-items-center">
					<button className="p-2 bg-slate-900 rounded text-zinc-200 transition hover:bg-green-700 hover:text-zinc-200 mt-9">Register</button>
				</div>
			</form>
		</div>
	);
};
export default Register;
