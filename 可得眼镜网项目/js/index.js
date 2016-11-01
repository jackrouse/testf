//顶部登录下拉菜单
$(function(){
	var $xl=$(".top-xl");
	$xl.hover(function(){
		$(this).children("ul").slideDown(200);
		$(this).css({border:"1px solid #ddd",width:61,borderButtom:0});
	},function(){
		$(this).children("ul").hide(200);
		$(this).css({border:0,width:63});
	});
});

//手机版效果
$(function(){
	$img=$("<img src='img/weixin.gif'/>");
	$img.css({position:"absolute",left:"-50px",top:"26px",zIndex:1,display:"none"});
	$img.appendTo($(".sjb"));
	$(".sjb").hover(function(){
		$img.show(100);
	},function(){
		$img.hide();
	});
});





$(function(){
	/*分类中的小tab切换开始*/
		var $classifyTab=$(".classify-tab");
		var $tabchc=$(".tabchc");
		$tabchc.each(function(i){
			$(this).mouseover(function(){
				$tabchc.removeClass("selected").eq(i).addClass("selected");
				$classifyTab.css("display","none").eq(i).css("display","block");
			});
		});
	});

	/*分类中的小tab切换结束*/
	
	//今日秒杀开始
$(function(){
	var $miaoshabg=$(".miaoshabg");
	var $msul=$(".miaosha-item ul");
	//console.log($msul);
		$miaoshabg.eq(0).mouseover(function(){
			$miaoshabg.eq(0).css("background-position-y","-182px");
			$miaoshabg.eq(1).css("background-position-y","-273px");
			$msul.css("display","none").eq(0).css("display","block");
		});
		$miaoshabg.eq(1).mouseover(function(){
			$miaoshabg.eq(0).css("background-position-y","0px");
			$miaoshabg.eq(1).css("background-position-y","-91px");
			$msul.css("display","none").eq(1).css("display","block");
		});
});
	
	//今日秒杀结束
	
	
	//大轮播图开始
