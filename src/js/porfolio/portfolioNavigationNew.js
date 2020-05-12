const createNavigationFn = (pageData, targetPortfolio, imgData) => {
	const portfolioPages = []
	const navigationElement = targetPortfolio.querySelector(".portfolio-navigation")
	const pageImgeWrapperElement = targetPortfolio.querySelector(".page-img-wrapper")
	const pageDescElement = targetPortfolio.querySelector(".portfolio-cover .desc")

	for (let page in pageData) {
		portfolioPages.push(page)
	}

	portfolioPages.forEach((page, index) => {
		const pageImg = createPageImgs(page, imgData)
		const navButton = createNavButtons(page, index)
		navButton.addEventListener("click", e => {
			handleNavEvent(
				e,
				navigationElement,
				page,
				pageData,
				targetPortfolio,
				pageImgeWrapperElement,
				pageImg,
				pageDescElement
			)
		})
		pageImgeWrapperElement.appendChild(pageImg)
		navigationElement.appendChild(navButton)
	})
	// first click
	navigationElement.querySelector("li button").click()
}

const createPageImgs = (page, imgData) => {
	const li = document.createElement("li")
	const figure = document.createElement("figure")
	const img = document.createElement("img")
	const skeleton = document.createElement("span")
	li.classList.add("page-img")
	img.src = "/"
	img.setAttribute("data-load", false)
	skeleton.classList.add("skeleton")
	figure.appendChild(img)
	figure.appendChild(skeleton)
	li.appendChild(figure)
	if (page === "poaster") {
		li.querySelector("img").setAttribute("data-src", "/")
	} else {
		li.querySelector("img").setAttribute("data-src", imgData[page])
	}
	return li
}

const createNavButtons = (page, index) => {
	const li = document.createElement("li")
	const button = document.createElement("button")
	li.classList.add(`page${index}`)
	li.appendChild(button)
	button.textContent = page
	return li
}

const setSelectedPageDescription = (
	page,
	pageData,
	targetPortfolio,
	pageImgeWrapperElement,
	pageImg,
	pageDescElement
) => {
	const pageDescDetail = pageData[page].detail

	page === "poaster"
		? targetPortfolio.classList.add("poaster")
		: targetPortfolio.classList.remove("poaster")

	pageImgeWrapperElement.querySelectorAll(".page-img").forEach(list => {
		list.classList.remove("is-show")
	})

	pageImg.classList.add("is-show")

	pageDescElement.innerHTML = ""

	for (let desc in pageDescDetail) {
		const paragraphElement = document.createElement("p")
		const description = `${desc} : ${pageDescDetail[desc]}`
		paragraphElement.textContent = description
		pageDescElement.appendChild(paragraphElement)
	}
}

const setSelectedPageImg = (pageImg, page) => {
	const img = pageImg.querySelector("img")
	const completeLoadedImg = () => {
		img.dataset.load = "true"
	}
	if (img.dataset.load === "false") {
		img.src = img.dataset.src
		img.alt = page
		img.addEventListener("load", completeLoadedImg)
	} else {
		img.removeEventListener("load", completeLoadedImg)
	}
}

const handleNavEvent = (
	e,
	navigationElement,
	page,
	pageData,
	targetPortfolio,
	pageImgeWrapperElement,
	pageImg,
	pageDescElement
) => {
	if (!e.target.parentNode.classList.contains("is-active")) {
		const navList = navigationElement.querySelectorAll("li")
		navList.forEach(item => {
			item.classList.remove("is-active")
		})
		e.target.parentNode.classList.add("is-active")
	}
	setSelectedPageDescription(
		page,
		pageData,
		targetPortfolio,
		pageImgeWrapperElement,
		pageImg,
		pageDescElement
	)
	setSelectedPageImg(pageImg, page)
}

export { createNavigationFn }
