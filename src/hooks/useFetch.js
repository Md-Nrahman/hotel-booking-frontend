import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log(url)

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(url);
            setData(res.data);
            console.log(res.data)
            setLoading(false);
            setError(null);
        } catch (err) {
            if (err.response) {
                console.log(err)
                setError(err.response.data.message);
                setLoading(false);
            } else {
                setError(err.message);
                setLoading(false);

            }  
        }

        
    }

    const reFetch = () => {
        fetchData();
    }

    useEffect(() => {
       

        fetchData();

        }, []);


    return { reFetch, data, loading, error };
}

export default useFetch;