/**
 * Created by vunguyenhung on 5/7/17.
 */
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawTodaySalesChart);
google.charts.setOnLoadCallback(drawReviewPercentsChart);
google.charts.setOnLoadCallback(drawRecentUsersChart);

function drawTodaySalesChart() {
    // Some raw data (not necessarily accurate)
    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'Revenue');
    data.addColumn('number', 'Revenue');
    data.addRows([
        [[1, 0, 0], 414.6, 414.6],
        [[2, 0, 0], 554.6, 554.6],
        [[3, 0, 0], 114.6, 114.6],
        [[4, 0, 0], 331.6, 331.6],
        [[5, 0, 0], 752.6, 752.6],
        [[6, 0, 0], 614.6, 614.6],
        [[7, 0, 0], 950.54, 950.54],
        [[8, 0, 0], 706.85, 706.85],
        [[9, 0, 0], 614.29, 614.29],
        [[10, 0, 0], 546.76, 546.76],
        [[11, 0, 0], 398.38, 398.38],
        [[12, 0, 0], 177.59, 177.59],
        [[13, 0, 0], 443.62, 443.62],
        [[14, 0, 0], 428.3, 428.3],
        [[15, 0, 0], 526.16, 526.16],
        [[16, 0, 0], 495.04, 495.04],
        [[17, 0, 0], 553.75, 553.75],
        [[18, 0, 0], 431.38, 431.38],
        [[19, 0, 0], 484.76, 484.76],
        [[20, 0, 0], 677.77, 677.77],
        [[21, 0, 0], 364.74, 364.74],
        [[22, 0, 0], 838.65, 838.65],
        [[23, 0, 0], 953.61, 953.61]

    ]);

    var options = {
        vAxis: {title: 'VND'},
        hAxis: {title: 'Time'},
        seriesType: 'bars',
        series: {1: {type: 'line'}},
        legend: {position: 'none'}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('today-sales-chart'));
    chart.draw(data, options);
}


function drawReviewPercentsChart() {

    var data = google.visualization.arrayToDataTable([
        ['Stars', 'Count'],
        ['1 Stars', 5],
        ['2 Stars', 11],
        ['3 Stars', 2],
        ['4 Stars', 2],
        ['5 Stars', 2]
    ]);

    var options = {
        chartArea: {width: '80%', height: '80%'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('review-percents-chart'));

    chart.draw(data, options);
}


function drawRecentUsersChart() {

    // current time - 6 hours
    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'User count');
    data.addColumn('number', 'User count');
    data.addRows([
        [[5, 0, 0], 4, 4],
        [[6, 0, 0], 20, 20],
        [[7, 0, 0], 15, 15],
        [[8, 0, 0], 5, 5],
        [[9, 0, 0], 2, 2],
        [[10, 0, 0], 9, 9]
    ]);

    var options = {
        vAxis: {title: 'User Count'},
        hAxis: {title: 'Time'},
        seriesType: 'bars',
        series: {1: {type: 'line'}},
        legend: {position: 'none'}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('recent-users-chart'));
    chart.draw(data, options);
}