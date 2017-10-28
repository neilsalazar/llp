//When hovering over icons change them from dark gray icon to blue icon while keeping them linkable to sites

//When hovering on an icon img remove gray icon img from page & When leaving icon img add blue icon to page in the same position 
var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
    $('.social_links img').hover(sourceSwap, sourceSwap);
});

//Image carousel
var $image = $('.mainImg');

//Have main image rotate on a timer
window.setInterval(changeImage, 7000);
var $imageArray = new Array ('images/wedd23.jpg', 'images/wedd02.jpg', 'images/wedd13.jpg');
var index = 1;

//Image fades out
function changeImage() {
	$image.fadeOut('slow', function() 
  {
    $(this).attr('src', $imageArray[index]);
    
    $(this).fadeIn('slow', function() 
    {
      if (index == $imageArray.length-1)
      {
        index = 0;
      }
      else
      {
        index++;
      }
    });
  });
}


//Allow image to be chosen based on dot clicked