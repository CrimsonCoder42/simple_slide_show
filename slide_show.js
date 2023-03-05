// Define an enum to represent the different slides in the slide show
var Slide;
(function (Slide) {
    Slide[Slide["First"] = 0] = "First";
    Slide[Slide["Second"] = 1] = "Second";
    Slide[Slide["Third"] = 2] = "Third";
    Slide[Slide["Fourth"] = 3] = "Fourth";
})(Slide || (Slide = {}));
// Define a SlideShow class to encapsulate the logic for the slide show
var SlideShow = /** @class */ (function () {
    // Define a constructor to initialize the current slide and slides array
    function SlideShow() {
        // Initialize the current slide to the first slide in the enum
        this.currentSlide = Slide.First;
        // Initialize the slides array with four new Image objects
        this.slides = [
            new Image(),
            new Image(),
            new Image(),
            new Image()
        ];
        // Set the src property of each image to the corresponding slide image file
        this.slides[Slide.First].src = "images/slide1.jpg";
        this.slides[Slide.Second].src = "images/slide2.jpg";
        this.slides[Slide.Third].src = "images/slide3.jpg";
        this.slides[Slide.Fourth].src = "images/slide4.jpg";
    }
    // Define a method to advance to the next slide in the slide show
    SlideShow.prototype.nextSlide = function () {
        // Calculate the index of the next slide in the slides array, taking into account the length of the Slide enum
        var nextSlideIndex = (this.currentSlide + 1) % this.slides.length;
        // Update the slide image displayed on the page
        this.updateSlide(nextSlideIndex);
    };
    // Define a method to go back to the previous slide in the slide show
    SlideShow.prototype.prevSlide = function () {
        // Calculate the index of the previous slide in the slides array, taking into account the length of the Slide enum
        var prevSlideIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        // Update the slide image displayed on the page
        this.updateSlide(prevSlideIndex);
    };
    // Define a private method to update the slide image displayed on the page
    SlideShow.prototype.updateSlide = function (slideIndex) {
        // Get the HTMLImageElement object with id "slide" from the page
        var slideImage = document.getElementById("slide");
        // Set the src property of the image to the src of the current slide in the slides array
        slideImage.src = this.slides[slideIndex].src;
        // Update the current slide property
        this.currentSlide = slideIndex;
    };
    return SlideShow;
}());
// Crete new instance of the SlideShow class
var slideShow = new SlideShow();
// Add event Listeners
document.getElementById("next").addEventListener("click", function () { return slideShow.nextSlide(); });
document.getElementById("prev").addEventListener("click", function () { return slideShow.prevSlide(); });
