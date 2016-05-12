# Assignment 4

## General Requirements
The learning objectives for this assignment are as follows:
+ Dynamically modify the DOM
+ Work with input controls
+ Work with JavaScript loops and calculations
All of the code for this homework assignment will appear on a single Web page (form).

## Payment.html
For this page, you will create a loan amortization schedule. To complete the loan amortization, you will need to first calculate the payment on a loan. Use the same payment formula that you used in the preceding assignment.

## Program Inputs:
+ Loan Amount
+ Annual Interest Rate. The input value should be 10 for 10%, rather than 0.10.
+ Loan Term (Years)
The input values are measured in years. However, the loan amortization schedule should be calculated using monthly values. Thus, to calculate the monthly interest rate, divide the annual interest rate by 12. To get the monthly loan term, multiply the annual loan term by 12. Thus a 30 year loan will be 360 months. A 12 percent annual interest rate would be 1 1% monthly interest rate. 

Create the necessary input controls as you have already done to get the input from the user. 

The following table shows some sample input: 

Loan Amount:	200000
Annual Interest Rate	0.05
Loan Term (Years)	30 

Given the preceding inputs, the payment amount should be $1,073.64325. Depending on how you perform the calculations, you might experience some rounding error. This is OK. So if your last payment and ending balance are off by a few dollars, that's acceptable. 

The following table shows some sample output corresponding to the above input. Note that I have rounded the output values to two decimal places.  Again, your output might be off by a penny or two each period. 

Beg. Balance	Payment	Interest	Principal	Balance	Period
200,000.00	1,073.64	833.33	240.31	199,759.69	1
199,759.69	1,073.64	832.33	241.31	199,518.38	2
199,518.38	1,073.64	831.33	242.31	199,276.07	3
...	...	...	...	...	...
1069.19	1073.64	4.45	1069.19	0	360 

How you create the table is completely up to you. You can create the <table> tag statically and append the rows and columns to it. You can also create a <div> tag and add the table there. You could also create the first row statically and add the additional rows programmatically. Also long as the table contains the correct data, i don't care how you solve the problem. One of my JavaScript demos shows the basics of creating a table dynamically. 

## Pseudocode
Consider the applying the following pseudocode as you create the JavaScript.

Get the loan amount and store the value in a variable.
Get the annual interest rate and store the value in a variable.
Divide the annual interest rate by 12 to get the monthly interest rate storing the result in a variable.
Multiply the annual loan term by 12 to get the monthly loan term, again storing the value in a variable.
Using the above values, calculate the payment. See my example to make sure that the payment amount is correct.
The following should be performed in a for loop:
Create a loop that will enumerate once for each period (360 periods for 30 years). The following should be performed in the loop:
   Create a new table row.
   Create a new table cell (column 1). Store the beginning balance in the table cell.
   Create a new table cell (column 2). Store the payment in the table cell. This value will be the same for all rows.
   Create a new table cell (column 3). Calculate the current interest by multiplying the beginning balance by the monthly interest rate. Store the value in the table cell.
   Create a new table cell (column 4). Calculate the current principal by subtracting the current interest from the payment amount. Store the value in the cell.
   Create a new table cell (column 5). Calculate the new balance by subtracting the current principal amount from the beginning balance. Store the value in the cell. This new balance becomes the beginning balance for the next period.
   Create a new table cell (column 6). Display the period. This number should be the same as the loop's counter.
   Add all of the cells to the table row.
   Add the table row to the table.
