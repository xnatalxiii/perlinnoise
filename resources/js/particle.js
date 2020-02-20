function Particle() {
	this.pos = createVector(random(width), random(height));
	this.vel = createVector(0, 0);
	this.vel = p5.Vector.random2D();

	this.prevPos = this.pos.copy();

	this.acc = createVector(0, 0);

	// this.maxSpeed = 2;

	this.h = 0;

	this.update = function() {
		this.vel.add(this.acc);

		this.vel.limit(maxSpeed);
		this.pos.add(this.vel);
		this.acc.mult(0);
	};

	this.applyForce = function(force) {
		this.acc.add(force);
	};

	this.show = function() {
		if (nCBlack) stroke(0, nCAlpha);
		if (nCWhite) stroke(255, nCAlpha);
		if (nCRainbow) {
			stroke(this.h, 255, 255, nCAlpha);
			this.h = this.h + 1;
			if (this.h > 255) {
				this.h = 0;
			}
		}

		// stroke(this.h, 255, 255, 10);
		// this.h = this.h + 1;
		// if (this.h > 255) {
		// 	this.h = 0;
		// }

		strokeWeight(1);
		line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
		this.updatePrev();
	};

	this.updatePrev = function() {
		this.prevPos.x = this.pos.x;
		this.prevPos.y = this.pos.y;
	};

	this.edges = function() {
		if (this.pos.x > width) {
			this.pos.x = 0;
			this.updatePrev();
		}
		if (this.pos.x < 0) {
			this.pos.x = width;
			this.updatePrev();
		}
		if (this.pos.y > height) {
			this.pos.y = 0;
			this.updatePrev();
		}
		if (this.pos.y < 0) {
			this.pos.y = height;
			this.updatePrev();
		}
	};

	this.follow = function(flowField) {
		let x = floor(this.pos.x / scl);
		let y = floor(this.pos.y / scl);
		let index = x + y * cols;
		let force = flowField[index];
		this.applyForce(force);
	};
}
