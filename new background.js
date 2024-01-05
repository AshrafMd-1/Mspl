powerBILinks = {
  "sales analysis dashboard":
    "https://app.powerbi.com/groups/4ce15a4d-233d-4497-b3ee-bbc88707378e/reports/69bdeff7-79e3-4470-b907-02f998d5559e/ReportSection3257c19e35bc602a6a84?experience=power-bi",
  "sales revenue dashboard":
    "https://app.powerbi.com/groups/4ce15a4d-233d-4497-b3ee-bbc88707378e/reports/69bdeff7-79e3-4470-b907-02f998d5559e/ReportSectionde9eecb4134029095369?experience=power-bi",
  "Inventory dashboard":
    "https://app.powerbi.com/groups/4ce15a4d-233d-4497-b3ee-bbc88707378e/reports/69bdeff7-79e3-4470-b907-02f998d5559e/ReportSection81eee220f666785ad02c?experience=power-bi",
  "customer analysis dashboard":
    "https://app.powerbi.com/groups/4ce15a4d-233d-4497-b3ee-bbc88707378e/reports/69bdeff7-79e3-4470-b907-02f998d5559e/ReportSection9448fd72a1ab90ac4673?experience=power-bi",
  "Regional sales performance dashboard":
    "https://app.powerbi.com/groups/4ce15a4d-233d-4497-b3ee-bbc88707378e/reports/69bdeff7-79e3-4470-b907-02f998d5559e/ReportSection53d778556348e7bfdaab?experience=power-bi",
  };

  const filterKeywords = {
    "sales analysis dashboard": ["Fiscal Year", "Fiscal Period", "Company Code", "Plant", "Segment"],
    "sales revenue dashboard": ["Fiscal Period", "Company Code", "Plant", "Segment", "Material", "Material Type"],
    "Inventory dashboard": ["Fiscal Period", "Company Code", "Plant", "Segment", "Material", "Material Type"],
    "customer analysis dashboard": ["Fiscal Period", "Company Code", "Plant", "Segment", "Customer Name", "Material"],
    "Regional sales performance dashboard": ["Fiscal Period", "Company Code", "Plant", "Segment", "Customer Region", "Material"],
  };
  
  const filterValues = {
    "sales analysis dashboard": {
      "Fiscal Year": ["2023"],
      "Fiscal Period": ["01-Apr", "02-May", "03-Jun", "04-Jul", "05-Aug", "06-Sep", "07-Oct", "08-Nov", "09-Dec", "10-Jan", "11-Feb", "12-Mar"],
      "Company Code": ["Select all", "Good Earth Chemicals Priv", "L. R. Industries", "Mahalakshmi Gases", "MSPL Diamond PTE Ltd -Sin", "MSPL Gases Limited", "MSPL Limited", "R. S. Enterprises", "Ramagad Minerals & Mining"],
      "Plant": ["Select all", "\\WF YELHANKA, B'LORE-3000", "BAGALKOT DEPOT 3000", /*... other plant options ...*/],
      "Segment": ["Select all", "AVIATION", "CAPTIVE MINES", "CHEMICAL", "GASES", "MERCHANT MINES", "PELLETIZATION", "SHIPPING"],
    },
    "sales revenue dashboard": {
      "Fiscal Period": ["01-Apr", "02-May", "03-Jun", "04-Jul", "05-Aug", "06-Sep", "07-Oct", "08-Nov", "09-Dec", "10-Jan", "11-Feb", "12-Mar"],
      "Company Code": ["Select all", "GOOD EARTH CHEMICALS PRIVATE L", "L. R. INDUSTRIES", /*... other company code options ...*/],
      "Plant": ["Select all", "BAGALKOT DEPOT 3000", "BELGAUM DEPOT - 3000", /*... other plant options ...*/],
      "Segment": ["Select all", "CAPTIVE MINES", "CHEMICAL", "GASES", "MERCHANT MINES", "PELLETIZATION"],
      "Material": ["ARGO SHIELD GAS", "ARGON GAS", /*... other material options ...*/],
      "Material Type": ["ZFIN", "ZHAW"],
    },
    "Inventory dashboard": {
      "Fiscal Period": ["01-Apr", "02-May", "03-Jun", "04-Jul", "05-Aug", "06-Sep", "07-Oct", "08-Nov", "09-Dec", "10-Jan", "11-Feb", "12-Mar"],
      "Company Code": ["Select all", "Good Earth Chemicals Priv", "L. R. Industries", /*... other company code options ...*/],
      "Plant": ["Select all", "BAGALKOT DEPOT 3000", "BELGAUM DEPOT - 3000", /*... other plant options ...*/],
      "Segment": ["Select all", "CAPTIVE MINES", "CHEMICAL", "GASES", "MERCHANT MINES", "PELLETIZATION"],
      "Material": ["ARGO SHIELD GAS", "ARGON GAS", /*... other material options ...*/],
      "Material Type": ["ZFIN", "ZHAW"],
    },
    "customer analysis dashboard": {
      "Fiscal Period": ["01-Apr", "02-May", "03-Jun", "04-Jul", "05-Aug", "06-Sep", "07-Oct", "08-Nov", "09-Dec", "10-Jan", "11-Feb", "12-Mar"],
      "Company Code": ["Select all", "Good Earth Chemicals Priv", "L. R. Industries", /*... other company code options ...*/],
      "Plant": ["Select all", "BAGALKOT DEPOT 3000", "BELGAUM DEPOT - 3000", /*... other plant options ...*/],
      "Segment": ["Select all", "CAPTIVE MINES", "CHEMICAL", "GASES", "MERCHANT MINES", "PELLETIZATION"],
      "Customer Name": ["A M GUDDODAGI", "A ONE STEELS & ALLOYS PVT.LTD.", /*... other customer name options ...*/],
      "Material": ["ARGO SHIELD GAS", "ARGON GAS", /*... other material options ...*/],
    },
    "Regional sales performance dashboard": {
      "Fiscal Period": ["01-Apr", "02-May", "03-Jun", "04-Jul", "05-Aug", "06-Sep", "07-Oct", "08-Nov", "09-Dec", "10-Jan", "11-Feb", "12-Mar"],
      "Company Code": ["Select all", "Good Earth Chemicals Priv", "L. R. Industries", /*... other company code options ...*/],
      "Plant": ["Select all", "\\WF YELHANKA, B'LORE-3000", "Aviation", /*... other plant options ...*/],
      "Segment": ["Select all", "AVIATION", "CAPTIVE MINES", "CHEMICAL", "GASES", "MERCHANT MINES", "PELLETIZATION", "SHIPPING"],
      "Customer Region": ["Andhra Pradesh (NEW)", "Bihar", /*... other customer region options ...*/],
      "Material": ["(Blank)", "Accretion (+24mm to +40mm)", /*... other material options ...*/],
    },
  };