$(function(){
	var $banli=$(".banner-ul li");
	var $span=$(".banner-btn span");
	var k=0;
	$span.eq(0).css({background:"#90C31F"});
	var timer=setInterval(fn1,3000);
	function fn1(){
		k++;
		if(k==$banli.length){
			k=0;
		}
		play(k);
	}
	
	function play(k){
		$banli.eq(k).stop().animate({opacity:1}).siblings().stop().animate({opacity:0});
		$span.eq(k).css({background:"#90C31F"}).siblings().css({background:"rgba(0,0,0,0.5)"});
		switch(k){
			case 0:$(".banner-bg").css({background:"#0183D7"});
			break;
			case 1:$(".banner-bg").css({background:"#9ED7F5"});
			break;
			case 2:$(".banner-bg").css({background:"#774D59"});
			break;
			case 4:$(".banner-bg").css({background:"#FBDFDE"});
			break;
			case 3:$(".banner-bg").css({background:"#1C8EFE"});
			break;
		}
			
	
	}
	
	
	$span.on("mouseover",function(){
		k=$(this).index();
		play(k);
	});
	
	
	
	$(".banner-box").hover(function(){
		clearInterval(timer);
		$(".btn0").show();
	},
	function(){
		$(".btn0").hide();
		timer=setInterval(fn1,3000);
	});
	
	$(".btn0").hover(function(){
		$(".btn0").css({"background-position-y":"0px"});
	},
	function(){
		$(".btn0").css({"background-position-y":"-47px"});
		
	});
	
	$(".banner-nex").click(function(){
		fn1();
	});
	
	$(".banner-pre").click(function(){
		k--;
		if(k==-1){
			k=$banli.length-1;
		}
		play(k);
	});
});		
	
	//大轮播图结束
	
	//1F小轮播图
	$(function(){
		var $widebox=$(".wide-banbox");
		var $spanbox=$(".wide-banbtn");
		$widebox.each(function(q){
			//console.log($widebox.eq(q));
			$widebox.eq(q).attr("count",0);
			//console.log($widebox.eq(q).attr("count"));
			if($widebox.eq(q).attr("banbox")==2){
			$widebox.eq(q)[0].timer=setInterval(function(){
				play(2,210,$widebox.eq(q));
			},2000);
			//轮播图缩略图事件
			$widebox.eq(q).next().children("span").mouseover(function(){
				$widebox.eq(q).animate({left:-210*$(this).index()});
				$(this).addClass("selected").siblings().removeClass("selected");
			});
			
			$widebox.eq(q).parent().mouseout(function(){
				$widebox.eq(q)[0].timer=setInterval(function(){
				play(2,210,$widebox.eq(q));
				},2000);
			});
			
			
		}
			if($widebox.eq(q).attr("banbox")==3){
			$widebox.eq(q)[0].timer=setInterval(function(){
				play(2,490,$widebox.eq(q));
			},2000);
			
			//轮播图缩略图事件
			$widebox.eq(q).next().children("span").mouseover(function(){
				$widebox.eq(q).animate({left:-490*$(this).index()});
				$(this).addClass("selected").siblings().removeClass("selected");
			});
			
			$widebox.eq(q).parent().mouseout(function(){
			$widebox.eq(q)[0].timer=setInterval(function(){
				play(2,490,$widebox.eq(q));
			},2000);
			});
		}
			
			if($widebox.eq(q).attr("banbox")==4){
			$widebox.eq(q)[0].timer=setInterval(function(){
				play(2,710,$widebox.eq(q));
			},2000);
			
			//轮播图缩略图事件
			$widebox.eq(q).next().children("span").mouseover(function(){
				$widebox.eq(q).animate({left:-710*$(this).index()});
				$(this).addClass("selected").siblings().removeClass("selected");
			});
			
			$widebox.eq(q).parent().mouseout(function(){
			$widebox.eq(q)[0].timer=setInterval(function(){
				play(2,710,$widebox.eq(q));
			},2000);
			});
		}
			
			
			
			$widebox.eq(q).parent().mouseover(function(){
				clearInterval($widebox.eq(q)[0].timer);
			});
			
			
			
		});
		
		function play(k,imgWidth,obj){
			var i=obj.attr("count")*1+1;
			//console.log(i);
			obj.attr("count",i);
			if(i==k){
				obj.attr("count",0);
			}
			obj.animate({left:-imgWidth*obj.attr("count")});
			obj.next().children("span").removeClass("selected").eq(obj.attr("count")).addClass("selected");
		}
		
		
		
	});
	
	//小轮播图结束
	
	
	//左侧导航Ajax加载开始
	$(function(){
		var $culb=$("<ul class=nav-item />");
		$culb.appendTo($(".nav-left"));
		
		var obj;
		var i=0;
		$.get("nav.json",function(str){
			obj= str;
			addContent(obj);
			
			var $li=$(".nav-item-li");
			$li.hover(function(e){
				$(this).children(".child-list").show();
				//$(this).css({borderColor:"#94c51b").siblings().css({);
				//$(this).find(".nav-line ").hide();
				$(this).find(".nav-jt").hide();
			},
			function(){
				$(this).children(".child-list").hide();
				//$li.find(".nav-line").show();
				$(this).find(".nav-jt").show();
			});
			});
		
		function addContent(obj){
			for(var key in obj){
				//console.log(obj[key].title);

				var $cli=$("<li class=nav-item-li />");
				//console.log($cli);
				$cli.appendTo($culb);
				var $cil=$("<i class=nav-tb />").appendTo($cli);
				var $ch3=$("<h3 />").appendTo($cli);
				var $cir=$("<i class=nav-jt />").appendTo($cli);
				var $cdiv=$("<div class=nav-line />").appendTo($cli);
				$ch3.html(obj[key].title);
				var n=key.substring(3);
				$cil.addClass("tb"+n);
				creatul($cli,obj[key].catalog,obj[key].src);
			}
		}
		
		function creatul(cli,obj,objr){
			var $li=cli;
			var $cdiv=$("<div class=child-list />").appendTo($li);
			var $cul=$("<ul class=child-list-left />").appendTo($cdiv);
			var $culr=$("<ul class=child-list-right />").appendTo($cdiv);
		   	var $imgliu=$("<li class=child-list-imgup />").appendTo($culr);
		   	$imgliu.html("<a href='#'><img src=img/"+objr[0]+" /></a>");
		 	var $imglid=$("<li class=child-list-imgdown />").appendTo($culr);
		   	$imglid.html("<a href='#'><img src=img/"+objr[1]+" /></a>");
			//var carr=[];
			for(var key in obj){
				$clit=$("<li class=child-list-tit />").appendTo($cul);
				//console.log(obj[key].split(" ")[0]);
				var arr=obj[key].split(" ");
				$clit.html(arr[0]);
				$clic=$("<li class=child-list-con />").appendTo($cul);
				var arrn=arr.slice(1);
				//console.log(arrn);
				
				for(var i=0;i<arrn.length;i++){
					arrn[i]=("<a href='#'>"+arrn[i]+"</a>");
				}
				//console.log(arrn);
				
				$clic.html(arrn);
				
			}
		}
	});
		//左侧导航Ajax加载结束

        //底部左侧tab切换
        $(function(){
        	$li=$(".last-tab-tit li");
        	$li.mouseover(function(){
        		$(this).addClass("selected").siblings().removeClass("selected");
        		$(".last-tab-gy").hide().eq($(this).index()).show();
        	});
        });

		 //底部右侧tab切换
		$(function(){
			$a=$(".last-btn a");
			$wxwb=$(".wxwb");
			$a.mouseover(function(){
				$wxwb.hide().eq($(this).index()).show();
				if($(this).index()==0){
					$(this).parent().css({backgroundPositionY:0});
				}else{
					$(this).parent().css({backgroundPositionY:"-50px"});
				}
			});
		});


		//底部评论
		$(function(){
			var $li=$(".last-discuss-con li");
			var $ul=$(".last-discuss-con ul");
			setInterval(function(){
				//console.log($li.eq(0));
				$li=$(".last-discuss-con li");
				$li.eq(0).hide(500,function(){
					$li.eq(0).appendTo($ul).siblings().show();
				});
				
			},3000);
			
		});


        //右侧浮动栏
        $(function(){
        	var $a=$(".return-top");
        	$(window).scroll(function(){
        		var top=document.documentElement.scrollTop||document.body.scrollTop;
        		//console.log(top);
        		if(top>400){
        			$a.css({display:"block"});
        		}else{
        			$a.fadeOut();
        		}
        	});
        	
        	$a.click(function(){
        		var timer=setInterval(function(){
        			var top=document.documentElement.scrollTop||document.body.scrollTop;
        			var newtop=Math.floor(-top*0.3);
        			window.scrollBy(0,newtop);
        			if(newtop>=0){
        				clearInterval(timer);
        			}
        			//console.log(newtop);
        		},100);
        		
        	});
        });

		//右侧漂浮栏
		$(function(){
			var $a=$(".pf-left a");
			var $div=$(".pf-left");
			$(window).scroll(function(){
        		var Top=document.documentElement.scrollTop||document.body.scrollTop;
        		//console.log(top);
        		//console.log(($div).position().top);
        		if(Top>=$(".wide-f1").position().top){
        			$div.fadeIn();
        		}else{
        			$div.fadeOut();
        		}
        	});
			
			
			
			$a.click(function(){
				//alert($(".wide-f1").position().top);
				
			});
		});












