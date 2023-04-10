import {
  createCanvas,
  EmulatedCanvas2D,
  loadImage,
} from "https://deno.land/x/canvas@v1.4.1/mod.ts";

interface Text {
  x: number;
  y: number;
  maxWidth: number;
  content: string;
}

const __dirname = new URL(".", import.meta.url).pathname;

const bg = await loadImage(`${__dirname}/cert_base.webp`);

const fontFam = await Deno.readFile(
  `${__dirname}/Courgette-Regular.ttf`,
);

const fontTest = await Deno.readFile(
  `${__dirname}/Akrobat-Black.otf`,
);

export default function create(data: Text[]): string {
  const canvas = createCanvas(3511, 2483);
  const ctx = canvas.getContext("2d");

  ctx.moveTo(0, 0);

  ctx.drawImage(bg, 0, 0);

  canvas.loadFont(fontFam, {
    family: "pacifico",
  });
  canvas.loadFont(fontTest, {
    family: "akrobat",
  });

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.lineWidth = 2;
  for (const text of data) {
    const fs = applyText(
      canvas,
      `${text.content}`,
      text.maxWidth,
    );
    ctx.font = `${fs}px akrobat`;

    const coffset = ctx.measureText(`${text.content}`).width / 2;

    ctx.font = `${fs}px pacifico`;

    ctx.shadowBlur = 0;
    ctx.fillStyle = "#000000";

    ctx.fillText(
      `${text.content}`,
      text.x - coffset,
      text.y,
    );
  }

  return canvas.toDataURL();
}

function applyText(
  canvas: EmulatedCanvas2D,
  text: string,
  maxWidth = 2240,
  baseSize = 78,
): number {
  const ctx = canvas.getContext("2d");

  let fontSize = baseSize + 1;

  do {
    fontSize -= 1;
    ctx.font = `${(fontSize)}px akrobat`;
    console.log(text, fontSize, ctx.measureText(text).width);
  } while (ctx.measureText(text).width > maxWidth);

  return fontSize;
}
