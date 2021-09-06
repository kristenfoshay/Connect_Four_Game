
 
 let currPlayer = 1; // active player: 1 or 2

 let gameboard = document.querySelectorAll("td");
 let gb = Array.from(gameboard);

 let winArray = [gb[10], gb[11], gb[12], gb[13]];

 //let winningArray = [ 
  //[gb[0], gb[1], gb[2], gb[3]], [gb[41], gb[40], gb[39], gb[38]],[gb[7], gb[8], gb[9], gb[10]], 
  //[gb[34], gb[33], gb[32], gb[31]], [gb[14], gb[15], gb[16], gb[17]], [gb[27], gb[26], gb[25], gb[24]], 
  //[gb[21], gb[22], gb[23], gb[24]], [gb[20], gb[19], gb[18], gb[17]], [gb[28], gb[29], gb[30], gb[31]], 
  //[gb[13], gb[12], gb[11], gb[10]], [gb[35], gb[36], gb[37], gb[38]], [gb[6], gb[5], gb[4], gb[3]], 
  //[gb[0], gb[7], gb[14], gb[21]], [gb[41], gb[34], gb[27], gb[20]], [gb[1], gb[8], gb[15], gb[22]], 
 // [gb[40], gb[33], gb[26], gb[19]], [gb[2], gb[9], gb[16], gb[23]], [gb[39], gb[32], gb[25], gb[18]], 
  //[3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
  //[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
  //[6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
  //[41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
  //[14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
  //[6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
  //[21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
  //[5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
 // [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
  //[40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
  //[11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
  //[5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
  //[15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
  //[26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
 // [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
  //[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
  //[11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
  //]; 

  

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
 
      
       
     
       function checkWon(){
        for(let i = 0;i<winArray.length; i++){
          let div = winArray[i];
          const blueWins = (div) => div.firstChild.classList.contains('p2');
          const redWins = (div) => div.firstChild.classList.contains('p1');
         if(winArray.every(blueWins)){
              alert("blue wins!");}else if
                 (winArray.every(redWins)){
                      alert("red wins!");}}}
     