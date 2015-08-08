var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width=screen.width;
canvas.height=screen.height;


//gun data

function M4A1(){
	this.gun = 'm4a1';
	this.pattern = [[0,0],[-23,-1],[-42,-2],[-93,11],[-162,-4], [-241,18],[-332,33],[-389,-18],[-432,-51],[-453,-120],
	                [-492,-103],[-511,-47],[-500,44],[-502,118],[-485,205],[-498,203],[-512,171],[-519,209],[-507,256],[-514,244]];
	this.fireRate = (60000/666);
	
	this.pullDown= [[0,0],[-23,-1],[-42,-2],[-93,11],[-162,-4], [-241,18],[-332,33],[-389,-18],[-432,-51],[-453,-120],
	                [-492,-103],[-511,-47],[-500,44],[-502,118],[-485,205],[-498,203],[-512,171],[-519,209],[-507,256],[-514,244]];

	for(i = 0;i<20;i++){
		for(j = 0;j<2;j++){
			this.pullDown[i][j] =  157/241* this.pullDown[i][j]; //(220/490)
		}
	}
	
	this.getPullDown = getPullDown;
	this.getPattern = getPattern;
	this.getFireRate = getFireRate;
	this.getName = getName;
}
function M4A4(){
	this.gun = 'm4a4';
	this.pattern = [[0,0],[-20,-5],[-49,-6],[-104,14],[-175,-6],[-255,20],[-344,36],[-398,-19],[-443, -54],[-459,-127],
	                [-495, -112],[-516,-54],[-501,47],[-501,128],[-480,216],[-496,216],[-511,186],[-514,223],[-504,274],[-511,262],
	                [-512,146],[-534,113],[-542,24],[-550,-7],[-548,-46],[-550,-7],[-565,-26],[-582,-41],[-584,-51],[-582,-66]];
	
	this.fireRate = (60000/666);
	
	this.pullDown= [[0,0],[-20,-5],[-49,-6],[-104,14],[-175,-6],[-255,20],[-344,36],[-398,-19],[-443, -54],[-459,-127],
	            	[-495, -112],[-516,-54],[-501,47],[-501,128],[-480,216],[-496,216],[-511,186],[-514,223],[-504,274],[-511,262],
	            	[-512,146],[-534,113],[-542,24],[-550,-7],[-548,-46],[-550,-7],[-565,-26],[-582,-41],[-584,-51],[-582,-66]];

	for(i = 0;i<30;i++){
		for(j = 0;j<2;j++){
			this.pullDown[i][j] = 110/175*this.pullDown[i][j]; //(189/344)
		}
	}
	
	this.getPullDown = getPullDown;
	this.getPattern = getPattern;
	this.getFireRate = getFireRate;
	this.getName = getName;
}

function FAMAS(){
	this.gun = 'famas';
	this.pattern = [[0,0],[-13,12],[-28,9],[-59,31],[-113,32],[-178,32],[-234,-13],[-272,-64],[-312,-43],[-335,17],
	                [-353,71],[-358,112],[-377,98],[-389,25],[-407,-13],[-397,-75],[-399,-92],[-399,-139],[-415,-149],[-424,-135],
	                [-419,-56],[-430,-47],[-426,-81],[-405,-129],[-371,-177]];
	
	this.fireRate = (60000/666);
	
	this.pullDown= [[0,0],[-13,12],[-28,9],[-59,31],[-113,32],[-178,32],[-234,-13],[-272,-64],[-312,-43],[-335,17],
	                [-353,71],[-358,112],[-377,98],[-389,25],[-407,-13],[-397,-75],[-399,-92],[-399,-139],[-415,-149],[-424,-135],
	                [-419,-56],[-430,-47],[-426,-81],[-405,-129],[-371,-177]];

	for(i = 0;i<25;i++){
		for(j = 0;j<2;j++){
			this.pullDown[i][j] = (157.48/272) * this.pullDown[i][j];  
		}
	}
	this.getPullDown = getPullDown;
	this.getPattern = getPattern;
	this.getFireRate = getFireRate;
	this.getName = getName;
}