const getPowerBILinks = (name) => {
  const lowerCaseName = name.toLowerCase();
  if (lowerCaseName.includes("sales analysis dashboard")) {
    return `${powerBILinks["sales analysis dashboard"]}`;
  } else if (lowerCaseName.includes("sales revenue dashboard")) {
    return `${powerBILinks["sales revenue dashboard"]}`;
  } else if (lowerCaseName.includes("inventory dashboard")) {
    return `${powerBILinks["Inventory dashboard"]}`;
  } else if (lowerCaseName.includes("customer analysis dashboard")) {
    return `${powerBILinks["customer analysis dashboard"]}`;
  }else if (lowerCaseName.includes("regional sales performance dashboard")) {
    return `${powerBILinks["Regional sales performance dashboard"]}`;
  }else {
    return null;
  }
};

const tableNames = {
  "Regional sales performance dashboard": {
    "Fiscal Period": "CV_FISCPER_TXT'[FISCPER3_T]",
    "Company Code": "CV_R_SD_REG_SALES_DATA'[Customer Region Name]",
    "Plant": "CV_R_SD_REG_SALES_DATA'[Customer Region Name]",
  },
  "sales analysis dashboard": "PRILFY2023",
  // ... (other dashboard table names)
};

const getFilters = (name, filterText) => {
  let filtersToReturn = [];
  const availableFilters = filterKeywords[name].map((filter) =>
    filter.toLowerCase(),
  );
  for (let i = 0; i < availableFilters.length; i++) {
    if (filterText.toLowerCase().includes(availableFilters[i].toLowerCase())) {
      filtersToReturn.push(filterKeywords[name][i]);
    }
  }
  return filtersToReturn;
};

