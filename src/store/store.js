import { createStore } from "redux";

const initialState = {
    items:[{   
        "src": "./assets/images/Rectangle_1.png",
        "id": 1,
        "categories": "Lifestyle",
        "title":"Eat Right For Your Exercise Regime",
        "author": "Niek Bove",
        "data": "April 8, 2018",
        "views":"3K Views",
        "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
    },
    {  
        "src": "./assets/images/Rectangle_2.png",
        "id": 2,
        "categories": "Lifestyle",
        "title":"The Look: Perfect Balance",
        "author": "Niek Bove",
        "data": "April 8, 2018",
        "views":"3K Views",
        "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
    },
    {   
        "src": "./assets/images/Rectangle_3.png",
        "id": 3,
        "categories": "Style",
        "title":"Fun Things to Do in Rome",
        "author": "Niek Bove",
        "data": "April 8, 2018",
        "views":"3K Views",
        "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
    },
    {
        "src": "./assets/images/Rectangle_4.png",
        "id": 4,
        "categories": "Style",
        "title":"24 Colorful Ceilings That Add Unexpected Contrast to Any Room",
        "author": "Niek Bove",
        "data": "April 8, 2018",
        "views":"3K Views",
        "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
    },
    {
        "src": "./assets/images/Rectangle_5.png",
        "id": 5,
        "categories": "Lifestyle",
        "title":"9 New Songs to Heat Up Your Fall Playlist",
        "author": "Niek Bove",
        "data": "April 8, 2018",
        "views":"3K Views",
        "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
    },
    {
        "src": "./assets/images/Rectangle_6.png",
        "id": 6,
        "categories": "Events",
        "title":"What You Need on Your Bedside Table",
        "author": "Niek Bove",
        "data": "April 8, 2018",
        "views":"3K Views",
        "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
    },
    {
        "src": "./assets/images/Rectangle_7.png",
        "id": 7,
        "categories": "Travel",
        "title":"When Two Wheels Are Better Than Four",
        "author": "Niek Bove",
        "data": "April 8, 2018",
        "views":"3K Views",
        "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
    },
    {
        "src": "./assets/images/Rectangle_8.png",
        "id": 8,
        "categories": "Travel",
        "title":"26 Living Room Ideas from the Homes of Top Designers",
        "author": "Niek Bove",
        "data": "April 8, 2018",
        "views":"3K Views",
        "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
    },
    {
        "src": "./assets/images/Rectangle_1.png",
        "id": 9,
        "categories": "Music",
        "title":"What Makes Your City’s Style Unique",
        "author": "Niek Bove",
        "data": "April 8, 2018",
        "views":"3K Views",
        "content":"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
    }]
}


function rootReduser(state=initialState, action){

    switch(action.type){
        // filteri logikana
        case 'ITEM':{
            const initialFilter = initialState.items.filter((i)=>{
                return i.categories === action.payload || action.payload === 'All'
            })
            return {...state, items:initialFilter }
        };
        case 'INPUT_VALUE':{
            const initialSearch = initialState.items.filter((el=>{
                return el.categories.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
            }))
            return {...state, items: initialSearch}
        };
        default:{
            return state;
        }
    }
}

const store = createStore(rootReduser, initialState)
export default store;
