define(function () {
    var selector = {
        navbar: '[data-navbar]'
    };
    var $navItems = $(selector.navbar).find('li>a');
    var path = location.pathname;

    $navItems.parent().removeClass('active');

    $navItems.each(function () {
        var $this = $(this);
        var level = parseInt($this.attr('data-level'), 10);
        var href = $this.attr('href');
        var tmpPath;

        if (level === 2) {
            var index = path.lastIndexOf('/');
            tmpPath = path.slice(0, index);
        } else {
            tmpPath = path;
        }

        if (href.indexOf(tmpPath) >= 0) {
            $this.parent().addClass('active');
        }
    });
});