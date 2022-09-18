# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5).

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./desktop-design.jpg)

### Links

- Solution URL: [Github](https://github.com/jeremylloyd/Company-Intro)
- Live Site URL: [Github Pages](https://jeremylloyd.github.io/Company-Intro/)

## My process

### Built with

- MS Paint (HTML Design)
- HTML
- CSS
- JS

### What I learned

- Applying transitions only after the page loads
  - If you apply CSS transitions to DOM elements, the transitions will activate upon the page loading.
  - To override this wonky behaviour:
    1. Set the `<body>` element to have the `class="preload"`
    2. Set all children of the body to have no transitions:
      ```
      .preload * {
        transition: none !important;
      }
      ```
    3. Remove the preload class when the page is finished loading:
      ```
      elements = document.getElementsByClassName("preload");

      window.onload = function () {
        for (i = 0; i < elements.length; i++) {
          elements[i].classList.remove("preload");
        }
      };
      ```