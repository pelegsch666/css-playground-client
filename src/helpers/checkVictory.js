function checkVictory(userShape, targetShape) {
	let flag = true;

	for (let i = 0; i < userShape.length; i++) {
		const keyName = Object.keys(userShape[i])[0];
		const currUserValue = userShape[i][keyName].value;
		const currTargetValue = targetShape[i][keyName].value;

		if (currUserValue !== currTargetValue) {
			flag = false;
			return flag;
		}
	}

	return flag;
}

export default checkVictory;
