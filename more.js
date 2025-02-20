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

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // 只执行一次
                }
            });
        },
        { threshold: 0.2 } // 20% 进入可视区域就触发
    );

    document.querySelectorAll("h2, h3, p").forEach((el) => observer.observe(el));
});
