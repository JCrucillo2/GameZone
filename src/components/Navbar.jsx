import { Link, NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [isUser, setIsUser] = useState(false);

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
		<header className="bg-slate-900 text-zinc-200 h-[4rem]">
			<div className="max-w-[68.75rem] mx-auto flex justify-between items-center h-full">
				<h1>
					<Link to="/" className="text-4xl font-bold">
						GameZone
					</Link>
				</h1>
				<nav>
					<ul className="flex gap-2 items-center">
						<NavLink to="/">Home</NavLink>
						<NavLink to="about">About</NavLink>
						<NavLink to="contact">Contact</NavLink>

						{isUser ? (
							<button onClick={() => signOut(auth)} className="bg-zinc-200 rounded p-2 text-slate-700 hover:bg-green-700 transition hover:text-zinc-200">
								Signout
							</button>
						) : (
							<>
								<Link to="login" className="bg-zinc-200 rounded p-2 text-slate-700 hover:bg-green-700 transition hover:text-zinc-200">
									Login
								</Link>
								<Link to="register" className="bg-zinc-200 rounded p-2 text-slate-700 hover:bg-green-700 transition hover:text-zinc-200">
									Register
								</Link>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};
export default Navbar;
