/*-------------------------------------------------

	- Proyect: Perlin Noise
	- Date: Feb 2020
	- Author: Bryan Rodríguez
	- Disclaimer: Based in "The coding train - Perlin noise algorithm"

-------------------------------------------------*/
const scl = 10;
const inc = 0.1;
let zoff = 0;
let cols, rows;
let particles = [];
let flowField;

let canvasWidth = 600;
let canvasHeight = 400;

let bground = "#000fff";

let part = 1500;
let noiseLevel = 250;

let maxSpeed = noiseLevel / 99.9;

let nCBlack = false;
let nCWhite = false;
let nCRainbow = true;
let nCAlpha = 10;

function setup() {
	let canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.parent("canvas-holder");

	cols = floor(width / scl);
	rows = floor(height / scl);

	flowField = new Array(cols * rows);
	for (let i = 0; i < part; i++) {
		particles[i] = new Particle();
	}
	console.log(bground);
	background(bground);
	colorMode(HSB, 255);

	console.log("particles.length:", particles.length);
	console.log("nCAlpha:", nCAlpha);
}

function draw() {
	randomSeed(10);
	let yoff = 0;
	for (let y = 0; y < rows; y++) {
		let xoff = 0;
		for (let x = 0; x < cols; x++) {
			let index = x + y * cols;
			let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;

			let v = p5.Vector.fromAngle(angle);
			v.setMag(0.5);
			flowField[index] = v;

			// stroke(0, 50);
			// push();
			// translate(x * scl, y * scl);
			// rotate(v.heading());
			// strokeWeight(1);

			// line(0, 0, scl, 0);
			// pop();
			xoff += inc;
		}
		yoff += inc;

		zoff += 0.0001;
	}
	for (let i = 0; i < particles.length; i++) {
		particles[i].follow(flowField);
		particles[i].update();
		particles[i].show();
		particles[i].edges();
	}

	fRContainer.innerHTML = `FPS: ${floor(frameRate())}`;
}
