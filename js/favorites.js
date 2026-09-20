function viewRecipe(id) {
    window.location.href = `recipe-details.html?id=${id}`;
}


let recipe_count = 6

const recipe_count_output=document.getElementById("count")
const Remove_btn =document.querySelectorAll(".Remove_btn")



    Remove_btn.forEach(function(Remove_btn){
         Remove_btn.addEventListener("click",function(){
         Remove_btn.parentElement.parentElement.parentElement.remove()
         recipe_count-=1
         recipe_count_output.innerHTML=recipe_count
    

    })
   

} )
    


