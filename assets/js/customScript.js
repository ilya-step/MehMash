// Скрипт появления фона Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	// проверка прокрутки
	if (prevScrollpos < 50) {
		document.getElementById("header").classList.remove('_active');
	} else {
		document.getElementById("header").classList.add('_active');
	}
	prevScrollpos = currentScrollPos;
}


// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelector('.menu-item');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});

	// закрыть меню при переходе на элемент меню
	var menuItems = document.getElementsByClassName("menu-item");
	var j;
	for (j = 0; j < menuItems.length; j++) {
		menuItems[j].addEventListener("click", function () {
			document.body.classList.toggle('_lock')
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});
	}
}


// аккордеон в карточке товара в левой колонке
var acc = document.getElementsByClassName("accordion ");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		var parentPanel = this.closest(".submenu");

		if (panel.style.height) {
			panel.style.height = null;
			if (parentPanel != null) {
				parentPanel.style.height = 'max-content';
			}
		} else {
			panel.style.height = panel.scrollHeight + "px";
			if (parentPanel != null) {
				parentPanel.style.height = 'max-content';
			}
		}
	});
}

// аккордеон в бургер меню + создает из "продукции" кнопку на мобилке на странице товара
const windowInnerWidth = window.innerWidth;
if (windowInnerWidth < 1150) {
	var panelBtn = document.getElementsByClassName("panel-btn");
	var b;
	for (b = 0; b < panelBtn.length; b++) {
		panelBtn[b].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.height) {
				panel.style.height = null;
			} else {
				panel.style.height = 'max-content';
			}
		});
	}
}

// Сабменю (выпадающее меню на десктопе)
if (windowInnerWidth > 1150) {
	// When the user clicks on the button, toggle between hiding and showing the dropdown content
	var catalogBtn = document.getElementsByClassName("catalog-btn");
	var j;
	for (j = 0; j < catalogBtn.length; j++) {
		catalogBtn[j].addEventListener("click", function () {
			this.classList.toggle("show");
			this.nextElementSibling.classList.toggle("show");
		});
	}
	// Close the dropdown if the user clicks outside of it
	window.onclick = function (e) {
		if (!e.target.matches('.catalog-btn')) {
			document.getElementById("submenu").classList.remove('show');
			var catalogBtn = document.getElementsByClassName("catalog-btn");
			var i;
			for (i = 0; i < catalogBtn.length; i++) {
				catalogBtn[i].classList.remove("show");
			}
		}
	}
}


// плавная прокрутка по якорям с учётом шапки
$('a[href*=#]:not([href=#])').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		headerHeight = $('#header').height();
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - headerHeight
			}, 500, function () {
				target.focus();
			});
			return false;
		}
	}
});


//табы в карточке товара
$(".prod__tab").click(function () {
	var tabVal = $(this).attr("data-tab");
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	$(".prod__box_" + tabVal).addClass("active");
	$(".prod__box_" + tabVal).siblings(".prod__box").removeClass("active");
});
// переключение на таб "характеристики" при нажатии на кнопку "читать полностью"
$(".character-btn").click(function () {
	$(".character-tab").addClass("active");
	$(".character-tab").siblings(".prod__tab").removeClass("active");

	$(".prod__box_1").addClass("active");
	$(".prod__box_1").siblings(".prod__box").removeClass("active");
});


// Попап
p = $('.popup__overlay')
$('.popup__toggle').click(function () {
	p.addClass('_active')
})
p.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p.removeClass('_active')
})


// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
if (selector.length > 0) {
	let im = new Inputmask('+7 (999) 999-99-99');
	im.mask(selector);
	let selector2 = document.querySelector('input[type="tel"]');
	selector2.addEventListener('input', function () {
		const re = /^\d*(\.\d+)?$/
	});
}


// слайдер slick баннер на главной
$('.top-banner').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	swipeToSlide: true,  // разрешить пролистывать свайпом более заданного slidesToScroll
	waitForAnimate: false,  // не ждать анимацию при принудительной прокрутке
	arrows: true,
	fade: true
});
// слайдер slick картинки карточки товара на странице товара
$('.prod-card-thumb').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	swipeToSlide: true,  // разрешить пролистывать свайпом более заданного slidesToScroll
	waitForAnimate: false,  // не ждать анимацию при принудительной прокрутке
	arrows: false,
	dots: true
});