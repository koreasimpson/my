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
		window.removeEventListener("keydown", keyboardTrap)
		window.addEventListener("keydown", preventKeyboardEvent)
		if (tarIndex === 1) {
			isFirstShowSlide.index1 &&
				createNavigationFn(beusablyData, beusablyPortfolio, beusablyBackgroundImgs)
			isFirstShowSlide.index1 = false
			currentPortfolio = beusablyPortfolio
		} else if (tarIndex === 2 && isFirstShowSlide.index2) {
			isFirstShowSlide.index2 &&
				createNavigationFn(beusablyToolData, beusablyToolPortfolio, beusablyToolBackgroundImgs)
			currentPortfolio = beusablyToolPortfolio
			isFirstShowSlide.index2 = false
		} else {
			currentPortfolio = beusablePortfolio
		}
	})

	portfolioSlide.onChanged(function(curIndex, lastIndex, cur, last) {
		currentPortfolioIndex.textContent = curIndex + 1
		window.removeEventListener("keydown", preventKeyboardEvent)
		window.addEventListener("keydown", keyboardTrap)
		cur.querySelector(".is-active button").focus()
	})

	const portfolios = document.querySelectorAll("section.portfolio")
	const currentPortfolioIndex = document.querySelector(".portfolio-index .current")
	const LastPortfolioIndex = document.querySelector(".portfolio-index .total")

	const beusablePortfolio = document.querySelector(".portfolio.beusable")
	const beusablyPortfolio = document.querySelector(".portfolio.beusably.landing")
	const beusablyToolPortfolio = document.querySelector(".portfolio.beusably.tool")
	const portfolioDescButtons = document.querySelectorAll(".btn-toggle-cover")

	// set scrollable index text
	LastPortfolioIndex.textContent = portfolios.length

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

const keyboardTrap = e => {
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
}

const preventKeyboardEvent = e => {
	e.preventDefault()
	e.stopPropagation()
}

window.addEventListener("keydown", keyboardTrap)
window.onbeforeunload = function() {
	window.removeEventListener("keydown", keyboardTrap)
}
