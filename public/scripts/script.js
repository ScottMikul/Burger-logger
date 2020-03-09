$(()=>{
    $(".devour-button").click(function (e){
        const burgerid = $(this).data("id");

        $.ajax({method:"put", url:`/api/devour/${burgerid}`}).then(
            (err,data)=>{
            if(err){
                console.log(data);
            }
            if(data){
                location.reload();
            }
            });
    })

    $("#add-burger").click(function(e){
        e.preventDefault();
        const burggerName = $("#burgerName").val().trim();
        $.ajax({method:"post", url:"/api/addburger", data:{burger_name:burggerName}}).then(
            (err, data)=>{
                if(err){
                    console.log(err);
                }
                if(data){
                    location.reload();
                }
            }
        )
    })

})