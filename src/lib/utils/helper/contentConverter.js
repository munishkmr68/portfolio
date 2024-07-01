import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootPath = "src/content";

// Helper function to read file content
const readFile = (filePath) => {
  return fs.readFileSync(filePath, "utf-8");
};

// Helper function to parse frontmatter
const parseFrontmatter = (frontmatter) => {
  const frontmatterString = JSON.stringify(frontmatter);
  return JSON.parse(frontmatterString);
};

// get list page data, ex: components/hero.md
export const getListPage = (filePath) => {
  const pageDataPath = path.join(rootPath, filePath);

  if (!fs.existsSync(pageDataPath)) {
    return {
      notFound: true,
      frontmatter: {},
      content: "",
    };
  }

  const pageData = readFile(pageDataPath);
  const { content, data: frontmatter } = matter(pageData);

  return {
    notFound: false,
    frontmatter: parseFrontmatter(frontmatter),
    content,
  };
};

// get all single pages, ex: blogs/post.md
export const getSinglePage = (folder) => {
  const folderPath = path.join(rootPath, folder);

  if (!fs.existsSync(folderPath) || !fs.lstatSync(folderPath).isDirectory()) {
    return [
      {
        notFound: true,
        frontmatter: {},
        slug: "",
        content: "",
      },
    ];
  }

  const filesPath = fs.readdirSync(folderPath);
  const sanitizeFiles = filesPath.filter((file) => file.endsWith(".md"));
  const filterSingleFiles = sanitizeFiles.filter((file) =>
    file.match(/^(?!_)/)
  );

  const singlePages = filterSingleFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(folderPath, filename);
    const pageData = readFile(filePath);
    const { content, data: frontmatter } = matter(pageData);
    const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;

    return {
      notFound: false,
      frontmatter: parseFrontmatter(frontmatter),
      slug: url,
      content,
    };
  });

  const publishedPages = singlePages.filter(
    (page) => !page.frontmatter.draft && page
  );

  const dateFilter = publishedPages.filter(
    (page) => new Date(page.frontmatter.date || new Date()) <= new Date()
  );

  const filterByDate = dateFilter.sort(
    (page, page2) => new Date(page2.frontmatter.date || new Date()) - new Date(page.frontmatter.date || new Date())
  );

  return filterByDate;
};
