
export function getLevelsTitlesFromData(levelData){
  /*[{
    levelName: 'shape it out',
    levelId: 1,
    targetProperties: [
        { width: getRandomIntWithGap(20, 180, PIXEL_AMOUNT) },
        { height: getRandomIntWithGap(60, 160, PIXEL_AMOUNT) },
        { borderRadius: getRandomIntWithGap(10, 70, PIXEL_AMOUNT) }],
    userShape: [
        { width: getRandomIntWithGap(70, 150, PIXEL_AMOUNT) },
        { height: getRandomIntWithGap(100, 150, PIXEL_AMOUNT) },
        { borderRadius: getRandomIntWithGap(5, 25, PIXEL_AMOUNT) }
    ]*/
    const levelTitleArr = []
    levelData.forEach(item => levelTitleArr.push(item.levelName) )
    return levelTitleArr
}