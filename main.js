var modal_wrap = document.getElementById("modal_wrap")
var modal = document.getElementById("modal")

function openModal(){
    modal_wrap.classList.add("modal_wrap_active")
    modal.classList.add("modal_active")
    
}

function closeModal(){
    modal_wrap.classList.remove("modal_wrap_active")
    modal.classList.remove("modal_active")
}


modal_wrap.addEventListener("click", (e)=>{
    if(e.target.id == "modal_wrap"){
        modal_wrap.classList.remove("modal_wrap_active")
    modal.classList.remove("modal_active")
        
    }
    
})