var cointween1 = TweenMax.staggerFrom('.coins1', 0.3,{
    y:-100,
    delay:0,
    ease: Bounce.easeOut,
    opacity:0
  }, 0.1);
  
  var cointween2 = TweenMax.staggerFrom('.coins2', 0.3,{
    y:-100,
    delay:0.5,
    ease: Bounce.easeOut,
    opacity:0
  }, 0.2);
  
  var cointween3 = TweenMax.staggerFrom('.coins3', 0.3,{
    y:-100,
    delay:0.6,
    ease: Bounce.easeOut,
    opacity:0
  }, 0.2);
  
  var cointween4 = TweenMax.staggerFrom('.coins4', 0.2,{
    y:-100,
    delay:0.8,
    ease: Bounce.easeOut,
    opacity:0
  }, 0.1);
  
  var coinsShadows= TweenMax.staggerFrom('.st0', 0.2,{
    scale:0,
    delay:0.4,
    transformOrigin: "50% 50%"
  },0.1);

  function visit(){
      document.getElementById("btn-to-hp").style.backgroundColor ="#29A0B1";
      window.location.href="home.html";
  }
  