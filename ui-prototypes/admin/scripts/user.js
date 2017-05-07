/**
 * Created by vunguyenhung on 5/7/17.
 */
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawRecentUsersChart);

function drawRecentUsersChart() {

    // current time - all days
    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'User count');
    data.addColumn('number', 'User count');
    data.addRows([
        [[1, 0, 0], 4, 4],
        [[2, 0, 0], 20, 20],
        [[3, 0, 0], 15, 15],
        [[4, 0, 0], 5, 5],
        [[5, 0, 0], 4, 4],
        [[6, 0, 0], 17, 17],
        [[7, 0, 0], 15, 15],
        [[8, 0, 0], 5, 5],
        [[9, 0, 0], 13, 13],
        [[10, 0, 0], 9, 9],
        [[11, 0, 0], 4, 4],
        [[12, 0, 0], 12, 12],
        [[13, 0, 0], 15, 15],
        [[14, 0, 0], 11, 11],
        [[15, 0, 0], 2, 2],
        [[16, 0, 0], 9, 9],
        [[17, 0, 0], 2, 2],
        [[18, 0, 0], 1, 1],
        [[19, 0, 0], 5, 5],
        [[20, 0, 0], 2, 2],
        [[21, 0, 0], 9, 9]
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