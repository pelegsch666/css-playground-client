import GAPS from "constants/GAPS";
function getGapByProperty(property){
  if(['red','blue','green'].includes(property)){
    return GAPS.COLORS
  } else {
    return GAPS.DEFAULT
  }
}
export default getGapByProperty;