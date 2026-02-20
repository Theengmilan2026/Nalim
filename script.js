const text=["Graphic Designer","Video Editor","Data Manager"];let i=0,j=0,current="",isDeleting=false;
function type(){current=text[i];document.getElementById("typing").textContent=current.substring(0,j);
if(!isDeleting&&j<current.length)j++;else if(isDeleting&&j>0)j--;else{isDeleting=!isDeleting;if(!isDeleting)i=(i+1)%text.length;}
setTimeout(type,isDeleting?60:120);}type();