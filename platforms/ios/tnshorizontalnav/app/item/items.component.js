"use strict";
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var button_1 = require("ui/button");
var timer_1 = require("timer");
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
        this.scrollView = this.scroll.nativeElement;
        this.hmenuLayout = this.hmenu.nativeElement;
        this.openSomething();
    };
    ItemsComponent.prototype.openSomething = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var button = new button_1.Button;
            button.text = this_1.items[i].text;
            button.id = "button-" + this_1.items[i].id;
            button.className = "menu-normal";
            // Select first item
            if (i == 0) {
                button.className = "menu-active";
            }
            // Add click listener
            button.addEventListener('tap', function (eventData) {
                _this.hmenuLayout.eachLayoutChild(function (eachButton) {
                    eachButton.className = "menu-normal";
                });
                button.className = "menu-active";
                _this.scrollView.scrollToHorizontalOffset(button.getLocationRelativeTo(_this.hmenuLayout).x - 8, true); // Scroll menu to..
                // setTimeout(() => {
                //     
                // }, 100)
            });
            //this.buttons.push(button);
            this_1.hmenuLayout.addChild(button);
            timer_1.setTimeout(function () {
                //     console.log("button width", testButton.getActualSize().width, testButton2.getLocationOnScreen().x);
            }, 100);
        };
        var this_1 = this;
        for (var i = 0; i < this.items.length; i++) {
            _loop_1(i);
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
    };
    return ItemsComponent;
}());
__decorate([
    core_1.ViewChild("scrollview"),
    __metadata("design:type", core_1.ElementRef)
], ItemsComponent.prototype, "scroll", void 0);
__decorate([
    core_1.ViewChild("hmenu"),
    __metadata("design:type", core_1.ElementRef)
], ItemsComponent.prototype, "hmenu", void 0);
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
        styleUrls: ['./items.css']
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFHekUsK0NBQTZDO0FBSTdDLG9DQUFtQztBQUNuQywrQkFBbUM7QUFRbkMsSUFBYSxjQUFjO0lBVXZCLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFFNUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQUEsaUJBMERDO2dDQXhEVyxDQUFDO1lBQ0wsSUFBSSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUM7WUFFeEIsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakMsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUcsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBRWpDLG9CQUFvQjtZQUNwQixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztZQUNyQyxDQUFDO1lBRUQscUJBQXFCO1lBQ3JCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsVUFBQyxTQUFTO2dCQUVyQyxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FDNUIsVUFBQyxVQUFjO29CQUNYLFVBQVUsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO2dCQUN6QyxDQUFDLENBQ0osQ0FBQztnQkFFRixNQUFNLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztnQkFFakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7Z0JBRXpILHFCQUFxQjtnQkFDckIsT0FBTztnQkFDUCxVQUFVO1lBR2QsQ0FBQyxDQUFDLENBQUM7WUFFSCw0QkFBNEI7WUFDNUIsT0FBSyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBR2xDLGtCQUFVLENBQUM7Z0JBQ1gsMEdBQTBHO1lBQzFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUVYLENBQUM7O1FBeENELEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUFqQyxDQUFDO1NBd0NSO1FBR0Qsc0RBQXNEO1FBQ3RELGlDQUFpQztRQUNqQywrRUFBK0U7UUFFL0Usa0NBQWtDO1FBQ2xDLHVDQUF1QztRQUV2Qyx5Q0FBeUM7UUFDekMsMENBQTBDO1FBRTFDLDBCQUEwQjtRQUMxQiwwR0FBMEc7UUFDMUcsVUFBVTtJQUNkLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFoRkQsSUFnRkM7QUE1RTRCO0lBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzhCQUFTLGlCQUFVOzhDQUFDO0FBR3hCO0lBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDOzhCQUFRLGlCQUFVOzZDQUFDO0FBUDdCLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM3QixDQUFDO3FDQVdtQywwQkFBVztHQVZuQyxjQUFjLENBZ0YxQjtBQWhGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIjtcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidGltZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9pdGVtcy5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgICBidXR0b25zOiBBcnJheTxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZChcInNjcm9sbHZpZXdcIikgc2Nyb2xsOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBzY3JvbGxWaWV3OiBTY3JvbGxWaWV3O1xuXG4gICAgQFZpZXdDaGlsZChcImhtZW51XCIpIGhtZW51OiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBobWVudUxheW91dDogU3RhY2tMYXlvdXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcgPSB0aGlzLnNjcm9sbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmhtZW51TGF5b3V0ID0gdGhpcy5obWVudS5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIHRoaXMub3BlblNvbWV0aGluZygpO1xuICAgIH1cblxuICAgIG9wZW5Tb21ldGhpbmcoKXtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbjtcblxuICAgICAgICAgICAgYnV0dG9uLnRleHQgPSB0aGlzLml0ZW1zW2ldLnRleHQ7XG4gICAgICAgICAgICBidXR0b24uaWQgPSBcImJ1dHRvbi1cIiArIHRoaXMuaXRlbXNbaV0uaWQ7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJtZW51LW5vcm1hbFwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBTZWxlY3QgZmlyc3QgaXRlbVxuICAgICAgICAgICAgaWYoaT09MCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcIm1lbnUtYWN0aXZlXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBjbGljayBsaXN0ZW5lclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RhcCcsIChldmVudERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmhtZW51TGF5b3V0LmVhY2hMYXlvdXRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgKGVhY2hCdXR0b246YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlYWNoQnV0dG9uLmNsYXNzTmFtZSA9IFwibWVudS1ub3JtYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJtZW51LWFjdGl2ZVwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0hvcml6b250YWxPZmZzZXQoYnV0dG9uLmdldExvY2F0aW9uUmVsYXRpdmVUbyh0aGlzLmhtZW51TGF5b3V0KS54IC0gOCwgdHJ1ZSk7IC8vIFNjcm9sbCBtZW51IHRvLi5cblxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBcbiAgICAgICAgICAgICAgICAvLyB9LCAxMDApXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL3RoaXMuYnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgICAgICAgICB0aGlzLmhtZW51TGF5b3V0LmFkZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJidXR0b24gd2lkdGhcIiwgdGVzdEJ1dHRvbi5nZXRBY3R1YWxTaXplKCkud2lkdGgsIHRlc3RCdXR0b24yLmdldExvY2F0aW9uT25TY3JlZW4oKS54KTtcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICB9XG4gICAgICAgXG5cbiAgICAgICAgLy90aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Ib3Jpem9udGFsT2Zmc2V0KDEwMCwgdHJ1ZSk7XG4gICAgICAgIC8vIGxldCB0ZXN0QnV0dG9uID0gbmV3IEJ1dHRvbigpO1xuICAgICAgICAvLyB0ZXN0QnV0dG9uLnRleHQgPSBcIlRlc3QgYnV0dG9uIGFzZGYgIGFzZGYgIHNkZmFzZGZhc2RmYXNkZiBhc2RmZmFzZGYgYXMgZiNcIjtcbiAgICAgICAgXG4gICAgICAgIC8vIGxldCB0ZXN0QnV0dG9uMiA9IG5ldyBCdXR0b24oKTtcbiAgICAgICAgLy8gdGVzdEJ1dHRvbjIudGV4dCA9IFwiVGVzdCBidXR0b24xMjNcIjtcblxuICAgICAgICAvLyB0aGlzLmhtZW51TGF5b3V0LmFkZENoaWxkKHRlc3RCdXR0b24pO1xuICAgICAgICAvLyB0aGlzLmhtZW51TGF5b3V0LmFkZENoaWxkKHRlc3RCdXR0b24yKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImJ1dHRvbiB3aWR0aFwiLCB0ZXN0QnV0dG9uLmdldEFjdHVhbFNpemUoKS53aWR0aCwgdGVzdEJ1dHRvbjIuZ2V0TG9jYXRpb25PblNjcmVlbigpLngpO1xuICAgICAgICAvLyB9LCAxMDApXG4gICAgfVxufVxuIl19