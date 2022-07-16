function extractFile(text) {
  let textArr = text.split("\\");
  let file = textArr.pop().split(".");
  let extension = file.pop();
  let fileName = file.join(".");
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");
