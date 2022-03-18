const initialData = {
    list : []
}

const todoreducers = (state=initialData, action ) =>{
       
    switch(action.type){
        case "ADDING" :

        const {id,data} = action.payload;


        return {
            ...state,
            list:[
                ...state.list,
                {
                    id : id,
                    data : data
                }
            ]
        }

        case "DELETING" :

        const newList = state.list.filter((elem)=> elem.id !== action.id)

        return {
            ...state,
            list: newList
        }

        case "DLTEALL" :

        return{
            ...state,
            list : []
        }


        default : return state;
    }
}

export default todoreducers;