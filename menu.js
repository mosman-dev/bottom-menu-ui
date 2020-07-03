const menuButtons = [...document.querySelectorAll('.menu-container ul li')];
const selection = document.querySelector('.selection');
const special = document.querySelector('.special');
const moreOptions = document.querySelector('.more-options');

const moveSelection = (offset) => {
	selection.style.transform = `translateY(-23px) translateX(${offset}px)`;
};

const activeSelection = () => {
	selection.style.height = '1px';
	selection.style.width = '150px';
	selection.style.transform = 'translateY(-23px)';
	selection.style.borderRadius = '0px';
	selection.style.boxShadow = 'none';
};

const inactiveSelection = () => {
	selection.style.height = '20px';
	selection.style.width = '40px';
	selection.style.borderRadius = '50%';
	selection.style.opacity = '1';
	selection.style.boxShadow = '0px -3px 2px rgba(255, 255, 255, 0.5)';
	moveSelection();
};

const reset = () => {
	moreOptions.style.opacity = '0';
	moreOptions.style.visibility = 'hidden';
	menuButtons.map((x) => {
		if (x.classList.contains('active')) {
			x.classList.remove('active');
		}
	});
};

// Menu Buttons

let offsetX = {
	0: -114,
	1: -57,
	2: 0,
	3: 57,
	4: 114,
};

for (let i = 0; i < menuButtons.length; i++) {
	menuButtons[i].addEventListener('mouseover', () => moveSelection(offsetX[i]));

	menuButtons[i].addEventListener('click', () => {
		if (menuButtons[i].classList.contains('special')) {
			if (menuButtons[i].classList.contains('active')) {
				menuButtons[i].classList.remove('active');
				moreOptions.style.opacity = '0';
				moreOptions.style.visibility = 'hidden';
				inactiveSelection();
			} else {
				reset();
				menuButtons[i].classList.add('active');
				moreOptions.style.opacity = '1';
				moreOptions.style.visibility = 'visible';
				activeSelection();
				setTimeout(() => {
					selection.style.width = '64px';
				}, 200);
			}
		} else if (menuButtons[i].classList.contains('active')) {
			menuButtons[i].classList.remove('active');
		} else {
			reset();
			inactiveSelection();
			menuButtons[i].classList.add('active');
		}
	});
}
