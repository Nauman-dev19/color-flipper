export function colorFlipper(header, btn) {
	const colorGenerator = (color, colorName, r, g, b) => {
		r = Math.floor(Math.random() * 256);
		g = Math.floor(Math.random() * 256);
		b = Math.floor(Math.random() * 256);
		color = `#${r.toString(16).padStart(2, 0)}${g
			.toString(16)
			.padStart(2, 0)}${b.toString(16).padStart(2, 0)}`;
		document.body.style.backgroundColor = color;
		colorName = `Hexcolor Code ${color}`;
		header.textContent = colorName;
		console.log(color);
		console.log(colorName);
		const colorBrightness = (brightness) => {
			brightness = (r * 299 + g * 587 + b * 114) / 1000;
			document.body.style.color = brightness <= 128 ? `#fff` : `#222`;
		};
		colorBrightness();
	};

	btn.addEventListener(`click`, colorGenerator);
}
