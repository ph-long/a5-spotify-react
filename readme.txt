--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--
Name: Philip Long
Name: Devesh Krishan
email: longp2@uci.edu
email: dkrishan@uci.edu
UCI id: 53795948
UCI id: 55236595
A5 Group 14

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

15/15
- 1/1 Communication with the Webserver
- 5/5 Spotify Browser Home Page
- 3/3 Spotify Browser Artist Page
- 2/2 Spotify Browser Album Pag
- 2/2 Spotify Browser Track Page
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale


2. How long, in hours, did it take you to complete this assignment?
12 hours


3. What online resources did you consult when completing this assignment? (list specific URLs)
https://www.w3schools.com/react/react_router.asp
https://legacy.reactjs.org/docs/hooks-intro.html
https://www.freecodecamp.org/news/react-hooks-fundamentals/
https://www.w3schools.com/react/react_hooks.asp
https://react-bootstrap.github.io/components/carousel/
https://react-bootstrap.github.io/components/progress/
https://legacy.reactjs.org/docs/faq-ajax.html
https://stackoverflow.com/questions/60864445/is-there-a-way-to-do-an-api-call-only-once-in-react-functional-component
https://blog.logrocket.com/usestate-vs-useref/
https://legacy.reactjs.org/docs/components-and-props.html
https://ui.dev/react-router-query-strings


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
Philip Long and Devesh Krishan worked on the assignment as partners


5. Did you add a bonus feature to your submission? If so, what is it and how should we see it?
Nope

6. Explaining features
    Communication with the Webserver: We communicated with the webserver in the ./client/data/Service.ts file. 

    Spotify Browser Home Page: The Spotify Browser Home page was implemented in the ./client/component/Home.js with 
        the search and about components in ./client/component/About.js and ./client/component/Search.js.
        
    Spotify Browser Artist Page: The Spotify Browser Artist page was implemented in the ./client/component/ArtistPage.js with 
        the Carousel component in the ./client/component/CarouselComponent.js.

    Spotify Browser Album Page: The Spotify Browser Album page was implemented in the ./client/component/AlbumPage.js with 
        the TrackList component in the ./client/component/TraackList.js.

    Spotify Browser Track Page: The Spotify Browser Track page was implemented in the ./client/component/TrackPage.js with 
        the Thermometer component in the ./client/component/Thermometer.js.

7. Is there anything special we need to know in order to run your code?
cd into client and webserver folders
run npm install for both folders to install dependencies and node_modules folders
add client_secret.json file with a Spotify token to the webserver folder and a new tokens.json
use npm start on client folder to run client
use npm start on webserver folder to run server
