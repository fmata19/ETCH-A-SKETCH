function initGrid(){
  for(let i=0;i<16;i++){
    let container=document.getElementById("container");
    let row= document.createElement("div");
    row.className="row";
  
  
  for(let i=0;i<16;i++){
    let square=document.createElement("div");
    square.className="square";
    square.addEventListener("mouseover",function(){
      this.style.backgroundColor="red";
    });
    row.appendChild(square);
    }
  
  container.appendChild(row);
  }
}
//Creates new grid with a specfic number of sides
function newGrid(numSquares){
  
  let container= document.getElementById("container");
  let styles_applied = window.getComputedStyle(container);

  //Calculating Dimensions for new grid
  let conWidth= parseInt(styles_applied.width,10);
  let conHeight=parseInt(styles_applied.height,10);
  
  let rowWidth=conWidth +"px";
  let rowHeight=(conHeight/numSquares) +"px";
  let squareWidth=(conWidth/numSquares) + "px";
  let squareHeight=rowHeight;
  console.log(squareHeight);
  
  for(let i=0;i<numSquares;i++){
    let container=document.getElementById("container");
    let row= document.createElement("div");
    
    //Styling for new Row
    row.style.width=rowWidth;
    row.style.height=rowHeight;
  
    for(let i=0;i<numSquares;i++){
      let square=document.createElement("div");
      
      //Styling for new Square
      square.style.width=squareWidth;
      square.style.height=squareHeight;
      square.style.display="inline-block";
      square.style.float="left";
      
      square.addEventListener("mouseover",function(){
        this.style.backgroundColor="red";
      });
    row.appendChild(square);
  }
  
  container.appendChild(row);
  }
}

//Deletes old Grid
function clear(){
  const myNode = document.getElementById("container");
  
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

}


const btn= document.getElementById("erase");

btn.addEventListener("click", function(){
  clear();
  let numSquares=parseInt(prompt("How many sqaures per side in new grid?"));
  newGrid(numSquares);
});

initGrid();