function Galil(){
	this.gun = 'galil';
	this.pattern = [[0,0],[-17,-12],[-30,-3],[-63,-24],[-106,-63],[-173,-59],[-250,-64],[-303,-85],[-330,-120],[-376,-105],
	                [-404,-37],[-389,59],[-355,150],[-377,178],[-384,215],[-384,233],[-386,235],[-411,223],[-433,142],[-444,100],
	                [-433,22],[-407,-77],[-415,-94],[-426,-57],[-420,-98],[-418,-131],[-408,-180],[-422,-151],[-403,-48],[-397,29],
	                [-416,71],[-439,51],[-429,97],[-383,172],[-379,217]];
	this.fireRate = (60000/666);
	
	this.pullDown= [[0,0],[-17,-12],[-30,-3],[-63,-24],[-106,-63],[-173,-59],[-250,-64],[-303,-85],[-330,-120],[-376,-105],
	                [-404,-37],[-389,59],[-355,150],[-377,178],[-384,215],[-384,233],[-386,235],[-411,223],[-433,142],[-444,100],
	                [-433,22],[-407,-77],[-415,-94],[-426,-57],[-420,-98],[-418,-131],[-408,-180],[-422,-151],[-403,-48],[-397,29],
	                [-416,71],[-439,51],[-429,97],[-383,172],[-379,217]];

	for(i = 0;i<35;i++){
		for(j = 0;j<2;j++){
			this.pullDown[i][j] = (157/303)*this.pullDown[i][j];
		}
	}
	this.getPullDown = getPullDown;
	this.getPattern = getPattern;
	this.getFireRate = getFireRate;
	this.getName = getName;
}

function AK(){
	this.gun = 'ak47';
	this.pattern = [[0,0],[-2,0],[-10,-1],[-19,-2],[-29,-3],[-43,-3],[-58,-7],[-71,-11],[-79,-10],[-86,-4],
	               [-88,8],[-89,17],[-92,24],[-93,30],[-92,33],[-93,33],[-96,24],[-98,13],[-100,1],[-99,-12],
	               [-99,-18],[-98,-20],[-98,-19],[-101,-18],[-103,-19],[-104,-20],[-104,-19],[-103,-11],[-102,3],[-97,21]]; 
	this.fireRate = 100;
	
	this.pullDown= [[0,0],[-2,0],[-18,-1],[-19,-2],[-29,-3],[-43,-3],[-58,-7],[-71,-11],[-79,-10],[-86,-4],
		               [-88,8],[-89,17],[-92,24],[-93,30],[-92,33],[-93,33],[-96,24],[-98,13],[-100,1],[-99,-12],
		               [-99,-18],[-98,-20],[-98,-19],[-101,-18],[-103,-19],[-104,-20],[-104,-19],[-103,-11],[-102,3],[-97,21]]; 

	for(i = 0;i<30;i++){
		for(j = 0;j<2;j++){
			this.pullDown[i][j] = 295/71*this.pullDown[i][j] 
		}
	}
	this.getPullDown = getPullDown;
	this.getPattern = getPattern;
	this.getFireRate = getFireRate;
	this.getName = getName;
}
function getPattern(){
	return this.pattern;
}
function getFireRate(){
	return this.fireRate;
} function getName(){
	return this.gun;
} function getPullDown(){
	return this.pullDown;
}

