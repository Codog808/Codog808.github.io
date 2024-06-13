class cell {
	// do always call a method to return the document element. if just cell remember to get the element via .name
	constructor(tag) {
		this.name = document.createElement(tag);
	};
	base(parentElement) {
		parentElement.appendChild(this.name)
		return this.name
	};
	point(className="a", idName="`", parentElement=document.body) {
		this.name.className = className;
		this.name.id = idName;
		parentElement.appendChild(this.name)
		return this.name
	};
	link(rel="stylesheet", href="style.css", parentElement=document.head) {
		this.name.rel = rel;
		this.name.href = href;
		parentElement.appendChild(this.name);
		return this.name;
	};
};


async function coPhotos(parentElement=document.body) {
	// grab photos from the served directory or anywhere online
	const container = new cell("div").point("container", "photo-container", parentElement);
	let photoCount = 0;
	try {
		const response = await fetch(`urls.json?v=${new Date().getTime()}`)
		const data = await response.json();
		const urls = data.urls;
		urls.forEach(url => {
			const imgContainer = new cell("div").point("container", `img-contain-${photoCount}`, container);
			const img = new cell("img").point("photo", `photo-${photoCount}`, imgContainer);
			const 
			img.src = url;
			img.alt = `${url}`;
			photoCount++;
		});
	} catch (error) {
		container.innerText = "error in fetching images as urls: " + error;
	}
};

function coVideos() {
	// play videos from served directory or anywhere online.
};

function coMusic() {
};

function coDocuments() {
};

function coAbout() {
};

function coDirectory() {
};

function coCalculator() {
};

function coTextBox() {
};

function head() {
	const head = document.head;
	// '?v=' is like version in url form.
	const styleCSS = new cell("link").link("stylesheet", "style.css?v=" + new Date().getTime());
	
	const title = new cell("title").base(document.head);
	title.innerText = "my project";
};

function body() {
	const nineParent = new cell("div").point(className="grid-container")
	for (let i = 1; i <= 9; i++) {
		const gridElement = new cell("div").point(
			className = "grid-element",
			idName = `grid-${i}`,
			parentElement = nineParent
		);
	};

	coPhotos(document.getElementById("grid-1"));
	document.getElementById("grid-2").innerText = "this where the movie will be played";
};

// Running code
head();
body();
