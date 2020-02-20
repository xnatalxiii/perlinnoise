// Dom elements
// Num particles
let partInput = document.getElementById("particles");
let partValue = document.querySelector(".particles-value");

// Noise
let noiseInput = document.getElementById("noise");
let noiseValue = document.querySelector(".noise-value");

// canvas Size
let canvasSize = document.getElementById("canvas-size");

// bground color
let bgroundColor = document.getElementById("bground-color");

// noise color
let noiseColorBlack = document.getElementById("noise-color-black");
let noiseColorWhite = document.getElementById("noise-color-white");
let noiseColorRainbow = document.getElementById("noise-color-rainbow");

// noise alpha
let noiseAlpha = document.getElementById("noise-alpha");
let noiseAlphaValue = document.querySelector(".noise-alpha-value");

// freame rate
let fRContainer = document.getElementById("frame-rate");

partValue.innerHTML = `( ${partInput.value} )`;
noiseValue.innerHTML = `( ${noiseInput.value} )`;
noiseAlphaValue.innerHTML = `( ${nCAlpha} )`;
// Initialization

part = partInput.value;
noiseLevel = noiseInput.value;

bground = bgroundColor.value;
setCanvasSize = function() {
	if (canvasSize.value === "600") {
		canvasWidth = 600;
		canvasHeight = 350;
	}
	if (canvasSize.value === "800") {
		canvasWidth = 800;
		canvasHeight = 400;
	}
	if (canvasSize.value === "1000") {
		canvasWidth = 1000;
		canvasHeight = 600;
	}
};

setCanvasSize();

setNoiseColor = function() {
	nCBlack = false;
	nCWhite = false;
	nCRainbow = false;

	if (noiseColorBlack.checked) {
		nCBlack = true;
	}

	if (noiseColorWhite.checked) {
		nCWhite = true;
	}
	if (noiseColorRainbow.checked) {
		nCRainbow = true;
	}
};

setNoiseColor();

// Event delegation
partInput.addEventListener("input", () => {
	part = partInput.value;
	partValue.innerHTML = `( ${part} )`;
	setup();
});

noiseInput.addEventListener("input", () => {
	noiseLevel = noiseInput.value;
	maxSpeed = noiseLevel / 99.9;

	noiseValue.innerHTML = `( ${noiseLevel} )`;
	setup();
});

noiseAlpha.addEventListener("input", () => {
	nCAlpha = +noiseAlpha.value;

	noiseAlphaValue.innerHTML = `( ${nCAlpha} )`;
	setup();
});

canvasSize.addEventListener("change", () => {
	setCanvasSize();
	setup();
});

bgroundColor.addEventListener("change", () => {
	bground = bgroundColor.value;
	setup();
});

noiseColorBlack.addEventListener("change", () => {
	setNoiseColor();
	setup();
});
noiseColorWhite.addEventListener("change", () => {
	setNoiseColor();
	setup();
});
noiseColorRainbow.addEventListener("change", () => {
	setNoiseColor();
	setup();
});
