import getRandomIntWithGap from 'helpers/getRandomIntWithGap';

class Rgb {
	constructor(min, max, gap) {
		this.min = min;
		this.max = max;
		this.gap = gap;
		this.value = getRandomIntWithGap(this.min, this.max, this.gap);
	}
}

const red_green_and_blue = {
	levelName: 'Red, Green and Blue',
	levelId: 5,
	renderingKey: 'Rgb',
	defaultProperties: {
		width: 200,
		height: 200,
		border: '10px solid black',
	},
	targetProperties: {
		customProperties: {
			red: new Rgb(0, 250, 50),
			green: new Rgb(0, 250, 50),
			blue: new Rgb(0, 250, 50),
		},
	},
	userProperties: {
		customProperties: {
			red: new Rgb(0, 250, 50),
			green: new Rgb(0, 250, 50),
			blue: new Rgb(0, 250, 50),
		},
	},
};

export default red_green_and_blue;
