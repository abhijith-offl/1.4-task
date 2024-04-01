var parentdiv = document.createElement("div");
        parentdiv.className = "main";

        var input_date = document.createElement("input");
        input_date.setAttribute("type", "date");
        input_date.id = "dob";

        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.className = "btn btn-primary";
        button.innerHTML = "Display Data";
        button.addEventListener("click", displaydata);

        parentdiv.append(input_date, button);
        document.body.append(parentdiv);

        function displaydata() {
            var input = document.getElementById("dob").value;
            console.log(input);
            var inputDate = document.createElement("p");
            inputDate.innerHTML = (`Given Input Date is ${input}`);
            document.body.append(inputDate);

            if (Date.parse(input)) {
                var inputdate = new Date(input);
                var currentdate = new Date();

                var millisecdiff = parseInt(currentdate.getTime()) - parseInt(inputdate.getTime());
                console.log(millisecdiff);

                var secdiff = Math.floor(millisecdiff / 1000);
                console.log(secdiff);

                var mindiff = Math.floor(secdiff / 60);
                console.log(mindiff);

                var hoursdiff = Math.floor(mindiff / 60);
                console.log(hoursdiff);

                var daydiff = Math.floor(hoursdiff / 24);
                console.log(daydiff);

                let yeardiff = currentdate.getFullYear() - inputdate.getFullYear()
                console.log(yeardiff);

                let monthdiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth())
                console.log(monthdiff);

                var years = document.createElement("p");
                years.innerHTML = (`Years ${yeardiff}`);
                document.body.append(years);

                var months = document.createElement("p");
                months.innerHTML = (`Months ${monthdiff}`);
                document.body.append(months);

                var days = document.createElement("p");
                days.innerHTML = (`Days ${daydiff}`);
                document.body.append(days);

                var hours = document.createElement("p");
                hours.innerHTML = (`Hours ${hoursdiff}`);
                document.body.append(hours);

                var minutes = document.createElement("p");
                minutes.innerHTML = (`Minutes ${mindiff}`);
                document.body.append(minutes);

                var seconds = document.createElement("p");
                seconds.innerHTML = (`Seconds ${secdiff}`);
                document.body.append(seconds);

                var millisecs = document.createElement("p");
                millisecs.innerHTML = (`MilliSeconds ${millisecdiff}`);
                document.body.append(millisecs);
            } else {
                // invalid date selected
            }
        }