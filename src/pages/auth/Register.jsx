import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

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
				<Link to="/" className="text-xs underline">
					Back
				</Link>
				<h2 className="text-3xl font-bold text-center my-9 text-slate-900">Register</h2>
				<div className="relative mt-4">
					<input type="text" name="email" className="block rounded-t px-2.5 pb-2.5 pt-5 w-full text-sm text-zinc-200 bg-slate-900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} />
					<label htmlFor="email" className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
						Email Address
					</label>
				</div>
				<div className="relative mt-1">
					<input type="password" name="password" className="block rounded-b px-2.5 pb-2.5 pt-5 w-full text-sm text-zinc-200 bg-slate-900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} />
					<label htmlFor="password" className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
						Password
					</label>
				</div>
				<div className="grid place-items-center">
					<button className="p-2 w-full bg-slate-900 rounded text-zinc-200 transition hover:bg-green-700 hover:text-zinc-200 mt-9">Submit</button>
				</div>
			</form>
		</div>
	);
};
export default Register;
