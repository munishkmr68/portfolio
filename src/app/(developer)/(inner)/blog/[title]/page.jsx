import { notFound } from "next/navigation";
import { getSinglePage } from "@/lib/utils/helper/contentConverter";

import SeoData from "@/components/common/SeoData";
import BlogCard2 from "@/components/blog/card/BlogCard2";
import PDBlogDetails from "@/components/blog/details/PDBlogDetails";
import Related1 from "@/components/related/Related1";

export const generateStaticParams = () => {
  const blogs = getSinglePage("blogs/dev");
  const paths = blogs.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

export default function DevBlogDetails({ params }) {
  const blogs = getSinglePage("blogs/dev");
  if (!(blogs && blogs.length)) {
    notFound();
  }
  const blog = blogs.find((item) => item.slug === params.title);
  const related = blogs.filter((item) => item.slug !== params.title);

  if (!(blog && blog.frontmatter)) {
    notFound();
  }

  const { meta_title, meta_description } = blog.frontmatter.meta || {};
  return (
    <>
      <SeoData
        title={blog.frontmatter.title || "Blog details page"}
        meta_title={meta_title || "Blog details page"}
        description={meta_description || "Blog details page description"}
      />
      <PDBlogDetails details={blog} customPaddingClass={"pt-130 pb-130"} />
      {related && related.length && (
        <Related1 section_name="Blog" title="Related Articles">
          <div className="dev-blog-section">
            <div className="grid">
              {related.slice(0, 4).map((item, i) => (
                <BlogCard2
                  key={`related_blog-card-${i}`}
                  smallItem={true}
                  blog={item}
                  rootUrl="/developer"
                />
              ))}
            </div>
          </div>
        </Related1>
      )}
    </>
  );
}
