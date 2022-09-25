import { getRandomIntWithGap } from "../helpers/getRandomInt"
import { levelArray } from "./levelsArray"
import PIXEL_AMOUNT from "./PIXEL_AMOUNT"
const INIT_STATE = {
    levelArray: [{
        title: 'Shape it out', target: [
            { width: getRandomIntWithGap(20, 180, PIXEL_AMOUNT) },
            { height: getRandomIntWithGap(60, 160, PIXEL_AMOUNT) },
            { borderRadius: getRandomIntWithGap(10, 70, PIXEL_AMOUNT) }]

        , userShape: [
            { width: getRandomIntWithGap(70, 150, PIXEL_AMOUNT) },
            { height: getRandomIntWithGap(100, 150, PIXEL_AMOUNT) },
            { borderRadius: getRandomIntWithGap(5, 25, PIXEL_AMOUNT) }
        ]
    }, { title: 'Dont Flex' }, { title: 'Iam not color blind' }, { title: 'Width' }],
    levelIndex: 0,
    propertyIndex: 0

}
export default INIT_STATE