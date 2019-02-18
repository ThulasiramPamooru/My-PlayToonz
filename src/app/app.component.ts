import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'MARIMicroSite';
    constructor(private http: HttpClient) { }

    myInterval = 20000;
    activeSlideIndex = 0;

    slides = [];

	contents = [
        { heading: "heading1", sub: "label1", content: "content1", image: "assets/images/nature/image1.jpg" },
        { heading: "heading1", sub: "label1", content: "content1", image: "assets/images/nature/image2.jpg" },
        { heading: "heading1", sub: "label1", content: "content1", image: "assets/images/nature/image3.jpg" },
        { heading: "heading1", sub: "label1", content: "content1", image: "assets/images/nature/image4.jpg" },
        { heading: "heading1", sub: "label1", content: "content1", image: "assets/images/nature/image5.jpg" },
        { heading: "heading1", sub: "label1", content: "content1", image: "assets/images/nature/image6.jpg" },
        { heading: "heading1", sub: "label1", content: "content1", image: "assets/images/nature/image7.jpg" },
        { heading: "heading1", sub: "label1", content: "content1", image: "assets/images/nature/image8.jpg" }
		];
    ngOnInit() {
     $(document).ready(function(){
	  // Add smooth scrolling to all links in navbar + footer link
	  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 900, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });
  
	  $(window).scroll(function() {
		$(".slideanim").each(function(){
		  var pos = $(this).offset().top;

		  var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
			  $(this).addClass("slide");
			}
		});
	  });
	})
}


}