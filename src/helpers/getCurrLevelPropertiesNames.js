

export default function getCurrLevelPropertiesNames (levels,currLevelIdx) {
  return Object.keys(levels[currLevelIdx].userProperties)
}