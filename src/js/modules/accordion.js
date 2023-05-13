export default () => {
	const accordions = document.querySelectorAll(".accordion");

	accordions.forEach((item) => {
		item.addEventListener("click", () => {
			let btn = item.querySelector(".accordion__control");
			let content = item.querySelector(".accordion__content");

			accordions.forEach((el) => {
				btn = el.querySelector(".accordion__control");
				content = el.querySelector(".accordion__content");

				el.classList.remove("open");
				btn.setAttribute("aria-expanded", false);
				content.setAttribute("aria-hidden", true);
			});

			btn = item.querySelector(".accordion__control");
			content = item.querySelector(".accordion__content");

			item.classList.add("open");

			if (item.classList.contains("open")) {
				btn.setAttribute("aria-expanded", true);
				content.setAttribute("aria-hidden", false);
			} else {
				btn.setAttribute("aria-expanded", false);
				content.setAttribute("aria-hidden", true);
			}
		});
	});
};
