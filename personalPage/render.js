export function layout(title, content) {
  return `
  <html>
  <head>
    <title>${title}</title>
    <style>
      body {
        padding: 80px;
        font: 16px Helvetica, Arial;
      }
  
      h1 {
        font-size: 2em;
      }
  
      h2 {
        font-size: 1.2em;
      }
  
      #posts {
        margin: 0;
        padding: 0;
      }
  
      #posts li {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child {
        border-bottom: none;
      }
  
      textarea {
        width: 500px;
        height: 300px;
      }
  
      input[type=text],
      textarea {
        border: 1px solid #eee;
        border-top-color: #ddd;
        border-left-color: #ddd;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text] {
        width: 500px;
      }

      .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 3;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
      }
      
      .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
      }
      
      .sidenav a:hover {
        color: #f1f1f1;
      }
      
      .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
      }
      
      @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
      }
      /*工具列*/
      .navbar {
        overflow: hidden;
        background-color: #333;
      }
      
      .navbar a {
        float: left;
        font-size: 16px;
        color: yellow;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      .dropdown {
        float: left;
        overflow: hidden;
      }
      
      .dropdown .dropbtn {
        font-size: 16px;  
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
      }
      
      .navbar a:hover, .dropdown:hover .dropbtn {
        background-color: red;
      }
      
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 3;
      }
      
      .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }
      
      .dropdown-content a:hover {
        background-color: #ddd;
      }
      
      .dropdown:hover .dropdown-content {
        display: block;
      }
      
      * {
        box-sizing: border-box;
      }
      
      body {
        font-family: Arial, Helvetica, sans-serif;
      }
      /*超連結顏色*/
      a:link{
        color: yellow;
      }
      a:visited{
        color: dodgerblue;
        background-color:transparent;
        text-decoration:none;
      }
      
      a:active{color: salmon;
      text-decoration: seagreen;}
      
      /* Style the header */
      header {
        background-color: rgb(255, 255, 255);
        font-size: 16px;
        height: 800px;
        border-style:unset;
        border-width: 100px;
        border-color: darkviolet;
      }
      
      /* Create two columns/boxes that floats next to each other */
      nav {
        float: left;
        width: 250px;
        height: 2500px; /* only for demonstration, should be removed */
        background:white;
        padding: 20px;
      }
      
      /* Style the list inside the menu */
      nav ul {
        list-style-type:georgian;
        padding: 500;
      }
      
      article {
        float: left;
        padding: 20px;
        width: 100%;
        background-color:chartreuse;
        height: 100px;
        float: middle; /* only for demonstration, should be removed */
      }
      aside{
        background-color:rgb(255, 255, 255);}
      
      /* Clear floats after the columns */
      section:after {
        content: "";
        display: table;
        clear: both;
      }
      
      /* Style the footer */
      footer {
        background-color:blue;
        padding: 10px;
        text-align: center;
        color: white;
      }
      
      /* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
      @media (max-width: 150px) {
        nav, article {
          width: 100%;
          height: auto;
        }
      }
      /*照片動畫*/
      body,div,ul,li,a,img{margin: 0;padding: 0;}
                      .slider{width: 988px;margin: 0px auto;position: relative;height: 700px;overflow: hidden;z-index: 1;}
                      .slider li{list-style: none;position: absolute;left: 0px;top: 50px;z-index: 1;}
                      .slider img{border: none;height: 900px;width:1080px;z-index: 1;}
                      .slider .slider_btn{position: relative;height:25px;width:100%;bottom:-350px;text-align:right; margin:308px 0px 0 0px; right:83%;}
                      .slider .slider_btn span{display: inline-block;width: 15px;height: 15px;line-height: 15px;text-align: center;margin-right: 5px;cursor: pointer;background: #999;color: #FFFFEF;border-radius: 15px;font-size: 12px;}
      
      
      div.ex1 {
        width: 200px;
        height:200px;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
  <header>
  <div class="navbar">
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="子目錄/側欄/離島生活點滴.html">離島生活點滴</a>
      <a href="子目錄/側欄/相片集.html">相片集</a>
      <a href="子目錄/側欄/自我介紹.html">自我介紹</a>
    </div>
    
    <span style="font-size:30px;float:left;cursor:pointer" onclick="openNav()">&#9776; </span>
    
    <script>
    function openNav() {
      document.getElementById("mySidenav").style.width = "150px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    </script>
    

    <a href="home.html">回首頁</a>
    <a href="子目錄/gameroom/gameroom.html">game room</a>
    <a href="子目錄/classroom/classroom.html">eggwu的小教室</a>
    <a href="子目錄/網頁期末/學以致用.html">學以致用</a>

    <div class="dropdown">
      <button class="dropbtn">全國美食、景點特搜
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="子目錄/tourist/tourist.html">景點</a>
        <a href="子目錄/food/food.html">美食</a>
      </div>
    </div> 
    
  </div>
  
  <!--參考學校首頁(經過修改)-->
  
  <div class="slider">
    <ul class="slider_pic">
          
          <li><img src="photo/IMG_0634.JPG" alt="第一章圖" style="width: 1080px;height: 900px;"/></a></li>
          
          <li></a><img src="photo/IMG_1523.JPG" alt="第二章圖" style="width: 1080px;height: 900px;"/></a></li>
          
          <li><img src="photo/IMG_2191.JPG" alt="第三張圖"style="width: 1080px;height: 900px;" /></a></li>
          
          <li><img src="photo/IMG_2841.JPG" alt="第四張圖"style="width: 1080px;height: 900px;" /></a></li>
          
          <li><img src="photo/IMG_3395.JPG" alt="第五章圖"style="width: 1080px;height: 900px;" /></a></li>
          
    </ul>
    <div class="slider_btn" style="padding-right: 20px">
      <span style="background-color: deeppink;"></span><span style="background-color: peru;"></span> <span style="background-color: chartreuse;"></span> <span style="background-color: darkturquoise;"></span> <span style="background-color: red;"></span> </div>
</div>
<script>
     
     function slider(s){this.init.apply(this,arguments)}
     slider.prototype={
          init:function(s){
             this.o=this.getByClass(s)[0];
             this.l=this.getByClass('slider_pic',this.o)[0].getElementsByTagName('li');
             this.b=this.getByClass('slider_btn',this.o)[0];
             this.bSpan=this.b.getElementsByTagName('span');
             this.len=this.l.length;
             this.iNum=0;
             this.status();//初始化状态
             this.autoPlay();//自动播放
             this.clickPlay();//点击按钮播放
             this.suspensionPause();//鼠标悬浮暂停
          },
           clickPlay:function()
           {
                var This=this;
                for(var i=0;i<this.len;i++)
                {    
                      this.bSpan[i].index=i;
                      this.bSpan[i].onclick=function()
                      {
                            clearInterval(This.timer);
                            var index=this.index;
                            This.iNum=(index+1) == This.len ? 0 : (index+1)  ;
                            var o=This.l[index];
                            This.setLayout(this,o);
                            This.autoPlay();
                      }
                }
           },
           suspensionPause:function()
           {  
                var This=this;
                for(var i=0;i<this.len;i++)
                {
                      this.l[i].onmouseover=function()
                      {
                            clearInterval(This.timer);
                      }
                      this.l[i].onmouseout=function()
                      {
                            This.autoPlay();
                      }
                }
           },
           setLayout:function(o1,o2){
                for(var j=0;j<this.len;j++)
                {
                      if(this.bSpan[j]!=o1)
                      {
                            this.bSpan[j].className='';
                            this.l[j].style.zIndex=j;
                      }
                }
                o2.style.zIndex=this.len;
                o2.style.left='600px';
                this.doMove(o2,0);
                o1.className='cur';
           },
           status:function(){
                for(var i=this.len;i--;i>0)
                {
                      this.l[i].style.zIndex=i;
                      this.bSpan[i].className='';
                }
                this.l[0].style.zIndex=this.len;
                this.bSpan[0].className='cur';
                this.b.style.zIndex=(this.len+1);
           },
           autoPlay:function(){
                this.timer=null;
                var This=this;
                this.timer=setInterval(function(){
                      This.setLayout(This.bSpan[This.iNum],This.l[This.iNum])
                      This.iNum++;
                      if(This.iNum==This.len)
                      {
                            This.iNum=0;
                      }
                },4500)
           },
           getByClass:function(s,p){
                var reg=new RegExp('(\\b)'+s+'(\\b)');
                var aResult=[];
                var aElement=(p || document).getElementsByTagName('*');
                for(var i=0;i<aElement.length;i++)
                {
                      reg.test(aElement[i].className) && aResult.push(aElement[i])
                }
                return aResult;
           },
           doMove:function(o,t)
           {
                clearInterval(o.timer);
                o.timer=setInterval(function(){
                      var iS=(t-o.offsetLeft)/8;
                      iS=iS>0?Math.ceil(iS):Math.floor(iS);

                      if(o.offsetLeft==t)
                      {
                            clearInterval(o.timer);
                      }
                      else
                      {
                            o.style.left=o.offsetLeft+iS+"px";
                      }

                },30)
           }

     }
     var slide=new slider('slider');
    </script>
</header>

<section>
  <nav>
    <ul>
      
     
    </ul>
  </nav>
 
  
  <aside id="content">
  ${content}
  </aside>
  
</section>

<footer>

  <p>版權所有翻印必究</p>
</footer>


    
  </body>
  </html>
  `
}

export function list(posts) {
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${ post.title }</h2>
      <p><a href="/post/${post.id}">Read post</a></p>
    </li>
    `)
  }
  let content = `<header>
  <h1>Posts</h1>
  <p>You have <strong>${posts.length}</strong> posts!</p>
  <p><a href="/post/new">Create a Post</a></p>
  <ul id="posts">
    ${list.join('\n')}
  </ul></header>
  `
  return layout('Posts', content)
}

export function newPost() {
  return layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form action="/post" method="post">
    <p><input type="text" placeholder="Title" name="title"></p>
    <p><textarea placeholder="Contents" name="body"></textarea></p>
    <p><input type="submit" value="Create"></p>
  </form>
  `)
}

export function show(post) {
  return layout(post.title, `
  <style>
  h1
  {
    font-size: 200cm;
  }
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `)
}
