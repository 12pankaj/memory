var past=[];
var r=0;
function generateRandomNumbers(x) {
  const numbers = [];
  for (let i = 1; i <= x; i++) {
    numbers.push(i);
    numbers.push(i);
}
const randomNumbers = [];
r=x*2;
for (let i = 0; i <x*2; i++) {
const randomIndex = Math.floor(Math.random() * numbers.length);
const randomNumber = numbers[randomIndex];
randomNumbers.push(randomNumber);
var h=numbers.splice(randomIndex, 1);
}
  return randomNumbers;
}
function val(x,y,z) {
	const randomNumbers = generateRandomNumbers(x);
	var imi=0;
	document.write("<div id='bar'><span>Moves :</span><span id='moves'>0</span>&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp<span id='time' style=''></span></div>")
	document.write("<table id='tables' border='0px' align='center' cellspacing='5px' style='margin-top:100px;'>")
		for(let i=1;i<=y;i++)
		{
			document.write("<tr>")
			for(let j=1;j<=z;j++)
			{
			document.write("<td><img src='image/h.png' style='height: 60px;width: 60px;' onclick='chosse("+imi+","+randomNumbers[imi]+")'/></td>");
			imi++
			}
			document.write("</tr>")
		}
		document.write("</table>")
		starttimer();
		document.body.style="background: url(image/bg5.gif) ;background-repeat: no-repeat;background-size: cover;color:white;font-size:40px;"
	}
var ch=0;
var ar=[];
var br=[];
var move=0;
var du=[];
var mov=document.getElementsByTagName("span")
var img=document.getElementsByTagName('img')
function chosse(x,y) {
	du[move]=x;
	if(du[move]==du[move-1]) return 0;
	for(i=0;i<past.length;i++)		 		if(past[i]==x )  return 0; 	
 	move++;
	mov[1].innerText=move;
	if(ch==0)
	{	
		ar[ch]=y;
		br[ch]=x;
		img[x].setAttribute("src","image/"+y+".jpg")
		ch=1;
	}
	else if(ch==1){
		ar[ch]=y;
		br[ch]=x;
		img[x].setAttribute("src","image/"+y+".jpg")
		setTimeout(function() {
		if(ar[0]!=ar[1])
			{
				img[br[0]].setAttribute("src","image/h.png")
				img[br[1]].setAttribute("src","image/h.png")
			}
			else
			{
				past.push(br[0])
				past.push(br[1])
			}
		},500);
	ch=0;
	}
	if(past.length==(r-2) && ch==0)
	{ 
		setTimeout(()=>{
			time= sec<10 ? "0"+min+":0"+sec : "0"+min+":"+sec
			clearInterval(time);
			var conf=confirm("Congrats!\nyour total move is ="+move+"\nyour timing is ="+time+"\nyou play agian")
			if(conf==true && ch==0)	location.reload()
			else		alert("bye bye...")
		},3000);
	}
}	
function starttimer() {
		min=0, sec=0, moves=0;
	    mov[2].innerText="Time: 00:00";
	    time = setInterval(function() {
	      if (past.length==r)	clearInterval(time);
	      sec++;
	      if(sec==60) {
	          min++; sec=0;
	      }
	      mov[2].innerText= sec<10 ? "Time: 0"+min+":0"+sec : "Time: 0"+min+":"+sec
	    }, 1000);
}