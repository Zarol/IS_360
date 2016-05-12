# Assignment 2

## Assignment Abstract
In this assignment, you will focus on Cascading Style Sheets. You will create CSS sheets and Web pages from scratch. You will also create pages based on the 980 rule. You will also work with tables and format them with Cascading Style Sheets.   Note that you will use separate Stylesheets for each page. 

## Requirements for the First Page
The first page does very little. On this page, create links to the other pages on the assignment. At the top of the remaining pages, create links to the other pages of the assignment. 

## Requirements for the Second Page
For this page, you need to implement the following table and format it. You can copy my table directly from the HTML source. Name this page Tables.html. Use and external Stylesheet for this page. Name this Stylesheet Tables.css. 

Water Year1	Elevation (feet-MSL)2	Change* (feet)	Cumulative (feet)	Volume (acre-feet)	Change* (acre-feet)	Cumulative (acre-feet)
1986	3,815.6	+5.0	--	23,500,000	+580,000	--
1987	3,813.8	-1.8	-1.8	23,290,000	-210,000	-210,000
1988	3,810.4	-3.4	-5.2	22,890,000	-400,000	-610,000
1989	3,807.4	-3.0	-8.2	22,550,000	-340,000	-950,000
1990	3,804.0	-3.4	-11.6	22,170,000	-380,000	-1,330,000
1991	3,801.2	-2.8	-14.4	21,850,000	-320,000	-1,650,000
1992	3,797.9	-3.3	-17.7	21,490,000	-360,000	-2,010,000
1993	3,796.3	-1.6	-19.3	21,310,000	-180,000	-2,190,000
1994	3,794.1	-2.2	-21.5	21,070,000	-240,000	-2,430,000 

Your markup and CSS on this page should have the following characteristics: You must use CSS for all formatting. You must use an external style sheet. For this page, you can use classes and element tags as you see fit. 

+ Add <thead> and <tbody> tags as appropriate, for the table header and body. There is no table footer.
+ Right-justify all columns but the first (year) column. This column should be left justified
+ Format the first row (header) such that the background color is LightBlue. Use a bold typeface.
+ Format the numeric values such that negative values have a foreground color of Maroon. Positive values should have a foreground color of DarkBlue.
+ The table should be exactly 700 pixels wide. Each column should be exactly 100 pixels wide.
+ The table should have a 3 pixel border but the interior cells should have a 1 pixel border.
+ Pad the right side of the numeric cells such that there is 3 pixels of space between the last digit of the number and the right cell wall. 

You can use classes and any other selectors that you choose to implement the styles.

## Requirements for the Third Page
On this page, you will use CSS to format content such that it is designed for color printing of a single 8 1/2 x 11 page. Named this page Printable.html. Name the Stylesheet for this page Printable.css. 

+ Using an element style, set the height of the page to 11 inches. Set the width of the page to 8.5 inches.
+ Set the top and bottom margin to 1 inch.
+ Set the left margin to 0.75 inches.
+ Set the right margin to 0.625 inches.
+ For the above box, set the padding to 8px.
+ Format all paragraphs so that the primary font is Franklin Gothic Medium, the first fallback font is Arial Narrow, the second fallback font is Arial, and the final fallback font is sans-serif. Use a 1.2em font size.. Use full justification for all paragraphs. Indent the first line of all paragraphs 1/2 inch.
+ Format all h1 tags so that they appear having a DarkBlue foreground color. The font size should be 2 times the normal font size.
+ Format all h2 tags so that they appear in a DarkGreen color. The font size should be 1.6 times the normal font size.
+ Create a class named pIndent such that it applies only to paragraphs with the class applied. Inherit all paragraph attributes. Set the margins of this class so that the left and right margins are indented 0.25 inches. Override the default indenting of the first line so that it is not indented. Set the font style to italic.
+ Format all code tags that appear in a paragraph such that the color is DarkCyan. Use nested (child) element selectors. Do not use a class.
+ Create content as you see fit to test all of the formatting styles that you created above. 

## Requirements for the Fourth Page
For this page, you should use the 980 rule discussed in class. Refer to http://adapt.960.gs/ for the download template to get started. Use the template named 1200 css for this assignment. I suggest that you download this file and use is as the template for your content. Part of the work items for this page involve using the 1200 css class. Part of the work items involve extending the 1200 css class to add formatting for the columns.  Name this page Format1200.html. Name the external Stylesheet Format1200.css. 

Create an outer div tag to wrap the container_12 class as discussed in class and as shown in the usage pattern.  

### Section 1
+ This section should span all 12 columns.
+ Put an h1 tag in this section. The text for the heading should be Level 1 heading.
### Section 2
+ This section should span should use a 2 column layout such that the first section uses 4 of the 12 columns and the second section uses 8 of the 12 columns. Format the background such that the color is LightBlue.
+ Create paragraphs in each of the two sections so that you have some content. The content does not matter. You are just creating some text so that you can test the style. Format all of the paragraph tags so that they use the same font and font size as you defined for the 2nd page.
### Section 3
+ This section should span should use a 3 column layout such that the each section uses 4 of the 12 columns. Format the background such that the color is LightGreen. Again, format all of the paragraphs as you did on the second page.
+ Create paragraphs in each of the three sections so that you have some content. The content does not matter. You are just creating some text so that you can test the style.
### Section 4
+ This section should span all 12 columns.
+ Create a horizontal line in this section.
