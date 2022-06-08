var canvas = new fabric.Canvas('canvas');
canvas.add(new fabric.Rect({ fill: '#f55', top: 100, left: 100, height: 50, width: 50 }));

  canvas.selectionColor = 'rgba(0,255,0,0.3)';
  canvas.selectionBorderColor = 'red';
  canvas.selectionLineWidth = 10;
// canvas.add( new fabric.Rect({
//     left: 100,
//     top: 200,
//     fill: 'red',
//     width: 50,
//     height: 50,
//   }));
canvas.set({
    centeredScaling : true,
    centeredRotation: true
  })
  
  canvas.on('mouse:down', function(e) {
    console.log(e);
    document.getElementById('clicked').innerHTML= 'True'
    
  })

// });
canvas.on('mouse:out', function(e) {
  document.getElementById('clicked').innerHTML= 'False'

});

canvas.on('mouse:over', function(e) {
  document.getElementById('clicked').innerHTML= 'True'
});

canvas.on('mouse:move', function(e){
    const xAxis =  e.target.left - 100;
    const yAxis = e.target.top - 100;
  document.getElementById('xaxis').innerHTML= xAxis;
  document.getElementById('yaxis').innerHTML= yAxis;
  
})

