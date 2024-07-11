import { getListPage } from "@/lib/utils/helper/contentConverter";

import SeoData from "@/components/common/SeoData";
import DeveloperAbout from "@/components/about/DeveloperAbout";
import DeveloperAward from "@/components/award/DeveloperAward";
import DeveloperBrand2 from "@/components/brand/DeveloperBrand2";
import DeveloperExperience from "@/components/experience/DeveloperExperience";
import Separator from "@/components/separator/Separator";
import DeveloperSkill2 from "@/components/skill/DeveloperSkill2";

export default function DevAbout() {
  const about = getListPage("/abouts/dev-about.md");
  const experience = getListPage("/experiences/dev-experience.md");
  const award = getListPage("/awards/dev-award.md");
  const skill = getListPage("/skills/dev-skill.md");
  const brand = getListPage("/brands/pd-brand.md");

  const { meta_title, meta_description } = about.frontmatter.meta || {};
  return (
    <main>
      <SeoData
        title={about.frontmatter.title || "About page"}
        meta_title={meta_title || "About page"}
        description={meta_description || "About page description"}
      />
      <DeveloperAbout about={about} />
      <Separator customClass="mb-110" />
      <DeveloperExperience
        data={experience}
        experience={experience.frontmatter.experience_data}
        education={experience.frontmatter.education_data}
      />
      <DeveloperAward award={award} />
      <DeveloperSkill2 skill={skill} />
      <DeveloperBrand2 brand={brand} />
    </main>
  );
}
