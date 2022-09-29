
        const tbtn = document.querySelectorAll(".aside-nav ul li");
        const tab = document.querySelectorAll(".tabs");
        function show(panelindex){
            tab.forEach(function(node){
                node.style.display = "none"
            })
            tab[panelindex].style.display ="block"
}
show(0)
        $(".aside-nav ul li").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
    }) 
    const bar = 
    document.querySelector(".bar"); 
    const navm = 
    document.querySelector(".nav-mobile");
    bar.addEventListener("click", (nav)=>
    {
        navm.classList.toggle("show");
   })
   
        