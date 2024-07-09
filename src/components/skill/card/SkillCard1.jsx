import Image from "next/image";

import { delayFunction } from "@/lib/utils/helper/delayFunction";

export default function SkillCard1({ skill, i = 0 }) {
  return (
    <div
      className="skill-card-1 has_fade_anim"
      data-fade-from="left"
      data-delay={delayFunction(i + 1)}
    >
      <Image
        width={48}
        height={48}
        style={{ width: "auto" }}
        priority
        src={skill.image}
        alt="Skill Icon"
      />
      <h4 className="percentage wc-counter">{skill.percentage}%</h4>
      <h5 className="title">{skill.name}</h5>
    </div>
  );
}
