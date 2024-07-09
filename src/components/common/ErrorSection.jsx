"use client";

import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";

export default function ErrorSection() {
  const router = useRouter();
  return (
    <>
      <section className="error-hero-section">
        <div className="area pt-150 pb-150">
          <div className="container">
            <div className="content">
              <h2 className="title mb-10">404</h2>
              <h3 className="sub-title mb-40">Ops! Page not found</h3>
              <div className="mb-50">
                <p>
                  The page you are looking for was moved, removed, renamed or
                  never existed.
                </p>
              </div>
              <div>
                <button
                  onClick={() => router.back()}
                  className="wc-btn-primary btn-hover-cross"
                >
                  Go Back <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
