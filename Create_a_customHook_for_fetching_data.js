// Problem:
// Create a custom React hook for fetching data.
import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

// Usage:
const { data, loading, error } = useFetch("https://api.example.com/data");
