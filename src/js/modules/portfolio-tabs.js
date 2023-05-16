export default () => {
	const tabs = document.querySelector(".portfolio-tabs");
	const boxLoadMore = document.querySelector(".load-more");

	if (!tabs || !boxLoadMore) return;

	const tabsItem = tabs.querySelectorAll(".portfolio-tabs-item");

	let isCountPortfolioItem = false;

	const findPortfolioItem = (selector) => {
		const portfolioItem = document.querySelectorAll(selector);

		return portfolioItem;
	};

	const hiddenPortfolioItem = () => {
		if (!(findPortfolioItem(".portfolio__item").length > 9)) return;

		isCountPortfolioItem = true;

		findPortfolioItem(".portfolio__item").forEach((item, index) => {
			if (index > 8) {
				item.classList.remove("visible");
				item.classList.add("visible-more");
			}
		});
	};

	const toggleTabs = ({ target }) => {
		if (!target.closest(".portfolio-tabs-item")) {
			return;
		}

		const path = target.dataset.path;

		tabsItem.forEach((item) => {
			item.classList.remove("active");
		});

		target.classList.add("active");

		findPortfolioItem(".portfolio__item").forEach((item) => {
			// if (!item.classList.contains("visible-more")) {
			item.classList.remove("visible");
			// }
		});

		findPortfolioItem(`.portfolio__item[data-target='${path}']`).forEach(
			(item) => {
				if (!item.classList.contains("visible-more")) {
					item.classList.add("visible");
				}
			}
		);

		if (path === "all") {
			findPortfolioItem(".portfolio__item").forEach((item) => {
				if (!item.classList.contains("visible-more")) {
					item.classList.add("visible");
				}
			});
		}
	};

	const loadMore = () => {
		if (!isCountPortfolioItem) return;

		const loadMoreText = boxLoadMore.querySelector(".load-more__descr");

		if (loadMoreText.textContent === "Load more") {
			findPortfolioItem(".portfolio__item").forEach((item) => {
				if (item.classList.contains("visible-more")) {
					item.classList.add("visible");
				}
			});

			loadMoreText.innerText = "closed";
		} else if (loadMoreText.textContent === "closed") {
			hiddenPortfolioItem();

			loadMoreText.innerText = "Load more";
		}
	};

	hiddenPortfolioItem();

	tabs.addEventListener("click", ({ target }) => {
		toggleTabs({ target });
	});

	boxLoadMore.addEventListener("click", loadMore);
};
