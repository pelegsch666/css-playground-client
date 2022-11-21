import getRandomInt from './getRandomInt';

function getRandomItemFromArray(arr) {
	const randomIdx = getRandomInt(0, arr.length - 1);
	return arr[randomIdx];
}

export default getRandomItemFromArray;
