"use client";

import { useForm } from "react-hook-form";
import { FaChevronRight } from "react-icons/fa6";
import { toast } from "sonner";

export default function Form1() {
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
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form1">
      <div className="formwrap pt-85">
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
          {errors.user_name && <p role="alert">{errors.user_name.message}</p>}
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
          {errors.user_email && <p role="alert">{errors.user_email.message}</p>}
        </div>
      </div>
      <div className="formwrap pt-85">
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
      </div>
      <div className="msg">
        <input
          type="text"
          placeholder="Messages*"
          {...register("user_message", {
            required: "Message is required",
          })}
        />
        {errors.user_message && (
          <p role="alert">{errors.user_message.message}</p>
        )}
      </div>
      <div className="hbd-submit-btn mt-40 contact-submit">
        <button
          type="submit"
          className="wc-btn-border btn-rollover-cross"
          area-label="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit Now
          <FaChevronRight />
        </button>
      </div>
    </form>
  );
}
