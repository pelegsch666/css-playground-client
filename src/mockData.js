import PIXEL_AMOUNT from './constants/PIXEL_AMOUNT';
import propertiesValueStrings from './constants/propertiesValueStrings';
import getRandomItemFromArray from './helpers/getRandomItemFromArray';

function getRandomIntWithGap(min, max, gap) {
	const num = Math.floor(Math.random() * (max - min) + min);
	const remainder = num % gap;
	return num - remainder;
}

export const objMockData = [
	{
		levelName: 'Shape It Out',
		levelId: 1,
		renderingKey: null,
		defaultProperties: {
			backgroundColor: '#aaffaa',
		},
		targetProperties: {
			width: getRandomIntWithGap(20, 180, PIXEL_AMOUNT),
			height: getRandomIntWithGap(60, 160, PIXEL_AMOUNT),
			borderRadius: getRandomIntWithGap(10, 70, PIXEL_AMOUNT),
		},
		userProperties: {
			width: getRandomIntWithGap(70, 150, PIXEL_AMOUNT),
			height: getRandomIntWithGap(100, 150, PIXEL_AMOUNT),
			borderRadius: getRandomIntWithGap(5, 25, PIXEL_AMOUNT),
		},
	},
	{
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
			justifyContent: getRandomItemFromArray(
				propertiesValueStrings.justifyContent
			),
			alignItems: getRandomItemFromArray(propertiesValueStrings.alignItems),
			flexDirection: getRandomItemFromArray(
				propertiesValueStrings.flexDirection
			),
		},
		userProperties: {
			justifyContent: getRandomItemFromArray(
				propertiesValueStrings.justifyContent
			),
			alignItems: getRandomItemFromArray(propertiesValueStrings.alignItems),
			flexDirection: getRandomItemFromArray(
				propertiesValueStrings.flexDirection
			),
		},
	},
	{
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
			paddingRight: getRandomIntWithGap(0, 40, PIXEL_AMOUNT),
			paddingLeft: getRandomIntWithGap(0, 40, PIXEL_AMOUNT),
			paddingTop: getRandomIntWithGap(0, 40, PIXEL_AMOUNT),
			paddingBottom: getRandomIntWithGap(0, 40, PIXEL_AMOUNT),
		},
		userProperties: {
			paddingRight: getRandomIntWithGap(0, 40, PIXEL_AMOUNT),
			paddingLeft: getRandomIntWithGap(0, 40, PIXEL_AMOUNT),
			paddingTop: getRandomIntWithGap(0, 40, PIXEL_AMOUNT),
			paddingBottom: getRandomIntWithGap(0, 40, PIXEL_AMOUNT),
		},
	},
	{
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
			marginRight: getRandomIntWithGap(5, 40, PIXEL_AMOUNT),
			marginLeft: getRandomIntWithGap(5, 40, PIXEL_AMOUNT),
			marginTop: getRandomIntWithGap(5, 40, PIXEL_AMOUNT),
			marginBottom: getRandomIntWithGap(5, 40, PIXEL_AMOUNT),
		},
		userProperties: {
			marginRight: getRandomIntWithGap(5, 40, PIXEL_AMOUNT),
			marginLeft: getRandomIntWithGap(5, 40, PIXEL_AMOUNT),
			marginTop: getRandomIntWithGap(5, 40, PIXEL_AMOUNT),
			marginBottom: getRandomIntWithGap(5, 40, PIXEL_AMOUNT),
		},
	},
	{
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
				red: getRandomIntWithGap(50, 250, PIXEL_AMOUNT),
				green: getRandomIntWithGap(50, 250, PIXEL_AMOUNT),
				blue: getRandomIntWithGap(50, 250, PIXEL_AMOUNT),
			},
		},
		userProperties: {
			customProperties: {
				red: getRandomIntWithGap(50, 250, PIXEL_AMOUNT),
				green: getRandomIntWithGap(50, 250, PIXEL_AMOUNT),
				blue: getRandomIntWithGap(50, 250, PIXEL_AMOUNT),
			},
		},
	},
];
