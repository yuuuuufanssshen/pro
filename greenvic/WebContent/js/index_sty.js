// JavaScript Document

$(function(){
	$('.leftBg').show().addClass('animated fadeInLeft');//添加各元素动作
	$('.logo a img').show().addClass('animated fadeInLeft');
	$('.big_word img').show().addClass('animated fadeInLeft');
	$('.house').show().addClass('animated fadeInLeft');
	$('.rightBg').show().addClass('animated fadeInRight');
	$('.big_word_rf img').show().addClass('animated fadeInRight');
	setTimeout(function(){						//移除各元素进入动作
		$('.leftBg').removeClass('fadeInLeft');
		$('.logo a img').removeClass('fadeInLeft');
		$('.big_word img').removeClass('fadeInLeft');
		$('.house').show().removeClass('fadeInLeft');
		$('.rightBg').removeClass('fadeInRight');
		$('.big_word_rf img').removeClass('fadeInRight');
		$('.logo a img').show().addClass('animated bounceInDown');//添加并移除各元素效果
		 setTimeout(function(){
			 $('.logo a img').removeClass('bounceInDown');
			 $('.big_word img').show().addClass('animated flip');
			setTimeout(function(){
				$('.btnbg').show().addClass('animated rotateIn');//添加 HR抢人才背景
				$('.peo').show().addClass('animated bounceIn');//
				$('.btnbg_rf').show().addClass('animated lightSpeedIn');		
				setInterval(function(){
					$('.btn_arow,.btnWord,.btn_arow_rf,.btnWord_rf').show().addClass('animated tada');//HR抢人才箭头,HR抢人才
					setTimeout(function(){
						$('.btn_arow,.btnWord,.btn_arow_rf,.btnWord_rf').removeClass('tada');
						},3000);
				}, 1000*2);
				setTimeout(function(){
					$('.btnbg').removeClass('rotateIn');
					$('.btnbg_rf').removeClass('lightSpeedIn');
					$('.btnWord').show().addClass('animated rotateInDownLeft');//添加 HR抢人才
					$('.btnWord_rf').show().addClass('animated rotateInUpLeft');
					$('.work').show().addClass('animated lightSpeedIn');
					setTimeout(function(){
						$('.btnWord').removeClass('rotateInDownLeft');//移除 HR抢人才
						$('.btnWord_rf').removeClass('rotateInUpLeft');
						$('.work').removeClass('lightSpeedIn');
						 setTimeout(function(){
							 $('.house').show().addClass('animated swing');
							 $('.big_word_rf img').show().addClass('animated rotateInUpRight');
							 setTimeout(function(){
								 $('.house').removeClass('swing');
								 $('.big_word_rf img').removeClass('rotateInUpRight');
								 },1000);
							 },1000);						
						},1000);
					},1000);
				},1000);
		},1000);
	},1000);
})

function leave(){
		$('.leftBg').addClass('animated fadeOutLeft');//添加各元素动作
		$('.logo a img').addClass('animated fadeOutLeft');
		$('.big_word img').addClass('animated fadeOutLeft');
		$('.house').addClass('animated fadeOutLeft');
		$('.btnbg').addClass('animated fadeOutLeft');
		$('.btn_arow,.btnWord').addClass('animated fadeOutLeft');
		$('.rightBg').addClass('animated fadeOutRight');
		$('.big_word_rf img').addClass('animated fadeOutRight');
		$('.peo').addClass('animated fadeOutRight');
		$('.btnbg_rf').addClass('animated fadeOutRight');
		$('.btn_arow_rf,.btnWord_rf').addClass('animated fadeOutRight');
			setTimeout(function(){						//移除各元素动作
				$('.leftBg').removeClass('fadeOutLeft');
				$('.logo a img').removeClass('fadeOutLeft');
				$('.big_word img').removeClass('fadeOutLeft');
				$('.house').show().removeClass('fadeOutLeft');
				$('.btnbg').removeClass('fadeOutLeft');
				$('.btn_arow,.btnWord').removeClass('fadeOutLeft');
				$('.rightBg').removeClass('fadeOutRight');
				$('.big_word_rf img').removeClass('fadeOutRight');
				$('.peo').removeClass('fadeOutRight');
				$('.btnbg_rf').removeClass('fadeOutRight');
				$('.btn_arow_rf,.btnWord_rf').removeClass('fadeOutRight');
			},1000);
	}	
function test(obj){//求职者
leave();
setTimeout(function(){
window.top.location.href='http://www.jq22.com'; },300);
return false;
} 
function openwindow(url) 
{ 
window.open(url,"","toolbar=no,status=no,menubar=no,location=no,scrollbars=yes"); 
}  	

function test2(obj){//hr抢人才 
leave();
setTimeout(function(){
window.top.location.href='http://www.jq22.com'; },300);
return false; 
} 
function openwindow(url) 
{ 
window.open(url,"","toolbar=no,status=no,menubar=no,location=no,scrollbars=yes"); 
}  	

