## Epstein Names

For my submission, I decided to dive deep into the Jeffrey Epstein documents to uncover the network behind the headlines. I compiled an original dataset of 40 key individuals, including high-profile celebrities, politicians, and associates. You can explore the full CSV data here or by going to the demo link


The question i asked to myself is: "Who are the pubblic figures that happears the most in the epstein files?" and so i started digging.
The data reveals a significant concentration of 'Public Figures'—particularly politicians—who appear frequently across the files, second only to Epstein himself. However, a striking pattern emerged during my analysis: while Virginia Giuffre is mentioned extensively, many other victims appear far less frequently or not at all in the available records. This raises a compelling question: are the records incomplete, or was a different naming convention used? This data gap remains one of the most intriguing mysteries of the investigation.


I developed the analysis using Google Colab, leveraging the power of Python’s most popular data libraries. The script begins by importing Pandas and Matplotlib, using standard aliases for efficient coding. To ensure data integrity, the program cleans the string data within the CSV by stripping any leading or trailing whitespace before converting it into a structured DataFrame.


The core logic is divided into two main analytical paths: first, it calculates the frequency of each category, sorting them in ascending order to highlight growth. Second, it creates a filtered subset of the data, excluding Jeffrey Epstein to prevent scaling issues and allow for a more balanced comparison of other individuals. Finally, the code generates a dual-plot dashboard: a Pie Chart to visualize the network's overall composition and a Horizontal Lollipop Chart to effectively rank the categories from least to most mentioned. This provides a clear, side-by-side view of both the structure and the hierarchy of the Epstein files. you can find the colab here.


P.S. an ai detector could flag this as ai, and it is, because i'm not english so ai helped me writing this, but i coded the project and i did the reserch, so thank you for understanding!


----------CHANGELOG----------

#1 Used initial for victims name

#2 Fixed code link

#3 HUGE UPDATE! Made a website for my project: Epstein Names!

#4 Added the question i asked myself

#5 Added to the site Google analytics

#6 Corrected some grammar (if you find errors, feel free to leave me a comment)

#7 Made a Front Page

#8 Deleted the "collapse section" button from all section

#9 ADDED A NEW SECTION! Wiki section with all the wikipedia links <removed>

#10 Changed the download csv button

#11 Swapped section, now the first is the names and the second the category

#12 Fixed the "top" button (in mobile phones, it covers the bottom)

#13 Added the link to my codedex submission

#14 Added a favicon, if someone has a better idea for the favicon, please comment :)

#15 Added to the Git Hub repo the CSV file

#16 Removed the Wiki section

#17 NEW SECTION, to replace the wiki section, now there is the Profiles, with names, surnames, n. of times named, image, descriptions and wiki if available!

#18 Added option to see the CSV file

#19 Fixed some images and descriptions

#20 Changes the PyNotebook so that have some comment (DORA THE EXPLORA!)

#21 Changed the image f the mention by name graph
