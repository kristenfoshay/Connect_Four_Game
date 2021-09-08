
 
 let currPlayer = 1; // active player: 1 or 2

 let gameboard = document.querySelectorAll("td");
 let gb = Array.from(gameboard);

 let winArray = [gb[10], gb[11], gb[12], gb[13]];



  

   let drop = document.getElementById("column-top");
   drop.addEventListener('click', handleClick);



   let board = [];
   for(let x = 0; x<7; x++){
  board[x] = [];
    for (let y = 0; y<6; y++){
   board[x].push(1);}}
  
   function handleClick(event) {
  
  const x = +event.target.id;
  let cell = document.getElementById(`${0}-${x}`);
  let first = cell.firstChild;
  if(first){return;}
    
  
    const y = findY(x);
    

    function placeInTable(y, x) {
      const disc = document.createElement('div');
      disc.classList.add(`p${currPlayer}`);
      disc.setAttribute('id',`${y}-${x}`)
      disc.style.top = -50 * (y + 2);
    
      const spot = document.getElementById(`${y}-${x}`);
    
      spot.append(disc);
    }
  
    currPlayer = currPlayer === 1 ? 2 : 1;
  
   
    placeInTable(y, x); 
    checkWon();
  }
    
 
     function findY(x){
      let z = board[x].reduce((a, b) => a + b, 0);
 if (z >= 6){
        board[x].pop();
       let y = 5;
        board[x].pop();
        return y;
    }else{
        let y = z;
       board[x].pop();
       return y;}}
 
      
       
     
    function checkWon() {
		for (let i = 0; i < this.winArray.length; i++) {
			let div = this.winArray[i];
			const blueWins = (div) => div.firstChild.classList.contains('p2');
			const redWins = (div) => div.firstChild.classList.contains('p1');
			if (this.winArray.every(blueWins)) {
				return alert('blue wins!');
			}
			else if (this.winArray.every(redWins)) {
				return alert('red wins!');
			}
		}
	}
}
     
