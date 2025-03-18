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
