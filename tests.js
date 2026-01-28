(async () => {
  const reportBody = document.querySelector("#report tbody");
  const summary = document.getElementById("summary");
  const results = [];

  const add = (name, pass, detail = "") => {
    results.push({ name, pass, detail });
    const row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td><td class="${pass ? "pass" : "fail"}">${pass ? "PASS" : "FAIL"}</td><td>${detail}</td>`;
    reportBody.appendChild(row);
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const app = window.__app;
  if (!app) {
    add("app exposure", false, "window.__app missing");
    summary.textContent = "Tests failed: app not exposed";
    return;
  }

  const waitRender = async () => {
    await sleep(20);
  };

  const setState = async (next) => {
    app.setState(next);
    await waitRender();
  };

  const getKpi = (label) => {
    const kpis = Array.from(document.querySelectorAll(".kpi"));
    const target = kpis.find((k) => k.querySelector(".kpi-label")?.textContent === label);
    if (!target) return null;
    const primary = target.querySelector(".kpi-value-primary")?.textContent?.trim() || "";
    const secondary = target.querySelector(".kpi-value-secondary")?.textContent?.trim() || "";
    return { primary, secondary };
  };

  const rowButtonsText = (rowIndex) => {
    const rows = Array.from(document.querySelectorAll("#rows .row"));
    const row = rows[rowIndex];
    if (!row) return [];
    return Array.from(row.querySelectorAll("button.select")).map((b) => b.textContent.trim());
  };

  const hasQuickDrillInput = () => {
    return Array.from(document.querySelectorAll("input[type='text']")).some((i) => (i.placeholder || "").toLowerCase().includes("quick drill"));
  };

  const testsByCategory = async () => {
    await setState({ category: "drill", mode: "convert", drillInput: "#7" });
    add("drill convert hides quick drill input", hasQuickDrillInput() === false, "");
    add("drill convert shows Diameter KPI", !!getKpi("Diameter"), "");
    add("drill convert single table highlight", tableHighlightOk(), tableHighlightDetail());

    await setState({ category: "drill", mode: "tap" });
    add("drill tap hides quick drill input", hasQuickDrillInput() === false, "");
    add("drill tap shows Pitch KPI", !!getKpi("Pitch"), "");
    add("drill tap single table highlight", tableHighlightOk(), tableHighlightDetail());

    await setState({ category: "drill", mode: "clearance" });
    add("drill clearance hides quick drill input", hasQuickDrillInput() === false, "");
    add("drill clearance shows Close KPI", !!getKpi("Close"), "");
    add("drill clearance single table highlight", tableHighlightOk(), tableHighlightDetail());

    await setState({ category: "torque", mode: "inch" });
    add("torque hides quick drill input", hasQuickDrillInput() === false, "");
    add("torque shows Torque KPI", !!getKpi("Torque"), "");
    add("torque single table highlight", tableHighlightOk(), tableHighlightDetail());

    await setState({ category: "torque", mode: "unc", torqueGrade: "a2" });
    add("torque stainless proof present", kpiHasNumber("Proof"), kpiDetail("Proof"));
    await setState({ category: "torque", mode: "unc", torqueGrade: "ti" });
    add("torque titanium proof present", kpiHasNumber("Proof"), kpiDetail("Proof"));
    await setState({ category: "torque", mode: "unc", torqueGrade: "nylon" });
    add("torque nylon proof present", kpiHasNumber("Proof"), kpiDetail("Proof"));

    await setState({ category: "torque", mode: "unc", torqueThreadMaterial: "steel" });
    const torqueSteel = getKpi("Torque");
    await setState({ category: "torque", mode: "unc", torqueThreadMaterial: "aluminum" });
    const torqueAl = getKpi("Torque");
    const torqueDiff = torqueSteel && torqueAl && torqueSteel.primary !== torqueAl.primary;
    add("torque differs for thread material", torqueDiff, `${torqueSteel?.primary || "?"} -> ${torqueAl?.primary || "?"}`);

    await setState({ category: "torque", mode: "metric-coarse", torqueGrade: "a2", torqueSize: "M10" });
    add("torque metric stainless proof present", kpiHasNumber("Proof"), kpiDetail("Proof"));
    await setState({ category: "torque", mode: "metric-coarse", torqueGrade: "ti", torqueSize: "M10" });
    add("torque metric titanium proof present", kpiHasNumber("Proof"), kpiDetail("Proof"));
    await setState({ category: "torque", mode: "metric-coarse", torqueGrade: "nylon", torqueSize: "M10" });
    add("torque metric nylon proof present", kpiHasNumber("Proof"), kpiDetail("Proof"));

    await setState({ category: "speeds", mode: "drill" });
    add("speeds hides quick drill input", hasQuickDrillInput() === false, "");
    add("speeds shows Cut speed KPI", !!getKpi("Cut speed"), "");
    add("speeds single table highlight", tableHighlightOk(), tableHighlightDetail());

    await setState({ category: "materials", mode: "list" });
    add("materials hides quick drill input", hasQuickDrillInput() === false, "");
    add("materials shows Density KPI", !!getKpi("Density"), "");
    add("materials single table highlight", tableHighlightOk(), tableHighlightDetail());

    await setState({ category: "convert", mode: "length" });
    add("convert hides quick drill input", hasQuickDrillInput() === false, "");
    add("convert shows From KPI", !!getKpi("From"), "");
    add("convert shows To KPI", !!getKpi("To"), "");
    add("convert single table highlight", tableHighlightOk(), tableHighlightDetail());
  };

  const tableHighlightOk = () => {
    const tables = Array.from(document.querySelectorAll(".panel table"));
    if (!tables.length) return true;
    return tables.every((table) => table.querySelectorAll("tbody tr.row-highlight").length <= 1);
  };

  const tableHighlightDetail = () => {
    const tables = Array.from(document.querySelectorAll(".panel table"));
    if (!tables.length) return "no tables";
    return tables.map((table, index) => `table${index + 1}=${table.querySelectorAll("tbody tr.row-highlight").length}`).join(" ");
  };

  const kpiHasNumber = (label) => {
    const k = getKpi(label);
    if (!k) return false;
    return /\d/.test(k.primary) || /\d/.test(k.secondary);
  };

  const kpiDetail = (label) => {
    const k = getKpi(label);
    if (!k) return "missing";
    return `${k.primary} | ${k.secondary}`;
  };

  const conversionsTest = async () => {
    const type = "length";
    await setState({ category: "convert", mode: type, convertValue: 1, convertFrom: "m", convertTo: "ft" });
    const units = app.CONVERSION_UNITS[type].map((u) => u.id);
    const fromRow = rowButtonsText(1);
    const toRow = rowButtonsText(2);
    add("convert length from buttons", units.every((u) => fromRow.includes(u)), `buttons=${fromRow.join(",")}`);
    add("convert length to buttons", units.every((u) => toRow.includes(u)), `buttons=${toRow.join(",")}`);

    const funcs = app.CONVERSION_FUNCS[type];
    const value = 1;
    const result = funcs["ft"].fromBase(funcs["m"].toBase(value));
    const prefer = app.UNIT_CONVERTERS["m"]?.toSI ? app.UNIT_PREF.imp : app.UNIT_PREF.si;
    const preferTo = app.UNIT_CONVERTERS["ft"]?.toSI ? app.UNIT_PREF.imp : app.UNIT_PREF.si;
    const expectedFrom = app.formatFromUnit(value, "m", prefer, 4, 4);
    const expectedTo = app.formatFromUnit(result, "ft", preferTo, 4, 4);
    const shownFrom = getKpi("From");
    const shownTo = getKpi("To");
    const fromOk = shownFrom && shownFrom.primary === expectedFrom.primary && shownFrom.secondary === expectedFrom.secondary;
    const toOk = shownTo && shownTo.primary === expectedTo.primary && shownTo.secondary === expectedTo.secondary;
    add("convert length m→ft From", fromOk, shownFrom ? `${shownFrom.primary} | ${shownFrom.secondary}` : "missing");
    add("convert length m→ft To", toOk, shownTo ? `${shownTo.primary} | ${shownTo.secondary}` : "missing");
  };

  const inputSpacingTest = async () => {
    await setState({ category: "convert", mode: "length" });
    const inputBlock = document.querySelector("#rows .row-tight .input-block");
    const rail = document.querySelector(".rail");
    if (!inputBlock || !rail) {
      add("spacing elements exist", false, "missing elements");
      return;
    }
    const inputRect = inputBlock.getBoundingClientRect();
    const railRect = rail.getBoundingClientRect();
    const gapBelow = Math.max(0, railRect.bottom - inputRect.bottom);

    let gapAbove = 0;
    const rows = Array.from(document.querySelectorAll("#rows .row"));
    if (rows.length >= 2) {
      const prev = rows[rows.length - 2].getBoundingClientRect();
      gapAbove = Math.max(0, inputRect.top - prev.bottom);
    }

    add("conversion input gap below <= 12px", gapBelow <= 12, `gapBelow=${gapBelow.toFixed(1)}px`);
    add("conversion input gap above <= 12px", gapAbove <= 12, `gapAbove=${gapAbove.toFixed(1)}px`);
  };

  const panelBottomTest = async () => {
    await setState({ category: "convert", mode: "length" });
    const panel = document.querySelector(".panel");
    const layout = document.querySelector(".layout");
    if (!panel) {
      add("panel exists", false, "not found");
      return;
    }
    if (!layout) {
      add("layout exists", false, "not found");
      return;
    }
    const panelRect = panel.getBoundingClientRect();
    const layoutRect = layout.getBoundingClientRect();
    const delta = Math.abs(panelRect.bottom - layoutRect.bottom);
    add("panel bottom at layout bottom (<= 4px)", delta <= 4, `delta=${delta.toFixed(1)}px`);
  };

  const panelTopTest = async () => {
    const cases = [
      { category: "drill", mode: "convert" },
      { category: "drill", mode: "tap" },
      { category: "drill", mode: "clearance" },
      { category: "torque", mode: "unc" },
      { category: "torque", mode: "metric-coarse" },
      { category: "speeds", mode: "drill" },
      { category: "materials", mode: "list" },
      { category: "convert", mode: "length" }
    ];
    for (const c of cases) {
      await setState(c);
      const panel = document.querySelector(".panel");
      const rail = document.querySelector(".rail");
      if (!panel || !rail) {
        add(`panel gap ${c.category}/${c.mode}`, false, "missing panel/rail");
        continue;
      }
      const panelRect = panel.getBoundingClientRect();
      const contentNodes = Array.from(rail.querySelectorAll(".row, .input-block"))
        .filter((node) => node.offsetParent !== null && node.getBoundingClientRect().height > 0);
      let contentBottom = rail.getBoundingClientRect().top;
      if (contentNodes.length) {
        contentBottom = Math.max(...contentNodes.map((node) => node.getBoundingClientRect().bottom));
      }
      const gapToContent = Math.max(0, panelRect.top - contentBottom);
      add(`panel gap ${c.category}/${c.mode} <= 10px`, gapToContent <= 10, `gap=${gapToContent.toFixed(1)}px`);
    }
  };

  await testsByCategory();
  await conversionsTest();
  await inputSpacingTest();
  await panelBottomTest();
  await panelTopTest();

  const passCount = results.filter((r) => r.pass).length;
  const failCount = results.length - passCount;
  summary.textContent = `Tests complete: ${passCount} passed, ${failCount} failed`;
})();
