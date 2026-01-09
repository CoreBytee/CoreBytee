import "./app.css";
import { Dithering } from "@paper-design/shaders-react";
import useWindowSize from "../hooks/useWindowSize";
import { Github } from "react-bootstrap-icons";

export function App() {
	const { width, height } = useWindowSize();

	return (
		<div className="App">
			<div className="background">
				<Dithering
					width={width}
					height={height}
					colorBack="#000000"
					colorFront="#00b3ff"
					shape="simplex"
					type="random"
					size={1}
					speed={0.5}
					scale={0.6}
				/>
			</div>
			<h1 className="name">COREBYTE</h1>
			<div className="links">
				<a href="https://github.com/CoreBytee">
					<Github />
				</a>
			</div>
		</div>
	);
}

export default App;
