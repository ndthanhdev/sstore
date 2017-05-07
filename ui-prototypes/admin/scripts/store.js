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
        center: markerPositions[2]
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
        label: '0'
    });

    marker.addListener('click', function () {
        infowindow.open(map, this);
    });


    // MARKER 1
    var contentString1 = '<div class="lead">Store Ta Quang Buu 1</div>' +
        '<div>51 Ta Quang Buu P.4 Q.8 Ho Chi Minh</div>' +
        '<button class="btn btn-link btn-sm pl-0">Detail</button>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });

    var marker1 = new google.maps.Marker({
        position: markerPositions[1],
        map: map,
        animation: google.maps.Animation.DROP,
        label: '1'
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