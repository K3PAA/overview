import { UserSummary } from "../types/player";

type BannerProps = {
  summary: UserSummary;
};

const Banner = ({ summary }: BannerProps) => {
  return (
    <div className="relative mt-8 flex min-h-[10rem] items-center gap-4 rounded-md border-2">
      <div className="absolute left-0 top-1/2 z-[100] flex w-full -translate-y-1/2 gap-4 px-2 sm:px-10">
        <img
          src={summary.avatar}
          alt="avatar"
          className="h-20 w-20 rounded-md border-2 sm:h-28 sm:w-28"
        />
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold sm:text-3xl">
              {summary.username}
            </h1>
            <div className="flex">
              <img
                src={summary.endorsement.frame}
                alt="endorsement frame"
                className="w-14 rounded-xl bg-white"
              />
            </div>
          </div>

          <p className="text-xl">{summary.title}</p>
        </div>
      </div>

      <img
        src={summary.namecard}
        alt="background"
        className="min-h-[10rem] rounded-md object-cover shadow-md brightness-[0.85]"
      />
    </div>
  );
};

export default Banner;
