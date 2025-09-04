 const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });


      const items = document.querySelectorAll(".content, .image-box");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));