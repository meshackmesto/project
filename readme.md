#DATE:12/04/2024

#BY:MESHACK ORINA



#DESCRIPTION:PROJECT

This code is a simple meme generator that fetches memes from the "wholesomememes" API and displays them on the webpage. It includes a like button for users to like their favorite memes, and a leaderboard that ranks authors by the number of likes they have received.

#DETAILS
The code consists of HTML, CSS, and JavaScript files. The HTML file contains the structure of the webpage, including the meme image, title, and author containers, as well as the like button and leaderboard. The CSS file contains styles for the webpage, including the leaderboard. The JavaScript file contains the logic for fetching memes from the API, updating the meme image, title, and author on the webpage, incrementing the like count for the author, and displaying the leaderboard.

#FUNCTIONALITY
#1.
To use the meme generator, the user clicks the "Generate Meme" button, which triggers a fetch request to the "wholesomememes" API. The API returns a random meme, which is then displayed on the webpage using the updateDetails function. The user can like the meme by clicking the "Like" button, which increments the like count for the author and updates the like count next to the button. The user can view the leaderboard by clicking the "Show Leaderboard" button, which displays a list of authors ranked by the number of likes they have received.

#2.
The leaderboard is implemented using an object called authorLikes, which stores the authors and their like counts. When the user likes a meme, the updateDetails function increments the like count for the author in the authorLikes object. The displayLeaderboard function sorts the entries in the authorLikes object by the like counts and displays them in a list on the webpage.

#3.
Overall, this code is a simple and effective way to fetch and display memes from an API, and it includes features like a like button and leaderboard to engage users and encourage interaction.

#user
To generate a meme, users can simply enter the URL of an image or select one from the database, and then enter the text they want to appear on the meme. The API will then generate a unique URL for the meme, which users can share with others or embed on their own websites or social media profiles.

The API also includes a "like" button that allows users to vote for their favorite memes, and a leaderboard that displays the most-liked memes of all time. Users can also browse the database of meme templates and view the most popular memes in different categories.


Overall, your meme API provides a fun and easy way for users to create and share memes with their friends and followers, and is a valuable resource for anyone looking to add some humor and personality to their online presence.



