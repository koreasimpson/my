window.addEventListener("load", function() {
	console.log(
		"%c Contact : 010 - 8423 - 6277 ",
		"border: 5px dotted #CAC327; padding: 10px; box-sizing: border-box; color:#CAC327;font-family: 'Open Sans', system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
	)

	let body = document.querySelector("body")
	let lnbItemStudy = document.querySelector(".gnb-item.item-study a")
	let lnbItemPortfolio = document.querySelector(".gnb-item.item-portfolio a")
	let studyList = document.querySelector(".study_list--wrap")
	let portfoiloList = document.querySelector(".portfolio_list--wrap")

	let allPopupLayer = document.querySelectorAll(".popup-layer")
	let allOpenPopupLayer = document.querySelectorAll(".open-popup-layer")

	// page loading UI
	document.querySelector("#pageLoading").classList.add("hide")
	document.querySelector("#pageLoaded").classList.remove("hide")

	toggleGnbLayer = (eventTarget, layer) => {
		eventTarget.addEventListener("click", function(e) {
			closeAllPopupLayer()
			if (layer.classList.contains("is-show")) {
				layer.classList.remove("is-show")
			} else {
				layer.classList.add("is-show")
			}
		})
	}

	toggleGnbLayer(lnbItemStudy, studyList)
	toggleGnbLayer(lnbItemPortfolio, portfoiloList)

	allPopupLayer.forEach(function(item) {
		item.addEventListener("click", function(e) {
			e.stopPropagation()
		})
	})

	allOpenPopupLayer.forEach(function(item) {
		item.addEventListener("click", function(e) {
			e.stopPropagation()
			e.preventDefault()
		})
	})

	closeAllPopupLayer = () => {
		allPopupLayer.forEach(function(item) {
			item.classList.remove("is-show")
		})
	}

	body.addEventListener("click", closeAllPopupLayer)

	const dimmed = document.querySelector(".dimmed")
	if (dimmed) {
		const btnCloseDimmed = dimmed.querySelector(".btn-close-dimmed")
		body.addEventListener("click", function(e) {
			if (e.target === btnCloseDimmed) {
				dimmed.classList.remove("is-show")
			}
		})
	}
})
