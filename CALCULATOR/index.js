function show(val){
   document.getElementById('text').value = document.getElementById('text').value +val
}
function res(){
   try{
      
      document.getElementById('text').value=eval(document.getElementById('text').value)
   }
   catch(err){
      alert('INVALID')
   }
}
function clr(){
   document.getElementById('text').value =""
}
function del(){
   document.getElementById('text').value =document.getElementById('text').value.slice(0,-1)

}