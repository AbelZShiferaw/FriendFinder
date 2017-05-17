$(document).ready(()=>{

    $.get("/api/match", (data)=>{
        if(data){
        console.log(data.name)
        $("#matchName").html(data.name);
        $("#matchPhoto").attr("src", data.photo);
        }
    })
})