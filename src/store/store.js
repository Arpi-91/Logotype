import axios from "axios";
import { createStore } from "redux";
// import initialstate from '../App'
// const initialState = {
//     items:[{   
//         "src": "./assets/images/Rectangle_1.png",
//         "id": 1,
//         "categories": "Lifestyle",
//         "title":"Eat Right For Your Exercise Regime",
//         "author": "Niek Bove",
//         "data": "April 8, 2018",
//         "views":"3K Views",
//         "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
//     },
//     {  
//         "src": "./assets/images/Rectangle_2.png",
//         "id": 2,
//         "categories": "Lifestyle",
//         "title":"The Look: Perfect Balance",
//         "author": "Niek Bove",
//         "data": "April 8, 2018",
//         "views":"3K Views",
//         "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
//     },
//     {   
//         "src": "./assets/images/Rectangle_3.png",
//         "id": 3,
//         "categories": "Style",
//         "title":"Fun Things to Do in Rome",
//         "author": "Niek Bove",
//         "data": "April 8, 2018",
//         "views":"3K Views",
//         "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
//     },
//     {
//         "src": "./assets/images/Rectangle_4.png",
//         "id": 4,
//         "categories": "Style",
//         "title":"24 Colorful Ceilings That Add Unexpected Contrast to Any Room",
//         "author": "Niek Bove",
//         "data": "April 8, 2018",
//         "views":"3K Views",
//         "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
//     },
//     {
//         "src": "./assets/images/Rectangle_5.png",
//         "id": 5,
//         "categories": "Lifestyle",
//         "title":"9 New Songs to Heat Up Your Fall Playlist",
//         "author": "Niek Bove",
//         "data": "April 8, 2018",
//         "views":"3K Views",
//         "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
//     },
//     {
//         "src": "./assets/images/Rectangle_6.png",
//         "id": 6,
//         "categories": "Events",
//         "title":"What You Need on Your Bedside Table",
//         "author": "Niek Bove",
//         "data": "April 8, 2018",
//         "views":"3K Views",
//         "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
//     },
//     {
//         "src": "./assets/images/Rectangle_7.png",
//         "id": 7,
//         "categories": "Travel",
//         "title":"When Two Wheels Are Better Than Four",
//         "author": "Niek Bove",
//         "data": "April 8, 2018",
//         "views":"3K Views",
//         "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
//     },
//     {
//         "src": "./assets/images/Rectangle_8.png",
//         "id": 8,
//         "categories": "Travel",
//         "title":"26 Living Room Ideas from the Homes of Top Designers",
//         "author": "Niek Bove",
//         "data": "April 8, 2018",
//         "views":"3K Views",
//         "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
//     },
//     {
//         "src": "./assets/images/Rectangle_1.png",
//         "id": 9,
//         "categories": "Music",
//         "title":"What Makes Your City’s Style Unique",
//         "author": "Niek Bove",
//         "data": "April 8, 2018",
//         "views":"3K Views",
//         "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
//     }]
// }
// const initialState = {
//     states: [],
//     filteredDatas:[]
//   }
const initialState = getStates()

function getStates(){
    const state = {
    states: [],
    filteredDatas:[]
  }
    axios.get('http://localhost:8080/items')
    .then(data => {
        state.states = data.data
        state.filteredDatas = data.data
    })
    return state
}


function rootReduser(state, action){

    // filteri logikana
    switch(action.type){
       
        case 'FILTER_BY_CATEGORY':{
            console.log(state.states)
            const initialFilter = state.states.filter((i)=>{
                return i.categories === action.payload || action.payload === 'All'
            })
            console.log(initialFilter)
            return {...state, filteredDatas:initialFilter}
        };
        case 'FILTER_BY_INPUT_VALUE':{
            const initialSearch = state.states.filter((el=>{
                return el.categories.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
            }))
            return {...state, filteredDatas:initialSearch }   
        };
        default:{
            // console.log(initialState)
            return state;
        }
    }
}

// function rootReduser(state, action){
//     const initialState = {
//         states: [],
//         filteredDatas:[]
//       }
//     // filteri logikana
//     switch(action.type){
//         case 'GET_ALL_DATAS':{
//             return {...state, filteredDatas: action.payload}
//         };
//         case 'FILTER_BY_CATEGORY':{
//             console.log(state.items)
//             const initialFilter = state.filteredDatas.filter((i)=>{
//                 return i.categories === action.payload || action.payload === 'All'
//             })
//             console.log(initialFilter)
//             return {...state, items:initialFilter}
//         };
//         case 'FILTER_BY_INPUT_VALUE':{
//             const initialSearch = initialState[0].data.filter((el=>{
//                 return el.categories.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
//             }))
//             return {...state, items:initialSearch  }   
//         };
//         default:{
//             console.log(initialState)
//             return state;
//         }
//     }
// }
const store = createStore(rootReduser, initialState)
export default store;
