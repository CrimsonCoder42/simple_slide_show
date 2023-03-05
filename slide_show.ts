// Define an enum to represent the different slides in the slide show
enum Slide {
    First,
    Second,
    Third,
    Fourth
}

// Define a SlideShow class to encapsulate the logic for the slide show
class SlideShow {
    // Define a private property to store the current slide
    private currentSlide: Slide;

    // Define a private property to store the slides
    private slides: HTMLImageElement[];

    // Define a constructor to initialize the current slide and slides array
    constructor() {

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
    public nextSlide() {
        // Calculate the index of the next slide in the slides array, taking into account the length of the Slide enum
        let nextSlideIndex = (this.currentSlide + 1) % this.slides.length;

        // Update the slide image displayed on the page
        this.updateSlide(nextSlideIndex);
    }


    // Define a method to go back to the previous slide in the slide show
    public prevSlide() {
        // Calculate the index of the previous slide in the slides array, taking into account the length of the Slide enum
        let prevSlideIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;

        // Update the slide image displayed on the page
        this.updateSlide(prevSlideIndex);
    }


    // Define a private method to update the slide image displayed on the page
    private updateSlide(slideIndex: number) {
        // Get the HTMLImageElement object with id "slide" from the page
        let slideImage = document.getElementById("slide") as HTMLImageElement;

        // Set the src property of the image to the src of the current slide in the slides array
        slideImage.src = this.slides[slideIndex].src;

        // Update the current slide property
        this.currentSlide = slideIndex;
    }
}

// Crete new instance of the SlideShow class
let slideShow = new SlideShow();

// Add event Listeners
document.getElementById("next").addEventListener("click", () => slideShow.nextSlide());

document.getElementById("prev").addEventListener("click", () => slideShow.prevSlide());
