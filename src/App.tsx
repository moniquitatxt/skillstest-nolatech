import LiveBar from "./components/LiveBar";
import SocialMediaBar from "./components/SocialMediaBar";
import { AboutUs } from "./segments/AboutUs";
import { CarouselView } from "./segments/CarouselView";
import { ContactUs } from "./segments/ContactUs";
import { FooterSection } from "./segments/FooterSection";
import { Home } from "./segments/Home";
import { JoinUs } from "./segments/JoinUs";
import { LatestsVideos } from "./segments/LatestsVideos";
import { LearnMore } from "./segments/LearnMore";
import { ViewAll } from "./segments/ViewAll";

function App() {
	return (
		<>
			<LiveBar />
			<Home />
			<AboutUs />
			<LearnMore />
			<ContactUs />
			<LatestsVideos />
			<JoinUs />
			<ViewAll />
			<CarouselView />
			<FooterSection />
			<SocialMediaBar />
		</>
	);
}

export default App;
