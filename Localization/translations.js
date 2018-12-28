// ------------------------------------------------------------------------
// Variables
// ------------------------------------------------------------------------

// default locale to load
let localeUsed = locale_en;

// get all the elements from the html page
let button_lang_en = document.getElementById('language_en');
let button_lang_fr = document.getElementById('language_fr');
let menu_home = document.getElementById('menu_home');
let paragraph_1 = document.getElementById('paragraph_1');
let paragraph_2 = document.getElementById('paragraph_2');
let paragraph_3 = document.getElementById('paragraph_3');
let paragraph_4 = document.getElementById('paragraph_4');
let paragraph_5 = document.getElementById('paragraph_5');
let paragraph_6 = document.getElementById('paragraph_6');
let paragraph_7 = document.getElementById('paragraph_7');
let paragraph_8 = document.getElementById('paragraph_8');
let paragraph_9 = document.getElementById('paragraph_9');
let paragraph_10 = document.getElementById('paragraph_10');
let paragraph_11 = document.getElementById('paragraph_11');
let paragraph_12 = document.getElementById('paragraph_12');
let paragraph_13 = document.getElementById('paragraph_13');
let paragraph_14 = document.getElementById('paragraph_14');
let paragraph_15 = document.getElementById('paragraph_15');
let paragraph_16 = document.getElementById('paragraph_16');
let paragraph_17 = document.getElementById('paragraph_17');
let paragraph_18 = document.getElementById('paragraph_18');
let paragraph_19 = document.getElementById('paragraph_19');
let paragraph_20 = document.getElementById('paragraph_20');
let paragraph_21 = document.getElementById('paragraph_21');
let paragraph_22 = document.getElementById('paragraph_22');
let paragraph_23 = document.getElementById('paragraph_23');
let paragraph_24 = document.getElementById('paragraph_24');
let paragraph_25 = document.getElementById('paragraph_25');


// ------------------------------------------------------------------------
// Functions
// ------------------------------------------------------------------------

// sets a new locale
function SetLocale(locale)
{
	localeUsed = locale;
	Update();
}

// applies the current locale to all elements in the HTML page
function Update () {
	button_lang_en.innerHTML = localeUsed.language_en;
	button_lang_fr.innerHTML = localeUsed.language_fr;
	menu_home.innerHTML = localeUsed.menu_home;
	paragraph_1.innerHTML = localeUsed.paragraph_1;
	paragraph_2.innerHTML = localeUsed.paragraph_2;
	paragraph_3.innerHTML = localeUsed.paragraph_3;
	paragraph_4.innerHTML = localeUsed.paragraph_4;
	paragraph_5.innerHTML = localeUsed.paragraph_5;
	paragraph_6.innerHTML = localeUsed.paragraph_6;
	paragraph_7.innerHTML = localeUsed.paragraph_7;
	paragraph_8.innerHTML = localeUsed.paragraph_8;
	paragraph_9.innerHTML = localeUsed.paragraph_9;
	paragraph_10.innerHTML = localeUsed.paragraph_10;
	paragraph_11.innerHTML = localeUsed.paragraph_11;
	paragraph_12.innerHTML = localeUsed.paragraph_12;
	paragraph_13.innerHTML = localeUsed.paragraph_13;
	paragraph_14.innerHTML = localeUsed.paragraph_14;
	paragraph_15.innerHTML = localeUsed.paragraph_15;
	paragraph_16.innerHTML = localeUsed.paragraph_16;
	paragraph_17.innerHTML = localeUsed.paragraph_17;
	paragraph_18.innerHTML = localeUsed.paragraph_18;
	paragraph_19.innerHTML = localeUsed.paragraph_19;
	paragraph_20.innerHTML = localeUsed.paragraph_20;
	paragraph_21.innerHTML = localeUsed.paragraph_21;
	paragraph_22.innerHTML = localeUsed.paragraph_22;
	paragraph_23.innerHTML = localeUsed.paragraph_23;
	paragraph_24.innerHTML = localeUsed.paragraph_24;
	paragraph_25.innerHTML = localeUsed.paragraph_25;
	
	
}