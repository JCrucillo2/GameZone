// react router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PageNotFound from "./pages/PageNotFound";

// layout
import RootLayout from "./layout/RootLayout";
import AddGame from "./components/AddGame";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="contact" element={<Contact />} />
				<Route path="about" element={<About />} />
				<Route path="add" element={<AddGame />} />
				<Route path="*" element={<PageNotFound />} />
			</Route>
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
		</>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
