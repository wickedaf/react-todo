export const todoState = {
    items: []
}

export const todoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            const newItem ={
                id: action.id,
                name:  action.name
            };
            const allItem = [...state.items, newItem];
            return {items: allItem};

        case 'REMOVE_ITEM':
            const remainingItem = state.items.filter(item => item.id !== action.id);
            return {items: remainingItem};
        default:
            return state;
    }
}