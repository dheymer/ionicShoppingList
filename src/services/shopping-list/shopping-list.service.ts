import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";


@Injectable()
export class ShoppingListService{
  private shoppingListRef = this.db.list<Item> ('shopping-list');

  public constructor (private db: AngularFireDatabase){}

  public getShoppingList(){
    return this.shoppingListRef;
  }

  public addItem(item:Item){
    return this.shoppingListRef.push(item);
  }

  public editItem(item: Item){
    return this.shoppingListRef.update(item.key, item);
  }

  public removeItem(item: Item){
    return this.shoppingListRef.remove(item.key);
  }
}
