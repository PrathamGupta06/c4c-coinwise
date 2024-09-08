import React from 'react'
import { useState } from 'react';

function useAddPdf() {
    const [loading , setLoading] = useState(false);
    
        const addPdf = async (data) => {

            try{
                console.log(data);    
                const res = await fetch('http://localhost:5000/upload_statement_pdf', {
                    method: 'POST',
                    body: data
                }).then(response => response.json())
                if(res.ok){
                    console.log(res);
                }
                console.log(res);


            }catch(error){
                console.error(error);
            }finally{
                setLoading(false);
            }
            
        }
        
    
    return {loading, addPdf};
    
}

export default useAddPdf