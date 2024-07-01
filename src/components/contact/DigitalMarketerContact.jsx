/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import siteConfig from "@/config/siteConfig.json";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FaArrowRight } from "react-icons/fa6";

import { socialShare1 } from "@/lib/utils/helper/social";
import hasTextMoveAnim from "@/lib/utils/animation/hasTextMoveAnim";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

export default function DigitalMarketerContact() {
  const { social, footer_info } = siteConfig;
  const { mobile, email } = footer_info;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast("Message send successfully");
      reset();
    }
    if (!response.ok) {
      toast("Error sending message");
    }
  };

  const textMoveAnim1 = useRef("");
  const textMoveAnim2 = useRef("");
  const fadeAnim1 = useRef("");
  const fadeAnim2 = useRef("");
  const fadeAnim3 = useRef("");

  useEffect(() => {
    hasTextMoveAnim(textMoveAnim1.current);
    hasTextMoveAnim(textMoveAnim2.current);
    hasFadeAnim(fadeAnim1.current);
    hasFadeAnim(fadeAnim2.current);
    hasFadeAnim(fadeAnim3.current);
  }, []);

  return (
    <section className="dm-contact-section">
      <div className="container">
        <div className="wrapper">
          <div className="item">
            <h2 className="title" ref={textMoveAnim1}>
              Let’s <br /> Get in Touch
            </h2>
            <div className="text" ref={textMoveAnim2}>
              <p>
                We're excited to hear from you and let's start something special
                together. call us for any inquiry.
              </p>
            </div>
            <ul className="info" ref={fadeAnim1}>
              <li>
                <span>Email</span>
                <Link href={`mailto:${email}`}>{email}</Link>
              </li>
              <li>
                <span>Phone:</span>
                <Link href={`tel:${mobile}`}>{mobile}</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <div className="form-wrap">
              {social && social.length && (
                <div
                  className="social-wrap"
                  ref={fadeAnim2}
                  data-fade-from="left"
                >
                  <ul className="social-icons">
                    {social.map((item, i) => (
                      <li key={`hero_social_link-${i}`}>
                        {socialShare1(item)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="form" ref={fadeAnim3} data-fade-from="left">
                <h2 className="form-title">Send a message</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="formfield">
                    <input
                      type="text"
                      placeholder="Name*"
                      {...register("user_name", {
                        required: "Name is required",
                        maxLength: {
                          value: 30,
                          message: "Maximum length 30",
                        },
                      })}
                    />
                    {errors.user_name && (
                      <p role="alert">{errors.user_name.message}</p>
                    )}
                  </div>
                  <div className="formfield">
                    <input
                      type="email"
                      placeholder="Email*"
                      {...register("user_email", {
                        required: "Email address is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.user_email && (
                      <p role="alert">{errors.user_email.message}</p>
                    )}
                  </div>
                  <div className="formfield">
                    <input
                      type="number"
                      placeholder="Phone"
                      {...register("user_mobile", {
                        required: "Mobile number is required",
                      })}
                    />
                    {errors.user_mobile && (
                      <p role="alert">{errors.user_mobile.message}</p>
                    )}
                  </div>
                  <div className="formfield">
                    <input
                      type="text"
                      placeholder="Subject*"
                      {...register("user_subject", {
                        required: "Subject is required",
                        maxLength: {
                          value: 30,
                          message: "Maximum length 30",
                        },
                      })}
                    />
                    {errors.user_subject && (
                      <p role="alert">{errors.user_subject.message}</p>
                    )}
                  </div>
                  <div className="formfield mb-0">
                    <textarea
                      placeholder="Messages*"
                      {...register("user_message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.user_message && (
                      <p role="alert">{errors.user_message.message}</p>
                    )}
                  </div>
                  <div className="btn-wrap">
                    <button
                      type="submit"
                      className="wc-btn-primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Submit <FaArrowRight />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
