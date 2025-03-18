// Problem:
// Implement a debounce function that delays invoking a function until after
// wait milliseconds have passed since the last time the function was called.
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Usage:
const log = debounce(() => console.log("Debounced!"), 1000);
log();
log();
log(); // Will log "Debounced!" after 1 second.

import React, { useState, useEffect } from "react";

function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

// The commented code below represent the real life example of debounce while using with react.

// export default function SearchComponent() {
//     const [query, setQuery] = useState("");
//     const [results, setResults] = useState([]);

//     // Debounced API call
//     const fetchResults = debounce((searchTerm) => {
//         if (!searchTerm) {
//             setResults([]);
//             return;
//         }

//         fetch(`https://api.example.com/search?q=${searchTerm}`)
//             .then((res) => res.json())
//             .then((data) => setResults(data.results))
//             .catch((err) => console.error(err));
//     }, 500); // 500ms delay

//     // Update search query & trigger debounced function
//     useEffect(() => {
//         fetchResults(query);
//     }, [query]);

//     return (
//         <div>
//             <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
//             <ul>
//                 {results.map((item, index) => (
//                     <li key={index}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
