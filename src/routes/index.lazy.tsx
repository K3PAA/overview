import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

type FormValues = {
  userdata: string;
};

function Index() {
  const navigate = useNavigate();
  const { register, control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      userdata: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    navigate({ to: `/users/${data.userdata}` });
  };

  return (
    <main className="container mx-auto px-2">
      <img
        src="/over_hero_desktop.png"
        alt=""
        className="absolute inset-0 z-[-100] hidden h-screen w-full object-cover object-right brightness-[0.7] xl:block"
      />

      <img
        src="/over_hero_tablet.png"
        alt=""
        className="absolute inset-0 z-[-100] hidden h-screen w-full object-cover object-center brightness-[0.7] md:block xl:hidden"
      />
      <img
        src="/over_hero_mobile.png"
        alt=""
        className="absolute inset-0 z-[-100] h-screen w-full object-cover object-center brightness-[0.7] md:hidden"
      />

      <section className="mt-2">
        <h1 className="mx-auto w-fit rounded-md px-4 py-2 text-center text-5xl font-bold uppercase">
          Check your <span className="text-secondary-400">stats</span>
        </h1>

        <div className="mx-auto mt-4 w-full max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="" noValidate>
            <label
              htmlFor="userdata"
              className={`${formState.errors.userdata ? "text-red-500" : "text-slate-700"} rounded bg-white p-2 text-xl font-bold`}
            >
              {formState.errors.userdata
                ? formState.errors.userdata.message
                : "Enter your name and hash"}
            </label>
            <div className="mt-4 flex">
              <input
                type="text"
                id="userdata"
                className="w-full rounded p-4 text-slate-800"
                placeholder="Example-2217"
                {...register("userdata", {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                  pattern: {
                    value: /^[A-Za-z]+-[0-9]+$/,
                    message: "Required Pattern: Username-1234",
                  },
                })}
              />
              <button className="btn border-0 bg-primary-400 px-8 uppercase hover:bg-primary-700">
                search
              </button>
            </div>
          </form>
          <DevTool control={control} />
        </div>

        <section className="mx-auto mt-14 w-full max-w-2xl">
          <h2 className="w-fit rounded bg-white p-2 text-3xl font-bold text-slate-700">
            Last Checks
          </h2>
        </section>
      </section>
    </main>
  );
}
