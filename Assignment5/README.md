# Assignment 5

In this assignment, you will create a Web site that utilizes jQuery, JavaScript, and AJAX.  This assignment will be worth 50 points.

## Part 1 (Employment.htm)
For this part of the assignment, begin by visiting the following Web site and get Table 1.1 from the Web page. Copy the source code out of this page and paste it into the page that you created. http://www.bls.gov/emp/ep_table_101.htm 

+ At the top of the page, create a level 1 heading and article to surround that heading. Place table 1.1 in the article. Note that the table has some formatting attributes that you might need to remove.
+ Create a table header, in the event that your table does not have one. Using jQuery, format all table headers with a black background and white foreground. Create a table footer and format it the same way.
+ Using jQuery, format all odd table rows with a light grey background. Format all of the even rows with a light green background.
Create a button on the form that will hide all but the first 10 rows. Create another button that will display all of the rows.

## Part 2 (Accordion.htm)
For this part of the assignment, Visit http://jqueryui.com/ 

+ Create a page named accordion.htm. When the accordion is first displayed, configure it so that all panels are initially collapsed (active: false).
+ On this page, use the accordion control to create three accordions. In each section (accordion), just paste enough content to make the accordion function. Just cut and paste the content from any other page into your accordion.
+ Create two buttons on the form. The first should make the accordion 600 pixels wide. The second should make the accordion 400 pixels wide. The initial width should be 400 pixels wide.

## Part 3 (StockQuote.htm)
For this part of the assignment, you will use AJAX to work with YQL as demonstrated in class.

+ I suggest starting with the IS360AjaxExample.htm page discussed in class.
+ In class, I hardcoded the stock symbol. Enhance the program so that the user can select a stock symbol from a drop-down box. Add at least 5 stock symbols of your choosing to the drop-down box.
+ In class, I showed how to display the price. Write the code to display the Open, and PreviousClose fields. Also display the DaysLow, DaysHigh, YearLow, and YearHigh. Please display all of these in a two-column table. The first column should contain the descriptive prompts. The second should contain the value.

## Part 4 (Books.htm)
For this part of the assignment, you will use AJAX to work with YQL to access Google Books. 

I suggest that you use the YQL console to help you develop your query.Take a look at the Web page: http://developer.yahoo.com/yql/Console to access the YQL console. Click the check box titled Show Community Tables in the DATATABLES section. Scroll down through the list until you see the Google tab. Click on google.books to get a description of the datable desc google.books. Like the other queries that you ran, you can see a sample query and see the query parameters. 

                <select>
                    <key name="q" required="true" type="xs:string"/>
                    <key name="download" type="xs:integer"/>
                    <key name="filter" type="xs:integer"/>
                    <key name="langRestrict" type="xs:integer"/>
                    <key name="maxResults" type="xs:integer"/>
                    <key name="orderBy" type="xs:integer"/>
                    <key name="printType" type="xs:integer"/>
                    <key name="projection" type="xs:integer"/>
                    <key name="startIndex" type="xs:integer"/>
                    <key name="volumeId" type="xs:integer"/>
                </select>
    
Here is a sample query. 

SELECT * FROM google.books WHERE q="beer" AND maxResults=3 AND startIndex=2 

+ Now create a Web page that will use YQL to query Google Books based on the query parameters. The user must be able to enter the query parameters named q, maxResults.
+ You will need to parse the output and display the following elements. I would like these elements put into a table. You can decide how to format the table. There will be several elements named <items>. Each element named <items> has the following children (among others). You must display all of the items not just the first item.
  + Title
  + Subtitle
  + Description
