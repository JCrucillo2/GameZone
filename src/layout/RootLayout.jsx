import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
	return (
		<>
			<Navbar />
			<main className="max-w-[68.75rem] mx-auto">
				<Outlet />
			</main>
		</>
	);
};
export default RootLayout;
