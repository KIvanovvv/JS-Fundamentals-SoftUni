function browserHistory(inputObj, commands) {
  console.log(inputObj[`Browser Name`]);
  commands.forEach((el) => {
    let commandLine = el.split(" ");
    let command = commandLine[0];
    let site = commandLine[1];
    switch (command) {
      case `Close`:
        if (inputObj[`Open Tabs`].includes(site)) {
          let index = inputObj[`Open Tabs`].indexOf(site);
          inputObj[`Open Tabs`].splice(index, 1);
          inputObj[`Recently Closed`].push(site);
          inputObj[`Browser Logs`].push(commandLine.join(" "));
        }
        break;
      case `Open`:
        inputObj[`Open Tabs`].push(site);
        inputObj[`Browser Logs`].push(commandLine.join(" "));
        break;
      case `Clear`:
        inputObj[`Open Tabs`] = [];
        inputObj[`Recently Closed`] = [];
        inputObj[`Browser Logs`] = [];
        break;
    }
  });
  console.log(`Open Tabs: ${inputObj[`Open Tabs`].join(", ")}`);
  console.log(`Recently Closed: ${inputObj[`Recently Closed`].join(", ")}`);
  console.log(`Browser Logs: ${inputObj[`Browser Logs`].join(", ")}`);
}
browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  [
    "Close Facebook",
    "Open StackOverFlow",
    "Clear History and Cache",
    "Open Google",
  ]
);
