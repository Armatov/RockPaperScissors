let UserPoint = document.getElementById("userpoint");
let BotPoint = document.getElementById("botpoint");
let user1img = document.querySelector("#user1img");
let user2img = document.querySelector("#user2img");
let rock = "images/rock.jpg",scissors = "images/scissors.jpg",paper = "images/paper.jpg";
let question = "images/question.jpg";
let user1point = 0, user2point = 0;
let user1 = 0, user2 = 0;
let vs2 = document.getElementById("vs2"); 
let vs3 = document.getElementById("vs3"); 
let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let but3 = document.getElementById("but3");





function moveleft(){
	but1.style.left = 60 + "px";
}
function moveright(){
	but3.style.left = 93 + "px";
}
function timer1(){
	but4.style.zIndex = 2;
}
function timer(){
	setTimeout(timer1,900);
	but1.style.zIndex = -1;
	but2.style.zIndex = -1;
	but3.style.zIndex = -1;
}


function updateImg4(){
	but3.style.left = 140 + "px";
	but1.style.left = 0 + "px";
	user1point = 0; user2point = 0;
	user1 = 0; user2 = 0;
	BotPoint.textContent = user1point;
	UserPoint.textContent = user2point;
	user1img.setAttribute("src",question);
	user2img.setAttribute("src",question);
	vs2.textContent = "";
	vs3.textContent = "";
	but1.style.zIndex = 2;
	but2.style.zIndex = 2;
	but3.style.zIndex = 2;
	but4.style.zIndex = -1;
	but1.disabled = false;
	but2.disabled = false;
	but3.disabled = false;
}
function updateImg(x){
	if(x == 1){
		user1 = 1;
		user1img.setAttribute("src",rock);
	}else if(x == 2){
		user1 = 2;
		user1img.setAttribute("src",scissors);
	}else if (x == 3){
		user1 = 3;
		user1img.setAttribute("src",paper);
	}else if(x == 4){
		user2 = (Math.round(Math.random()*2))+1;
		if(user2 == 1){
			user2img.setAttribute("src",rock);
		}else if(user2 == 2){
			user2img.setAttribute("src",scissors);	 
		}else if(user2 == 3){
			user2img.setAttribute("src",paper);	 
		}
	} 
	
	if(user1 == 0){
		user1img.setAttribute("src", question);
	}else if(user2 == 0){
		user2img.setAttribute("src", question);
	}
	

	if(user1 == user2){
		vs2.textContent = "";
		vs3.textContent = "Ничья";
		user1 = 0; user2 = 0;
	}else if(user2 == 1 && user1 == 2||user2 == 2 && user1 == 3|| user2 == 3&& user1 == 1){
		user2point +=1;
		BotPoint.textContent = user2point;
		vs2.textContent = "Игрок 2";
		vs3.textContent = "побидил";
		user1 = 0; user2 = 0;
	}else if(user1 == 1 && user2 == 2||user1 == 2 && user2 == 3|| user1 == 3&& user2 == 1){
		user1point+=1;
		UserPoint.textContent = user1point;
		vs2.textContent = "Игрок 1";
		vs3.textContent = "побидили";
		user1 = 0; user2 = 0;

	}
	if(user1point >= 3){
		vs3.textContent = "победитель!";
		but1.disabled = true;
		but2.disabled = true;
		but3.disabled = true;
		but1.addEventListener(moveleft(),moveright(),timer(), false);

	}if(user2point >= 3){
		vs3.textContent = "победитель!";
		but1.disabled = true;
		but2.disabled = true;
		but3.disabled = true;
		but1.addEventListener(moveleft(),moveright(),timer(), false);
	}
}
