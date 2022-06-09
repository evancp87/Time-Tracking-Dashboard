# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The app](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The app

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Screenshot of my app](./screenshot.jpg)

### Links

- Solution URL: [My solution on FEM ](https://www.frontendmentor.io/solutions/time-tracking-dashboard-built-with-sass-js-css-grid-uumy6wVeMs)
- Live Site URL: [Netlify](https://fem-time-tracking-dash.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Code I am proud of:

I was happy to have used CSS Grid as the main basis of my app architecture for the first time, as opposed to smaller components

```css
.dashboard-grid {
  display: grid;
  grid-auto-rows: minMax(199px, auto);
  justify-content: center;
  grid-gap: 1em;
}

.card-grid {
  display: grid;
  height: auto;
}

.activity-icon {
  display: grid;
  grid-column: 1/2;
  grid-row: 1/3;
  justify-content: end;
}
}
```

CSS Grid threw a few curveballs my way, for example I really struggled to get the user card to overlap the bottom card with the buttons. I solved it by using z-index, which i didn't know could be used in Grid, as opposed to an absolutely/relatively positioned element.

I ended up using flex for positioning elements inside of the grid, but i would like to practice using nested Grids, perhaps with the new Subgrid.

A couple of bits of markup were initially wrong, and thanks to feedback from the Slack channel i was able to amend. I had used h3 elements instead of buttons for the duration tabs on the user card. The app was a work in progress at the time, but the feedback reminded me to look out for those finer details and data points.

```js
getData().then((data) => {
      const currHrs = data[index].timeframes[btn.dataset.btn].current;
      const prevHrs = data[index].timeframes[btn.dataset.btn].previous;

      switch (btn.dataset.btn) {
        case "daily":

          prevActivity.innerHTML = `<h3 class='curr-hrs'> ${currHrs} hrs</h3>
      <p class='previous-hrs'>Last Week - ${prevHrs} hrs</p>`;
        case "weekly":
          ...
```

I found the Javascript challenging at first, mainly because I felt i had worked on more complicated projects in the past, and also my approach to the logic was incorrect at first. My initial approach was to make an async await api call with an iteration, and then to get the cards with another iteration. I had to research the issues, and i found out i needed to save the response from the api as a string, with javascript expressions.

I also wrote too much logic in my click event listener, and way too many loops! I stripped everything out of the click listener, and wrote the program to be far more DRY.

In my research i learned about dataset attributes and how to read from them in Javascript, which avoids accessing the DOM through ids and classes.

I also used a DomContentLoaded event listener for the first time, to load the initial state of the app

### Continued development

Recent projects i have been using BEM methodology in my css (not in this challenge though), and in my next few projects i want to experiment with CSS Modules for globally scoped styles as an alternative. I also want to try out automating packages like Grunt or Gulp. While it's good to use vanilla Javascript, i will probably move onto using React for my next FEM project.

I want to continue to develop my JS by writing concise and clean functions that is DRY and maintainable.

### Useful resources

- [MDN dataset attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

## Author

- Website - [My personal portfolio](https://www.evanparker.co.uk)
- Frontend Mentor - [@evancp87](https://www.frontendmentor.io/profile/evancp87)
