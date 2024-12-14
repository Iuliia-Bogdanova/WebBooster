import "modern-normalize/modern-normalize.css";
import "../scss/style.scss";

import { stickyHeader } from "./modules/stickyHeader.js";
import { initSlider } from "./modules/slider.js";
import { initAccordionOpening } from "./modules/accordion.js";

stickyHeader();
initSlider();
initAccordionOpening();
