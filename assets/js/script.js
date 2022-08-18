/*Index*/

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const buttonMenu = document.querySelectorAll('.menu__button');
const socialmediabuttonMenu = document.querySelectorAll('.menu__social-media-button');

if(iconMenu){
	iconMenu.addEventListener("click", function(){
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
		document.body.classList.toggle('lock');
	});

	buttonMenu.forEach(buttonMenu =>{
		buttonMenu.addEventListener("click", function(){
			iconMenu.classList.remove('active');
			menuBody.classList.remove('active');
			document.body.classList.remove('lock');
		});
	});

	socialmediabuttonMenu.forEach(socialmediabuttonMenu =>{
		socialmediabuttonMenu.addEventListener("click", function(){
			iconMenu.classList.remove('active');
			menuBody.classList.remove('active');
			document.body.classList.remove('lock');
		});
	});
}

/*Comic*/

let page = 1;

for(let i=1;i<=page;i++){
	document.querySelector('.reader').innerHTML += `<div class="reader__page active">
		<img src="horizon/chapter_1/${i}.svg" class="reader__image" style="width: 700px; min-width: auto;">
	</div>`
}

/*Function*/

function about()
{
	location.href='#id-about';
}

function comic()
{
	location.href='#id-comic';
}

function rarity()
{
	location.href='#id-rarity';
}

function faq()
{
	location.href='#id-faq';
}

function team()
{
	location.href='#id-team';
}

function comic__1(){
	location.href='assets/comics/comic.html';
}

function opensea(){
	location.href='https://opensea.io/DeCeCo';
}

function comic__index(){
	location.href='../../index.html';
}

function root(){
	location.href='#id-root';
}

function discord(){
	location.href='https://discord.gg/vKKdVAssHs';
}