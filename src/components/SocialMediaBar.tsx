import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const SocialMedia = () => {
	return (
		<div className="flex flex-col fixed text-center h-56 w-12 top-32 right-0 py-2 z-10">
			<div className="social-squares-div">
				<a
					href="https://www.facebook.com"
					target="_blank"
					rel="noreferrer"
					className="social-squares"
				>
					<FaFacebookF />
				</a>
			</div>
			<div className="social-squares-div">
				<a
					href="https://www.twitter.com"
					target="_blank"
					rel="noreferrer"
					className="social-squares"
				>
					<FaTwitter />
				</a>
			</div>
			<div className="social-squares-div">
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noreferrer"
					className="social-squares"
				>
					<FaInstagram />
				</a>
			</div>
			<div className="social-squares-div">
				<a
					href="https://www.youtube.com"
					target="_blank"
					rel="noreferrer"
					className="social-squares"
				>
					<TfiYoutube />
				</a>
			</div>
			<div className="social-squares-div">
				<a
					href="https://www.tiktok.com"
					target="_blank"
					rel="noreferrer"
					className="social-squares"
				>
					<FaTiktok />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
