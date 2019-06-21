# FEND-Arcade-Game

## Quickstart

-   Download the project from github through the link provided in it.
-   Open the downloaded folder.
-   Folder has the sub-folders (`css/style.css`)
-   Locate the file `index.html` and open it with a Browser.
-   observe the errors in the console and start working to solve it.

## Dependencies

-   SweetAlert.


## Code Modification:

### I made following steps in order to develop this game.


-   I opened the `index.html` file with web browser and i found a blank page.
-   I came to understand that ,need to make some changes in the `app.js` file.
-   I created a class named `Player` using `object oriented JavaScript`.
-   And i defined coordinates with variables (`x,y`) and image with variable `spirit` for `Player`.
-   After making this changes i had seen `Player` in play area.
-   Then defined  _Player.prototype.handleInput_ to the Player using `switch case` control statements. This function enable Player to move in the direction programmed with assigned lengths.
-   The class for `enemy` is already provided in the skeleton project. And positions for the `enemies`are allocted using a array named `enemyLocations[]`.
-   Now for the motion of `enemies` i have used `random()` method and this method makes the `enemies` to move with different speeds.
-   And we know that the game is all about `Player` crossing the area without coming in contact with `enemies`.This is nothing,but collision of coordinates of `player` and `enemies`.
-   So, instructions (`code`) are given in such a way that if both coordinates of `player` and `enemies` are `equal` then the player will be back to his starting position with the score gained till then,with a popup `Sorry you lost the game`.
-   if the `Player` scores 100 points then the game is completed and the popup is raised with a message 'title'= `congratulations` `You Have Successfully Completed the Game with Points` .      
-   `SweetAlert` is used to display the pop-ups.

### How to play the game .

-   open the `index.html` file using compatible web browser.  
-   use direction keys to make the `Player` cross without coming in contact with `enemies`.
-   Each crossing makes you gain `10` points and if u score `100` points then the game is completed.
-   And the important thing is `we should have internet connection` for downloading `SweetAlert`.
### Keys:

-   Upward key -`it is used to make player move in forward direction`.
-   Downward key -`it is used to make Player move in backward direction`.
-   left key -`it is used to make Player move left`.
-   right key -`it is used to make Player move right`.
