window.addEventListener("DOMContentLoaded", () => {
    const firstInputEl = document.querySelector("#client")
    firstInputEl.checked = true;
    const firstLabelEl = document.querySelector(".first-label")
    firstLabelEl.style.backgroundColor = "#008080"

    const whyUsLabels = document.querySelectorAll(".why-us-label label");
    const whyUsLabelContainer = document.querySelector(".why-us-label")
    
    whyUsLabelContainer.addEventListener("click", (event) => {
        Array.from(whyUsLabels).find(label => {
            if (label === event.target) {
                label.style.backgroundColor = "#008080"
            }
            else {
                label.style.backgroundColor = "#9333ea"
            }
        });
    })
})


const sections = document.querySelectorAll('.fade-in-section');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { rootMargin: '0px', threshold: 0.3 }); 


sections.forEach(section => {
    observer.observe(section);
});

