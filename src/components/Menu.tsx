import logo from "../assets/icon.png";

const Menu = () => {
	return (
		<div className="flex justify-between items-center p-10">
			<img className="mr-4" src={logo} alt="logo" width={120} />
			<ul className="text-white flex text-sm font-semibold">
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
		</div>
	);
};

export default Menu;
