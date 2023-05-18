import Swiper, { Navigation, Pagination, Thumbs } from "swiper";

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue("--grid-gap"));

export const sliderOne = () => {
	const swiper = new Swiper(".portfolio-section__slider", {
		slidesPerView: 3,
		spaceBetween: gap,
		navigation: {
			prevEl: ".slider-nav__btn_prev",
			nextEl: ".slider-nav__btn_next",
		},
		modules: [Navigation],
	});
};

export const sliderTwo = () => {
	const swiper = new Swiper(".testimonials__slider", {
		slidesPerView: 1,
		spaceBetween: gap,
		navigation: {
			prevEl: ".testimonials_prev",
			nextEl: ".testimonials_next",
		},
		modules: [Navigation],
	});
};

export const worksSlider = () => {
	const worksSliderWrap = document.querySelector(".works-slider");

	if (!worksSliderWrap) return;

	const swiper = new Swiper(".works-slider-nav", {
		spaceBetween: 20,
		slidesPerView: 10,
		freeMode: true,
		watchSlidesProgress: true,
	});

	const swiper2 = new Swiper(".works-slider-big", {
		spaceBetween: 20,
		modules: [Navigation, Thumbs],
		navigation: {
			nextEl: ".works-slider-big__next",
			prevEl: ".works-slider-big__prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});
};
