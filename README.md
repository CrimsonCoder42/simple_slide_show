# TypeScript Assignment: Image Slide Show App

This is an assignment to implement an image slide show app using enums in TypeScript. The app should work in an HTML document after compiling the TypeScript code.

## Files to Submit

Please submit the following files, assuming that you name them as follows:

- slide_show.ts
- slide_show.js
- Slide_show.html
- tsconfig.json

## Steps to Implement

1. Create a new TypeScript file named slide_show.ts.
2. Define an enum named Slide with four values to represent the different slides in the slide show.
3. Define a SlideShow class with two private fields: currentSlide and slides.
4. In the constructor of the SlideShow class, initialize the currentSlide field to the first slide in the Slide enum, and the slides field with four new Image objects.
5. Set the src property of each Image object in the slides array to the corresponding slide image file.
6. Define two public methods on the SlideShow class: nextSlide() and prevSlide(). These methods should advance to the next slide or go back to the previous slide, respectively. They should also call a private method named updateSlide() to update the slide image displayed on the page.
7. Define a private method named updateSlide() on the SlideShow class. This method should update the src property of the HTMLImageElement object on the page to the URL of the current slide in the slides array.
8. Create a new instance of the SlideShow class and store it in a variable.
9. Add event listeners to the "prev" and "next" buttons on the page, which call the prevSlide() and nextSlide() methods of the SlideShow instance when clicked.
10. Compile the TypeScript code to JavaScript using the tsc command.
11. Create an HTML file named Slide_show.html.
12. Link the slide_show.js file to the HTML file using a script tag.
13. Add an img tag to the HTML file with an id of "slide".
14. Add "prev" and "next" buttons to the HTML file, with ids of "prev" and "next", respectively.
15. Open the HTML file in a web browser to view and test the slide show app.

## Conclusion

Implementing an image slide show app using enums in TypeScript is a great way to learn about TypeScript classes, enums, and DOM manipulation. With the steps outlined above, you can create a simple but functional slide show app that can be easily extended and customized to meet your needs.
