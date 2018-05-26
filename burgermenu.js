var menu01 = new MobileMenu;

menu01.init();

function MobileMenu() {

	// set variables
	var $body = $('body');
	var $btnMenu = $('.btn-menu');
	// get the nav li elements from the
	// desktop menu
	var navLiHTML = $('header nav ul').html();
	// create the mobile menu from the desktop li elements...
	var mobileNavHTML = $('<nav class="mobile-nav"><ul>' + navLiHTML + '</ul></nav>');

	// Add the mobile menu to the main element...
	$('main').prepend(mobileNavHTML);

	// select the newly created mobile menu
	var $mobileNav = $('.mobile-nav');

	// select all the "a" links that have a
	// sub menu
	var $dd = $('.mobile-nav .dd');

	// initialization method for the
	// MobileMenu class
	this.init = function () {

		// measure height of menu in open state
		// then close the menu
		$body.addClass('show');
		var mobileNavOriginalHeight = $mobileNav.height();
		var mobileNavHeight = $mobileNav.height();
		$body.removeClass('show');

		// Open all the menus and the sub menus
		// and measure the height of each
		// sub menu then close all the
		// sub menus
		$body.addClass('show');
		$('.mobile-nav .dd').addClass('dd-show');
		// Loop through the sub menus add get the height
		// of the sub menus and set a data attribute to
		// that height
		$('.mobile-nav .dd').each(function () {
			var theHeight = $(this).next().height();
			$(this).next().attr('data-height', theHeight);
		}); // end each...
		// Close the menu and the sub menus
		$body.removeClass('show');
		$('.mobile-nav .dd').removeClass('dd-show');

		// Click event handler for the mobile menu
		$btnMenu.click(function () {
			// check if body element has the
			// class show
			if ($body.hasClass('show')) {
				// menu is open...
				// remove any heights set on the mobile nav
				$mobileNav.removeAttr('style');
				// remove the "show" class from the body
				// element
				$body.removeClass('show');
				// remove any heights set on the sub
				// menus
				$dd.next().removeAttr('style');
				// remove the "dd-show" class from the
				// links that have sub menu items
				$dd.removeClass('dd-show');
			} else {
				// menu is closed...
				// set height of mobile menu to the open height
				$mobileNav.css('height', mobileNavOriginalHeight);
				// add the class "show" to the body element
				$body.addClass('show');
			} // end if menu is open...

		}); // end mobile menu click event handler

		$dd.click(function () {
			// check if this sub menu link
			// is open
			if ($(this).hasClass('dd-show')) {
				// this sub menu is open...
				// get current height of mobile menu
				mobileNavHeight = $mobileNav.outerHeight();
				// set new height of mobile menu by taking the
				// existing height of the mobile menu and
				// subtracting the height of the sub menu that
				// was clicked on...
				$mobileNav.css('height', (mobileNavHeight - $(this).next().data('height')));
				// remove the height style that was applied to this
				// sub menu
				$(this).next().removeAttr('style');
				// remove the "dd-show" class from the sub menu link
				// that was clicked on
				$(this).removeClass('dd-show');
			} else {
				// this sub menu is closed
				// remove any height styles applied
				// to any sub menus
				$dd.next().removeAttr('style');
				// remove the "dd-show" class from
				// any sub menu link elements
				$dd.removeClass('dd-show');
				// set the new height of the
				// mobile menu by adding the
				// height of mobile navs orginal
				// open state height to the height
				// of the sub menu item that was
				// clicked on
				$mobileNav.css('height', (mobileNavOriginalHeight + $(this).next().data('height')));
				// set the height of the sub menu that
				// was clicked on
				$(this).next().css('height', $(this).next().data('height'))
				// add the "dd-show" class to
				// sub menu link that was clicked on...
				$(this).addClass('dd-show');
			} // end if sub menu is open
		}) // end sub menu click event handler

	} // end init()

} // end MobileMenu Constructor
