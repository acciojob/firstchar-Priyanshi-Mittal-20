function firstChar(text) {
  // your code here
	let arr=text.split("")
	for(let i=0;i<arr.length;i++)
		{
			if(arr[i]!==" ")
			{
				return arr[i]
			}
		}
	return " "
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
