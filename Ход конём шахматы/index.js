


let rows = 8;

const board = () =>{
let rows = 8;
let board = document.getElementById("board");



for ( let i=1;i<=rows;i++){

			let row = `<div class = "boardrow row" id = "board_row${i}"></div>`;

			board.innerHTML += row;

			let boardid = "board_row"+i;

			let boardrowid = document.getElementById(boardid);

			for (let b = 1 ;b<=rows;b++){
				
			let div = `<div 

			style ="width:70px;height:70px;border:1px solid black;cursor:pointer;background:#f5fc35;" 

			 id = "divx${b}y${i}" 

			class = "" 

			data-x="${b}" 

			data-y="${i}"
			onclick ="horse()">

			</div>`;

			boardrowid.innerHTML += div;
							}		
			}
}

const okras = () =>{

	let rows = 8;
let blackrowarr =[];
	for (let i =1;i<=rows;i++)	{
			
		for(let z = 1;z<=rows;z++){

			let block = "divx"+i+"y"+z;
			let blockxy = document.getElementById(block);


			
			if( (blockxy.dataset.x % 2 == 0 && blockxy.dataset.y % 2 == 1) ||(blockxy.dataset.x % 2 == 1 &&  blockxy.dataset.y % 2 == 0)  ){

				
				blackrowarr.push([+blockxy.dataset.x ,+ blockxy.dataset.y]);
				
				blockxy.style.background="#6335fc";
				blockxy.classList.add('chessrow');

			}

			

			

		}
							}
							console.log(blackrowarr);

							
					

					

					let c =document.querySelectorAll(".chess");

					for(let b = 0;b<c.length;b++){
						var item = c[b];
						item.classList.remove("chess");
						item.innerHTML = `<div style = "color:red">${i}</div>`;
					}
					
					
					let a = Math.ceil( Math.random()*rows );
					let b = Math.ceil( Math.random()*rows);
					
					let randomblock = "divx"+a+"y"+b;
					let blockrand = document.getElementById(randomblock);
					blockrand.classList.add("chess");

					

}

