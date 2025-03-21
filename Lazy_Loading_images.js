// ✅ Use case: Optimizing performance in React by delaying image loading.


function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.removeAttribute("data-src");
                obs.unobserve(img);
            }
        });
    });

    images.forEach((img) => observer.observe(img));
}

// Call function on page load
document.addEventListener("DOMContentLoaded", lazyLoadImages);
