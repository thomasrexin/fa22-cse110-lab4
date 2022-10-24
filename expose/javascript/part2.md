# JavaScript Part 2:
1. 3 is printed in line 12 because i is the index variable for the for loop which iterates while i is less than prices.length. Prices is of length 3 so the for loop will be terminated when i is 3 so when i is printed in line 12 its value is 3.
2. 150 is printed in line 13 because in each iteration of the for loop discountedPrice is calculated using the discount which is 0.5 in this function call. Because 300 is the last value in prices, discountedPrice's value in the last iteration of the for loop is 150 which is 0.5 times 300.
3. 150 is printed in line 14 because finalPrice is set to the rounded value of discountedPrice times 100 and then divided by 100 in each iteration of the for loop. The last value in prices is 300 so in the final iteration of the for loop, finalPrice is set to the rounded values of 150 * 100 and then divided by 100 which would be 150 and then printed.
4. [50, 100, 150] is returned by the function because the final price is computed for each value in prices by using the discount of 0.5 and added to discounted. Because prices is orginally [100, 200, 300], discounted contains [50, 100, 150] and is returned by the function.
5. The code causes an error at line 12 because i is declared as a let variable type which means that its scope is only limited to the scope of the for loop. Line 12 is outside of the for loop so i is not defined in its scope and an error is returned.
6. The code causes an error at line 13 because discountedPrice is declared as a let variable type which means that its scope is only limited to the scope of the for loop. Line 13 is outside of the for loop so discountedPrice is not defined in its scope and an error is returned.
7. 150 is printed in line 14 because finalPrice is set to the rounded value of discountedPrice times 100 and then divided by 100 in each iteration of the for loop. The last value in prices is 300 so in the final iteration of the for loop, finalPrice is set to the rounded values of 150 * 100 and then divided by 100 which would be 150 and then printed.
8. [50, 100, 150] is returned by the function because the final price is computed for each value in prices by using the discount of 0.5 and added to discounted. Because prices is orginally [100, 200, 300], discounted contains [50, 100, 150] and is returned by the function.
9. The code causes an error at line 11 because i is declared as a let variable type which means that its scope is only limited to the scope of the for loop. Line 11 is outside of the for loop so i is not defined in its scope and an error is returned.
10. 3 is printed in line 12 because length is initialized to be equal to prices.length which is 3 because prices has 3 elements. The value of length is unchanged in the code because it is a const variable type.
11. [50, 100, 150] is returned by the function because the for loop iterates for length times which is equal to the length of prices which is [100, 200, 300]. discountedPrice is calculated for each value in prices using the discount which is 0.5 in this function call and then added to discounted. Therefore, when discounted is returned it contains the values [50, 100, 150].
12. A. student.name
    
    B. student["Grad Year"]

    C. student.greeting()

    D. student["Favorite Teacher"].name

    E. student.courseLoad[0]
13. A. The output is '32' because the 2 would be converted to its exact string representation of '2' so '3' + '2' is '32'.
    
    B. The output is 1 because '3' would become convert to its number representation of 3 and 3 - 2 is 1.

    C. The output is 3 because the number representation of null is 0 so 3 + 0 is 3.

    D. The output is '3null' because '3' is a string and the string representation of null is 'null' and the two added concatenated together is '3null'.

    E. The output is 4 because the number representation of true is 1 and 1 + 3 is 4.

    F. The output is 0 because the number representation of false is 0 and the number representation of null is also 0 so 0 + 0 is 0.

    G. The output is '3undefined' because '3' is a string and the string representation of undefined is 'undefined' so the two concatenated together is '3undefined'.

    H. The output is NaN because undefined becomes NaN and the number representation of '3' is 3, so 3 - NaN is NaN.
14. A. The output is true because the string '2' would convert to 2 which is greater than 1, so true is outputted.
    
    B. The output is false because strings are compared character-by-character and 2 is not less than 1, so false is outputted.

    C. The output is true because the string '2' would be converted to 2 which is equal to 2, so true is outputted.

    D. The output is false because the "===" operator checks equality without type conversion so the number representation of 2 and the string representation '2' would not be equal and false would be outputted.

    E. The output is false because for boolean values true becomes 1 and 1 is not equal to 2, so false is outputted.

    F. The output is true because Boolean(2) would be equal to true and when it is compared to true using the "===" operator, true would be outputted.
15. The difference between the "==" and "===" operators is that "==" is the regular equality operator whereas the "===" operator is the strict equality operator which checks the equality without type conversion. For example, 0 == false would return true while 0 === false would return false.
16. see part2-question16.js file
17. The result would be [2, 4, 6] because modifyArray is called with the parameter array of [1, 2, 3]. The for loop in the function iterates through the length of the array and calls the callback function for each element in the array. The callback function in this case is doSomething which returns 2 times the value passed into doSomething. The result of the callback function on each element in the parameter array is pushed into newArr which would push the values 2, then 4, then 6 into newArr. newArr is then returned by the function so [2, 4, 6] is the result.
18. see part2-question18.js file
19. The output is:
    
    1

    4

    3

    2