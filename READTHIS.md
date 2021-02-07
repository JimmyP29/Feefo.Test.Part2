# What I've done...
![My attempt](./my-design.PNG?raw=true)

I have implemented the requirements as follows:

- I have recreated the design using a series of functional components, all of which include **prop-types**.
- I have closely recreated the design visually as best as I could. I removed all the enclosed **css** and used **Styled Components** instead, please find these within the `styles` folder.
- Using **Flexbox** I have created Grid components _(which you can find in `styles/grid.js`)_ for use in the UI to make it responsive _(not so much on mobile)_ within the Viewport.
- Icons implemented from **fortawesome** and wrapped in `<span aria-hidden="true"></span>` to aid with **A11y**. I am pleased to have been asked to do this as sadly, I have never worked anywhere where this has been a consideration at all.
- The design is driven by the static data provided, the percentage data is calculated on the fly when rendered - so feel free to change it.
- The percentage calculations also have some validation applied to deal with non-legal values and the UI responds with user friendly error messages as a result.
- **Jest tests**, I have created a number of test suites that cater for the rendering of components as well as the aformentioned validation. You can checkout `testData.js` to find the cases used for both happy and sad paths, these are in turn being fed into tests using `describe.each()`. Coming from using **Enzyme** I am new to the world of The React Testing Library and as such there is definitely room for improvement! :grin:


## What I have also done...
- Amended the link in the README to point the reference image instead of a boken link :smile:.
- I wasn't sure what the purpose of the Info icon was, so feel free to hover over it for a **small surprise**. 




