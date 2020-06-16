import "../scss/portfolio.scss"
import "../lib/do-slide/do-slide.min.css"
import "./common.js"

import DoSlide from "do-slide"
import { createNavigationFn } from "./porfolio/portfolioNavigationNew"

import {
	beusableBackgroundImgs,
	beusablyBackgroundImgs,
	beusablyToolBackgroundImgs
} from "./porfolio/portfolioImgs"

const jsonData = require("../assets/json/portfolio.json")
const beusableData = jsonData.beusable
const beusablyData = jsonData.beusably.landing
const beusablyToolData = jsonData.beusably.tool
let currentPortfolio = null

document.addEventListener("DOMContentLoaded", function() {
	let isFirstShowSlide = {
		index1: true,
		index2: true
	}

	const portfolioSlide = new DoSlide(".portfolio-container", {
		eventElemSelector: ".scrollable"
	})

	portfolioSlide.onBeforeChange(function(curIndex, tarIndex, cur, tar) {
		if (tarIndex === 1 && isFirstShowSlide.index1) {
			createNavigationFn(beusablyData, beusablyPortfolio, beusablyBackgroundImgs)
			currentPortfolio = beusablyPortfolio
			isFirstShowSlide.index1 = false
		} else if (tarIndex === 2 && isFirstShowSlide.index2) {
			createNavigationFn(beusablyToolData, beusablyToolPortfolio, beusablyToolBackgroundImgs)
			currentPortfolio = beusablyToolPortfolio
			isFirstShowSlide.index2 = false
		}
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
	currentPortfolio = beusablePortfolio

	// desc toggle
	portfolioDescButtons.forEach(function(button) {
		const targetPortfolio = document.querySelector(`${button.dataset.target}`)
		button.addEventListener("click", function() {
			targetPortfolio.classList.toggle("is-show-desc")
		})
	})
})

const gnbStudyListElement = document.querySelector(".study_list--wrap")
const gnbItemStudy = document.querySelector(".item-study .open-popup-layer")
const gnbStudyListLastChild = gnbStudyListElement.querySelector("ul li:nth-last-child(1) a")
const firstFocusNode = document.querySelector("#gnb .gnb-item:nth-child(1) a")

window.addEventListener("keydown", e => {
	const lastFocusNode = currentPortfolio.querySelector(
		".portfolio-navigation li:nth-last-child(1) button"
	)
	const currentPortfolioNavigationFirstNode = currentPortfolio.querySelector(
		".portfolio-navigation li:nth-child(1) button"
	)
	const gnbLastItem = gnbStudyListElement.classList.contains("is-show")
		? gnbStudyListLastChild
		: gnbItemStudy
	const isFirstFocusableNode = Object.is(e.target, firstFocusNode)
	const isLastFocusableNode = Object.is(e.target, lastFocusNode)
	const isGnbItemLastNode = Object.is(e.target, gnbLastItem)
	const isPortfolioNavigationFirstNode = Object.is(e.target, currentPortfolioNavigationFirstNode)

	if (isFirstFocusableNode && e.shiftKey) {
		e.preventDefault()
		lastFocusNode.focus()
	} else if (isLastFocusableNode && !e.shiftKey) {
		e.preventDefault()
		firstFocusNode.focus()
	} else if (isGnbItemLastNode && !e.shiftKey) {
		e.preventDefault()
		currentPortfolioNavigationFirstNode.focus()
	} else if (isPortfolioNavigationFirstNode && e.shiftKey) {
		e.preventDefault()
		gnbLastItem.focus()
	}
})
