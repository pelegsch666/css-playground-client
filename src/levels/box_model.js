import getRandomIntWithGap from 'helpers/getRandomIntWithGap';

const box_model = {
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

export default box_model;
