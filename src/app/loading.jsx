export default function Loading() {
  return (
    <div id="preloader">
      <div id="container" className="container-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text="I" className="characters">
              I
            </span>
            <span data-text="N" className="characters">
              N
            </span>
            <span data-text="F" className="characters">
              F
            </span>
            <span data-text="O" className="characters">
              O
            </span>
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
}
