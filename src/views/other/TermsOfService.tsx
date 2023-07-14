export function TermsOfService(props: { hideTextOnMobile?: boolean }) {
  return (
    <div className="flex items-center space-x-2 px-4 py-2 text-bink-600">
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
