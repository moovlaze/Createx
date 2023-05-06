import Swiper, { Navigation } from "swiper";

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
