import {
  FolderGit2,
  FileText,
  Award,
  ArrowDown,
  LayoutDashboard,
  Globe,
} from "lucide-react";

function CTA() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-widest text-violet-400 font-semibold">
          Why DevVault?
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Stop Managing Your Career Across Multiple Platforms
        </h2>

        <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
          Keep your projects, resume, certificates, skills and portfolio
          together in one beautiful dashboard.
        </p>

      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-20">

        <div>

          <h3 className="text-2xl font-semibold mb-8">
            Without DevVault
          </h3>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FolderGit2 className="text-red-400"/>
              GitHub
            </div>

            <ArrowDown />

            <div className="flex items-center gap-4">
              <FileText className="text-red-400"/>
              Resume
            </div>

            <ArrowDown />

            <div className="flex items-center gap-4">
              <Award className="text-red-400"/>
              Certificates
            </div>

            <ArrowDown />


          </div>

        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-8">
            With DevVault
          </h3>

          <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 p-12">

            <LayoutDashboard
              size={70}
              className="mx-auto mb-8"
            />

            <h3 className="text-3xl font-bold">
              One Dashboard
            </h3>

            <p className="mt-6 text-lg">
              Manage everything from a single place and share one professional profile with recruiters.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;