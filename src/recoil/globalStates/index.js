import {atom} from 'recoil'


export  const levelsDataState = atom({
   key: 'levelsDataState',
   default: [],
     
});

export const currIndexLevelState = atom({
   key: 'currIndexLevelState',
   default: 0,
   
})
