import { createContext,useState } from "react";

export const PostCotext =createContext(null)


function Post({children}){

    const [postDetails,setPostDetails]= useState()
    return(
        <PostCotext.Provider value={{postDetails,setPostDetails}}>
            {children}


        </PostCotext.Provider>
    )
}
export default Post