
 
 let currPlayer = 1;

let gameboard = document.querySelectorAll('td');
let gb = Array.from(gameboard);

//////The Idea for the following winArray and checkWhoWon function came from
//////https://dev.to/fakorededamilola/building-a-connect-four-game-with-javascript-1f45#con-2
///////Written By Fakorede Damilola

let winArray = [
	[ gb[0], gb[1], gb[2], gb[3] ],
	[ gb[41], gb[40], gb[39], gb[38] ],
	[ gb[7], gb[8], gb[9], gb[10] ],
	[ gb[34], gb[33], gb[32], gb[31] ],
	[ gb[14], gb[15], gb[16], gb[17] ],
	[ gb[27], gb[26], gb[25], gb[24] ],
	[ gb[21], gb[22], gb[23], gb[24] ],
	[ gb[20], gb[19], gb[18], gb[17] ],
	[ gb[28], gb[29], gb[30], gb[31] ],
	[ gb[13], gb[12], gb[11], gb[10] ],
	[ gb[35], gb[36], gb[37], gb[38] ],
	[ gb[6], gb[5], gb[4], gb[3] ],
	[ gb[0], gb[7], gb[14], gb[21] ],
	[ gb[41], gb[34], gb[27], gb[20] ],
	[ gb[1], gb[8], gb[15], gb[22] ],
	[ gb[40], gb[33], gb[26], gb[19] ],
	[ gb[2], gb[9], gb[16], gb[23] ],
	[ gb[39], gb[32], gb[25], gb[18] ],
	[ gb[3], gb[10], gb[17], gb[24] ],
	[ gb[38], gb[31], gb[24], gb[17] ],
	[ gb[4], gb[11], gb[18], gb[25] ],
	[ gb[37], gb[30], gb[23], gb[16] ],
	[ gb[5], gb[12], gb[19], gb[26] ],
	[ gb[36], gb[29], gb[22], gb[15] ],
	[ gb[6], gb[13], gb[20], gb[27] ],
	[ gb[35], gb[28], gb[21], gb[14] ],
	[ gb[0], gb[8], gb[16], gb[24] ],
	[ gb[41], gb[33], gb[25], gb[17] ],
	[ gb[7], gb[15], gb[23], gb[31] ],
	[ gb[34], gb[26], gb[18], gb[10] ],
	[ gb[14], gb[22], gb[30], gb[38] ],
	[ gb[27], gb[19], gb[11], gb[3] ],
	[ gb[35], gb[29], gb[23], gb[17] ],
	[ gb[6], gb[12], gb[18], gb[24] ],
	[ gb[28], gb[22], gb[16], gb[10] ],
	[ gb[13], gb[19], gb[25], gb[31] ],
	[ gb[21], gb[15], gb[9], gb[3] ],
	[ gb[20], gb[26], gb[32], gb[38] ],
	[ gb[36], gb[30], gb[24], gb[18] ],
	[ gb[5], gb[11], gb[17], gb[23] ],
	[ gb[37], gb[31], gb[25], gb[19] ],
	[ gb[4], gb[10], gb[16], gb[22] ],
	[ gb[2], gb[10], gb[18], gb[26] ],
	[ gb[39], gb[31], gb[23], gb[15] ],
	[ gb[1], gb[9], gb[17], gb[25] ],
	[ gb[40], gb[32], gb[24], gb[16] ],
	[ gb[9], gb[7], gb[25], gb[33] ],
	[ gb[8], gb[16], gb[24], gb[32] ],
	[ gb[11], gb[7], gb[23], gb[29] ],
	[ gb[12], gb[18], gb[24], gb[30] ],
	[ gb[1], gb[2], gb[3], gb[4] ],
	[ gb[8], gb[9], gb[10], gb[11] ],
	[ gb[12], gb[11], gb[10], gb[9] ],
	[ gb[15], gb[16], gb[17], gb[18] ],
	[ gb[19], gb[18], gb[17], gb[16] ],
	[ gb[22], gb[23], gb[24], gb[25] ],
	[ gb[26], gb[25], gb[24], gb[23] ],
	[ gb[29], gb[30], gb[31], gb[32] ],
	[ gb[33], gb[32], gb[31], gb[30] ],
	[ gb[36], gb[37], gb[38], gb[39] ],
	[ gb[40], gb[39], gb[38], gb[37] ],
	[ gb[7], gb[14], gb[21], gb[28] ],
	[ gb[8], gb[15], gb[22], gb[29] ],
	[ gb[9], gb[16], gb[23], gb[30] ],
	[ gb[10], gb[17], gb[24], gb[31] ],
	[ gb[11], gb[18], gb[25], gb[32] ],
	[ gb[12], gb[19], gb[26], gb[33] ],
	[ gb[13], gb[20], gb[27], gb[34] ]
];

let drop = document.getElementById('column-top');
drop.addEventListener('click', handleClick);

let board = [];
for (let x = 0; x < 7; x++) {
	board[x] = [];
	for (let y = 0; y < 6; y++) {
		board[x].push(1);
	}
}

function handleClick(event) {
	const x = +event.target.id;
	let cell = document.getElementById(`${0}-${x}`);
	let first = cell.firstChild;
	if (first) {
		return;
	}

	const y = findY(x);

	function placeInTable(y, x) {
		const disc = document.createElement('div');
		disc.classList.add(`p${currPlayer}`);
		disc.setAttribute('id', `${y}-${x}`);
		disc.style.top = -50 * (y + 2);

		const spot = document.getElementById(`${y}-${x}`);

		spot.append(disc);
	}

	currPlayer = currPlayer === 1 ? 2 : 1;

	placeInTable(y, x);
	return checkWhoWon();
}

function findY(x) {
	let z = board[x].reduce((a, b) => a + b, 0);
	if (z >= 6) {
		board[x].pop();
		let y = 5;
		board[x].pop();
		return y;
	}
	else {
		let y = z;
		board[x].pop();
		return y;
	}
}

function checkWhoWon() {
	for (let i = 0; i < winArray.length; i++) {
		console.log(winArray[i].length);
		console.log(winArray[i]);

		const isEmpty = function isEmpty(div) {
			
			if (div.firstChild) {
				console.log('isEmptyFunction');
				return false;
			}
			return true;
		};

		const blueWins = function blueWins(div) {
			if (div.firstChild.classList.contains('p2')) {
				console.log('blueFunction');
				return true;
			}
		};

		const redWins = function redWins(div) {
			if (div.firstChild.classList.contains('p1')) {
				console.log('redFunction');
				return true;
			}
		};
		if (winArray[i].some(isEmpty)) { 
			console.log('Empty');
			continue;
		}
		else if (winArray[i].every(blueWins)) {
			return alert('blue wins!');
		}
		else if (winArray[i].every(redWins)) {
			return alert('red wins!');
		}
	}
}
