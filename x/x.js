
function homma() {
	var c = document.getElementById("c");
	var ctx = c.getContext("2d");
	var sx = c.scrollWidth / 300, sy = c.scrollHeight / 300;
	var x = Math.round(c.scrollWidth / 2 / sx), by = 260, ty = 30;
	ctx.scale(sx, sy);

	function l(y) {
		var dx = 50 + y/2.5, dy = 50 + y/1.5;
		var p = new Path2D(`M${x-dx} ${y+dy}C${x-dx/2} ${y+dy},${x} ${y+dy/2},${x} ${y}` +
			`C${x} ${y+dy/2},${x+dx/2} ${y+dy},${x+dx} ${y+dy}Z`);
		ctx.fillStyle = g;
		ctx.fill(p);
	}

	function p(y) {
		p.s = typeof(p.s) == 'undefined' ? 1 : -p.s;
		ctx.fillStyle = "#d33";
		ctx.fill(new Path2D(`M${x+((200-y)/4.2-25)*p.s-8} ${y}a8,8 0 1,0 16,0a8,8 0 1,0 -16,0`));
	}

	function t(y) {
		ctx.fillStyle = "#aa0";
		for (var i = 0; i < 5; i++) {
			ctx.translate(x, y);
			ctx.rotate(Math.PI * 2 / 5 * i);
			ctx.translate(-x, -y);
			ctx.fill(new Path2D(`M${x} ${y-15}L${x-5} ${y}h10Z`));
			ctx.setTransform(sx, 0, 0, sy, 0, 0);
		}
	}

	// trunk
	var g = ctx.createLinearGradient(x, 0, x, by);
	g.addColorStop(1, "#621");
	g.addColorStop(0.7, "#000");
	ctx.fillStyle = g;
	//ctx.fillStyle = "#621";
	ctx.fill(new Path2D(`M${x-15} ${by}h30L${x+10} ${by-40}h-20Z`));

	// green
	g = ctx.createLinearGradient(x, 0, x, by);
	g.addColorStop(0, "#0c0");
	g.addColorStop(1, "#050");
	ctx.fillStyle = g;
	for (var y = 105; y >= ty; y -= 25) {
		l(y);
		p(50 + y*1.5);
	}
	t(ty);
}

