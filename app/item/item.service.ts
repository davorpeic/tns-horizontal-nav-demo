import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 0, text: "Overview" },
        { id: 1, text: "About" },
        { id: 2, text: "Events" },
        { id: 3, text: "Biography" },
        { id: 4, text: "Tours" },
        { id: 5, text: "Reviews" },
        { id: 6, text: "Shop" },
        { id: 7, text: "Support" },
        { id: 7, text: "Contact" },
        { id: 7, text: "See on map" },
        { id: 7, text: "Just another" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
