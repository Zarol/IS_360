# Assignment 3

## General Requirements
For this assignment, you will create a Web site made up of the following four pages: 
+ Index.htm
+ Afford.htm
+ CompoundInterest.htm
+ Payment.htm
Each of the pages in the site should have a similar look and feel as always. I suggest copying / using styles from the previous assignment(s). 

## Formatting
Each of the pages should share the same external stylesheet. Format all of the elements so that they adhere to the following requirements.
+ For the input controls in which the user enters data, use a monospace courier font.
+ For the controls in which you display output use a bold monospace courier font. Use a DarkBlue foreground color.
+ Prompts should appear in an Arial font and be right-justified in the table column.
+ All calculated output should be displayed with 2 decimal places. The following link shows exactly how to do this http://stackoverflow.com/questions/4187146/display-two-decimal-places-no-rounding

## Index.htm
The only purpose of the index.htm page is to supply links to the other three pages. 

## Afford.htm
On this page, you will write a JavaScript program that will estimate the maximum affordable house payment based on a family's gross income and expenses. This page should have a form with the following inputs (text boxes): You should set up the input text boxes so that the user can enter only numeric values.

### Income
+ Monthly Income
+ Alimony Income
+ Interest / Dividend income 

### Expenses
+ Credit Card payments
+ Car payments
+ Other recurring payments
The income and expenses section should appear in different fieldsets. 

The affordability formula to calculate the maximum affordable monthly house payment is the lesser of 29% of your gross income or 39% of your gross income less expenses. From the input provided by the user, calculate the maximum affordable payment and display this value in another control. I suggest that you use an output only label. Your output must display the maximum affordable house payment and which percentage was used. Also, you should display the total income from all sources, and the total expenses. 

You should create prompts (labels) for all of the input values. You need not validate any of the input. The prompts and input values must appear as a two column table. The prompt should appear in the left column and the input value should appear in the right column. Use a table to do this. Use CSS for all styling. Right-justify all prompts. 

## CompoundInterest.htm
On this form, you will wriate a JavaScript program that will calculate compound interest on an investment. The program will have the following inputs:

### Inputs
+ Initial Investment Amount
+ Number of Periods
+ Interest Rate Per Period
Again, display inputs with prompts in a two column table. 

Create a button on the form that, when clicked, will calcuate the compound interest. You can either use the compound interest formula or create a loop based on the following pseudocode. 

Loop for the number of periods 
In the loop, calculate the interest (current balance) * (interest rate) 
In the loop calculate the new current balance by adding the old current balance and the current interest. 
The loop should execute for the total number of periods. 

## Payment.htm
On this form, you will calcuate the payment on a loan. JavaScript does not have a PMT function like VB or Excel. Thus, you will have to use the formula to get the answer. If you don't remember the formula to calculate a payment, visit http://www.financeformulas.net/Loan_Payment_Formula.html 

So that you can check your work, the payment on a $100,000 loan for 10 years at 6% interest is $1,110.21. 

### Inputs
+ Initial Loan Amount
+ Number of Periods (Years)
+ Interest Rate (Years) 

### Output
+ Payment amount
Note, when calculating the payment, the user enters the input values in years. However, the payment should be calculated using values expressed in months. Thus, you must multiply the number of periods by 12 to express the value in months. You need to divide the interest rate by 12 to express the annual interest rate as a monthly interest rate.
