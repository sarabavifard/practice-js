// reverse a number with js function

 // create function with n parameter
 
function reverse_a_number(n)   
{

//convert number to string 

	n = n + "";      
  
/* split string objects into an array of strings by separating the string into substrings and  reverse an array in place with reverce method  after that 
join all elements of an array into a string with join method
*/
  
	return n.split("").reverse().join("");   
   
}

// converted string to numbers using the Number() function and log it

console.log(Number(reverse_a_number(15604)));
