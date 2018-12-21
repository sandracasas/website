let current_page_id = 'page_home';

function swap_content(page_id) {
	document.getElementById(current_page_id).className = "page";
	current_page_id = page_id;
	document.getElementById(current_page_id).className = "pageFocus";
}