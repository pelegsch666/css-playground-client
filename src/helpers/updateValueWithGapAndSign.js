function updateValueWithGapAndSign(value, sign, gap) {
	if (sign === '+') {
		return value + gap;
	} else {
		return value - gap;
	}
}

export default updateValueWithGapAndSign;
