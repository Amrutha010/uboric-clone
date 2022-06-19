console.log("linked")
console.log(document.getElementById("hom"))

document.getElementById("hom").addEventListener("click",function(){
    location.href="index.html";
})
document.querySelector("#Account").addEventListener("click", Account);
  function Account() {
    location.href = "./Signup.html";
  }

  document.getElementById("carts").addEventListener("click",function(){
    location.href="./cart.html"
  })
  console.log("linked 33")
  document.getElementById("bulk").addEventListener("click",function(){
    location.href="./login3.html"
  })