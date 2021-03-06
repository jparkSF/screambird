# ClappyBird (Javascript Game)

## Wireframes
![ClappyBrid](https://github.com/jparkSF/ClappyBird/blob/master/assets/images/picture1.png?raw=true)

![ClappyBrid](https://github.com/jparkSF/ClappyBird/blob/master/assets/images/picture2.png?raw=true)

![ClappyBrid](https://github.com/jparkSF/ClappyBird/blob/master/assets/images/picture3.png?raw=true)

## Game Concept
ClappyBird is another version of [Flappy Bird](https://www.google.com/search?q=flappy+bird&oq=flappy+bird&aqs=chrome..69i57.5039j0j1&sourceid=chrome&ie=UTF-8).
However, the key difference of this game from the original version is to use audio device(built-in microphone) to simulate the touch function to keep the bird flying in the air.

* This game will not work if user does not allow microphone access from the browser.
* If that is the case, developing the game to use keys or mouse click to activate the movement of the bird.

## Game Play

* The object of this game is to guide a flying bird
* The bird flies continuously to the right between the pipes
* Player has to press key or click to flaps upward each time to precisely balance the bird in between the pipes
* If the bird touches the ground or pipe, player loses.


## Architecture and Technologies

* Vanilla Javascript for overall structure and game logic
* `HTML5 Canvas` for DOM manipulation and rendering
* `Web Audio API` for sound generation, processing
* `p5.js` for creating graphic and interactive experiences
* Webpack to bundle and serve up the various scripts.


`bird.js` will contain the basic logic and movement of the bird object
`board.js` will hand the logic for creating and updating DOM elements and background.
`audio.js` will handle the audio logic and the creation of `AudioEvents` based on the input


## Minimum Viable Product
- [ ] Basic graphic representation of the background
- [ ] Proper rendering of moving objects(bird, pipes)
- [ ] Listen to mouse click or key press to play
- [ ] Time Score Board


## Expected Struggles in Dev

* Integrating audio component and browser api with JS
* Adequate UI
