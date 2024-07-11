import {
  getListPage,
  getSinglePage,
} from "@/lib/utils/helper/contentConverter";

import SeoData from "@/components/common/SeoData";
import DeveloperBlog from "@/components/blog/DeveloperBlog";

export default function DevBlog() {
  const blog = getListPage("/blogs/dev/_index.md");
  const blogs = getSinglePage("/blogs/dev");

  const { meta_title, meta_description } = blog.frontmatter.meta || {};
  return (
    <main>
      <SeoData
        title={blog.frontmatter.title || "Blog page"}
        meta_title={meta_title || "Blog page"}
        description={meta_description || "Blog page description"}
      />
      <DeveloperBlog
        blogs={blogs}
        customPaddingClass={"pt-80"}
        rootUrl="/developer"
      />
    </main>
  );
}
