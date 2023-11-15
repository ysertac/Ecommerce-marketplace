const initialState = {
    roles: [],
    categories: [],
    theme: "",
    language: "",
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default globalReducer;