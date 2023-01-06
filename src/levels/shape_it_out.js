import getRandomIntWithGap from 'helpers/getRandomIntWithGap';

const shape_it_out = {
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
			set value(value) {
				this.value = value;
			},
		},
		height: {
			gap: 5,
			min: 60,
			max: 160,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
			set value(value) {
				this.value = value;
			},
		},
		borderRadius: {
			gap: 5,
			min: 20,
			max: 70,
			get value() {
				return getRandomIntWithGap(this.min, this.max, this.gap);
			},
			set value(value) {
				this.value = value;
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

export default shape_it_out;
