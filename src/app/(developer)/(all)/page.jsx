import {
  getListPage,
  getSinglePage,
} from "@/lib/utils/helper/contentConverter";

import SeoData from "@/components/common/SeoData";
import DigitalMarketerHomeAbout from "@/components/about/DigitalMarketerHomeAbout";
import DigitalMarketerExperience from "@/components/experience/DigitalMarketerExperience";
import DigitalMarketerHero from "@/components/hero/DigitalMarketerHero";
import DigitalMarketerHomeService from "@/components/service/DigitalMarketerHomeService";
import DigitalMarketerSkill from "@/components/skill/DigitalMarketerSkill";
import DigitalMarketerTextSlider from "@/components/slider/DigitalMarketerTextSlider";
import DigitalMarketerTestimonial from "@/components/testimonial/DigitalMarketerTestimonial";
import DigitalMarketerTitle1 from "@/components/title/DigitalMarketerTitle1";
import DigitalMarketPortfolio from "@/components/portfolio/DigitalMarketPortfolio";
import DigitalMarketerAward from "@/components/award/DigitalMarketerAward";

export default function DigitalMarketerHome() {
  const hero = getListPage("/heros/dm-hero.md");
  const about = getListPage("/abouts/dm-about.md");
  const textSlider = getListPage("/sliders/dm-text-slider.md");
  const portfolio = getListPage("/portfolios/dm/_index.md");
  const portfolios = getSinglePage("/portfolios/dm");
  const service = getListPage("/services/dm/_index.md");
  const services = getSinglePage("/services/dm");
  const experience = getListPage("/experiences/dm-experience.md");
  const education = getListPage("/educations/dm-education.md");
  const skill = getListPage("/skills/dm-skill.md");
  const award = getListPage("/awards/dm-award.md");
  const testimonial = getListPage("/testimonials/dm-testimonial.md");
  const blog = getListPage("/blogs/dm/_index.md");
  const blogs = getSinglePage("/blogs/dm");
  return (
    <main>
      <SeoData
        title="Digital Marketer home"
        meta_title="Munish Kumar "
        description="Digital Marketer home description"
      />
      <DigitalMarketerHero hero={hero} />
      <DigitalMarketerHomeAbout about={about} />
      <DigitalMarketerTextSlider textSlider={textSlider} />
      <DigitalMarketPortfolio
        portfolio={portfolio}
        portfolios={portfolios}
        rootUrl="/digital-marketer"
      />
      <DigitalMarketerHomeService
        service={service}
        services={services.slice(0, 4)}
        rootUrl="/digital-marketer"
      />
      <section className="dm-experience-skill pt-100 pb-100">
        <div className="container">
          <DigitalMarketerTitle1
            title="My experience <br> & skills"
            mainClass="title-mb"
          />
          <div className="expmain_wrap">
            <DigitalMarketerExperience experience={experience} />
            <DigitalMarketerExperience experience={education} left={true} />
          </div>

          <div className="skill-award pt-120">
            <DigitalMarketerSkill skill={skill} />
            <DigitalMarketerAward award={award} />
          </div>
        </div>
      </section>
      <DigitalMarketerTestimonial testimonial={testimonial} />
    </main>
  );
}