function adjustPattern(pattern, name){

	var options = document.getElementById("mapList").options;
	var index = document.getElementById("mapList").selectedIndex;
	
	switch(options[index].text){
		case 'Recoil Master':
			
			if(name == 'ak47'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.45;
					}
				}
			} else if (name == 'm4a1'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .157
					}
				}
			} else if (name == 'galil'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .22
					}
				}
			} else if (name == 'm4a4'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .21
					}
				}
			} else if (name == 'famas'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .24
					}
				}
			}
			break;
		case 'D2 Long Corner - T':
			if(name == 'ak47'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.5;
					}0
				}
			} else if (name == 'm4a1'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.45/1.5 * .157;
					}
				}
			} else if (name == 'm4a4'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.45/1.5 * .21;
					}
				}
			} else if (name == 'galil'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.45/1.5* .22;
					}
				}
			} else if (name == 'famas'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.45/1.5 * .24;
					}
				}
			}
			break;
		case 'D2 Long Corner - CT':
			if(name == 'ak47'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.5;
					}0
				}
			} else if (name == 'm4a1'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.5/1.45 * .157;
					}
				}
			} else if (name == 'm4a4'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.45/1.5 * .21;
					}
				}
			} else if (name == 'galil'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.45/1.5* .22;
					}
				}
			} else if (name == 'famas'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.45/1.5 * .24;
					}
				}
			}
			break;
		case "D2 Long Corner to Corner":
			if(name == 'ak47'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.6;
					}
				}
			} else if (name == 'm4a1'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.6/1.45 * .157;
					}
				}
			} else if (name == 'm4a4'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.6/1.45 * .21;
					}
				}
			} else if (name == 'galil'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.6/1.45 * .22;
					}
				}
			} else if (name == 'famas'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.6/1.45 * .24;
					}
				}
			}
			break;
		case "Inferno Mid":
			if(name == 'ak47'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.35;
					}
				}
			} else if (name == 'm4a1'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.35/1.45 * .157;
					}
				}
			} else if (name == 'm4a4'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.35/1.45 * .21;
					}
				}
			} else if (name == 'galil'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.35/1.45 * .22;
					}
				}
			} else if (name == 'famas'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.35/1.45 * .24;
					}
				}
			}
			break;
		case "Inferno Banana Rush":
			if(name == 'ak47'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.7;
					}
				}
			} else if (name == 'm4a1'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.7/1.45 * .157;
					}
				}
			} else if (name == 'galil'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.7/1.45 * .22;
					}
				}
			}else if (name == 'm4a4'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.7/1.45 * .21;
					}
				}
			}else if (name == 'famas'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.7/1.45 * .24;
					}
				}
			}
			break;
		case "Cache Main to Quad":
			if(name == 'ak47'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.45;
					}
				}
			} else if (name == 'm4a1'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .147;
					}
				}
			} else if (name == 'galil'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .22;
					}
				}
			} else if (name == 'm4a4'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .21;
					}
				}
			}else if (name == 'famas'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .24;
					}
				}
			}
			break;
		case "Cache B Main":
			if(name == 'ak47'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * 1.45;
					}
				}
			} else if (name == 'm4a1'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .14;
					}
				}
			}else if (name == 'galil'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .22;
					}
				}
			}else if (name == 'm4a4'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .21;
					}
				}
			}else if (name == 'famas'){
				for(i = 0; i < pattern.length;i++){
					for(j = 0; j<pattern[i].length;j++){
						pattern[i][j] = pattern[i][j] * .24;
					}
				}
			}
			break;
	}
	
	return pattern;

}


var selectedGun = new AK();
var i = 0;
var radius = 3;
var firing = false;
var help = true;
var pattern = adjustPattern(selectedGun.getPattern(), selectedGun.getName());
var fireRate = selectedGun.getFireRate();
var pullDown = selectedGun.getPullDown();
var name= selectedGun.getName();
var currentX = null;
var currentY = null;
var originX = null;
var originY = null;



var AR = '16-9';
make_base(AR);


