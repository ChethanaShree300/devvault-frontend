import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24">

      <p className="text-violet-400 font-semibold tracking-widest uppercase">
        Developer Career Platform
      </p>

      <h1 className="mt-6 text-6xl font-extrabold leading-tight">
        Build.
        <br />
        Manage.
        <br />
        Showcase.
      </h1>

      <p className="mt-8 max-w-2xl text-lg text-slate-400">
        DevVault helps developers manage projects, skills, resumes,
        certificates and portfolios from one professional dashboard.
      </p>

      <div className="mt-10 flex gap-6">

        <Link
          to="/register"
          className="rounded-lg bg-violet-600 px-8 py-3 font-semibold hover:bg-violet-700 transition"
        >
          Get Started
        </Link>

        <Link
          to="/projects"
          className="rounded-lg border border-slate-600 px-8 py-3 hover:bg-slate-800 transition"
        >
          View Projects
        </Link>

      </div>

    </section>
  );
}

export default Hero;