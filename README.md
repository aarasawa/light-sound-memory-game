# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Alex Arasawa

Time spent: 10 hours spent in total

Link to project: https://glitch.com/edit/#!/horse-ringed-auroraceratops

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
    http://g.recordit.co/x5CC2Ncb7h.gif
    http://g.recordit.co/BohMc7hmVZ.gif


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    
    https://www.w3schools.com/howto/howto_js_countdown.asp
    JavaScript - David Flanagan

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    
    Having to deal with the way the three files interacted. Programming in HTML, CSS, and JS is new to me since I have mainly been programming in C++ and Python. Learning how they were able to interact and trying to understand the rules between the three languages was very fun. I used some online resources and consulted a book on JS. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    
    How would someone link a database to a website?
    Typically how many files are there per website?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    First, I would mete out the game logic a little bit more so that after a certain amount of time the sequence plays again. Also I would make it so that if the player tried to spam some buttons it would could read those. Additionally, if the player gets something wrong they would need to enter the sequence correctly from the start again. The way it currently behaves the player has to continue from where they made the mistake otherwise it registers the previous input as an error.



## License

    Copyright Alex Arasawa

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
