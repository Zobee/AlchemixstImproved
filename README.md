Alchemixst

V 0.0.0

------PAGE TRANSITION------
*Aesthetic transition effect on page load, change. I'll need to do some testing to make sure it isn't too annoying to use. I really like how it looks, though. Not sure if I should use an image, or keep it as is.
*Added a function to generate a random hex code and get the b/w contrast for the background and text. I think it looks cool, but again, does it provide any value? Is there any substance to it?
*Refactored to make the shutters their own component. 

TODO:
*I'm gonna need to mess with the timing of the transition as well. It can't be too long, or too noticable.
*Maybe I should add a shutter up transition as well

------HEADER------
*Mobile responsive header with dropdown
*Created a bunch of header components: dropdown button, dropdown section
*Conditionally render one or the other based on screen size

TODO:
*I realized that I fucked up when I created the DT nav links, might need to refactor later
*Need to figure out Z-indexing for dropdown. Currently it slides in on top of the navbar
*Need to style it more. It looks a little amateurish, right now

------HOME PAGE------
*Super stylized header
*A metric fuckton of animations and transitions
*Social Media buttons
TODO: 
*Figure out how to make the header swap 
*Newest Track Link
*Email submission?

------STORE------
TODO: This is where the backend is going to come into play

------DRUM PAD------
TODO: I already know that my biggest issue is gonna be making this mobile responsive

------BACKEND------


V 0.0.1

Unrelated, but I should learn git before my next commit

Lots of refactoring. It does take some time, but I can see the benefits of cleaning up code this way. It also makes it way easier to pinpoint problems, since I can just isolate the problematic ass component. More importantly, things seem way less overwhelming now.

I should probably do the same with the css file. Having it all condensed is getting kind of annoying.

Button adjustments. Main style, and colors to match the services

Removed beats since it would be redundant.

Scaffolded the drumpad page. Seriously, splitting everything up like this makes things way easier to work with. There's a chance I'll need to use context if things get to layered, but I'll cross that bridge when I get there.

I've got the pads working. The issue is that I've set up each pad with state. It's probably not the best idea to have 16 event-listeners get created every time a key is pressed.