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
            }, 300);
        };
        var this_1 = this;
        for (var i = 0; i < this.items.length; i++) {
            _loop_1(i);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBaUY7QUFHakYsK0NBQTZDO0FBSTdDLG9DQUFtQztBQUNuQywrQkFBbUM7QUFRbkMsSUFBYSxjQUFjO0lBV3ZCLHdCQUNZLFdBQXdCLEVBQ3hCLElBQVk7UUFEWixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUU3QixpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUU1QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkE4Q0M7Z0NBNUNXLENBQUM7WUFDTCxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQztZQUV4QixNQUFNLENBQUMsSUFBSSxHQUFHLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7WUFFakMscUJBQXFCO1lBQ3JCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsVUFBQyxTQUFTO2dCQUVyQywrQkFBK0I7Z0JBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUM1QixVQUFDLFVBQWM7b0JBQ1gsVUFBVSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7Z0JBQ3pDLENBQUMsQ0FDSixDQUFDO2dCQUVGLE1BQU0sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO2dCQUVqQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDVixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFDO2dCQUVILDhCQUE4QjtnQkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUUzRSxDQUFDLENBQUMsQ0FBQztZQUVILE9BQUssV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVsQyxrQkFBVSxDQUFDO2dCQUVQLDhDQUE4QztnQkFDOUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTFFLG9CQUFvQjtnQkFDcEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVosQ0FBQzs7UUExQ0QsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQWpDLENBQUM7U0EwQ1I7SUFFTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBdkVELElBdUVDO0FBbEU0QjtJQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQzs4QkFBUyxpQkFBVTs4Q0FBQztBQUd4QjtJQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzs4QkFBUSxpQkFBVTs2Q0FBQztBQVI3QixjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDN0IsQ0FBQztxQ0FhMkIsMEJBQVc7UUFDbEIsYUFBTTtHQWJmLGNBQWMsQ0F1RTFCO0FBdkVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tIFwidWkvc2Nyb2xsLXZpZXdcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSBcInRpbWVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaXRlbXMuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG4gICAgYnV0dG9uczogQXJyYXk8YW55PjtcbiAgICBhY3RpdmVQYWdlOiBhbnk7XG5cbiAgICBAVmlld0NoaWxkKFwic2Nyb2xsdmlld1wiKSBzY3JvbGw6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHNjcm9sbFZpZXc6IFNjcm9sbFZpZXc7XG5cbiAgICBAVmlld0NoaWxkKFwiaG1lbnVcIikgaG1lbnU6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIGhtZW51TGF5b3V0OiBTdGFja0xheW91dDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3ID0gdGhpcy5zY3JvbGwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5obWVudUxheW91dCA9IHRoaXMuaG1lbnUubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLmluaXRQYWdlKCk7XG4gICAgfVxuXG4gICAgaW5pdFBhZ2UoKXtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbjtcblxuICAgICAgICAgICAgYnV0dG9uLnRleHQgPSB0aGlzLml0ZW1zW2ldLnRleHQ7XG4gICAgICAgICAgICBidXR0b24uaWQgPSAnJyArIHRoaXMuaXRlbXNbaV0uaWQ7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJtZW51LW5vcm1hbFwiOyAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZGQgY2xpY2sgbGlzdGVuZXJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0YXAnLCAoZXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gU2V0IG5vcm1hbCBjbGFzcyB0byBhbGwgdGFic1xuICAgICAgICAgICAgICAgIHRoaXMuaG1lbnVMYXlvdXQuZWFjaExheW91dENoaWxkKFxuICAgICAgICAgICAgICAgICAgICAoZWFjaEJ1dHRvbjphbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhY2hCdXR0b24uY2xhc3NOYW1lID0gXCJtZW51LW5vcm1hbFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcIm1lbnUtYWN0aXZlXCI7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlID0gYnV0dG9uLmlkO1xuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBTY3JvbGwgbWVudSB0byBhY3RpdmUgdGFiLi5cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Ib3Jpem9udGFsT2Zmc2V0KHRoaXMuaXRlbXNbaV0ucG9zaXRpb24sIHRydWUpOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmhtZW51TGF5b3V0LmFkZENoaWxkKGJ1dHRvbik7ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gTGV0cyBzYXZlIHBvc2l0aW9uIHNvIHdlIGNhbiBuYXZpZ2F0ZSBsYXRlclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0ucG9zaXRpb24gPSBidXR0b24uZ2V0TG9jYXRpb25SZWxhdGl2ZVRvKHRoaXMuaG1lbnVMYXlvdXQpLng7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gU2VsZWN0IGZpcnN0IGl0ZW1cbiAgICAgICAgICAgICAgICBpZihpPT0wKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcIm1lbnUtYWN0aXZlXCI7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBhZ2UgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19