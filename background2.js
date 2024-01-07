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
      "Company Code": ['Select all', 'Good Earth Chemicals Priv', 'L. R. Industries', 'Mahalakshmi Gases', 'MSPL Diamond PTE Ltd -Sin', 'MSPL Gases Limited', 'MSPL Limited', 'R. S. Enterprises', 'Ramagad Minerals & Mining'],
      "Plant": ['Select all', '\\WF YELHANKA, B\'LORE-3000', 'Aviation', 'BAGALKOT DEPOT 3000', 'BELGAUM DEPOT - 3000', 'BELGAUM RF PLANT - 3000', 'BELLARY DEPOT-3000', 'BELUR DEPOT-3000', 'BIJAPUR DEPOT-3500', 'DAVANGERE DEPOT 3000', 'GOA Depot-3000', 'GOA PLANT-3000', 'GULBARGA DEPOT-3000', 'HINDUPUR DEPOT -3000', 'HOSAHALLI Depot-3000', 'HOSAHALLI GECPL', 'HOSAHALLI PLANT-3000', 'HOSPET DEPOT-3000', 'HUBLI DEPOT-3000', 'INDUS FORTUNE', 'Indus Prosperity', 'INDUS TRIUMPH', 'INDUS VICTORY', 'KKIOM', 'KOLHAPUR DEPOT-3000', 'KUDTINI Depot - 3000', 'MSPL GOA PORT', 'MSPL LIMITED - PELLET PLANT', 'MSPL LIMITED EOU UNIT-II', 'PUNE DEPOT-3500', 'RAICHUR DEPOT - 3000', 'RAICHUR RF Depot-3000', 'RAICHUR RFPLANT-3000', 'RAMGAD MINERALS & MINING LTD', 'RMML EXPORT', 'RMML KP PORT', 'RSE ENTERPRISES HOSAHALLI', 'SANGLI DEPOT-3000', 'SHIMOGA DEPOT-3000', 'SHOLAPUR DEPOT', 'SHOLAPUR DEPOT-3000', 'SHOLAPUR PLANT-5000', 'TADAPATRI DEPOT 3000', 'TUMKUR DEPOT - 3000', 'VIOM', 'WALCHAND NAGAR DEPOT', 'YADRAV DEPOT', 'YADRAV PLANT-3500'],
      "Segment": ["Select all", "AVIATION", "CAPTIVE MINES", "CHEMICAL", "GASES", "MERCHANT MINES", "PELLETIZATION", "SHIPPING"],
    },
    "sales revenue dashboard": {
      "Fiscal Period": ["01-Apr", "02-May", "03-Jun", "04-Jul", "05-Aug", "06-Sep", "07-Oct", "08-Nov", "09-Dec", "10-Jan", "11-Feb", "12-Mar"],
      "Company Code": ['Select all', 'Good Earth Chemicals Priv', 'L. R. Industries', 'Mahalakshmi Gases', 'MSPL Diamond PTE Ltd -Sin', 'MSPL Gases Limited', 'MSPL Limited', 'R. S. Enterprises', 'Ramagad Minerals & Mining'],
      "Plant": ['Select all', '\\WF YELHANKA, B\'LORE-3000', 'Aviation', 'BAGALKOT DEPOT 3000', 'BELGAUM DEPOT - 3000', 'BELGAUM RF PLANT - 3000', 'BELLARY DEPOT-3000', 'BELUR DEPOT-3000', 'BIJAPUR DEPOT-3500', 'DAVANGERE DEPOT 3000', 'GOA Depot-3000', 'GOA PLANT-3000', 'GULBARGA DEPOT-3000', 'HINDUPUR DEPOT -3000', 'HOSAHALLI Depot-3000', 'HOSAHALLI GECPL', 'HOSAHALLI PLANT-3000', 'HOSPET DEPOT-3000', 'HUBLI DEPOT-3000', 'INDUS FORTUNE', 'Indus Prosperity', 'INDUS TRIUMPH', 'INDUS VICTORY', 'KKIOM', 'KOLHAPUR DEPOT-3000', 'KUDTINI Depot - 3000', 'MSPL GOA PORT', 'MSPL LIMITED - PELLET PLANT', 'MSPL LIMITED EOU UNIT-II', 'PUNE DEPOT-3500', 'RAICHUR DEPOT - 3000', 'RAICHUR RF Depot-3000', 'RAICHUR RFPLANT-3000', 'RAMGAD MINERALS & MINING LTD', 'RMML EXPORT', 'RMML KP PORT', 'RSE ENTERPRISES HOSAHALLI', 'SANGLI DEPOT-3000', 'SHIMOGA DEPOT-3000', 'SHOLAPUR DEPOT', 'SHOLAPUR DEPOT-3000', 'SHOLAPUR PLANT-5000', 'TADAPATRI DEPOT 3000', 'TUMKUR DEPOT - 3000', 'VIOM', 'WALCHAND NAGAR DEPOT', 'YADRAV DEPOT', 'YADRAV PLANT-3500'],
      "Segment": ["Select all", "CAPTIVE MINES", "CHEMICAL", "GASES", "MERCHANT MINES", "PELLETIZATION"],
      "Material": ['Select all', '(Blank)', 'Accretion (+24mm to +40mm)', 'ACETONE', 'Agreeing to do an act', 'AIR, GOVERNER, ASSY, PN: M301970/M301940', 'Airport Service Charges', 'ARGO CYLINDER', 'ARGO SHIELD GAS', 'ARGON CYL CUSTOMER', 'ARGON CYLINDER', 'ARGON GAS', 'ARGON HYDROGEN MIXTURE', 'Argon Hydrogen Mixture cylinder', 'BALL JOINT, M10X1.25, PN: 3351500720', 'BEARING CYL. ROLLER, NF 209', 'BEARING DEEP GROOVE BALL 6211/C3', 'BEARING, NEEDLE, REV, PN', 'BEARING, ROLLER CAGE, PN: 250526253105', 'C&S PLANT DHC STRUCTURES MS SCRAP', 'CALCIUM CARBIDE', 'Charter Hire - Basic', 'CLAMP, VBAND, PN: 278614999931, MM: LPK 2516C', 'CO2 CYLINDER', 'CO2 CYN CUSTOMER', 'COG2 GAS MANUFACTURE', 'CONVEYOR BELT 1000MM', 'CONVEYOR BELT 1200MM 630/4 M24 GRADE', 'COOLENT, RADI, MOTOR GRADER VOLVO', 'COOLING LINE, UPPER, PN: 252520120164, TATA', 'COTTER PIN, PN: 0429900037J, MM: LPK 2516C', 'COUPLING ASSY, TYRE, F70', 'COVER, TOP, PN: 250530123714, MM: 1612', 'CS PLANT PARTS WITH DHC', 'DA CYL CUSTOMER', 'DA CYLINDER', 'ISC, F/COUPLING ASSY, FLUID, 14.5IN', 'DISSOLVED ACETYLENE GAS', 'EAR, TWIN, 2ND/3RD, PN: 250526305402', 'Export Energy (KA) in KWH', 'FILTER ASSY, LPK 251, PN: 275144100117', 'FILTER ASSY, PN: 275144100116, MM: LPK2516TC', 'Flying Charges ( Internal )', 'FRAME, SELF ALIGNING RETURN, 1000MM', 'FRAME, CARRYING ROLLE', 'FRAME, CARRYING ROLLER, 1055MM, 1200MM', 'GASKET KIT, UPPER, PN: 278620999933', 'GEAR, 4TH, PN: 250526305401, MM: LP-LPO 1510', 'GEAR, CONSTANT MESH, CS, PN: 250530145402', 'GEAR, HELICAL, 2ND SPEED, PN: 3222620112', 'GEAR, REVERSE, 36T, GBS40, PN: 3222630333', 'HELIUM CYLINDER', 'Helium Gas Trading', 'HYDROGEN CYLINDER'],
      "Material Type": ["ZFIN", "ZHAW"],
    },
    "Inventory dashboard": {
      "Fiscal Period": ["01-Apr", "02-May", "03-Jun", "04-Jul", "05-Aug", "06-Sep", "07-Oct", "08-Nov", "09-Dec", "10-Jan", "11-Feb", "12-Mar"],
      "Company Code": ['Select all', 'Good Earth Chemicals Priv', 'L. R. Industries', 'Mahalakshmi Gases', 'MSPL Diamond PTE Ltd -Sin', 'MSPL Gases Limited', 'MSPL Limited', 'R. S. Enterprises', 'Ramagad Minerals & Mining'],
      "Plant": ['Select all', '\\WF YELHANKA, B\'LORE-3000', 'Aviation', 'BAGALKOT DEPOT 3000', 'BELGAUM DEPOT - 3000', 'BELGAUM RF PLANT - 3000', 'BELLARY DEPOT-3000', 'BELUR DEPOT-3000', 'BIJAPUR DEPOT-3500', 'DAVANGERE DEPOT 3000', 'GOA Depot-3000', 'GOA PLANT-3000', 'GULBARGA DEPOT-3000', 'HINDUPUR DEPOT -3000', 'HOSAHALLI Depot-3000', 'HOSAHALLI GECPL', 'HOSAHALLI PLANT-3000', 'HOSPET DEPOT-3000', 'HUBLI DEPOT-3000', 'INDUS FORTUNE', 'Indus Prosperity', 'INDUS TRIUMPH', 'INDUS VICTORY', 'KKIOM', 'KOLHAPUR DEPOT-3000', 'KUDTINI Depot - 3000', 'MSPL GOA PORT', 'MSPL LIMITED - PELLET PLANT', 'MSPL LIMITED EOU UNIT-II', 'PUNE DEPOT-3500', 'RAICHUR DEPOT - 3000', 'RAICHUR RF Depot-3000', 'RAICHUR RFPLANT-3000', 'RAMGAD MINERALS & MINING LTD', 'RMML EXPORT', 'RMML KP PORT', 'RSE ENTERPRISES HOSAHALLI', 'SANGLI DEPOT-3000', 'SHIMOGA DEPOT-3000', 'SHOLAPUR DEPOT', 'SHOLAPUR DEPOT-3000', 'SHOLAPUR PLANT-5000', 'TADAPATRI DEPOT 3000', 'TUMKUR DEPOT - 3000', 'VIOM', 'WALCHAND NAGAR DEPOT', 'YADRAV DEPOT', 'YADRAV PLANT-3500'],
      "Segment": ["Select all", "CAPTIVE MINES", "CHEMICAL", "GASES", "MERCHANT MINES", "PELLETIZATION"],
      "Material": ['Select all', '(Blank)', 'Accretion (+24mm to +40mm)', 'ACETONE', 'Agreeing to do an act', 'AIR, GOVERNER, ASSY, PN: M301970/M301940', 'Airport Service Charges', 'ARGO CYLINDER', 'ARGO SHIELD GAS', 'ARGON CYL CUSTOMER', 'ARGON CYLINDER', 'ARGON GAS', 'ARGON HYDROGEN MIXTURE', 'Argon Hydrogen Mixture cylinder', 'BALL JOINT, M10X1.25, PN: 3351500720', 'BEARING CYL. ROLLER, NF 209', 'BEARING DEEP GROOVE BALL 6211/C3', 'BEARING, NEEDLE, REV, PN', 'BEARING, ROLLER CAGE, PN: 250526253105', 'C&S PLANT DHC STRUCTURES MS SCRAP', 'CALCIUM CARBIDE', 'Charter Hire - Basic', 'CLAMP, VBAND, PN: 278614999931, MM: LPK 2516C', 'CO2 CYLINDER', 'CO2 CYN CUSTOMER', 'COG2 GAS MANUFACTURE', 'CONVEYOR BELT 1000MM', 'CONVEYOR BELT 1200MM 630/4 M24 GRADE', 'COOLENT, RADI, MOTOR GRADER VOLVO', 'COOLING LINE, UPPER, PN: 252520120164, TATA', 'COTTER PIN, PN: 0429900037J, MM: LPK 2516C', 'COUPLING ASSY, TYRE, F70', 'COVER, TOP, PN: 250530123714, MM: 1612', 'CS PLANT PARTS WITH DHC', 'DA CYL CUSTOMER', 'DA CYLINDER', 'ISC, F/COUPLING ASSY, FLUID, 14.5IN', 'DISSOLVED ACETYLENE GAS', 'EAR, TWIN, 2ND/3RD, PN: 250526305402', 'Export Energy (KA) in KWH', 'FILTER ASSY, LPK 251, PN: 275144100117', 'FILTER ASSY, PN: 275144100116, MM: LPK2516TC', 'Flying Charges ( Internal )', 'FRAME, SELF ALIGNING RETURN, 1000MM', 'FRAME, CARRYING ROLLE', 'FRAME, CARRYING ROLLER, 1055MM, 1200MM', 'GASKET KIT, UPPER, PN: 278620999933', 'GEAR, 4TH, PN: 250526305401, MM: LP-LPO 1510', 'GEAR, CONSTANT MESH, CS, PN: 250530145402', 'GEAR, HELICAL, 2ND SPEED, PN: 3222620112', 'GEAR, REVERSE, 36T, GBS40, PN: 3222630333', 'HELIUM CYLINDER', 'Helium Gas Trading', 'HYDROGEN CYLINDER'],
      "Material Type": ["ZFIN", "ZHAW"],
    },
    "customer analysis dashboard": {
      "Fiscal Period": ["01-Apr", "02-May", "03-Jun", "04-Jul", "05-Aug", "06-Sep", "07-Oct", "08-Nov", "09-Dec", "10-Jan", "11-Feb", "12-Mar"],
      "Company Code": ['Select all', 'Good Earth Chemicals Priv', 'L. R. Industries', 'Mahalakshmi Gases', 'MSPL Diamond PTE Ltd -Sin', 'MSPL Gases Limited', 'MSPL Limited', 'R. S. Enterprises', 'Ramagad Minerals & Mining'],
      "Plant": ['Select all', '\\WF YELHANKA, B\'LORE-3000', 'Aviation', 'BAGALKOT DEPOT 3000', 'BELGAUM DEPOT - 3000', 'BELGAUM RF PLANT - 3000', 'BELLARY DEPOT-3000', 'BELUR DEPOT-3000', 'BIJAPUR DEPOT-3500', 'DAVANGERE DEPOT 3000', 'GOA Depot-3000', 'GOA PLANT-3000', 'GULBARGA DEPOT-3000', 'HINDUPUR DEPOT -3000', 'HOSAHALLI Depot-3000', 'HOSAHALLI GECPL', 'HOSAHALLI PLANT-3000', 'HOSPET DEPOT-3000', 'HUBLI DEPOT-3000', 'INDUS FORTUNE', 'Indus Prosperity', 'INDUS TRIUMPH', 'INDUS VICTORY', 'KKIOM', 'KOLHAPUR DEPOT-3000', 'KUDTINI Depot - 3000', 'MSPL GOA PORT', 'MSPL LIMITED - PELLET PLANT', 'MSPL LIMITED EOU UNIT-II', 'PUNE DEPOT-3500', 'RAICHUR DEPOT - 3000', 'RAICHUR RF Depot-3000', 'RAICHUR RFPLANT-3000', 'RAMGAD MINERALS & MINING LTD', 'RMML EXPORT', 'RMML KP PORT', 'RSE ENTERPRISES HOSAHALLI', 'SANGLI DEPOT-3000', 'SHIMOGA DEPOT-3000', 'SHOLAPUR DEPOT', 'SHOLAPUR DEPOT-3000', 'SHOLAPUR PLANT-5000', 'TADAPATRI DEPOT 3000', 'TUMKUR DEPOT - 3000', 'VIOM', 'WALCHAND NAGAR DEPOT', 'YADRAV DEPOT', 'YADRAV PLANT-3500'],
      "Segment": ["Select all", "CAPTIVE MINES", "CHEMICAL", "GASES", "MERCHANT MINES", "PELLETIZATION"],
      "Customer Name": ['Select all', 'A M GUDDODAGI', 'A ONE STEELS & ALLOYS PVT.LTD.', 'A ONE STEELS INDIA PRIVATE', 'A. K ENGINEERING WORKS', 'A.M.S. INDUSTRIES', 'A.R. ENGINEERING', 'A.S.Q. AIRCON ENGINEERS', 'AANU ENTERPRISES', 'AARADHYA INDUSTRIES', 'AARAIKE SUPER SPECIALITY HOSPITAL', 'AARYAVEDANTA SCAN CENTRE LLP', 'AB & H VENTURES', 'ABDUL KHADEER', 'ABDUL NABI', 'ABDUL SAMAD TRADERS', 'ABHISHEK TREADLINES', 'ABID MOTORS', 'ACC LIMITED-THONDEBHAVI', 'ACC WADI', 'ACES LOGISTICS', 'ADITYA INDUSTRIES', 'Aditya Industries,', 'ADME, SOUTH CENTRAL RAILWAY', 'ADVANCE DIE CAST', 'ADVANCE ENGINEERING WORKS', 'AGNI STEELS PVT LTD'],
      "Material": ['Select all', '(Blank)', 'Accretion (+24mm to +40mm)', 'ACETONE', 'Agreeing to do an act', 'AIR, GOVERNER, ASSY, PN: M301970/M301940', 'Airport Service Charges', 'ARGO CYLINDER', 'ARGO SHIELD GAS', 'ARGON CYL CUSTOMER', 'ARGON CYLINDER', 'ARGON GAS', 'ARGON HYDROGEN MIXTURE', 'Argon Hydrogen Mixture cylinder', 'BALL JOINT, M10X1.25, PN: 3351500720', 'BEARING CYL. ROLLER, NF 209', 'BEARING DEEP GROOVE BALL 6211/C3', 'BEARING, NEEDLE, REV, PN', 'BEARING, ROLLER CAGE, PN: 250526253105', 'C&S PLANT DHC STRUCTURES MS SCRAP', 'CALCIUM CARBIDE', 'Charter Hire - Basic', 'CLAMP, VBAND, PN: 278614999931, MM: LPK 2516C', 'CO2 CYLINDER', 'CO2 CYN CUSTOMER', 'COG2 GAS MANUFACTURE', 'CONVEYOR BELT 1000MM', 'CONVEYOR BELT 1200MM 630/4 M24 GRADE', 'COOLENT, RADI, MOTOR GRADER VOLVO', 'COOLING LINE, UPPER, PN: 252520120164, TATA', 'COTTER PIN, PN: 0429900037J, MM: LPK 2516C', 'COUPLING ASSY, TYRE, F70', 'COVER, TOP, PN: 250530123714, MM: 1612', 'CS PLANT PARTS WITH DHC', 'DA CYL CUSTOMER', 'DA CYLINDER', 'ISC, F/COUPLING ASSY, FLUID, 14.5IN', 'DISSOLVED ACETYLENE GAS', 'EAR, TWIN, 2ND/3RD, PN: 250526305402', 'Export Energy (KA) in KWH', 'FILTER ASSY, LPK 251, PN: 275144100117', 'FILTER ASSY, PN: 275144100116, MM: LPK2516TC', 'Flying Charges ( Internal )', 'FRAME, SELF ALIGNING RETURN, 1000MM', 'FRAME, CARRYING ROLLE', 'FRAME, CARRYING ROLLER, 1055MM, 1200MM', 'GASKET KIT, UPPER, PN: 278620999933', 'GEAR, 4TH, PN: 250526305401, MM: LP-LPO 1510', 'GEAR, CONSTANT MESH, CS, PN: 250530145402', 'GEAR, HELICAL, 2ND SPEED, PN: 3222620112', 'GEAR, REVERSE, 36T, GBS40, PN: 3222630333', 'HELIUM CYLINDER', 'Helium Gas Trading', 'HYDROGEN CYLINDER'],
    },
    "Regional sales performance dashboard": {
      "Fiscal Period": ["01-Apr", "02-May", "03-Jun", "04-Jul", "05-Aug", "06-Sep", "07-Oct", "08-Nov", "09-Dec", "10-Jan", "11-Feb", "12-Mar"],
      "Company Code": ['Select all', 'Good Earth Chemicals Priv', 'L. R. Industries', 'Mahalakshmi Gases', 'MSPL Diamond PTE Ltd -Sin', 'MSPL Gases Limited', 'MSPL Limited', 'R. S. Enterprises', 'Ramagad Minerals & Mining'],
      "Plant": ['Select all', '\\WF YELHANKA, B\'LORE-3000', 'Aviation', 'BAGALKOT DEPOT 3000', 'BELGAUM DEPOT - 3000', 'BELGAUM RF PLANT - 3000', 'BELLARY DEPOT-3000', 'BELUR DEPOT-3000', 'BIJAPUR DEPOT-3500', 'DAVANGERE DEPOT 3000', 'GOA Depot-3000', 'GOA PLANT-3000', 'GULBARGA DEPOT-3000', 'HINDUPUR DEPOT -3000', 'HOSAHALLI Depot-3000', 'HOSAHALLI GECPL', 'HOSAHALLI PLANT-3000', 'HOSPET DEPOT-3000', 'HUBLI DEPOT-3000', 'INDUS FORTUNE', 'Indus Prosperity', 'INDUS TRIUMPH', 'INDUS VICTORY', 'KKIOM', 'KOLHAPUR DEPOT-3000', 'KUDTINI Depot - 3000', 'MSPL GOA PORT', 'MSPL LIMITED - PELLET PLANT', 'MSPL LIMITED EOU UNIT-II', 'PUNE DEPOT-3500', 'RAICHUR DEPOT - 3000', 'RAICHUR RF Depot-3000', 'RAICHUR RFPLANT-3000', 'RAMGAD MINERALS & MINING LTD', 'RMML EXPORT', 'RMML KP PORT', 'RSE ENTERPRISES HOSAHALLI', 'SANGLI DEPOT-3000', 'SHIMOGA DEPOT-3000', 'SHOLAPUR DEPOT', 'SHOLAPUR DEPOT-3000', 'SHOLAPUR PLANT-5000', 'TADAPATRI DEPOT 3000', 'TUMKUR DEPOT - 3000', 'VIOM', 'WALCHAND NAGAR DEPOT', 'YADRAV DEPOT', 'YADRAV PLANT-3500'],
      "Segment": ["Select all", "AVIATION", "CAPTIVE MINES", "CHEMICAL", "GASES", "MERCHANT MINES", "PELLETIZATION", "SHIPPING"],
      "Customer Region": ['Select all', 'Andhra Pradesh (NEW)', 'Bihar', 'Delhi', 'Goa', 'Gujarat', 'Himachal Pradesh', 'Hong Kong - China', 'Karnataka', 'Kerala', 'Maharashtra', 'Oslo', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'],
      "Material": ['Select all', '(Blank)', 'Accretion (+24mm to +40mm)', 'ACETONE', 'Agreeing to do an act', 'AIR, GOVERNER, ASSY, PN: M301970/M301940', 'Airport Service Charges', 'ARGO CYLINDER', 'ARGO SHIELD GAS', 'ARGON CYL CUSTOMER', 'ARGON CYLINDER', 'ARGON GAS', 'ARGON HYDROGEN MIXTURE', 'Argon Hydrogen Mixture cylinder', 'BALL JOINT, M10X1.25, PN: 3351500720', 'BEARING CYL. ROLLER, NF 209', 'BEARING DEEP GROOVE BALL 6211/C3', 'BEARING, NEEDLE, REV, PN', 'BEARING, ROLLER CAGE, PN: 250526253105', 'C&S PLANT DHC STRUCTURES MS SCRAP', 'CALCIUM CARBIDE', 'Charter Hire - Basic', 'CLAMP, VBAND, PN: 278614999931, MM: LPK 2516C', 'CO2 CYLINDER', 'CO2 CYN CUSTOMER', 'COG2 GAS MANUFACTURE', 'CONVEYOR BELT 1000MM', 'CONVEYOR BELT 1200MM 630/4 M24 GRADE', 'COOLENT, RADI, MOTOR GRADER VOLVO', 'COOLING LINE, UPPER, PN: 252520120164, TATA', 'COTTER PIN, PN: 0429900037J, MM: LPK 2516C', 'COUPLING ASSY, TYRE, F70', 'COVER, TOP, PN: 250530123714, MM: 1612', 'CS PLANT PARTS WITH DHC', 'DA CYL CUSTOMER', 'DA CYLINDER', 'ISC, F/COUPLING ASSY, FLUID, 14.5IN', 'DISSOLVED ACETYLENE GAS', 'EAR, TWIN, 2ND/3RD, PN: 250526305402', 'Export Energy (KA) in KWH', 'FILTER ASSY, LPK 251, PN: 275144100117', 'FILTER ASSY, PN: 275144100116, MM: LPK2516TC', 'Flying Charges ( Internal )', 'FRAME, SELF ALIGNING RETURN, 1000MM', 'FRAME, CARRYING ROLLE', 'FRAME, CARRYING ROLLER, 1055MM, 1200MM', 'GASKET KIT, UPPER, PN: 278620999933', 'GEAR, 4TH, PN: 250526305401, MM: LP-LPO 1510', 'GEAR, CONSTANT MESH, CS, PN: 250530145402', 'GEAR, HELICAL, 2ND SPEED, PN: 3222620112', 'GEAR, REVERSE, 36T, GBS40, PN: 3222630333', 'HELIUM CYLINDER', 'Helium Gas Trading', 'HYDROGEN CYLINDER'],
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
  const encodedFilterName = encodeURIComponent(filterName);
  const encodedFilterValue = encodeURIComponent(filterValue);
  const filter = `&filter=${tableName}/${encodedFilterName} eq '${encodedFilterValue}'`;
  return `${link}${filter}`;
};

const addMultipleFilter = (link, tableName, filterName, filterValues) => {
  const encodedFilterName = encodeURIComponent(filterName);
  const encodedFilterValues = filterValues.map(value => encodeURIComponent(value));
  const filter = `&filter=${tableName}/${encodedFilterName} in (${encodedFilterValues.join(',')})`;
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
