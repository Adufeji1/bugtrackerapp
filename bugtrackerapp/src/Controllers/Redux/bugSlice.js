import {createSlice} from '@reducxjs/toolkit'
import { retrieveBugs } from '../bugContollers'


const slice = createSlice({
    name:"bug",
    initialState:[],
    reducers:{
        getBugs:state =>retrieveBugs()

        }
        createBugs:(state,actions)=>{

        },
        updateBug:(state,actions)=>{

        },
        markComplete:(state,action)=>{

        },
    }
})