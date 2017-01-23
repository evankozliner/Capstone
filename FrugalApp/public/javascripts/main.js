
function changeColor(){
  console.log("here");
  document.body.style.backgroundColor = "";
}

var vm = new Vue({
  el: '#search',
  data: {
    query: 'What do you want to know?'
  }
})
