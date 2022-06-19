// *************************************************************
document.getElementById("searchbtn").addEventListener("click",handleSearchItems)
function handleSearchItems(){
    document.getElementById("container").innerHTML="";
   let x= document.getElementById("search").value.toUpperCase()
   let searched = Data.filter(function(ele){
    if( ele.name.toUpperCase().indexOf(x) !== -1||ele.category.toUpperCase().indexOf(x) !== -1||ele.type.toUpperCase().indexOf(x) !== -1){
        return true;
    }else{
        return false;
    }
});
   
   printLM(searched)
}
// *************************************88888888
function printLM(Data) {
    console.log("yes")
    for (let i = 0; i < Data.length; i++) {
      let div = document.createElement("div");
      let d = Data[i].id;
      div.setAttribute("id", d);
      let imgdiv = document.createElement("div");

      let img = document.createElement("img");
      img.src = Data[i].url;
      let p = document.createElement("p");
      p.textContent = Data[i].name;

      let h3 = document.createElement("h3");
      h3.textContent = "₹" + Data[i].price;

      let cartbtn = document.createElement("button");
      cartbtn.setAttribute("id","carbtn")
      cartbtn.innerText="ADD TO CART";
      cartbtn.addEventListener("click",function(){
        array.push(Data[i])
       
       localStorage.setItem("cartdata",JSON.stringify(array))
      })



      imgdiv.addEventListener("click", function(){
        
   let z= Data[i].id;
    localStorage.setItem("display", z);
    location.href = "display.html";
      });
      imgdiv.append(img);
      div.append(imgdiv, p, h3,cartbtn);
      document.querySelector("#container").append(div);
    }
  }
 



