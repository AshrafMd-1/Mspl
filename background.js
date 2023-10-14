links = {
    "sales revenue dashboard": "https://app.powerbi.com/groups/me/reports/07353a90-7b2a-44fe-92d3-d6b8565fa43e/ReportSection8da7d6bdc07307d92cd8?experience=power-bi",
    "production dashboard": "https://app.powerbi.com/groups/me/reports/b5d3ec85-a88d-4241-8dca-61c3852e3f66/ReportSection0b965e5f0ff4c1d12917?experience=power-bi",
    "cost analysis dashboard": "https://app.powerbi.com/groups/me/reports/b5d3ec85-a88d-4241-8dca-61c3852e3f66/ReportSection76e661661e1efa82616c?experience=power-bi",
    "raw material dashboard": "https://app.powerbi.com/groups/me/reports/b5d3ec85-a88d-4241-8dca-61c3852e3f66/ReportSectionfbdc3e3fdaae956b9024?experience=power-bi", // https://app.powerbi.com/groups/me/reports/b4a53daa-a519-44ca-8b10-bcb1b8e7cfcf/ReportSectionfbdc3e3fdaae956b9024?filter=RM_x0020_Price/Plant eq 'Bhurwal'
};
const filters = ["Anara", "BBSR", "Bhurwal", "BLSPR CP", "BLSPR LL", "Gaya", "Hubli", "Mirza", "Pathri", "Sholaka", "TMQ", "Udvada", "Wadiyaram"];

function getLinks(name) {
    if (name.includes("sales revenue dashboard")) {
        return `${links["sales revenue dashboard"]}`;
    } else if (name.includes("production dashboard")) {
        return `${links["production dashboard"]}`;
    } else if (name.includes("cost analysis dashboard")) {
        return `${links["cost analysis dashboard"]}`;
    } else if (name.includes("raw material dashboard")) {
        return `${links["raw material dashboard"]}`;
    } else {
        return null;
    }
}

function giveFilters(filterValues) {
    let allFiltersIndex = []
    for (filterValue of filterValues) {
        for (filter of filters) {
            if (filterValue.length === 1) {
                if (filter.includes(filterValue.toUpperCase())) {
                    allFiltersIndex.push(filters.indexOf(filter))
                }
            } else {
                if (filter.toLowerCase().includes(filterValue.toLowerCase())) {
                    allFiltersIndex.push(filters.indexOf(filter))
                }
            }
        }
    }
    return allFiltersIndex.map((index) => filters[index])
}

function addFilter(link, tableName, filterName, filterValues) {
    if (filterValues.length <= 1) {
        return singleFilter(link, tableName, filterName, filterValues[0]);
    } else {
        return multipleFilter(link, tableName, filterName, filterValues);
    }
}

function singleFilter(link, tableName, filterName, filterValue) {
    let filter = `&filter=${tableName}/${filterName} eq '${filterValue}'`;
    return `${link}${filter}`;
}

function multipleFilter(link, tableName, filterName, filterValues) {
    let filter = `&filter=${tableName}/${filterName} in `;
    filter += '(';
    filter += filterValues.map((filterValue) => `'${filterValue}'`).join(',');
    filter += ')';
    return `${link}${filter}`;
}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("https://mspl-1-c9455971.deta.app")) {
        chrome.tabs.create({url: "https://mspl-1-c9455971.deta.app"});
        chrome.tts.speak("Click on the extension icon to get started");
        return;
    }
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        const currentTab = tabs[0];
        chrome.scripting.executeScript({
            target: {tabId: currentTab.id}, files: ["content.js"],
        })
    });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let link = "";
    let filter = "";
    let filterValues;

    if (request && request.text && request.text.includes("filter")) {
        link = getLinks(request.text.toLowerCase().split("filter")[0].split("with")[0].trim());
        filterValues = request.text.toLowerCase().split("filter")[1].split(" ").filter((value) => value !== "");
        let tableName = 'RM_x0020_Price'
        let filterName = 'Plant'
        let newLink = addFilter(link, tableName, filterName, giveFilters(filterValues));
        if (newLink) {
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                const currentTab = tabs[0];
                if (currentTab.url.includes("https://mspl-1-c9455971.deta.app")) {
                    chrome.tabs.create({url: newLink});
                } else {
                    chrome.tabs.update(currentTab.id, {url: newLink});
                }
            });
            link = `Opening ${request.text.toLowerCase().split("filter")[0].split("with")[0].trim()} with filter ${filterValues.join(" ")}`;
        } else {
            link = "Sorry, I didn't get that";
        }
    } else if (request && request.text) {
        link = getLinks(request.text.toLowerCase());
        if (link) {
            chrome.tabs.create({url: link});
            link = `Opening ${request.text}`;
        } else {
            link = "Sorry, I didn't get that";
        }
    }
    sendResponse({message: link});
    return true;
});
