import React from 'react'
import { useState } from 'react';

function useAddPdf() {
    const [loading , setLoading] = useState(false);
    
        const addPdf = async (data) => {

            try{
                


            }catch(error){
                console.error(error);
            }finally{
                setLoading(false);
            }
            
        }
        
    
    return {loading, addPdf};
    
}

export default useAddPdf