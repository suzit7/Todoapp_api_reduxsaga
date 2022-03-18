export const additems = (data) => {

    return{
        type : "ADDING",
       payload : {
           id : new Date().getTime().toString(),
            data : data
        } 
    }
}

export const dlteitems = (id) =>{
    return{
        type : "DELETING",
        id
    }
}

export const dlteall = () =>{
    return{
        type : "DLTEALL"
    }
}

