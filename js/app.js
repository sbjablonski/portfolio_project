$(document).ready(function(){
    var $container = $('#container').masonry({
    columnWidth: 20
    });

    $('.piece').on('mouseover', function(){
        var srcNow = $(this).children('img').attr('src');
        if (srcNow.indexOf('-thumb.png') === -1)
            $(this).children('.description').css('display','block').fadeIn(400);
    });

   $('.piece').on('mouseleave', function(){
            $('.description').css('display','none');
    });

    $container.on( 'click', '.item-content', function() {
        $container.masonry();
        var srcClick = $(this).children('img').attr('src');
        var srcFull = srcClick.replace('-thumb.png','.png');
        var srcThumb = srcClick.replace('.png','-thumb.png');
        $(this).parent('.item').toggleClass('is-expanded');
        if ($(this).parent('.item').hasClass('is-expanded'))
            $(this).children('img').attr('src', srcFull);
        else $(this).children('img').attr('src', srcThumb);
        $container.masonry();
    });

   var lastUsed = null;
   $('.item').on('click', function(value){
        $container.masonry();
        prevClicked = lastUsed;
        lastUsed = value;
        var rmvImg = prevClicked.currentTarget;
        if (rmvImg == this){

        }
        else if (lastUsed != prevClicked){
            if ($(rmvImg).hasClass('is-expanded')){
                $(rmvImg).removeClass('is-expanded');
                var rmvImgSrc = $(rmvImg).find('img').get(0);
                var rmvImgSrcThumb = $(rmvImgSrc).attr('src').replace('.png','-thumb.png');
                $(rmvImgSrc).attr('src',rmvImgSrcThumb);
            }
        };
        $container.masonry();
   });

    $('li').on('click', function(){
        $('li').toggleClass('sectionSelected');
    });

    $('.allButton').on('click', function(){
        $container.masonry();
        $('li').css('color','#686866')
        $(this).css('color','#E3E3DF');
        $(".editoral").show();
        $(".personal").show();
        $(".commercial").show();
        $container.masonry();
    });

    $('.editorialButton').on('click', function(){
        $container.masonry();
        $('li').css('color','#686866')
        $(this).css('color','#E3E3DF');
        $(".editoral").show();
        $(".personal").hide();
        $(".commercial").hide();
        $container.masonry();
    });

    $('.commercialButton').on('click', function(){
        $container.masonry();
        $('li').css('color','#686866')
        $(this).css('color','#E3E3DF');
        $(".editoral").hide();
        $(".personal").hide();
        $(".commercial").show();
        $container.masonry();
    });

    $('.personalButton').on('click', function(){
        $container.masonry();
        $('li').css('color','#686866')
        $(this).css('color','#E3E3DF');
        $(".editoral").hide();
        $(".personal").show();
        $(".commercial").hide();
        $container.masonry();
    });

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y < 200) {
    $('.navMast').fadeOut();
  } else {
    $('.navMast').fadeIn();
  }
});

});