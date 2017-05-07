/**
 * Created by vunguyenhung on 5/8/17.
 */

google.charts.load('current', {packages: ['corechart']});

google.charts.setOnLoadCallback(drawPopularProductsChart);

function drawPopularProductsChart() {
    // Some raw data (not necessarily accurate)

    // each review has like and dislike and rating, we'll calculate score of product by
    // product.score = product.reviews.reduce((pre, cur) => pre +  (cur.rating * cur.likeCount), 0)
    // then we'll get top 10 product has highest score

    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Product');
    data.addColumn('number', 'Score');
    data.addRows([
        ['Meredita Delgado', 414],
        ['Tamara Holmes', 554],
        ['Al Lane', 114],
        ['Hope Ryan', 331],
        ['Bessie Ferguson', 752],
        ['Travis Carr', 614],
        ['Jeffrey Huff', 950],
        ['Lena Russell', 706],
        ['Amber Swanson', 614],
        ['Stuart Vargas', 546]
    ]);

    var options = {
        vAxis: {title: 'Score'},
        hAxis: {title: 'Product'},
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('popular-products-chart'));
    chart.draw(data, options);
}