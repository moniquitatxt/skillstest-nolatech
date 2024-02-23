import logo from "../assets/icon.png";

export const FooterSection = () => {
	return (
		<div className="md:flex md:justify-between sm:flex sm:flex-col  md:items-center md:p-10">
			<div className="w-[350px] sm:text-center sm:my-4 sm:mx-auto font-bold">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna
			</div>
			<div className="sm:my-4">
				<img className="" src={logo} alt="logo" width={150} />
			</div>
			<div className="w-[350px] sm:my-4 sm:text-center sm:mx-auto font-bold">
				All rights reserved to Lorem Ipsum© 2022
			</div>
		</div>
	);
};
