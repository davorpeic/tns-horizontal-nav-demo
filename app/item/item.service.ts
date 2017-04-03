import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 0, text: "Overview", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
        { id: 1, text: "About", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
        { id: 2, text: "Events", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
        { id: 3, text: "Biography", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
        { id: 4, text: "Tours", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
        { id: 5, text: "Reviews", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
        { id: 6, text: "Shop", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
        { id: 7, text: "Support", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
        { id: 8, text: "Contact", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
        { id: 9, text: "See on map", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
        { id: 10, text: "Just another", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus incidunt, voluptates officiis alias odio quia, a, voluptas repellat eveniet cupiditate asperiores. Sint incidunt mollitia corporis, voluptate cum ipsam dolorum?" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
