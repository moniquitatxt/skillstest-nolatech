import { useState } from "react";
import logo from "../assets/icon.png";
import { BsList } from "react-icons/bs";

const Menu = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="flex justify-between md:items-center md:p-10 sm:p-6">
			<div>
				<img
					className="justify-start mr-4 sm:max-w-[150px]"
					src={logo}
					alt="logo"
					width={180}
				/>
			</div>
			<ul className="hidden text-white md:flex md:text-lg font-semibold">
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
			</ul>
			<ul
				className={`md:hidden absolute font-semibold  top-10 right-0 bg-white p-4 space-y-4 ${
					menuOpen ? "block" : "hidden"
				}`}
			>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
				<li>
					<a href="/">LOREM IPSUM</a>
				</li>
			</ul>
			<button className="md:hidden" onClick={toggleMenu}>
				<BsList style={{ fontSize: "24px", color: "white" }} />
			</button>
		</div>
	);
};

export default Menu;
