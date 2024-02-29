import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

type OGImageOptions = Awaited<ReturnType<Parameters<typeof OGImageRoute>[0]["getImageOptions"]>>;
// Get all entries from the `docs` content collection.
const entries = await getCollection("docs");

// Map the entry array to an object with the page ID as key and the
// frontmatter data as value.
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",

  pages,

  getImageOptions: async (_, { data }: (typeof pages)[string]): Promise<OGImageOptions> => {
    return {
      title: wrapText(data.title, 18),
      description: wrapText(data.description ?? "", 30),
      border: { width: 32, side: "inline-start" },
      padding: 60,
      logo: {
        path: "./src/pages/open-graph/_images/docs-logo.png",
        size: [300],
      },
      bgImage: {
        path: `./src/pages/open-graph/_images/background-ltr.png`,
      },
      font: {
        title: {
          size: 72,
          lineHeight: 1.1,
          families: ["Obviously", "Inter", "Noto Sans", "Noto Sans Arabic", "Noto Sans SC", "Noto Sans TC", "Noto Sans JP", "Noto Sans KR"],
          weight: "Medium",
          color: [255, 255, 255],
        },
        description: {
          size: 42,
          lineHeight: 1.1,
          families: ["Inter", "Noto Sans", "Noto Sans Arabic", "Noto Sans SC", "Noto Sans TC", "Noto Sans JP", "Noto Sans KR"],
          weight: "Normal",
          color: [191, 193, 201],
        },
      },
      fonts: [
        "./src/pages/open-graph/_fonts/inter/inter-400-normal.ttf",
        "./src/pages/open-graph/_fonts/inter/inter-500-normal.ttf",

        "./src/pages/open-graph/_fonts/noto-sans/noto-400-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/noto-500-normal.ttf",

        "./src/pages/open-graph/_fonts/noto-sans/chinese-simplified-400-normal.otf",
        "./src/pages/open-graph/_fonts/noto-sans/chinese-simplified-500-normal.ttf",

        "./src/pages/open-graph/_fonts/noto-sans/chinese-traditional-400-normal.otf",
        "./src/pages/open-graph/_fonts/noto-sans/chinese-traditional-500-normal.ttf",

        "./src/pages/open-graph/_fonts/noto-sans/japanese-400-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/japanese-500-normal.ttf",

        "./src/pages/open-graph/_fonts/noto-sans/arabic-400-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/arabic-500-normal.ttf",

        "./src/pages/open-graph/_fonts/noto-sans/korean-400-normal.otf",
        "./src/pages/open-graph/_fonts/noto-sans/korean-500-normal.ttf",
      ].filter((val): val is string => typeof val === "string"),
    };
  },
});

function wrapText(text: string, maxWidth: number): string {
  const words: string[] = text.split(" ");
  let currentLine: string = "";
  let formattedText: string = "";

  words.forEach((word: string) => {
    if ((currentLine + word).length > maxWidth) {
      formattedText += currentLine.trim() + "\n";
      currentLine = word + " ";
    } else {
      currentLine += word + " ";
    }
  });

  return formattedText + currentLine.trim();
}

