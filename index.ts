import pptxgen from "pptxgenjs";
import { testEntry } from "./test-data";

// 1. Create a Presentation
let pres = new pptxgen();

// 2. Add a Slide to the presentation
let slide = pres.addSlide();

// 3. Add 1+ objects (Tables, Shapes, etc.) to the Slide
slide.addText("Hello World from PptxGenJS...", {
  x: 1.5,
  y: 1.5,
  color: "363636",
  fill: { color: "F1F1F1" },
  align: pres.AlignH.center,
});

testEntry.fields.ingredients.forEach((section) => {
  slide = pres.addSlide();

  slide.addText(section.name, {
    x: 1,
    y: 1,
    color: "363636",
    fill: { color: "F1F1F1" },
    align: pres.AlignH.center,
  });

  slide.addTable(
    section.values.map(({ name, amount }) => [
      { text: name },
      { text: amount },
    ]),
    { y: 110 }
  );
});

// 4. Save the Presentation
pres.writeFile({ fileName: "Sample Presentation.pptx" });
