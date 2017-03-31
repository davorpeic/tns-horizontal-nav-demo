import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

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

    @ViewChild("scrollview") scroll: ElementRef;
    public scrollView: ScrollView;

    @ViewChild("hmenu") hmenu: ElementRef;
    public hmenuLayout: StackLayout;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();

        this.scrollView = this.scroll.nativeElement;
        this.hmenuLayout = this.hmenu.nativeElement;

        this.openSomething();
    }

    openSomething(){

        for(let i = 0; i < this.items.length; i++){
            let button = new Button;

            button.text = this.items[i].text;
            button.id = "button-" + this.items[i].id;
            button.className = "menu-normal";
            
            // Select first item
            if(i==0) {
                button.className = "menu-active";
            }

            // Add click listener
            button.addEventListener('tap', (eventData) => {
                
                this.hmenuLayout.eachLayoutChild(
                    (eachButton:any) => {
                        eachButton.className = "menu-normal";
                    }
                );

                button.className = "menu-active";
                
                this.scrollView.scrollToHorizontalOffset(button.getLocationRelativeTo(this.hmenuLayout).x - 8, true); // Scroll menu to..

                // setTimeout(() => {
                //     
                // }, 100)

                
            });

            //this.buttons.push(button);
            this.hmenuLayout.addChild(button);
            

            setTimeout(() => {
            //     console.log("button width", testButton.getActualSize().width, testButton2.getLocationOnScreen().x);
            }, 100)

        }
       

        //this.scrollView.scrollToHorizontalOffset(100, true);
        // let testButton = new Button();
        // testButton.text = "Test button asdf  asdf  sdfasdfasdfasdf asdffasdf as f#";
        
        // let testButton2 = new Button();
        // testButton2.text = "Test button123";

        // this.hmenuLayout.addChild(testButton);
        // this.hmenuLayout.addChild(testButton2);
        
        // setTimeout(function() {
        //     console.log("button width", testButton.getActualSize().width, testButton2.getLocationOnScreen().x);
        // }, 100)
    }
}