const getFilterValues = (name, filterName, filterText) => {
  const filterValuesToReturn = [];
  const availableFilterValues = filterValues[name][
    filterName.toLowerCase()
  ].map((filterValue) => filterValue.toLowerCase());
  for (let i = 0; i < availableFilterValues.length; i++) {
    if (filterText.toLowerCase().includes(availableFilterValues[i])) {
      filterValuesToReturn.push(filterValues[name][filterName.toLowerCase()][i]);
    }
  }
  return filterValuesToReturn;
};

const addSingleFilter = (link, tableName, filterName, filterValue) => {
  const filter = `&filter=${tableName}/${filterName} eq '${filterValue}'`;
  return `${link}${filter}`;
};

const addMultipleFilter = (link, tableName, filterName, filterValues) => {
  let filter = `&filter=${tableName}/${filterName} in `;
  filter += "(";
  filter += filterValues.map((filterValue) => `'${filterValue}'`).join(",");
  filter += ")";
  return `${link}${filter}`;
};

const addFilters = (link, tableName, filterName, filterValues) => {
  if (typeof tableName === 'object' && tableName[filterName]) {
    tableName = tableName[filterName];
  }

  if (filterValues.length <= 1) {
    return addSingleFilter(link, tableName, filterName, filterValues[0]);
  } else {
    return addMultipleFilter(link, tableName, filterName, filterValues);
  }
};

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("https://mspl-1-c9455971.deta.app")) {
    chrome.tabs.create({ url: "https://mspl-1-c9455971.deta.app" });
    chrome.tts.speak("Click on the extension icon to get started");
    return;
  }
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: currentTab.id },
      files: ["content.js"],
    });
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let link;
  if (request && request.text && request.text.includes("filter")) {
    const reportName = request.text
      .slice(5)
      .toLowerCase()
      .split("filter")[0]
      .split("with")[0]
      .trim();
    const reportLink = getPowerBILinks(reportName);
    const filterText = request.text
      .slice(5)
      .toLowerCase()
      .split("filter")[1]
      .trim();
    const tableName = tableNames[reportName];
    const filterName = getFilters(reportName, filterText)[0];
    const filterValues = getFilterValues(reportName, filterName, filterText);
    const newLink = addFilters(reportLink, tableName, filterName, filterValues);
    console.log(reportName);
    console.log(reportLink);
    console.log(tableName);
    console.log(filterName);
    console.log(filterValues);
    console.log(newLink);
    if (newLink) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        if (currentTab.url.includes("https://mspl-1-c9455971.deta.app")) {
          chrome.tabs.create({ url: newLink });
        } else {
          chrome.tabs.update(currentTab.id, { url: newLink });
        }
      });
      link = `Opening ${reportName} with filter ${filterName} as ${filterValues}`;
    } else {
      console.log(filterText);
      link = "Sorry, I didn't get that";
    }
  } else if (request && request.text) {
    link = getPowerBILinks(request.text.toLowerCase().slice(5));
    if (link) {
      chrome.tabs.create({ url: link });
      link = `Opening ${request.text.toLowerCase().slice(5)}`;
    } else {
      link = "Sorry, I didn't get that";
    }
  }
  sendResponse({ message: link });
  return true;
});
