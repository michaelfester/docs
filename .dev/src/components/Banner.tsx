interface Props {
  text: string;
  accentColor: string;
  backgroundColor: string;
  illustration: string;
}

export function Banner(props: Props) {
  const { accentColor, backgroundColor, illustration, text } = props;

  return (
    <div
      style={{ backgroundColor }}
      className="relative h-[114px] rounded-3xl px-8"
    >
      <div className="flex items-center justify-center h-full sm:hidden">
        <h1 style={{ color: accentColor }} className="mb-0 text-center">
          {text}
        </h1>
      </div>

      <div className="hidden sm:flex">
        <h1 style={{ color: accentColor }} className="self-center mb-0">
          {text}
        </h1>

        <div className="flex-1" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="my-0 " src={illustration} alt="" />
      </div>
    </div>
  );
}
