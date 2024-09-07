import React from 'react'

function useSignUp() {
    const [loading, setLoading] = useState(false);





    const signUp = (user) => {
        try {
            setLoading(true);
            fetch('http://localhost:8000/api/auth/signup/', {
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




    return { loading, signUp };
}

export default useSignUp