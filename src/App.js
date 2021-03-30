import Navbar from './custom-components/Navbar';
import Home from './custom-components/Home';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<Home />
			</div>
		</div>
	);
}
export default App;
