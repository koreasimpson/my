const createNavigationFn = (pageData, targetPortfolio, imgData) => {
	const portfolioPageList = []
	const navContainer = targetPortfolio.querySelector(".portfolio-navigation")
	const pageImgWrapper = targetPortfolio.querySelector(".page-img-wrapper")
	const pageImg = targetPortfolio.querySelector(".page-img")
	pageImgWrapper.innerHTML = ""

	for (let page in pageData) {
		portfolioPageList.push(page)
	}

	portfolioPageList.forEach((page, index) => {
		const clone = pageImg.cloneNode(true)
		pageImgWrapper.appendChild(clone)
		page === "poaster"
			? clone.querySelector("img").setAttribute("src", "/")
			: clone.querySelector("img").setAttribute("src", imgData[page])

		const listElement = document.createElement("li")
		const buttonElement = document.createElement("button")

		listElement.appendChild(buttonElement)
		listElement.classList.add(`page${index}`)
		listElement.addEventListener("click", e => {
			handleNavEvent(e, page, pageData, targetPortfolio, pageImgWrapper, clone)
		})
		buttonElement.textContent = page
		navContainer.appendChild(listElement)
	})
	// firstNavList click
	navContainer.querySelector("li button").click()
}

const handleNavEvent = (e, page, pageData, targetPortfolio, pageImgWrapper, clone) => {
	let navContainer = targetPortfolio.querySelector(".portfolio-navigation")
	if (!e.target.parentNode.classList.contains("is-active")) {
		const navList = navContainer.querySelectorAll("li")
		navList.forEach(item => {
			item.classList.remove("is-active")
		})
		e.target.parentNode.classList.add("is-active")
	}
	setSelectedPageDesc(page, pageData, targetPortfolio, pageImgWrapper, clone)
}

// Update desc
const setSelectedPageDesc = (page, pageData, targetPortfolio, pageImgWrapper, clone) => {
	page === "poaster"
		? targetPortfolio.classList.add("poaster")
		: targetPortfolio.classList.remove("poaster")

	pageImgWrapper.querySelectorAll(".page-img").forEach(list => {
		list.classList.remove("is-show")
	})

	clone.classList.add("is-show")

	const pageDescElement = targetPortfolio.querySelector(".portfolio-cover .desc")
	const pageDescDetail = pageData[page].detail

	pageDescElement.innerHTML = ""

	for (let desc in pageDescDetail) {
		const paragraphElement = document.createElement("p")
		const description = `${desc} : ${pageDescDetail[desc]}`
		paragraphElement.textContent = description
		pageDescElement.appendChild(paragraphElement)
	}
}

export { createNavigationFn }
