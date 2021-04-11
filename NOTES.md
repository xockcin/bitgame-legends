### 4/7/21

BL is essentially an interactive slideshow. Every slide will have the following attributes:
Text: a string.
BitCount: a number between 1 and 8.
Number: a number between 0 and 2^BitCount.
Toggle: a boolean.
Buttons: a string.
Moves: a boolean
Goal: an optional number between 0 and 2^BitCount

BitCount is the number of bits, and Number is the initial state of the bits. Toggle is a boolean that determines whether or not the user can toggle the bits by clicking on them. Buttons is a string that determines which bitmove buttons are present. Moves is a boolean that determines whether or not the bitmoves get recorded. Goal is an optional goal number.

If BitCount is 8, Toggle is false, Buttons is "+<~>-", Moves is true, and there is a Goal, then the slide is a fully-featured bitgame. 