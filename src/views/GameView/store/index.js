import { atom } from 'recoil';

export const targetShapeState = atom({
	key: 'targetShapeState',
	default: [],
});

export const userShapeState = atom({
	key: 'userShapeState',
	default: [],
});

export const currPropertyTitleState = atom({
	key: 'currPropertyTitleState',
	default: '',
});

export const currPropertyValueState = atom({
	key: 'currPropertyValueState',
	default: '',
});

export const currUserShapePropertyIdxState = atom({
	key: 'currUserShapePropertyIdxState',
	default: 0,
});

export const isVictoryState = atom({
	key: 'isVictoryState',
	default: false,
});

