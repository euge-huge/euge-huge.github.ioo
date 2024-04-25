class TabItem {
    public link: HTMLLIElement;

    public contnet: HTMLDivElement;

    constructor(linkFromConst: HTMLLIElement, contnetFromConst: HTMLDivElement) {
        this.link = linkFromConst;
        this.contnet = contnetFromConst;
    }

    public onClick(func : () => void) {
        this.link.addEventListener("click", (event) => {
            event.preventDefault();

            func();
        })
    }

    public activate() {
        this.toggle(true);
    }

    public deactivate() {
        this.toggle(false);
    }

    private toggle(activate: boolean) {
        this.contnet.classList.toggle("tabs_active", activate);
    }
}

class TabsManger {
    public tabs: TabItem[] = [];

    public activeTab: TabItem | null = null;

    constructor(tabsElem: Element) {
        const links = tabsElem.querySelectorAll(".tabs-link");

        const contnets = tabsElem.querySelectorAll(".tabs")

        for (let i = 0; i < links.length; i++) {
            const tab = new TabItem(links[i] as HTMLLIElement, contnets[i] as HTMLDivElement);

            this.tabs.push(tab);

            tab.onClick(() => this.activateTab(tab));
        }
    }

    activateTab(tab: TabItem) {
        if (this.activeTab) {
            this.activeTab.deactivate();
        }

        this.activeTab = tab;
        this.activeTab.activate();
    }
}

const tabsElem = document.querySelector("#tabs-section");

if (tabsElem != null) {
    new TabsManger(tabsElem);
}

const contactsTabs = document.querySelector("#contacts-tabs");

if (contactsTabs != null) {
    new TabsManger(contactsTabs);
}