function make_base(AR){
	base_image = new Image();
	
	var options = document.getElementById("mapList").options;
	var index = document.getElementById("mapList").selectedIndex;
	switch(options[index].text){
		case 'Recoil Master':
			base_image.src = 'images/' + AR + '/spraymaster.jpg';
			base_image.onload = function(){
				context.drawImage(base_image, 0,0,screen.width,screen.height);
			}
			
			break;
		case 'D2 Long Corner - T':
			base_image.src = 'images/' + AR + '/d2longt.jpg';
			base_image.onload = function(){
				context.drawImage(base_image, 0,0,screen.width,screen.height);
			}
			break;
		case 'D2 Long Corner - CT':
			base_image.src = 'images/' + AR + '/d2longct.jpg';
			base_image.onload = function(){
				context.drawImage(base_image, 0,0,screen.width,screen.height);
			}
			break;
		case "D2 Long Corner to Corner":
			base_image.src = 'images/' + AR + '/d2longcornercorner.jpg';
			base_image.onload = function(){
				context.drawImage(base_image, 0,0,screen.width,screen.height);
			}
			break;
		case "Inferno Mid":
			base_image.src = 'images/' + AR + '/infernomid.jpg';
			base_image.onload = function(){
				context.drawImage(base_image, 0,0,screen.width,screen.height);
			}
			break;
		case "Inferno Banana Rush":
			base_image.src = 'images/' + AR + '/infernobanana.jpg';
			base_image.onload = function(){
				context.drawImage(base_image, 0,0,screen.width,screen.height);
			}
			break;
		case "Cache Main to Quad":
			base_image.src = 'images/' + AR + '/cacheamain.jpg';
			base_image.onload = function(){
				context.drawImage(base_image, 0,0,screen.width,screen.height);
			}
			break;
		case "Cache B Main":
			base_image.src = 'images/' + AR + '/cachebmain.jpg';
			base_image.onload = function(){
				context.drawImage(base_image, 0,0,screen.width,screen.height);
			}
			break;
	}
	selectGun(name);
}


function toggleAR(){
	var button = document.getElementById('ar');
	
	if (AR == "16-9"){
		AR  = "4-3";
		button.innerHTML = "Aspect Ratio 4:3"
	} else if (AR == "4-3"){
		AR  = "16-9";
		button.innerHTML = "Aspect Ratio 16:9"
	}
	make_base(AR);
}



function clearDecals(){
	 //Store the current transformation matrix
	context.save();

	// Use the identity matrix while clearing the canvas
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Restore the transform
	//context.restore();
	make_base(AR);
}

function toggleHelp(){
	var button = document.getElementById('help');
	if(help){
		help = false;
		button.innerHTML = 'Help Off';
	}else{
		help = true;
		button.innerHTML = 'Help On';
	}
}

var boolDecals = true;
function toggleClearDecals(){
	var button = document.getElementById('decalToggle');
	if (boolDecals){
		boolDecals = false;
		button.innerHTML = 'Auto-clear decals: off';

	} else{
		boolDecals = true;
		button.innerHTML = 'Auto-clear decals: on';
	}
}

var boolSound = true;
function toggleMute(){
	var button = document.getElementById('mute');
	if (boolSound){
		boolSound = false;
		button.innerHTML = 'Sound off';
	} else{
		boolSound = true;

		button.innerHTML = 'Sound on';
	}
}

var boolInverted = false;
function toggleInverted(){
	var button = document.getElementById('inverted');
	if (boolInverted){
		boolInverted = false;
		button.innerHTML = 'Inverted mouse off';
	} else{
		boolInverted = true;

		button.innerHTML = 'Inverted mouse on';
	}
}

var boolHidden = false;
function toggleHide(){
	var contents = document.getElementById('contents');
	
	if(boolHidden){
		contents.style.visibility = 'visible';
		boolHidden = false;
	} else{
		contents.style.visibility = 'hidden';
		boolHidden = true;
	}
}

