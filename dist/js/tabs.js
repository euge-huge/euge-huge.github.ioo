var TabItem = /** @class */ (function () {
    function TabItem(linkFromConst, contnetFromConst) {
        this.link = linkFromConst;
        this.contnet = contnetFromConst;
    }
    TabItem.prototype.onClick = function (func) {
        this.link.addEventListener("click", function (event) {
            event.preventDefault();
            func();
        });
    };
    TabItem.prototype.activate = function () {
        this.toggle(true);
    };
    TabItem.prototype.deactivate = function () {
        this.toggle(false);
    };
    TabItem.prototype.toggle = function (activate) {
        this.contnet.classList.toggle("tabs_active", activate);
    };
    return TabItem;
}());
var TabsManger = /** @class */ (function () {
    function TabsManger(tabsElem) {
        var _this = this;
        this.tabs = [];
        this.activeTab = null;
        var links = tabsElem.querySelectorAll(".tabs-link");
        var contnets = tabsElem.querySelectorAll(".tabs");
        var _loop_1 = function (i) {
            var tab = new TabItem(links[i], contnets[i]);
            this_1.tabs.push(tab);
            tab.onClick(function () { return _this.activateTab(tab); });
        };
        var this_1 = this;
        for (var i = 0; i < links.length; i++) {
            _loop_1(i);
        }
    }
    TabsManger.prototype.activateTab = function (tab) {
        if (this.activeTab) {
            this.activeTab.deactivate();
        }
        this.activeTab = tab;
        this.activeTab.activate();
    };
    return TabsManger;
}());
var tabsElem = document.querySelector("#tabs-section");
if (tabsElem != null) {
    new TabsManger(tabsElem);
}
var contactsTabs = document.querySelector("#contacts-tabs");
if (contactsTabs != null) {
    new TabsManger(contactsTabs);
}
