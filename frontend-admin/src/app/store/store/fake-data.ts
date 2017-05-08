import {Marker} from "../map/marker.model";
/**
 * Created by duyth on 5/9/2017.
 */
export class FakeData {
  public static Markers: Marker[] = [
    {
      id: '0',
      label: '0',
      latitude: 10.772603,
      longitude: 106.6602087020874,
      name: 'Store To Hien Thanh 1',
      address: '224 To Hien Thanh P.4 Q.8 Ho Chi Minh',
      isDraggable: false,
      icon: ''
    },
    {
      id: '1',
      label: '1',
      latitude: 10.74207841488251,
      longitude: 106.68033599853516,
      name: 'Store Ta Quang Buu 1',
      address: '51 Ta Quang Buu P.4 Q.8 Ho Chi Minh',
      isDraggable: false,
      icon: 'http://maps.google.com/mapfiles/kml/pal4/icon47.png'
    },
    {
      id: '2',
      label: '2',
      latitude: 10.76927252012046,
      longitude: 106.67080879211426,
      name: 'Store Ba Thang Hai 1',
      address: '31 Ba Thang Hai P.4 Q.8 Ho Chi Minh',
      isDraggable: false,
      icon: ''
    }
  ];
}
