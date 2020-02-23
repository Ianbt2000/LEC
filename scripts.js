$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel();
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
      
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
      $("#myCarousel").carousel("next");
    });
  });
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
  $(function () {
    $('.example-popover').popover({
      container: 'body'
    })
  })

  URL(scripts/boostrap)
  URL(scripts/jquery)
  URL(scripts/popper)

  src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"

  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"

  src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
