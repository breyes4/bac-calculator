$(document).ready(
    function () {

        $("#ClickButton").click(calculateBAC);

        function calculateBAC() {

            var num_Beers = $("#num_Beers").val();
            num_Beers = parseFloat(num_Beers);

            var num_Wine = $("#num_Wine").val();
            num_Wine = parseFloat(num_Wine);

            var num_Shots = $("#num_Shots").val();
            num_Shots = parseFloat(num_Shots);

            var num_Weight = $("#num_Weight").val();
            num_Weight = parseFloat(num_Weight);

            var num_Hours = $("#num_Hours").val();
            num_Hours = parseFloat(num_Hours);

            var beer = 0.54;
            var wine = 0.6;
            var shots = 0.6;

            var alcoholDrank = (beer + num_Beers) + (wine + num_Wine) + (shots + num_Shots);
            var absorptionRate = alcoholDrank * 7.5;
            var initial_BAC = absorptionRate / num_Weight;
            var total_BAC = initial_BAC - (num_Hours * 0.015);

            $("BACResults").text(total_BAC.toFixed(3));
            $(".results").show();


        }

    }

);
