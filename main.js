

var defile;// l'element a deplacer 
        var psinit = 1250; // position horizontale de depart 
        var pscrnt = psinit;       
        function texteDefile() { 
           if (!defile) defile = document.getElementById('defile'); 
           if (defile) { 
              if(pscrnt < ( - defile.offsetWidth) ){ 
                 pscrnt = psinit; 
                        } else { 
                 pscrnt+= -2; // pixel par deplacement 
              } 
              defile.style.left = pscrnt+"px"; 
           } 
        } 
        setInterval("texteDefile()",20); 
window.onload = function onLoad() {
  
    var bar = new ProgressBar.Line('#progress', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 5400,
        color: '#848484',
        trailColor: '#eee',
        trailWidth: 1,
        
      });
      
      bar.animate(0.5);

      var bar = new ProgressBar.Line('#progress2', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 5400,
        color: '#848484',
        trailColor: '#eee',
        trailWidth: 1,
        
      });
      
      bar.animate(0.8);

      var bar = new ProgressBar.Line('#progress3', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 5400,
        color: '#848484',
        trailColor: '#eee',
        trailWidth: 1,
        
      });
      
      bar.animate(0.9);

      var bar = new ProgressBar.Line('#progress4', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 5400,
        color: '#848484',
        trailColor: '#eee',
        trailWidth: 1,
        
      });
      
      bar.animate(0.9);
      
};