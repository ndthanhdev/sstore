import {Catalog} from './catalog.model';
/**
 * Created by vunguyenhung on 5/11/17.
 */


export class Category {
  id?: number;
  name: string;
  description: string;
  icon: string;
  parent_id: number;
  catalog_id: number;
  parents: Category[];
  child: Category[];
  catalog: Catalog;
}

export class CategoryBreadcrumb {
  name: string;
  link: {
    path: string,
    param: string
  };

  constructor(that: CategoryBreadcrumb) {
    if (that) {
      this.name = that.name;
      this.link = that.link;
    }
  }
}
