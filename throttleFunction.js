// Create a throttle function that ensures a function is called at most once every given interval.


function throttle(func, interval) {
    let lastCall = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

// Example usage
const logMessage = throttle(() => console.log("Throttled!"), 1000);
setInterval(logMessage, 200); // Will log "Throttled!" only once per second
