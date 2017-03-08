(function($) {

Drupal.behaviors.MenuToggleClass = {
  attach: function(context) {
    $('.navbar-toggle').once('navbar-toggle', function(){
      $(this).click(function(){
        var selector = $(this).attr('data-target');
        if($(selector + ':visible').length == 0) {
          $(this).addClass('active');
        }
        else {
          $(this).removeClass('active');
        }
      });
    });
  }
};

Drupal.behaviors.FocusIcon = {
  attach: function(context) {
    $('.has-icon').once('has-icon', function(){
      var wrapper = $(this),
          inp_item = wrapper.find('input');
      inp_item.focusin(function() {
        wrapper.addClass('focused');
      }).focusout(function() {
        wrapper.removeClass('focused');
      });
    });
  }
};

Drupal.behaviors.MoreText = {
  attach: function(context) {
    $('#more-text-link').once('more-text-link', function(){
      var text = $('#more-text');
      $(this).click(function(){
        text.toggleClass('expanded');
        return false;
      });
    });
    $('.more-text-link').once('more-text-link-add', function(){
      var lnk = $('#more-text-link');
      $(this).click(function(){
        lnk.click();
      });
    });
    
  }
};

$(window).scroll(function(e){
  console.log($(window).scrollTop());
  if($(window).scrollTop() > (10)) {
    $('#navbar').addClass('scrolled');
  }
  else {
    $('#navbar').removeClass('scrolled');
  }
});

})(jQuery);
;
