import '../scss/style.scss'
import "modern-normalize/modern-normalize.css";

import { stickyHeader } from "./modules/stickyHeader.js";
import { initSlider } from './modules/slider.js';
import { initSmoothOpening } from './modules/accordion.js';

stickyHeader();
initSlider();
initSmoothOpening();

