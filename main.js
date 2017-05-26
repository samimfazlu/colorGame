(function(){
	var colors = [];
	var pickedColor;
	var numSquares = 6;
	var square = document.querySelectorAll(".square");
	var displayColor = document.querySelector(".displayColor");
	var h1 = document.querySelector("h1");
	var message = document.querySelector("#message");
	var reset = document.querySelector("#reset");
	var easyBtn = document.querySelector("#easy");
	var hardBtn = document.querySelector("#hard");
	var modeBtn = document.querySelectorAll(".mode");
	//console.log(square);

	function init(){
		
		resetGame();
		for(var i = 0; i < square.length; i++){
			square[i].style.backgroundColor = colors[i];
			square[i].addEventListener("click", function(){
				var clickedColor = this.style.backgroundColor;
				//compare with picked color
				if(clickedColor === pickedColor ){
					reset.textContent = "Play Again"
					h1.style.backgroundColor = pickedColor;
					message.textContent = "correct";
					matchColor(pickedColor);
				}else{
					this.style.backgroundColor = "#232323";
					message.textContent = "Try again";
				}


			});
		}
		
		//Add event Listener to mode button
		for(var i = 0; i < modeBtn.length; i++){
				modeBtn[i].addEventListener("click", function(){
				//changing h1 color to default
				h1.style.backgroundColor = "steelBlue"
				//change message to blank field
				message.textContent = "";
				easyBtn.classList.remove("selected");
				hardBtn.classList.remove("selected");
				this.classList.add("selected");
				//checking the button which one is clicked
				numSquares = (this.textContent === "Easy") ? 3 : 6; 
				resetGame();
				//generate new colors
				for(var i = 0; i < square.length; i++){
					if(colors[i]){
						square[i].style.display = "block";
						square[i].style.backgroundColor = colors[i]
					}else{
						square[i].style.display = "none";
					}
				}

			});
		}
		
	}
	init()

	reset.addEventListener("click", function(){
		//change message to no nothing
		message.textContent = "";
		//change reset button text
		h1.style.backgroundColor = "steelblue";
		this.textContent = "New Colors";
		resetGame();
		//show  color in square
		for(var i = 0; i < square.length; i++ ){
			square[i].style.backgroundColor = colors[i];
		}
		
		
	});
	function resetGame(){
		//generate new colors
		colors = generateRandomColor(numSquares);
		//pick a color
		pickedColor = pickedRandomColor(colors)
		//show this in displaycolor
		displayColor.textContent = pickedColor;

	}

	function matchColor(color){
		for(var i = 0; i < square.length; i++){
			/*console.log(square[i]);*/
			square[i].style.backgroundColor = color;
		}
	}

	function pickedRandomColor(passedColors){
		var randomNumber =  Math.floor(Math.random() * colors.length);//1-5
		return passedColors[randomNumber];
	}
	//gnerrate random color
	function generateRandomColor(number){
		//create colors array
		var colors = [];
		for(var i = 0; i < number; i++ ){
			randomColor()
			colors.push(randomColor());
		}

		return colors;
	}
	function randomColor(){
		//generate color "rgb(255, 0, 0)"
		//red 0-255
		//green 0-255
		//blue 0-255
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb" + "(" + r + ", " + g + ", " + b + ")";
	}
})();

//IIFE =  imediately invoked function expression