function selectGun(gun){
	var notSelected = document.getElementsByClassName('guns');
	for(var i = 0; i< notSelected.length; i++){
		notSelected[i].style.backgroundColor = '#ffffff';
	}
	
	var selected = document.getElementById(gun);
	selected.style.backgroundColor = 'gray';
	
	if(gun == 'ak47'){
		selectedGun = new AK();
	}
	if(gun=='m4a1'){
		selectedGun = new M4A1();
	}
	if(gun=='m4a4'){
		selectedGun = new M4A4();
	}
	if(gun=='galil'){
		selectedGun = new Galil();
	}
	if(gun=='famas'){
		selectedGun = new FAMAS();
	}
	pattern = adjustPattern(selectedGun.getPattern(), selectedGun.getName());
	fireRate = selectedGun.getFireRate();
	pullDown = selectedGun.getPullDown();
	name = selectedGun.getName();
}

//gun shit here

setInterval( function() {fireBullet(currentX,currentY)}, fireRate );


function onMouseUpdate(e){
	currentX = e.pageX;
	currentY = e.pageY;
}

var engage = function(e){
	firing = true;
	originX = e.pageX;
	originY = e.pageY;
	if(!help){
		document.body.style.cursor = 'none';
	}
}



var fireBullet = function(x,y){
	
	var sensitivity = document.getElementById('sensitivity').value;
	var windowsSens = document.getElementById('windowsSens').value;
	var windowsMultiplier = [1/.0625, 1/.0125, 1/.25, 2, 1/.75, 1,1/1.5,1/2,1/2.5,1/3,1/3.5];
	
	var recoilX =  (sensitivity/(1.2 *pullDown[i][1]/pattern[i][1])) * (x-originX) + originX + (screen.width/1920) * pattern[i][1]; //415.2/600/.14    (sensitivity/2.63) * (x-originX)+originX + (screen.width/1920)*pattern[i][1];
	var recoilY =  (sensitivity/(1.2 *pullDown[i][0]/pattern[i][0])) * (y-originY) +originY+  (screen.height/1080)* pattern[i][0];//(sensitivity/2.63) * (y-originY)+originY + (screen.height/1080)*pattern[i][0];
	
	var pulldownX = originX - windowsMultiplier[windowsSens-1] * (1.2/sensitivity) * pullDown[i][1]
	var pulldownY = originY - windowsMultiplier[windowsSens-1] * (1.2/sensitivity) *pullDown[i][0]
	
	if(boolInverted){
		pulldownY = originY + windowsMultiplier[windowsSens-1] * (1.2/sensitivity) *pullDown[i][0]
		recoilY =  -(sensitivity/(1.2 *pullDown[i][0]/pattern[i][0])) * (y-originY) +originY+  (screen.height/1080)* pattern[i][0];//(sensitivity/2.63) * (y-originY)+originY + (screen.height/1080)*pattern[i][0];

		
	}
	
	if(firing){
		context.beginPath();
	    context.fillStyle = 'red';
		context.arc(recoilX, recoilY, radius, 0, Math.PI*2);
		context.fill();
		
		if (help){
			context.beginPath();
		    context.fillStyle = 'blue';
			context.arc(pulldownX, pulldownY,radius,  0, Math.PI * 2); //(originX - 2.63/sensitivity*pattern[i][1]), originY - (2.63/sensitivity*pattern[i][0]), radius, 0, Math.PI*2);
			context.fill();
		}
		
		if(boolSound){
			var audio = new Audio('sounds/' + selectedGun.getName() + '.mp3');
			audio.play();
		}
		if(i < pullDown.length-1){
			i++;
		} else if (i == pullDown.length-1){
			i=0;
			firing = false;
			document.body.style.cursor = 'pointer';
			if(boolDecals){
				clearDecals();
			}
		}
	}
}

var ceasefire = function(){
	firing = false ;
	document.body.style.cursor = 'pointer';
	i=0;
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', onMouseUpdate);
canvas.addEventListener('mouseup',ceasefire);