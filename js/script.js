"use strict"

// Определяет устройство ПК/мобаил
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/iphone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	},
};


// Добавляет класс к body
if (isMobile.any()) {
	document.body.classList.add('_touch');
	//навешивает класс(_active) для родителя .arrow
	let menuArrows = document.querySelectorAll('.top');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		};
	};
} else {
	document.body.classList.add('_pc');
};

//Живой поиск на странице
document.querySelector('#elastic').oninput = function () {
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll('.search_list li');
	if (val != '') {
		const ulR = document.querySelector('.search_ul_list');
		ulR.classList.remove('none');
		elasticItems.forEach(function (elem) {
			if (elem.innerText.search(val) == -1) {
				elem.classList.add('hide');
			}
			else {
				elem.classList.remove('hide');
			}
		});
	}
	else {
		const ulA = document.querySelector('.search_ul_list');
		ulA.classList.add('none');
		elasticItems.forEach(function (elem) {
			elem.classList.remove('hide');
		});
	};
};

const focusUl = document.querySelector('.search_list');
const focusI = document.querySelector('input.search');
focusI.addEventListener("focus", function (e) {
	focusUl.classList.remove('focus_none');
});
focusI.addEventListener("blur", function (e) {
	setTimeout(() => { focusUl.classList.add('focus_none'); }, 300);
	document.getElementById('elastic').value = '';
});





//////Прокрутка при клике
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function(even) {
		even.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}




