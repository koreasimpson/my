//  페이지 정보 수만큼 nav li 요소 생성
const createNavigationFn = (pageData, targetPortfolio, imgData) => {
	const portfolioPageList = []
	const navContainer = targetPortfolio.querySelector(".portfolio-navigation")

	for (let page in pageData) {
		portfolioPageList.push(page)
	}

	portfolioPageList.forEach((page, index) => {
		const listElement = document.createElement("li")
		listElement.textContent = page

		listElement.classList.add(`page${index}`)

		listElement.addEventListener("click", e => {
			handleNavEvent(e, index, page, pageData, targetPortfolio, imgData)
		})

		navContainer.appendChild(listElement)
	})
	// firstNavList click
	navContainer.querySelector("li").click()
}

// nav li 요소 이벤트 처리
const handleNavEvent = (e, index, page, pageData, targetPortfolio, imgData) => {
	let navContainer = targetPortfolio.querySelector(".portfolio-navigation")
	// nav is-active class toggle
	if (!e.target.classList.contains("is-active")) {
		const navList = navContainer.querySelectorAll("li")
		navList.forEach(item => {
			item.classList.remove("is-active")
		})
		e.target.classList.add("is-active")
	}

	// set pageImg
	setSelectedPageImg(page, targetPortfolio, imgData)
	// set PageDesc
	setSelectedPageDesc(page, pageData, targetPortfolio)
}

// set PageData
const setSelectedPageImg = (page, targetPortfolio, imgData) => {
	const imgElement = targetPortfolio.querySelector("img")

	if (page === "poaster") {
		targetPortfolio.classList.add("poaster")
		imgElement.setAttribute("src", "/")
	} else {
		targetPortfolio.classList.remove("poaster")
		imgElement.setAttribute("src", imgData[page])
	}
}

// Update desc
const setSelectedPageDesc = (page, pageData, targetPortfolio) => {
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
