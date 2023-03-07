import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){
                        throw new Error('Could not fetch the correct resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setisPending(false);
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('Fetch aborted');
                    }
                    else{
                        console.log(err.message);
                        setError(err.message);
                    }
                    
                })
        }, 1000);

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}


export default useFetch;