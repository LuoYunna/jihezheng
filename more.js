document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 只触发一次
            }
        });
    }, { threshold: 0.1 }); // 10% 可见时触发

    elements.forEach(element => observer.observe(element));
});
