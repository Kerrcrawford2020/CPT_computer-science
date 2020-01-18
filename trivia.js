    
var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="correct"
        score++
        
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score
}

else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score
}


else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score
}


	

        

else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score
}


	


else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score



	
}

else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score
}


	


else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score



	
}

else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score
}


	


else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score
}


	


else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score
}


	


ans++; 

	
}

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="which one of these pokemon is native to unova \na)litten \nb)trubbish \nc)pikachu \nd)combee";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="in b/w 2 what pokemon is first in the pokedex \na)mew \nb)arceus \nc)snivy \nd)victini";
    document.view.qans.value=""
}

else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="what character in don't starve starts with a lighter \na)willow \nb)wilson \nc)wortox \nd)maxwell";
    document.view.qans.value=""
}

else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value =" minecraft was originally known as \na)cave game \nb)block craft \nc)terraria \nd)minecraft";
    document.view.qans.value=""
}

else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="in the original donkey kong who was the person in distress \na)pauline \nb)peach \nc)daisy \nd)elizabeth";
    document.view.qans.value=""
}

else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was the main incident in the first fnaf game \na)the bite of 87 \nb)the bite of 83 \nc)the closure of fredbears family diner \nd)the missing childrens incident   ";
    document.view.qans.value=""
}

else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="what is jokers awakened persona \na)asriel \nb)arsene \nc)frisk \nd)satanael";
    document.view.qans.value=""
}

else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="in undertale how many human souls are needed to break the barrier \na)8 \nb)7 \nc)6 \nd)9";
    document.view.qans.value=""
}

else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="which one of these groups are the main heroes  \na)squid sisters agent 3\nb)squid sisters agent 8 \nc)off the hook agent 8 \nd)off the hook agent 3";
    document.view.qans.value=""
}

else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="what corrupts sectonia in kirby triple deluxe \na)taranza \nb)magalor magic \nc)the amazing mirror \nd)dark meta knight";
    document.view.qans.value=""
}
	i++; 
}