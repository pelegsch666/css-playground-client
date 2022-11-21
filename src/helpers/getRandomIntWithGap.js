function getRandomIntWithGap(min, max, gap) {
	const num = Math.floor(Math.random() * (max - min) + min);
	const remainder = num % gap;
	return num - remainder;
}

export default getRandomIntWithGap;
