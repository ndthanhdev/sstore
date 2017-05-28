export interface Products {
  id: number;
  name: string;
  barcode: string;
  description: string;
  imgUrl: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
  productTypeId: number;
}
