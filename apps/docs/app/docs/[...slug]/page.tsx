import { OnThisPage } from "../../../components/on-this-page";
import fs from "fs";
import path from "path";
import { type Metadata } from "next";
import { Footer } from "../../../components/footer";

export const dynamicParams = false;

type Params = Promise<{ slug: string[] }>;

type DocPageMetadata = {
  title: string;
  description: string;
};

const processDirectory = (dir: string, relativePath: string): string[] => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results: string[] = [];

  for (const entry of entries) {
    const entryRelativePath = relativePath
      ? path.join(relativePath, entry.name)
      : entry.name;

    if (entry.isDirectory()) {
      const subdirResults = processDirectory(
        path.join(dir, entry.name),
        entryRelativePath,
      );
      results.push(...subdirResults);
    } else if (entry.name.endsWith(".mdx")) {
      results.push(entryRelativePath.replace(".mdx", ""));
    }
  }

  return results;
};

export const generateStaticParams = async () => {
  const docsDir = path.join(process.cwd(), "content", "docs");
  return processDirectory(docsDir, "").map((slug) => {
    return { slug: slug.split("/").filter(Boolean) };
  });
};

const getHeadings = (path: string, title: string) => {
  const content = fs.readFileSync(path, "utf-8");

  const headingLevelMap = {
    "# ": "h1",
    "## ": "h2",
    "### ": "h3",
  };

  const headings = content
    .split("\n")
    .filter(
      (line) =>
        line.startsWith("# ") ||
        line.startsWith("## ") ||
        line.startsWith("### "),
    )
    .map((line) => {
      const text = line
        .replace("### ", "")
        .replace("## ", "")
        .replace("# ", "")
        .trim();
      const level = Object.keys(headingLevelMap).find((key) =>
        line.startsWith(key),
      ) as keyof typeof headingLevelMap;
      const id = text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      return { id, text, level: headingLevelMap[level] };
    });

  headings.unshift({ text: title, id: "title", level: "h1" });
  return headings;
};

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const { slug } = await params;
  const { metadata }: { metadata: DocPageMetadata } = await import(
    `../../../content/docs/${slug.join("/")}.mdx`
  );

  return {
    title: `${metadata.title} - bone.so`,
    description: metadata.description,
  };
};

const DocumentationPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const {
    default: Post,
    metadata,
  }: { default: React.ComponentType; metadata: DocPageMetadata } = await import(
    `../../../content/docs/${slug.join("/")}.mdx`
  );

  const headings = getHeadings(
    path.join(process.cwd(), "content/docs/", `${slug.join("/")}.mdx`),
    metadata.title,
  );

  return (
    <div className="mx-auto flex w-full max-w-screen-lg min-w-0 gap-10 p-6 pb-0 max-xl:max-w-screen-md">
      <div className="w-full min-w-0">
        <article data-mdx-container className="min-h-[calc(100dvh-193px)]">
          <div>
            <h1 id="title" className="mb-2 text-2xl font-semibold md:text-3xl">
              {metadata.title}
            </h1>
            <p className="text-soft-foreground max-md:text-sm">
              {metadata.description}
            </p>
          </div>
          <Post />
        </article>
        <Footer />
      </div>
      <aside className="min-w-52 max-xl:hidden">
        <OnThisPage headings={headings} />
      </aside>
    </div>
  );
};

export default DocumentationPage;
