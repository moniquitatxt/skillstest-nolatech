import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const SocialMedia = () => {
	return (
		<div className="flex flex-col justify-between fixed bg-gray-400 text-center h-64 w-16 top-32 right-0 py-2 px-1 z-10">
			<a
				href="https://www.facebook.com"
				target="_blank"
				rel="noreferrer"
				className="border-b-2 border-gray-600 pb-2 w-full social-squares"
			>
				<FaFacebookF />
			</a>
			<a
				href="https://www.twitter.com"
				target="_blank"
				rel="noreferrer"
				className="border-b-2 border-gray-600 pb-2 w-full social-squares"
			>
				<FaTwitter />
			</a>
			<a
				href="https://www.instagram.com"
				target="_blank"
				rel="noreferrer"
				className="border-b-2 border-gray-600 pb-2 w-full social-squares"
			>
				<FaInstagram />
			</a>
			<a
				href="https://www.youtube.com"
				target="_blank"
				rel="noreferrer"
				className="border-b-2 border-gray-600 pb-2 w-full social-squares"
			>
				<TfiYoutube />
			</a>
			<a
				href="https://www.tiktok.com"
				target="_blank"
				rel="noreferrer"
				className="border-b-2 border-gray-600 pb-2 w-full social-squares"
			>
				<FaTiktok />
			</a>
		</div>
	);
};

export default SocialMedia;
