# Lightspeed 09/21-09/21, 09/22-09/22

Lightspeed is a minimalist typing application that aims to increase typing speed.
This application is built using the React library. It is inspired by monkeytype.
I chose to create this because I adored the monkeytype application and wanted to
create my own version and also learn the React library.

There are 3 options available: words, paragraphs and custom.

Words: Type random words in succession (no punctuation)

Paragraphs: Type paragraphs from movies/books (with punctuation)

Custom: Create your own input

At the end of each test, you will be presented your WPM (words typed per minute) and a graph
that will describe your WPM and EPM (errors typed per minute)

You can also change the theme and the font in the settings page

# Formula
The formula that I am using to calculate words per minute (wpm) is: <br>
a = correct letters typed <br>
b = 5 ( length of an average word ) <br>
c = a / b  ( correct words typed so far ) <br>
d = c / elapsed minutes ( current correct words per minute )

# Notes
You need to be connected to the internet to view statistic. This is because I am using a Google library (React Google Charts) to display chart data.

There is an issue when you spam a bunch of key presses. The app appears to stutter. This is a problem that I need to fix.
