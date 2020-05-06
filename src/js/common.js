window.addEventListener("load", function() {
	console.log(
		"%c Contact : 010 - 8423 - 6277 ",
		"border: 5px dotted #CAC327; padding: 10px; box-sizing: border-box; color:#CAC327;font-family: 'Open Sans', system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
	)

	let body = document.querySelector("body")
	let lnbItemStudy = document.querySelector(".gnb-item.study a")
	let studyList = document.querySelector(".study_list--wrap")

	let allPopupLayer = document.querySelectorAll(".popup-layer")
	let allOpenPopupLayer = document.querySelectorAll(".open-popup-layer")

	// page loading UI
	document.querySelector("#pageLoading").classList.add("hide")
	document.querySelector("#pageLoaded").classList.remove("hide")

	// gnb item(study) show
	lnbItemStudy.addEventListener("click", function(e) {
		if (studyList.classList.contains("is-show")) {
			studyList.classList.remove("is-show")
		} else {
			studyList.classList.add("is-show")
		}
	})

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

	// all popup-layer close event
	body.addEventListener("click", function(e) {
		allPopupLayer.forEach(function(item) {
			item.classList.remove("is-show")
		})
	})

	// close dimmed popup-layer
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
