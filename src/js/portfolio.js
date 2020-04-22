import DoSlide from "do-slide"
import { createNavigationFn } from "./porfolio/portfolioNavigation"
import {
	beusableBackgroundImgs,
	beusablyBackgroundImgs,
	beusablyToolBackgroundImgs
} from "./porfolio/portfolioImgs"

import "../scss/portfolio.scss"
import "../lib/do-slide/do-slide.min.css"
import "./common.js"

const jsonData = require("../assets/json/portfolio.json")
const beusableData = jsonData.beusable
const beusablyData = jsonData.beusably.landing
const beusablyToolData = jsonData.beusably.tool

document.addEventListener("DOMContentLoaded", function() {
	const portfolioSlide = new DoSlide(".portfolio-container", {
		eventElemSelector: ".scrollable"
	})

	const portfolios = document.querySelectorAll("section.portfolio")
	const currentPortfolioIndex = document.querySelector(".portfolio-index .current")
	const LastPortfolioIndex = document.querySelector(".portfolio-index .total")

	const beusablePortfolio = document.querySelector(".portfolio.beusable")
	const beusablyPortfolio = document.querySelector(".portfolio.beusably.landing")
	const beusablyToolPortfolio = document.querySelector(".portfolio.beusably.tool")
	const portfolioDescButtons = document.querySelectorAll(".btn-toggle-cover")

	// set scrollable index text
	// last
	LastPortfolioIndex.textContent = portfolios.length
	// current
	portfolioSlide.onChanged(curIndex => {
		currentPortfolioIndex.textContent = curIndex + 1
	})

	// create fortfolio Nav
	createNavigationFn(beusableData, beusablePortfolio, beusableBackgroundImgs)
	createNavigationFn(beusablyData, beusablyPortfolio, beusablyBackgroundImgs)
	createNavigationFn(beusablyToolData, beusablyToolPortfolio, beusablyToolBackgroundImgs)

	// desc toggle
	portfolioDescButtons.forEach(function(button) {
		const targetPortfolio = document.querySelector(`${button.dataset.target}`)
		button.addEventListener("click", function() {
			targetPortfolio.classList.toggle("is-show-desc")
		})
	})
})
