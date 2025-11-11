"use strict";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    navigation: {
        nextEl: "#swiper__next",
        prevEl: "#swiper__prev",
    },
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
        1536: {
            slidesPerView: 2,
        },
    },
});
