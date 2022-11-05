import { getRandomInt } from "./getRandomInt";

export default function getRandomItemFromArray(arr){
      const randomIdx = getRandomInt(0, arr.length - 1); 
      return arr[randomIdx]
}