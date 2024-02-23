import LiveBar from "./components/LiveBar";
import { AboutUs } from "./segments/AboutUs";
import { Carousel } from "./segments/Carousel";
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
			<Carousel />
			<FooterSection />
		</>
	);
}

export default App;
