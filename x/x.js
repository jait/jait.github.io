
function homma() {
	var c = document.getElementById("c");
	var ctx = c.getContext("2d");
	var x = 120;
	var by = 260;

	function l(y) {
		var dx = 50 + y/2.5;
		var dy = 50 + y/1.5;
		var p = new Path2D(`M ${x-dx} ${y+dy} C ${x-dx/2} ${y+dy}, ${x} ${y+dy/2}, ${x} ${y} ` +
			`C ${x} ${y+dy/2}, ${x+dx/2} ${y+dy}, ${x+dx} ${y+dy} Z`);
		ctx.fill(p);
	}

	function b(by) {
		ctx.fill(new Path2D(`M ${x-15} ${by} h 30 L ${x+10} ${by-40} h -20 Z`));
	}

	ctx.fillStyle = "#662211";
	b(by);

	ctx.fillStyle = "#009900";
	for (i = 30; i <= 120; i += 25) {
		l(i);
	}
}

