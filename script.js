document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("section");

	sections.forEach((section) => {
		section.classList.add("section-card");

		const heading = section.querySelector("h1, h2");
		if (!heading) {
			return;
		}

		const wrapper = document.createElement("div");
		wrapper.className = "section-content";

		const nodesToMove = [];
		let node = heading.nextSibling;
		while (node) {
			const next = node.nextSibling;
			nodesToMove.push(node);
			node = next;
		}

		nodesToMove.forEach((item) => wrapper.appendChild(item));
		section.appendChild(wrapper);

		if (section.id !== "introduction") {
			const toggle = document.createElement("button");
			toggle.type = "button";
			toggle.className = "section-toggle";
			toggle.textContent = "Collapse section";
			toggle.setAttribute("aria-expanded", "true");

			heading.insertAdjacentElement("afterend", toggle);

			toggle.addEventListener("click", () => {
				const collapsed = section.classList.toggle("collapsed");
				toggle.textContent = collapsed ? "Expand section" : "Collapse section";
				toggle.setAttribute("aria-expanded", String(!collapsed));
			});
		}
	});

	const scrollProgress = document.createElement("div");
	scrollProgress.id = "scroll-progress";
	document.body.appendChild(scrollProgress);

	const updateProgress = () => {
		const doc = document.documentElement;
		const scrollTop = doc.scrollTop || document.body.scrollTop;
		const height = doc.scrollHeight - doc.clientHeight;
		const percent = height > 0 ? (scrollTop / height) * 100 : 0;
		scrollProgress.style.width = `${percent}%`;
	};

	window.addEventListener("scroll", updateProgress, { passive: true });
	updateProgress();

	const backTop = document.createElement("button");
	backTop.className = "back-to-top";
	backTop.type = "button";
	backTop.textContent = "Top";
	backTop.setAttribute("aria-label", "Back to top");
	document.body.appendChild(backTop);

	const toggleTop = () => {
		const offset = window.scrollY || document.documentElement.scrollTop;
		backTop.classList.toggle("show", offset > 300);
	};

	window.addEventListener("scroll", toggleTop, { passive: true });
	toggleTop();

	backTop.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	const lightbox = document.createElement("div");
	lightbox.className = "lightbox";
	lightbox.innerHTML =
		'<button class="lightbox-close" type="button" aria-label="Close image">Close</button><img alt="">';
	document.body.appendChild(lightbox);

	const lightboxImg = lightbox.querySelector("img");
	const closeBtn = lightbox.querySelector(".lightbox-close");

	const closeLightbox = () => {
		lightbox.classList.remove("open");
		lightboxImg.src = "";
	};

	closeBtn.addEventListener("click", closeLightbox);
	lightbox.addEventListener("click", (event) => {
		if (event.target === lightbox) {
			closeLightbox();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeLightbox();
		}
	});

	document.querySelectorAll("img").forEach((img) => {
		img.classList.add("zoomable");
		img.addEventListener("click", () => {
			lightboxImg.src = img.src;
			lightboxImg.alt = img.alt || "Image preview";
			lightbox.classList.add("open");
		});
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("in-view");
				}
			});
		},
		{ threshold: 0.2 }
	);

	sections.forEach((section) => observer.observe(section));
});
