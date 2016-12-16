//数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};
//数组map方法补丁
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a < len){
		result.push(callback(this[a], a++, this));
	}
	return result;
};
//数组map方法补丁
Array.prototype.filter = function(callback){
	var a = -1,
		len = this.length,
		result = [];
	while(++a < len){
		callback(this[a], a, this) && result.push(this[a]);
	}
	return result;
};
var dataimg=[
	{
		url:"./images/ooo.jpg",
		href:"https://www.baidu.com"
	},
	{
		url:"./images/ttt.jpg",
		href:"https://nuomi.baidu.com"
	},
	{
		url:"./images/ththth.jpg",
		href:"https://tieba.baidu.com"
	}
];
function lunbo(dataimg){
	function lunbotu(href,url){
		var pic=document.createElement("a");
			pic.href=href;
			pic.style.background="url("+url+") no-repeat";
			return pic;
	}
	var imagesall=document.createElement("div");
		imagesall.className="mainleftimg";
	var images=dataimg.map(function(item){
		var img=lunbotu(item.href,item.url);
		imagesall.appendChild(img);
		return img;
		});
	var a=0,
    imageslen=dataimg.length,
	imagesindex=dataimg.length-1;
	images[0].className="current";
	var timer=setInterval(function(){
		var a1=a;
		a = a >= imagesindex ? 0 : a+1;
		images[a1].className="currentmove";
		images[a].className="current";
	},3000);

	imagesall.onmouseover= function () { 
	   clearInterval(timer); 
		};

	imagesall.onmouseout= function() { 
	   timer=setInterval(function(){
		var a1=a;
		a = a >= imagesindex ? 0 : a+1;
		images[a1].className="currentmove";
		images[a].className="current";
		},3000);
	 	}
	var lefter=document.createElement("div");
		lefter.className="lefter";
	lefter.onclick=function(){
		var a1=a;
		if(a==0){
			a=imagesindex ;
			images[a1].className="currentmove";
			images[a].className="current";
		}else{
			a = a <= imagesindex  ? a-1: 0 ;
		images[a1].className="currentmove";
		images[a].className="current";			
		}	
	}
	var righter=document.createElement("div");
		righter.className="righter";
	righter.onclick=function(){
	var a1 = a; 
	a = a >= imagesindex  ? 0 : a + 1;
	images[a1].className="currentmove";
	images[a].className="current";	
	}
	var Fragment=document.createDocumentFragment(); 
	imagesall.appendChild(righter);
	imagesall.appendChild(lefter);
	Fragment.appendChild(imagesall);
	document.getElementById("mainright").appendChild(Fragment);
	}
	lunbo(dataimg);



	 var title=document.getElementById('choosecard').getElementsByTagName('a'),
      choose=document.getElementById('choose').getElementsByTagName('ul');
      title[0].style.background='rgb(244,244,244)';
      title[0].style.color='rgb(71,82,104)';
      choose[0].style.display='block';
 		 for(var i=0;i<title.length;i++){
                title[i].index=i;
                  title[i].onclick= function () {
                    for(var i=0;i<title.length;i++){
                        title[i].style.background='rgb(111,111,111)';
                        choose[i].style.display='none';
                        title[i].style.color='white';
                    }
                    this.style.background='rgb(244,244,244)';
                    this.style.color='red';
                    choose[this.index].style.display='block';
                }
            };