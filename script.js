        //Clock Sub-Functions
        function addZero(num){
            if(num < 10){
                num = "0" + num;
            }
            return num;
        }

        function getMonthName(month) {
            var ar = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            return ar[month];
        }

        function addDaySufix(num){
            if(num == 1 || num == 21 || num == 31){
                num = num + " <sup>st</sup>";
            }else if(num == 2 || num == 22 || num == 32){
                num = num + " <sup>nd</sup>";
            }
            else if(num == 3 || num == 23 || num == 33){
                num = num + " <sup>nd</sup>";
            }else{
                num = num + " <sup>th</sup>";
            }
            return num;
        }
    //Main Clock Function
        function showTime(){
            let date = new Date();
            let h = addZero(date.getHours());
            let m = addZero(date.getMinutes());
            let s = addZero(date.getSeconds());
            let year = date.getFullYear();
            let month = getMonthName(date.getMonth());
            let day = addDaySufix(date.getDate());
            
            $("#hour").html(h);
            $("#minute").html(m);
            $("#second").html(s);

            $("#date").html(day + " of " + month + " " + year);


            setTimeout(showTime,1000);
        }
        $("#time").ready(function(){
            showTime();
        });

    //Change colors
        $(".circle").click(function(){
            switch($(this).attr("id")){
                case "redCircle":
                    $("#mainContainer").css("border-color","#F31F1F");
                    $("p").css("color","#F31F1F");
                    $("hr").css("color","#F31F1F");
                    break;
                case "blueCircle":
                    $("#mainContainer").css("border-color","rgb(59, 219, 255)");
                    $("p").css("color","rgb(59, 219, 255)");
                    $("hr").css("color","rgb(59, 219, 255)");
                    break;
                case "greenCircle":
                    $("#mainContainer").css("border-color","#00ff00");
                    $("p").css("color","#00ff00");
                    $("hr").css("color","#00ff00");
                    break;
            }
        });