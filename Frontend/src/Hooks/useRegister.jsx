import React from 'react'
import { useState } from 'react';

function useRegister() {

    const [loading, setLoading] = useState(false);

    const register = (user) => {
        try {
            setLoading(true);
            fetch('http://localhost:8000/api/auth/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(response => response.json())

            if(response.ok){
                console.log(response);
            }
            
        } catch (error) {
            
            console.error(error);

        }finally{
            
            setLoading(false);

        }
    

    }

    return { loading, register };
  
}

export default useRegister