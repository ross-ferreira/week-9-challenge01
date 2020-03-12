export const addItem = (state, {value}) => {
            return {...state, items: [...state.items,{task: value,completed: false }]};
        }
        // we have created an array ...state to modify the state but then we also need to say ...state.items in order to create a new array with the added item TASK


export const removeItem = (state, {index}) => {
            return {...state, items: state.items.filter((_,i)=>i!==index)};
        }

export const updateItem = (state, {index,value}) => {
            return {...state, items: state.items.map((item,i)=>i !== index ? item : {...item, task: value} )};
        }

export const completeItem = (state, action) => {
    return {
        ...state,
        items: state.items.map((item, index) => {
            return index === action.index ? { ...item, completed: true } : item
        })
    }
}

export default (state, action) => {
    switch(action.type){
        case "NEW_ITEM":
            return addItem(state, action);
        case "REMOVE_ITEM":
            return removeItem(state, action);
        case "CHANGE_ITEM":
            return updateItem(state, action);
        case "MARK_COMPLETED":
            return completeItem(state, action);
            
            default: return state;
            };     
        
        };
    


    // {
    //     items: [
    //         { task:"hello",completed: true },
    //         { task:"goodbye",completed: false },
    //     ]
    // }
