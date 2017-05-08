export class Marker {
  public id: string;
  public label: string;
  public longitude: number;
  public latitude: number;
  public name: string;
  public address: string;
  public isDraggable: boolean;
  public icon:string;


  constructor(id: string, label: string, latitude: number, longitude: number, name: string, address: string, isDraggable: boolean, icon: string) {
    this.id = id;
    this.label = label;
    this.longitude = longitude;
    this.latitude = latitude;
    this.name = name;
    this.address = address;
    this.isDraggable = isDraggable;
    this.icon = icon;
  }
}
