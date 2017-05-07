/**
 * Created by vunguyenhung on 5/7/17.
 */
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawTodaySalesChart);

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


/**
 * Created by vunguyenhung on 5/7/17.
 */
function initMap() {
    var markerPositions = [
        {lat: 10.772603, lng: 106.6602087020874}, // To Hien Thanh
        {lat: 10.74207841488251, lng: 106.68033599853516}, // Ta Quang Buu
        {lat: 10.76927252012046, lng: 106.67080879211426} // Ba Thang Hai
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: markerPositions[0]
    });

    // MARKER
    var contentString = '<div class="lead">Store To Hien Thanh 1</div>' +
        '<div>224 To Hien Thanh P.4 Q.8 Ho Chi Minh</div>' +
        '<button class="btn btn-link btn-sm pl-0">Detail</button>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: markerPositions[0],
        map: map,
        animation: google.maps.Animation.DROP,
        icon: {
            url: 'http://maps.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png'
        }
    });

    marker.addListener('click', function () {
        infowindow.open(map, this);
    });


    // MARKER 1
    var contentString1 = '<div class="lead"><i class="fa fa-star"></i> Store Ta Quang Buu 1 </div>' +
        '<div>51 Ta Quang Buu P.4 Q.8 Ho Chi Minh</div>' +
        '<button class="btn btn-link btn-sm pl-0">Detail</button>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });

    var marker1 = new google.maps.Marker({
        position: markerPositions[1],
        map: map,
        animation: google.maps.Animation.DROP,
        label: '1',
        icon: 'http://maps.google.com/mapfiles/ms/micons/convienancestore.png'
    });

    marker1.addListener('click', function () {
        infowindow1.open(map, this);
    });


    // MARKER 2
    var contentString2 = '<div class="lead">Store Ba Thang Hai 1</div>' +
        '<div>31 Ba Thang Hai P.4 Q.8 Ho Chi Minh</div>' +
        '<button class="btn btn-link btn-sm pl-0">Detail</button>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });

    var marker2 = new google.maps.Marker({
        position: markerPositions[2],
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!',
        label: '2'
    });

    marker2.addListener('click', function () {
        infowindow2.open(map, this);
    });


}