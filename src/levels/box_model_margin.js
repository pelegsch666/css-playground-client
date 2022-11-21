import getRandomIntWithGap from 'helpers/getRandomIntWithGap';

const box_model_margin = {
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

export default box_model_margin;