function horse() {
let chessss = document.querySelectorAll(".chessrow").length*2;
console.log(chessss);
for(let i = 1;i<=chessss;i++){


setTimeout( function() {

	let values = [];
 
	let allchess = document.querySelectorAll('.chess');

	let allgreen = document.querySelectorAll('.green');




	for (let i=0;i<allgreen.length;i++){
		allgreen[i].classList.remove("green");
	}

	let chess = document.querySelector(".chess");

	chess.classList.add('hod');
	
	console.log(i);
	chess.innerHTML =`<div style = "text-align:center;margin:5px auto;font-weight:bold;font-size:40px;">${i}</div>`;

	if (i==64){
		chess.classList.remove("chess");

	}



	let xplus = Number(chess.dataset.x)+2;

	let yplus = Number(chess.dataset.y)+1;

	
	let divxyplus = document.getElementById("divx"+xplus+"y"+yplus);
	

	if (divxyplus != null && (!divxyplus.classList.contains('hod') ) ) {

		

		divxyplus.classList.add("green");

		let counter = 0;

		let divx2yplus2 = document.getElementById( "divx"+(xplus+2)+"y"+(yplus+1) );

		if (divx2yplus2 != null  && (!divx2yplus2.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let divxyminus_2 = document.getElementById("divx"+(xplus+2)+"y"+(yplus-1));

		if (divxyminus_2 != null && (!divxyminus_2.classList.contains('hod') ) ) {
			
		
			counter++;
		};

		

		let div2 = document.getElementById( "divx"+(xplus-2)+"y"+(yplus+1) );
		if (div2 != null && (!div2.classList.contains('hod') ) ) {
			
			
			counter++;
		};
		

		
		let yy3plus = document.getElementById("divx"+(xplus+1)+"y"+(yplus+2));

		if (yy3plus  != null && (!yy3plus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy3minus = document.getElementById("divx"+(xplus+1)+"y"+(yplus-2));

		if (yy3minus  != null && (!yy3minus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy2xminus = document.getElementById("divx"+(xplus-1)+"y"+(yplus-2));

		if (yy2xminus  != null  && (!yy2xminus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy2xplus1 = document.getElementById("divx"+(xplus-1)+"y"+(yplus+2));

		if (yy2xplus1  != null  && (!yy2xplus1.classList.contains('hod') ) ) {
			
			
			counter++;
		};
		values.push([(counter),"blue",divxyplus]);
		
	
	}
	let yminus = Number(chess.dataset.y) - 1;

	let divxyminus = document.getElementById("divx"+xplus+"y"+yminus);

	

	if (divxyminus != null  && (!divxyminus.classList.contains('hod') ) ){
		divxyminus.classList.add("green");
		let counter = 0;

		let divx2yplus2 = document.getElementById( "divx"+(xplus+2)+"y"+(yminus+1) );

		if (divx2yplus2 != null && (!divx2yplus2.classList.contains('hod') ) ) {
			
		
			counter++;
		};

		let divxyminus_2 = document.getElementById("divx"+(xplus+2)+"y"+(yminus-1));

		if (divxyminus_2 != null && (!divxyminus_2.classList.contains('hod') ) ) {
			
			
			counter++;
		};


		let div = document.getElementById( "divx"+(xplus-2)+"y"+(yminus-1) );

		if (div != null && (!div.classList.contains('hod') ) ) {
			
			
			counter++;
		};
		

		
		let yy3plus = document.getElementById("divx"+(xplus+1)+"y"+(yminus+2));

		if (yy3plus  != null && (!yy3plus.classList.contains('hod') ) ) {
			
		
			counter++;
		};

		let yy3minus = document.getElementById("divx"+(xplus+1)+"y"+(yminus-2));

		if (yy3minus  != null && (!yy3minus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy2xminus = document.getElementById("divx"+(xplus-1)+"y"+(yminus-2));

		if (yy2xminus  != null  && (!yy2xminus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy2xplus1 = document.getElementById("divx"+(xplus-1)+"y"+(yminus+2));

		if (yy2xplus1  != null  && (!yy2xplus1.classList.contains('hod') ) ) {
			
			
			counter++;
		};
		values.push([counter,"red",divxyminus]);
	}

	let xminus = Number(chess.dataset.x)-2;

	let divx_minus = document.getElementById("divx"+xminus+"y"+yplus);

	

	if (divx_minus != null && (!divx_minus.classList.contains('hod') ) ){

		divx_minus.classList.add("green");

		let counter = 0;

		let divx2yplus2 = document.getElementById( "divx"+(xminus+2)+"y"+(yplus+1) );

		if (divx2yplus2 != null && (!divx2yplus2.classList.contains('hod') ) ) {
			
		
			counter++;
		};

		

		let div = document.getElementById("divx"+(xminus-2)+"y"+(yplus-1));

		if (div != null  && (!div.classList.contains('hod') ) ) {
			
		
			counter++;
		};

		let divyplusss =  document.getElementById("divx"+(xminus-2)+"y"+(yplus+1));

		if (divyplusss != null  && (!divyplusss.classList.contains('hod') ) ) {
			
			
			counter++;
		};
		let yy3plus = document.getElementById("divx"+(xminus+1)+"y"+(yplus+2));

		if (yy3plus  != null && (!yy3plus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy3minus = document.getElementById("divx"+(xminus+1)+"y"+(yplus-2));

		if (yy3minus  != null  && (!yy3minus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy2xminus = document.getElementById("divx"+(xminus-1)+"y"+(yplus-2));

		if (yy2xminus  != null  && (!yy2xminus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy2xplus1 = document.getElementById("divx"+(xminus-1)+"y"+(yplus+2));

		if (yy2xplus1  != null && (!yy2xplus1.classList.contains('hod') ) ) {
			
			
			counter++;
		};
		values.push([counter,"yellow",divx_minus]);


	}

	let divy_minus = document.getElementById("divx"+xminus+"y"+yminus);

	

	if (divy_minus != null  && (!divy_minus.classList.contains('hod') ) ){

		divy_minus.classList.add("green");

		let counter = 0;

		

		let divxyminus_2 = document.getElementById("divx"+(xminus+2)+"y"+(yminus-1));

		if (divxyminus_2 != null  && (!divxyminus_2.classList.contains('hod') )  ) {
			
			
			counter++;
		};

		let div = document.getElementById( "divx"+(xminus-2)+"y"+(yminus-1) );
		if (div != null && (!div.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		

		let divyplusss =  document.getElementById("divx"+(xminus-2)+"y"+(yminus+1));

		if (divyplusss != null && (!divyplusss.classList.contains('hod') ) ) {
			
		
			counter++;
		};
		let yy3plus = document.getElementById("divx"+(xminus+1)+"y"+(yminus+2));

		if (yy3plus  != null && (!yy3plus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy3minus = document.getElementById("divx"+(xminus+1)+"y"+(yminus-2));

		if (yy3minus  != null   && (!yy3minus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy2xminus = document.getElementById("divx"+(xminus-1)+"y"+(yminus-2));

		if (yy2xminus  != null  && (!yy2xminus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy2xplus1 = document.getElementById("divx"+(xminus-1)+"y"+(yminus+2));

		if (yy2xplus1  != null  && (!yy2xplus1.classList.contains('hod') ) ) {
			
			
			counter++;
		};
		values.push([counter,"redrose",divy_minus]);

	}

	let yplus2 = Number(chess.dataset.y) + 2 ;

	let xplus1 = Number(chess.dataset.x) + 1 ;

	let yminus2 =Number(chess.dataset.y) - 2 ;

	let xminus1 = Number(chess.dataset.x) - 1 ;

	let divxyplus2 = document.getElementById("divx"+xplus1+"y"+yplus2);

	

	if (divxyplus2 != null && (!divxyplus2.classList.contains('hod') ) ){
		divxyplus2.classList.add("green");

		let counter = 0;

		let divx2yplus2 = document.getElementById( "divx"+(xplus1+2)+"y"+(yplus2+1) );

		if (divx2yplus2 != null && (!divx2yplus2.classList.contains('hod') )) {
			
			
			counter++;
		};

		let div = document.getElementById( "divx"+(xplus1-2)+"y"+(yplus2-1) );
		if (div != null && (!div.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let divxyminus_2 = document.getElementById("divx"+(xplus1+2)+"y"+(yplus2-1));

		if (divxyminus_2 != null && (!divxyminus_2.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		

		let divyplusss =  document.getElementById("divx"+(xplus1-2)+"y"+(yplus2+1));

		if (divyplusss != null  && (!divyplusss.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy3plus = document.getElementById("divx"+(xplus1+1)+"y"+(yplus2+2));

		if (yy3plus  != null && (!yy3plus.classList.contains('hod') ) ) {
			
		
			counter++;
		};

		let yy3minus = document.getElementById("divx"+(xplus1+1)+"y"+(yplus2-2));

		if (yy3minus  != null && (!yy3minus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		

		let yy2xplus1 = document.getElementById("divx"+(xplus1-1)+"y"+(yplus2+2));

		if (yy2xplus1  != null  && (!yy2xplus1.classList.contains('hod') )) {
			
			
			counter++;
		};
		values.push([counter,"corall",divxyplus2]);

	}

	let divx_minus2 = document.getElementById("divx"+xminus1+"y"+yplus2);

	

	if (divx_minus2 != null  && (!divx_minus2.classList.contains('hod') ) ){

		divx_minus2.classList.add("green");

		let counter = 0;

		let divx2yplus2 = document.getElementById( "divx"+(xminus1+2)+"y"+(yplus2+1) );

		if (divx2yplus2 != null && (!divx2yplus2.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let div = document.getElementById( "divx"+(xminus1-2)+"y"+(yplus2-1) );
		if (div != null && (!div.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let divxyminus_2 = document.getElementById("divx"+(xminus1+2)+"y"+(yplus2-1));

		if (divxyminus_2 != null && (!divxyminus_2.classList.contains('hod') )) {
			
			
			counter++;
		};

		

		let divyplusss =  document.getElementById("divx"+(xminus1-2)+"y"+(yplus2+1));

		if (divyplusss != null && (!divyplusss.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy3plus = document.getElementById("divx"+(xminus1+1)+"y"+(yplus2+2));

		if (yy3plus  != null && (!yy3plus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		

		

		let yy2xplus1 = document.getElementById("divx"+(xminus1-1)+"y"+(yplus2+2));

		if (yy2xplus1  != null  && (!yy2xplus1.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let zzz = document.getElementById("divx"+(xminus1-1)+"y"+(yplus2-2));

		if (zzz  != null  && (!zzz.classList.contains('hod') ) ) {
			
			
			counter++;
		};
		values.push([counter,"seacolor",divx_minus2]);




	}

 	let divy_minus2 = document.getElementById("divx"+xplus1+"y"+yminus2);

 	

	if (divy_minus2  != null  && (!divy_minus2.classList.contains('hod') )){
		divy_minus2.classList.add("green");

		let counter = 0;

		let divx2yplus2 = document.getElementById( "divx"+(xplus1+2)+"y"+(yminus2+1) );

		if (divx2yplus2 != null && (!divx2yplus2.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let div = document.getElementById( "divx"+(xplus1-2)+"y"+(yminus2-1) );
		if (div != null && (!div.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let divxyminus_2 = document.getElementById("divx"+(xplus1+2)+"y"+(yminus2-1));

		if (divxyminus_2 != null && (!divxyminus_2.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		

		let divyplusss =  document.getElementById("divx"+(xplus1-2)+"y"+(yminus2+1));

		if (divyplusss != null && (!divyplusss.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let yy3plus = document.getElementById("divx"+(xplus1+1)+"y"+(yminus2+2));

		if (yy3plus  != null && (!yy3plus.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		

		

		let yy2xplus1 = document.getElementById("divx"+(xplus1+1)+"y"+(yminus2-2));

		if (yy2xplus1  != null && (!yy2xplus1.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let zzz = document.getElementById("divx"+(xplus1-1)+"y"+(yminus2-2));

		if (zzz  != null && (!zzz.classList.contains('hod') ) ) {
			
			
			counter++;
		};
		values.push([counter,"cyan",divy_minus2]);
	}


 	let divy_minus3 = document.getElementById("divx"+xminus1+"y"+yminus2);

 	

	if (divy_minus3  != null  && (!divy_minus3.classList.contains('hod') )){
		divy_minus3.classList.add("green");

		let counter = 0;

		let divx2yplus2 = document.getElementById( "divx"+(xminus1+2)+"y"+(yminus2+1) );

		if ( (divx2yplus2 != null) && (!divx2yplus2.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let div = document.getElementById( "divx"+(xminus1-2)+"y"+(yminus2-1) );
		if ((div != null) && (!div.classList.contains('hod') ) ) {
			
			
			counter++;
		};

		let divxyminus_2 = document.getElementById("divx"+(xminus1+2)+"y"+(yminus2-1));

		if ((divxyminus_2 != null) && (!divxyminus_2.classList.contains('hod') )  ) {
			
			
			counter++;
		};

		

		let divyplusss =  document.getElementById("divx"+(xminus1-2)+"y"+(yminus2+1));

		if ((divyplusss != null)  && (!divyplusss.classList.contains('hod')) ) {
			
			
			counter++;
		};

		let yy3plus = document.getElementById("divx"+(xminus1-1)+"y"+(yminus2+2));

		if ((yy3plus  != null) && (!yy3plus.classList.contains('hod')) ) {
			
			
			counter++;
		};

		

		

		let yy2xplus1 = document.getElementById("divx"+(xminus1+1)+"y"+(yminus2-2));

		if ((yy2xplus1  != null) && (!yy2xplus1.classList.contains('hod')) ) {
			
			
			counter++;
		};

		let zzz = document.getElementById("divx"+(xminus1-1)+"y"+(yminus2-2));

		if ((zzz  != null) && (!zzz.classList.contains('hod')) ) {
			
			
			counter++;
		};
		values.push([counter,"dodgerblue",divy_minus3]);
	}
	
	let arr = [];
	for (let i = 0;i<values.length;i++){
		arr.push(values[i][0]);
	}
	let min = Math.min(...arr);

	for (let i=0;i<values.length;i++){
			if(values[i][0] == min) {
				chess.classList.remove("chess");
				values[i][2].classList.add("chess");
				values=[];
				break;
									}
	}
},i*1);
} 




}

let clear_board = () => {
	let hod = document.querySelectorAll(".hod");
	
	for (i=0;i<hod.length;i++){
		hod[i].classList.remove("hod");
		hod[i].innerHTML ="";
		
	}
}

const random_place = rows => {
	let randomx = Math.ceil(Math.random()*rows);
	let randomy = Math.ceil(Math.random()*rows);
	let randomblock = document.getElementById("divx"+randomx+"y"+randomy);
	let chessall = document.querySelectorAll(".chess");
	if (chessall.length==0){
		randomblock.classList.add("chess");
	}
}




board();
okras();

document.getElementById("horse").addEventListener("click",horse);
document.getElementById("clear_button").addEventListener("click",clear_board);
document.getElementById("horse_go").addEventListener("click",function(){ random_place(rows) });