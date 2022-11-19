export function checkVictory(userShape, targetShape) {
	let flag = true;
	for (let i = 0; i < userShape.length; i++) {
		const keyName = Object.keys(userShape[i])[0];
		if (userShape[i][keyName] !== targetShape[i][keyName]) {
			flag = false;
			return flag;
		}
	}

	return flag;
}
