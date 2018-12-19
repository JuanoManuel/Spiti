    $(document).ready(function(){
      $('.your-class').slick({
      	centerMode: false,
        slidesToShow: 3,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
	        {
	        	breakpoint: 540,
	        	settings: {
	        		arrows: false,
	        		centerMode: true,
	        		centerPadding: '60px',
	        		slidesToShow: 1
	        	}
	        }
        ]
      });
    });