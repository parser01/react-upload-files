import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
	const [isDragged, setIsDragged] = useState(false);

	const dragEnter = (e) => {
		setIsDragged(true);
	};

	const dragLeave = (e) => {
		setIsDragged(false);
	};

	const dragOver = (e) => {
		e.preventDefault();
	};

	const drop = (e) => {
		e.preventDefault();
		const files = [...e.dataTransfer.files];
		const formData = new FormData();
		formData.append("userId", 1);
		formData.append("file", files[0]);
		axios.post("some url", formData);
		setIsDragged(false);
	};

	return (
		<div className="app">
			<div
				className="upload-files"
				onDragEnter={dragEnter}
				onDragLeave={dragLeave}
				onDragOver={dragOver}
				onDrop={drop}
			>
				{isDragged
					? "Drop files here to upload"
					: "Drag files here to upload"}
			</div>
		</div>
	);
}

export default App;
