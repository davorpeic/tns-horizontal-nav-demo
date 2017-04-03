import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { ScrollView } from "ui/scroll-view";
import { StackLayout } from "ui/layouts/stack-layout";
import { Button } from "ui/button";
import { setTimeout } from "timer";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ['./items.css']
})
export class ItemsComponent implements OnInit {
    items: Item[];
    buttons: Array<any>;
    activePage: any;

    @ViewChild("scrollview") scroll: ElementRef;
    public scrollView: ScrollView;

    @ViewChild("hmenu") hmenu: ElementRef;
    public hmenuLayout: StackLayout;

    constructor(
        private itemService: ItemService,
        private zone: NgZone) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();

        this.scrollView = this.scroll.nativeElement;
        this.hmenuLayout = this.hmenu.nativeElement;

        this.initPage();
    }

    initPage(){

        for(let i = 0; i < this.items.length; i++){
            let button = new Button;

            button.text = this.items[i].text;
            button.id = '' + this.items[i].id;
            button.className = "menu-normal";      
            
            // Add click listener
            button.addEventListener('tap', (eventData) => {
                
                // Set normal class to all tabs
                this.hmenuLayout.eachLayoutChild(
                    (eachButton:any) => {
                        eachButton.className = "menu-normal";
                    }
                );

                button.className = "menu-active";

                this.zone.run(() => {
                    this.activePage = button.id;
                });                
                
                // Scroll menu to active tab..
                this.scrollView.scrollToHorizontalOffset(this.items[i].position, true); 
                
            });

            this.hmenuLayout.addChild(button);            

            setTimeout(() => {

                // Lets save position so we can navigate later
                this.items[i].position = button.getLocationRelativeTo(this.hmenuLayout).x;
                
                // Select first item
                if(i==0) {
                    button.className = "menu-active";                
                    this.activePage = 0;
                }
            }, 50);

        }

    }
}
