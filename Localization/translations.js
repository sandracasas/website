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
	
}