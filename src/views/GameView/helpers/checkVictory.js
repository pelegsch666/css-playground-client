export function checkVictory(userShape, targetShape) {
  console.log("userShape", userShape, "targetShape", targetShape);
  let flag = true;

  for (let i = 0; i < userShape.length; i++) {
    const keyName = Object.keys(userShape[i])[0];
    const currUserValue = userShape[i][keyName].value;
    const currTargetValue = targetShape[i][keyName].value;

    console.log(
      "currTargetValue",
      currTargetValue,
      "currUserShape",
      currUserValue
    );
    if (currUserValue !== currTargetValue) {
      flag = false;
      return flag;
    }
  }

  return flag;
}
