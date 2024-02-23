import LiveBar from "./components/LiveBar";
import { AboutUs } from "./segments/AboutUs";
import { ContactUs } from "./segments/ContactUs";
import { Home } from "./segments/Home";
import { LearnMore } from "./segments/LearnMore";

function App() {
	return (
		<>
			<LiveBar />
			<Home />
			<AboutUs />
			<LearnMore />
			<ContactUs />
		</>
	);
}

export default App;
