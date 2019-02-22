var customSearch;

(function($) {
  "use strict";

  var switchSidebarTab = function(e) {
    var self = $(this),
      target = self.attr('data-toggle'),
      counter_target = target === 'toc' ? 'bio' : 'toc';
    if (self.hasClass('active')) {
      return;
    }
    toggleActive(self, e);
    toggleActive(self.siblings('.dark-btn'), e);
    $('.site-' + counter_target).toggleClass('show');
    setTimeout(function() {
      $('.site-' + counter_target).hide();
      $('.site-' + target).show();
      setTimeout(function() {
        $('.site-' + target).toggleClass('show');
      }, 50);
    }, 240);
  };

  var toggleActive = function(self, e) {
    e.preventDefault();
    if (self.hasClass("active") === true) {
      self.removeClass("active");
    } else {
      self.addClass("active");
    }
  };

  var openBio = function(e) {
    var self = $(this);
    toggleActive(self, e);
    $('body').addClass('bio-open');
  };

  var closeBio = function(e) {
    $('body').removeClass('bio-open');
    toggleActive($('.site-nav-switch'), e);
  };

  $(function() {
    $(".post-list, #footer, #page-nav").addClass('show');
    $('.site-nav-switch').on('click', openBio);
    $('.site-wrapper .overlay').on('click', closeBio);
    $('.sidebar-switch .dark-btn').on('click', switchSidebarTab);
    $('.catalog').on('click', '.catalog-item', function(e) {
      closeBio(e);
      location.hash = this.dataset.id;
    });

    setTimeout(function() {
      $('#loading-bar-wrapper').fadeOut(500);
    }, 300);

  });

})(jQuery);
