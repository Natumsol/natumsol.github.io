var iScore = 0;
var iHighscore = 0;
var bIsover = false;
var brick = null;
var bIsneednew = false;
var brick2 = null;
var test = null;

function moveBrick(pos)
{
  brick2 = new Array();
  var i = 0, j = 0, num = 0;
  bIsneednew = false; 
  test = new Array();
  for(j = 0; j < 4; j++) // j 为行变量
  {
    /*
    *一列一列的遍历。
    *
    *
    */
    for(num = 0 ;num < 4; num ++) 
      {
        brick2[num] = 0;
        test[num] = 0    
        //对副表进行初始化
      }

    if(pos == 1)
    {
      for(i = 0; i < 4; i++) // i 为列变量
      {
        test[i] = brick2[i] = brick[i][j];
        brick[i][j] = 0;
        
      }

      removeBrick();

      i = 0;    //初始化下标，开始给主表赋值。
      for(num = 0; num < 4; num ++)
      {
        if(brick2[num] != 0)
        {
          brick[i][j] = brick2[num];
          i ++;
        }
      }

      for(i = 0; i < 4; i ++)
      {
        if(test[i] != brick[i][j])
          bIsneednew = true;
       
      }     
    } //向上移动


    else if(pos == 2)
    {

      num = 3;
      for(i = 0; i < 4; i ++,num --)
      {
        test[i] = brick2[num] = brick[i][j];
        brick[i][j] = 0;
      } 

      removeBrick();

      i = 3;    //初始化下标，开始给主表赋值。
      for(num = 0; num < 4 ; num ++)
      {
        if(brick2[num] != 0)
        {
          brick[i][j] = brick2[num];
          i --;
        }
      }

       for(i = 0; i < 4; i ++)
      {
        if(test[i] != brick[i][j])
          bIsneednew = true;    
      }     
    } //向下移动


    else if (pos == 3)
    {
      for(i = 0; i < 4; i++)
      {
        test[i] = brick2[i] = brick[j][i];
        brick[j][i] = 0;
      }

      removeBrick();

      i = 0;    //初始化下标，开始给主表赋值。
      for(num = 0; num < 4; num ++)
      {
        if(brick2[num] != 0)
        {
          brick[j][i] = brick2[num];
          i ++;
        }
      }    

        for(i = 0; i < 4; i++)
      {
        if(test[i] != brick[j][i])
          bIsneednew = true;
      
      } 
    }//向左移动


    else if(pos == 4)
    {
        num = 3;
         for(i = 0; i < 4; i ++ ,num --)
        {
          test[i] = brick2[num] = brick[j][i];
           brick[j][i] = 0;

        }

        removeBrick();

        i = 3;    //初始化下标，开始给主表赋值。
        for(num = 0; num < 4; num ++)
        {
          if(brick2[num] != 0)
          {
            brick[j][i] = brick2[num];
            i --;
          }
        }  
        
        for(i = 0; i < 4; i++)
          {
            if(test[i] != brick[j][i])
              bIsneednew = true;  
          }

    } //向右移动

  }

  if(bIsneednew)    
    newbrick();

}

function canMove(pos)
{

}
function removeBrick()
{
  for(var i = 0; i < 3; i++)
  {

     if(i + 2 < 4 && brick2[i] != 0 && brick2[i + 1] == 0 && brick2[i] == brick2[i + 2])
      {
        brick2[i]= brick2[i] * 2;
        brick2[i + 2] = 0;
        bIsneednew= true;
        i = i + 2;
        // iScore = iScore + brick2[i];
      }
      else if(i == 0 && brick2[1] ==0 && brick2[2] == 0 && brick2[0] == brick2[3] )
      {
        brick2[0] = brick2[0] * 2;
        brick2[3] = 0;
      }
    else if (brick2[i] != 0 && brick2[i] == brick2[i + 1] )
      {
        brick2[i] = brick2[i] * 2;
        brick2[i +1] = 0;
        bIsneednew= true;
        i ++;
        // iScore = iScore + brick2[i];
      }
   
  }

}

function init()
{
	brick = new Array();
	for (var i = 0; i < 4; i ++)
	{
		brick[i] = new Array();
		for(var j = 0; j < 4; j ++)
			brick[i][j] = 0;
	}

	newbrick();
	newbrick();

  iScore = 0;
}

function newbrick()
{
	 var m, n;
    do {
        m = Math.floor(Math.random() * 4);
        n = Math.floor(Math.random() * 4);
    } while ( brick[m][n] != 0);
    var k;
    k = Math.floor(Math.random() * 10);
    if (k < 7 ) {
        brick[m][n] = 2;
    } else {
        brick[m][n] = 4;
    }
}


function paint()
{
	var box = document.getElementsByClassName('grid-cell');
	var index = 0;
	var str = "";
  iScore = 0;
	for(var i = 0; i < 4 ;i ++)
	{
		for(var j = 0; j < 4; j ++)
		{
			index = 4 * i + j;
			if(brick[i][j] == 0)
				box[index].innerHTML = "";
			else
			{
        if(box[index].childElementCount)
        {
          var childs = box[index].childNodes;  
          box[index].removeChild(childs[0]);
        }
  				var inner = document.createElement("div");
  				inner.setAttribute("class", "mode" + brick[i][j] );
  				inner.innerHTML = brick[i][j] + "</div>";
  				box[index].appendChild(inner);

          iScore = iScore + brick[i][j];
        
			}
            box[index].style.background = str;
		}
	}



  var oScore = document.getElementById("score");
  oScore.innerHTML = "分数：" + iScore;
  if(bIsover && iScore > iHighscore)
    iHighscore = iScore;
  
    var oHighscore = document.getElementById("highscore");
    oHighscore.innerHTML = "最高分：" + iHighscore;
  

}

function checkIsOver()
{
  var i, j;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (brick[i][j] == 2048) {
                bIsover = true;
                alert("You Win!!");
            }
        }
    }


    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (brick[i][j] == 0) 
            {
                bIsover = false;
                return;               
            }
        }
    }

for(i = 0; i < 4;i ++)
  for(j = 0; j < 4; j ++)
    {
      if(i + 1 < 4)
      {
        if(brick[i][j] == brick[i + 1][j])
        {
          bIsover = false;
          return;
        }
      }

      if(j + 1 < 4)
      {
        if(brick[i][j] == brick[i][j + 1])
        {
          bIsover = false;
          return;
        }
      }
    }



    if(confirm("You lose,是否重新开始？"))
    {
      init();
      paint();
    }

}

window.onload = function() 
{
	init();
	paint();
  document.onkeydown = function(ev) 
    {
        var oE = ev || event;
        if (oE.keyCode == 87 || oE.keyCode == 38 && bIsover == false) {
            moveBrick(1);
            paint();
            checkIsOver();
        }
        if (oE.keyCode == 83 || oE.keyCode == 40 && bIsover == false) {
            moveBrick(2);
            paint();
            checkIsOver();
        }
        if (oE.keyCode == 65 || oE.keyCode == 37 && bIsover == false) {
            moveBrick(3);
            paint();
            checkIsOver();
        }
        if (oE.keyCode == 68 || oE.keyCode == 39 && bIsover == false) {
            moveBrick(4);
            paint();
            checkIsOver();
        }
    };
};

var fadeOpcityTime;
/* 淡入淡出  */
 function fadeOpcity(elem,type,time,to){
  var pos = 0;
  fadeOpcityTime = setInterval(function(){
    setOp
  }); 
 }