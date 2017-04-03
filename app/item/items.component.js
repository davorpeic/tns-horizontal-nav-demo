"use strict";
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var button_1 = require("ui/button");
var timer_1 = require("timer");
var ItemsComponent = (function () {
    function ItemsComponent(itemService, zone) {
        this.itemService = itemService;
        this.zone = zone;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
        this.scrollView = this.scroll.nativeElement;
        this.hmenuLayout = this.hmenu.nativeElement;
        this.initPage();
    };
    ItemsComponent.prototype.initPage = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var button = new button_1.Button;
            button.text = this_1.items[i].text;
            button.id = '' + this_1.items[i].id;
            button.className = "menu-normal";
            // Add click listener
            button.addEventListener('tap', function (eventData) {
                // Set normal class to all tabs
                _this.hmenuLayout.eachLayoutChild(function (eachButton) {
                    eachButton.className = "menu-normal";
                });
                button.className = "menu-active";
                _this.zone.run(function () {
                    _this.activePage = button.id;
                });
                // Scroll menu to active tab..
                _this.scrollView.scrollToHorizontalOffset(_this.items[i].position, true);
            });
            this_1.hmenuLayout.addChild(button);
            timer_1.setTimeout(function () {
                // Lets save position so we can navigate later
                _this.items[i].position = button.getLocationRelativeTo(_this.hmenuLayout).x;
                // Select first item
                if (i == 0) {
                    button.className = "menu-active";
                    _this.activePage = 0;
                }
            }, 50);
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
    __metadata("design:paramtypes", [item_service_1.ItemService,
        core_1.NgZone])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBaUY7QUFHakYsK0NBQTZDO0FBSTdDLG9DQUFtQztBQUNuQywrQkFBbUM7QUFRbkMsSUFBYSxjQUFjO0lBV3ZCLHdCQUNZLFdBQXdCLEVBQ3hCLElBQVk7UUFEWixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUU3QixpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUU1QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkE0REM7Z0NBMURXLENBQUM7WUFDTCxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQztZQUV4QixNQUFNLENBQUMsSUFBSSxHQUFHLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7WUFFakMscUJBQXFCO1lBQ3JCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsVUFBQyxTQUFTO2dCQUVyQywrQkFBK0I7Z0JBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUM1QixVQUFDLFVBQWM7b0JBQ1gsVUFBVSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7Z0JBQ3pDLENBQUMsQ0FDSixDQUFDO2dCQUVGLE1BQU0sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO2dCQUVqQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDVixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFDO2dCQUVILDhCQUE4QjtnQkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUUzRSxDQUFDLENBQUMsQ0FBQztZQUVILE9BQUssV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVsQyxrQkFBVSxDQUFDO2dCQUVQLDhDQUE4QztnQkFDOUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTFFLG9CQUFvQjtnQkFDcEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO1lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVgsQ0FBQzs7UUExQ0QsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQWpDLENBQUM7U0EwQ1I7UUFHRCxzREFBc0Q7UUFDdEQsaUNBQWlDO1FBQ2pDLCtFQUErRTtRQUUvRSxrQ0FBa0M7UUFDbEMsdUNBQXVDO1FBRXZDLHlDQUF5QztRQUN6QywwQ0FBMEM7UUFFMUMsMEJBQTBCO1FBQzFCLDBHQUEwRztRQUMxRyxVQUFVO0lBQ2QsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXJGRCxJQXFGQztBQWhGNEI7SUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7OEJBQVMsaUJBQVU7OENBQUM7QUFHeEI7SUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7OEJBQVEsaUJBQVU7NkNBQUM7QUFSN0IsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO0tBQzdCLENBQUM7cUNBYTJCLDBCQUFXO1FBQ2xCLGFBQU07R0FiZixjQUFjLENBcUYxQjtBQXJGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG5pbXBvcnQgeyBTY3JvbGxWaWV3IH0gZnJvbSBcInVpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gXCJ0aW1lclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2l0ZW1zLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIGJ1dHRvbnM6IEFycmF5PGFueT47XG4gICAgYWN0aXZlUGFnZTogYW55O1xuXG4gICAgQFZpZXdDaGlsZChcInNjcm9sbHZpZXdcIikgc2Nyb2xsOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBzY3JvbGxWaWV3OiBTY3JvbGxWaWV3O1xuXG4gICAgQFZpZXdDaGlsZChcImhtZW51XCIpIGhtZW51OiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBobWVudUxheW91dDogU3RhY2tMYXlvdXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldyA9IHRoaXMuc2Nyb2xsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaG1lbnVMYXlvdXQgPSB0aGlzLmhtZW51Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5pbml0UGFnZSgpO1xuICAgIH1cblxuICAgIGluaXRQYWdlKCl7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IG5ldyBCdXR0b247XG5cbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gdGhpcy5pdGVtc1tpXS50ZXh0O1xuICAgICAgICAgICAgYnV0dG9uLmlkID0gJycgKyB0aGlzLml0ZW1zW2ldLmlkO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwibWVudS1ub3JtYWxcIjsgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQWRkIGNsaWNrIGxpc3RlbmVyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndGFwJywgKGV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNldCBub3JtYWwgY2xhc3MgdG8gYWxsIHRhYnNcbiAgICAgICAgICAgICAgICB0aGlzLmhtZW51TGF5b3V0LmVhY2hMYXlvdXRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgKGVhY2hCdXR0b246YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlYWNoQnV0dG9uLmNsYXNzTmFtZSA9IFwibWVudS1ub3JtYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJtZW51LWFjdGl2ZVwiO1xuXG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGFnZSA9IGJ1dHRvbi5pZDtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gU2Nyb2xsIG1lbnUgdG8gYWN0aXZlIHRhYi4uXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvSG9yaXpvbnRhbE9mZnNldCh0aGlzLml0ZW1zW2ldLnBvc2l0aW9uLCB0cnVlKTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5obWVudUxheW91dC5hZGRDaGlsZChidXR0b24pOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIExldHMgc2F2ZSBwb3NpdGlvbiBzbyB3ZSBjYW4gbmF2aWdhdGUgbGF0ZXJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnBvc2l0aW9uID0gYnV0dG9uLmdldExvY2F0aW9uUmVsYXRpdmVUbyh0aGlzLmhtZW51TGF5b3V0KS54O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBmaXJzdCBpdGVtXG4gICAgICAgICAgICAgICAgaWYoaT09MCkge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJtZW51LWFjdGl2ZVwiOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MCk7XG5cbiAgICAgICAgfVxuICAgICAgIFxuXG4gICAgICAgIC8vdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvSG9yaXpvbnRhbE9mZnNldCgxMDAsIHRydWUpO1xuICAgICAgICAvLyBsZXQgdGVzdEJ1dHRvbiA9IG5ldyBCdXR0b24oKTtcbiAgICAgICAgLy8gdGVzdEJ1dHRvbi50ZXh0ID0gXCJUZXN0IGJ1dHRvbiBhc2RmICBhc2RmICBzZGZhc2RmYXNkZmFzZGYgYXNkZmZhc2RmIGFzIGYjXCI7XG4gICAgICAgIFxuICAgICAgICAvLyBsZXQgdGVzdEJ1dHRvbjIgPSBuZXcgQnV0dG9uKCk7XG4gICAgICAgIC8vIHRlc3RCdXR0b24yLnRleHQgPSBcIlRlc3QgYnV0dG9uMTIzXCI7XG5cbiAgICAgICAgLy8gdGhpcy5obWVudUxheW91dC5hZGRDaGlsZCh0ZXN0QnV0dG9uKTtcbiAgICAgICAgLy8gdGhpcy5obWVudUxheW91dC5hZGRDaGlsZCh0ZXN0QnV0dG9uMik7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJidXR0b24gd2lkdGhcIiwgdGVzdEJ1dHRvbi5nZXRBY3R1YWxTaXplKCkud2lkdGgsIHRlc3RCdXR0b24yLmdldExvY2F0aW9uT25TY3JlZW4oKS54KTtcbiAgICAgICAgLy8gfSwgMTAwKVxuICAgIH1cbn1cbiJdfQ==