import Link from "next/link";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

export const socialShare1 = (item) => {
  switch (item.name) {
    case "Fb":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaFacebookF />
        </Link>
      );
    case "Tw":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaTwitter />
        </Link>
      );
    case "In":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaInstagram />
        </Link>
      );
    case "Db":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaDribbble />
        </Link>
      );
    case "Li":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaLinkedin />
        </Link>
      );
  }
};

export const socialShare2 = (item) => {
  switch (item.name) {
    case "Fb":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className="btn-hover-mask"
        >
          <span>
            <FaFacebookF />
          </span>
          facebook
        </Link>
      );
    case "Tw":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className="btn-hover-mask"
        >
          <span>
            <FaTwitter />
          </span>
          Twitter
        </Link>
      );
    case "In":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className="btn-hover-mask"
        >
          <span>
            <FaInstagram />
          </span>
          Instagram
        </Link>
      );
    case "Db":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className="btn-hover-mask"
        >
          <span>
            <FaDribbble />
          </span>
          Dribbble
        </Link>
      );
    case "Li":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className="btn-hover-mask"
        >
          <span>
            <FaLinkedin />
          </span>
          Linkedin
        </Link>
      );
  }
};

export const socialShare3 = (item) => {
  return (
    <Link href={item.link} target="_blank" key={item.link}>
      {item.name}
    </Link>
  );
};

export const socialShare4 = (item) => {
  switch (item.name) {
    case "Fb":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          Facebook
        </Link>
      );
    case "Tw":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          Twitter
        </Link>
      );
    case "In":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          Instagram
        </Link>
      );
    case "Db":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          Dribbble
        </Link>
      );
    case "Li":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          Linkedin
        </Link>
      );
  }
};

export const socialShare5 = (item) => {
  switch (item.name) {
    case "Fb":
      return (
        <>
          <Link href={item.link} target="_blank" key={item.link}>
            <FaFacebookF />
          </Link>
          <p>{item.value}</p>
        </>
      );
    case "Tw":
      return (
        <>
          <Link href={item.link} target="_blank" key={item.link}>
            <FaTwitter />
          </Link>
          <p>{item.value}</p>
        </>
      );
    case "In":
      return (
        <>
          <Link href={item.link} target="_blank" key={item.link}>
            <FaInstagram />
          </Link>
          <p>{item.value}</p>
        </>
      );
    case "Db":
      return (
        <>
          <Link href={item.link} target="_blank" key={item.link}>
            <FaDribbble />
          </Link>
          <p>{item.value}</p>
        </>
      );
    case "Li":
      return (
        <>
          <Link href={item.link} target="_blank" key={item.link}>
            <FaLinkedin />
          </Link>
          <p>{item.value}</p>
        </>
      );
  }
};
