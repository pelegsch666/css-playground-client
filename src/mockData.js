import PIXEL_AMOUNT from './constants/PIXEL_AMOUNT';
import propertiesValueStrings from './constants/propertiesValueStrings';
import getRandomItemFromArray from './helpers/getRandomItemFromArray';

function getRandomIntWithGap(min, max, gap) {
	const num = Math.floor(Math.random() * (max - min) + min);
	const remainder = num % gap;
	return num - remainder;
}

function updateValueWithGapAndSign(value, sign, gap) {
	if (sign === '+') {
		return value + gap;
	} else {
		return value - gap;
	}
}

const Shape_It_Out = {
	levelName: 'Shape It Out',
	levelId: 1,
	renderingKey: null,
	defaultProperties: {
		backgroundColor: '#aaffaa',
	},
	targetProperties: {
		width: {
			gap: 5,
			min: 20,
			max: 180,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		height: {
			gap: 5,
			min: 60,
			max: 160,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		borderRadius: {
			gap: 5,
			min: 20,
			max: 70,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
	},
	userProperties: {
		width: {
			gap: 5,
			min: 20,
			max: 180,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		height: {
			gap: 5,
			min: 60,
			max: 160,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		borderRadius: {
			gap: 5,
			min: 10,
			max: 70,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
	},
};

const Dont_Flex = {
	levelName: 'Dont Flex',
	levelId: 2,
	renderingKey: 'Flex',
	defaultProperties: {
		display: 'flex',
		width: 200,
		height: 200,
		backgroundColor: '#aaffaa',
	},
	targetProperties: {
		justifyContent: {
			items: [
				'flex-start',
				'flex-end',
				'center',
				'space-between',
				'space-around',
				'space-evenly',
			],
			get value() {
				return getRandomItemFromArray(this.items);
			},
		},

		alignItems: {
			items: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
			get value() {
				return getRandomItemFromArray(this.items);
			},
		},

		flexDirection: {
			items: ['row', 'row-reverse', 'column', 'column-reverse'],
			get value() {
				return getRandomItemFromArray(this.items);
			},
		},
	},
	userProperties: {
		justifyContent: {
			items: [
				'flex-start',
				'flex-end',
				'center',
				'space-between',
				'space-around',
				'space-evenly',
			],
			get value() {
				return getRandomItemFromArray(this.items);
			},
		},

		alignItems: {
			items: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
			get value() {
				return getRandomItemFromArray(this.items);
			},
		},

		flexDirection: {
			items: ['row', 'row-reverse', 'column', 'column-reverse'],
			get value() {
				return getRandomItemFromArray(this.items);
			},
		},
	},
};

const Box_Model = {
	levelName: 'Box Model',
	levelId: 3,
	renderingKey: 'Box Model',
	defaultProperties: {
		display: 'flex',
		width: 200,
		height: 200,
		backgroundColor: '#aaffaa',
		justifyContent: 'center',
		alignItems: 'center',
	},
	targetProperties: {
		paddingRight: {
			gap: 5,
			min: 0,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		paddingLeft: {
			gap: 5,
			min: 0,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		paddingTop: {
			gap: 5,
			min: 0,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		paddingBottom: {
			gap: 5,
			min: 0,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
	},
	userProperties: {
		paddingRight: {
			gap: 5,
			min: 0,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		paddingLeft: {
			gap: 5,
			min: 0,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		paddingTop: {
			gap: 5,
			min: 0,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		paddingBottom: {
			gap: 5,
			min: 0,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
	},
};

const Box_Model_Margin = {
	levelName: 'Box Model-Margin',
	levelId: 4,
	renderingKey: 'Margin',
	defaultProperties: {
		display: 'flex',
		width: 80,
		height: 80,
		backgroundColor: '#aaffaa',
		justifyContent: 'center',
		alignItems: 'center',
	},
	targetProperties: {
		marginRight: {
			gap: 5,
			min: 5,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		marginLeft: {
			gap: 5,
			min: 5,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		marginTop: {
			gap: 5,
			min: 5,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		marginBottom: {
			gap: 5,
			min: 5,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
	},
	userProperties: {
		marginRight: {
			gap: 5,
			min: 5,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		marginLeft: {
			gap: 5,
			min: 5,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		marginTop: {
			gap: 5,
			min: 5,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
		marginBottom: {
			gap: 5,
			min: 5,
			max: 40,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
		},
	},
};

class Rgb {
	constructor(min, max, gap) {
		this.min = min;
		this.max = max;
		this.gap = gap;
		this.value = getRandomIntWithGap(this.min, this.max, this.gap);
	}
}

const Red_Green_And_Blue = {
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

export const objMockData = [
	Shape_It_Out,
	Dont_Flex,
	Box_Model,
	Box_Model_Margin,
	Red_Green_And_Blue,
];
