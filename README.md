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
- Keeping CSS manageable
  - Write all the HTML first! This includes dropdown menu contents, aside menus, etc.
  - If you want several elements in different places to have the same width/spacing/etc., create a container for them instead of setting margins for each element individually
  - When designing HTML (before writing code), also think about the states different elements will be in and what states will be shared between different elements. Not doing so seems to result in CSS sprawl
  - Don't mix utility CSS classes and CSS for specific elements. I tried doing that this project and it ended with a big mess. Either go all in or keep styling elements individually