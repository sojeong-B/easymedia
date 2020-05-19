var n=0; 

var easymedia={
	mobile : function(){
		console.log("mobile function");

		$(".tab").click(function(){
			$(".mobile").toggleClass("active");
			$(".dim").toggleClass("active");
			$(".tab").toggleClass("active");
		});
		$(".dim").click(function(){
			$(".dim").removeClass("active");
			$(".tab").removeClass("active");
			$(".mobile").removeClass("active");
		});
	},
	video : function(){
		var goPage;
		var topPos;
		var t=0;
		n=0;
		var w, h;
		var videoW, videoH;
		var video=document.getElementById("myvideo");

		video.addEventListener("loadeddata", function(){
			video.muted=true;
			video.play();
			$(window).trigger("resize");
		});
		$(window).scroll(function(){
			t=$(window).scrollTop();

			if(t < $("#career").offset().top-200){
				n=0;
			}
			else if(t < $("#portfolio").offset().top-200){
				n=1;
			}
			else if(t < $("#benefit").offset().top-200){
				n=2;
				$("#portfolio").addClass("active");
			}
			else if(t < $("#awards").offset().top-200){
				n=3;
				$("#benefit").addClass("active");
			}
			else if(t < $("#contact").offset().top-200){
				n=4;
				$("#awards").addClass("active");

				if(n == $(window).height() - $("#contact").offset().top-200){
					$("#contact").addClass("active");
				}
			}
			else{
				n=5;
			}

			if(n == 0){
				$("#header").addClass("active")
				$(".btn_top").removeClass("active");
				$(".menu_zone").removeClass("active");
			}
			else{
				$("section").eq(n-1).addClass("active");
				if(n >= 1){
					$(".btn_top").addClass("active");
					$(".menu_zone").addClass("active");
					$("#business").addClass("active");
				}
				else{
					$(".btn_top").removeClass("active");
					$(".menu_zone").removeClass("active");
				}
			}
			$(".top .menu li a").removeClass("on");
			$(".top .menu li").eq(n).find("a").addClass("on");
		});
	},
	resize : function(){
		$(window).resize(function(){
			$(".header_inner").removeAttr("style");
			$("#myvideo").removeAttr("style");
			w=$(window).width();
			h=$(window).height();

			if(w > h){ 
				videoW=w;
				$("#myvideo").css({width:"100%"});
				videoH=$("#myvideo").height();
			}
			else{ 
				videoH=h;
				$("#myvideo").css({height:videoH});
				videoW=$("#myvideo").width();
			}

			if(videoH > 820){
				$(".header_inner").css({height:820});
			}
			else{
				$(".header_inner").css({height:videoH});
			}
		});	
	},
	menu : function(){
		$(".top .menu li").eq(n).find("a").addClass("on");

		setTimeout(function(){
			$("html").animate({scrollTop:0}, 800, function(){
				firstFlag=true;
				$("#career").removeClass("active");
				$(window).trigger("scroll");
			});
		}, 10);
	},
	btn : function(){
		$(".btn_top").click(function(e){
			e.preventDefault();
			$("html").animate({scrollTop:0}, 400, function(){
				$(window).scrollTop(0);
			});
		});
	},
	trigger : function(){
		$(window).trigger("scroll");
	}
}