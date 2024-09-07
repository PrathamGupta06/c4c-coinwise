import React from 'react'
import { useState } from 'react';

function useAddPdf() {
    const [loading , setLoading] = useState(false);
    try {
        const addPdf = (pdf) => {
            setLoading(true);
            const formData = new FormData();
            formData.append('pdf', pdf);
            fetch('http://localhost:8000/api/pdf/', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
        
    }catch(error){

        console.error(error);

    }finally{
        setLoading(false);
    }
    return {loading, addPdf};
    
}

export default useAddPdf