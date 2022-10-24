    $(function(){
        var select = 1;
        
        var PCmenus = document.querySelectorAll("#menu td");
        var PCconts = document.getElementsByClassName("PCcontent");
        
        var phoneMenus = document.getElementsByClassName("PhoneMenu");
        var phoneConts = document.getElementsByClassName("PhoneContent");
        
        $(window).on('resize', function(){    
        var win = $(this); //this = window
            
        if (win.width() < 600) {
            $(".PCcontent").css("display","none");
            $(".PhoneContent").css("display","none");
            $(".PhoneMenu").css("background-color","rgb(23, 23, 42)");
            $(phoneConts[select-1]).css("display","block");
            $(phoneMenus[select-1]).css("background-color","rgb(43, 43, 63)");
            }
        else{
            $("#menu td").css("background-color","rgb(23, 23, 42)");
            $(".PCcontent").css("display","none");
            $(PCconts[select-1]).css("display","block");
            $(PCmenus[select-1]).css("background-color","rgb(43, 43, 63)");
            $(".PhoneContent").css("display","none");
        }
        });


        var x;
        for(x = 0; x < PCmenus.length; x++){
            PCmenus[x].addEventListener("click", function(){
                var arr = Array.from(PCmenus);
                var now = arr.indexOf(this) + 1; 
                
                if(now != select){
                $("#menu td").css("background-color","rgb(23, 23, 42)");
                $(this).css("background-color","rgb(43, 43, 63)");    
                $(PCconts[select-1]).css("display","none");
                $(PCconts[now-1]).fadeIn(700);
                select = now; 
                }
            });
        }

       var i;
       for(i = 0; i < phoneMenus.length; i++){
        phoneMenus[i].addEventListener("click", function(){
            
            var nodes = Array.prototype.slice.call(phoneMenus);
            var now = nodes.indexOf(this) + 1;
            
            if(now != select){
                $(".PhoneMenu").css("background-color","rgb(23, 23, 42)");
                $(phoneConts[select-1]).slideUp("slow");
                $(this).css("background-color","rgb(43, 43, 63)")
                $(phoneConts[now-1]).slideDown("slow");
                select = now;
            }
            
        });
       }

    })
