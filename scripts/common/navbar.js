define(function () {
    var selector = {
        navItem: '.navbar-nav>li>a'
    };
    var $navItems = $(selector.navItem);
    var path = location.pathname;

    $navItems.parent().removeClass('active');
    
    $navItems.each(function () {
        
        if ($(this).attr('href').indexOf(path) >= 0) {
            $(this).parent().addClass('active');
        }
    });
});