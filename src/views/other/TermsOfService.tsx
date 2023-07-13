export function TermsOfService(props: {
  clickable?: boolean;
  hideTextOnMobile?: boolean;
}) {
  return (
    <div
      className={`flex items-center space-x-2 rounded-full bg-bink-300 bg-opacity-50 px-4 py-2 text-bink-600 ${
        props.clickable
          ? "transition-[transform,background-color] hover:scale-105 hover:bg-bink-400 hover:text-bink-700 active:scale-95"
          : ""
      }`}
    >
      {/* <Icon className="text-xl" icon={Icons.MOVIE_WEB} /> */}
      {/* <img alt="logo" style={{ width: 40 }} src={String(logo)} /> */}
      <span
        className={[
          "font-semibold text-white",
          props.hideTextOnMobile ? "hidden sm:block" : "",
        ].join(" ")}
      >
        <a
          href="/terms-of-service.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>
      </span>
    </div>
  );
}
