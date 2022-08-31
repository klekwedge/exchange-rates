# Task for Safedea frontend Intern

It is necessary to lay out an adaptive page with a list of photos.

When you click on a photo, a modal window opens with a photo, a list of comments and a form for adding comments.

Handle List:
* GET https://boiling-refuge-66454.herokuapp.com/images - get a list of photos.
* GET https://boiling-refuge-66454.herokuapp.com/images/:imageId - Get a large image and list of comments.
* POST https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments - adding a comment (204 - OK, comment not saved).

We will be grateful if:
- the application will start locally after npm i && npm run start;
- the application is written in React;
- no external components are used, for example, a modal window;
- UX taken into account.