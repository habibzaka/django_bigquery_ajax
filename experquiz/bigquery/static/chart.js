$(document).on('click', "button#pie, button#barvalue, button#pievalue", function(){
var value = $(this).val();
$.ajax({
    url: "update/",
    method: "GET",
    dataType : "json",
})
.done(function(response){
    var ctx = document.getElementById('myChart').getContext('2d');
    if(value == "bar")
        var type ='bar';
    else if (value == "pie")
        var type ='pie';
    else var type ='pie';
    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: response.licenses,
            datasets: [{
                data: response.totals,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
    });
    
})})

$(document).on('click', "button#bar, button#barvalue, button#pievalue", function(){
    var value = $(this).val();
    $.ajax({
        url: "update/",
        method: "GET",
        dataType : "json",
    })
    
    .done(function(response){
        var ctx = document.getElementById('myChart').getContext('2d');
        if(value == "bar")
            var type ='bar';
        else if (value == "pie")
            var type ='pie';
        else var type ='bar';
        
        var myChart = new Chart(ctx, {
            type: type,
            data: {
                labels: response.languages,
                datasets: [{
                    data: response.totals_bytes,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }]
            },
        });
        
    })})