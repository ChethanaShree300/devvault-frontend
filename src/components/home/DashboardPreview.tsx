import {
  FolderKanban,
  Brain,
  Award,
  Eye,
} from "lucide-react";

function DashboardPreview() {
  return (
    <section className="py-24">

      <div className="text-center mb-16">
        <p className="uppercase tracking-widest text-violet-400 font-semibold">
          Inside DevVault
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Your Developer Dashboard
        </h2>

        <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
          Everything you need to manage your professional profile in one place.
        </p>
      </div>

      <div className="max-w-6xl mx-auto rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="flex justify-between items-center border-b border-slate-800 px-8 py-6">

          <div>
            <h3 className="text-2xl font-bold">
              Welcome Back 👋
            </h3>

            <p className="text-slate-400">
              Here's an overview of your profile.
            </p>
          </div>

          <div className="h-12 w-12 rounded-full bg-violet-600 flex items-center justify-center font-bold">
            C
          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6 p-8">

          <div className="rounded-xl bg-slate-800 p-6">
            <FolderKanban className="text-violet-400 mb-4" />
            <p className="text-slate-400">Projects</p>
            <h3 className="text-3xl font-bold mt-2">12</h3>
          </div>

          <div className="rounded-xl bg-slate-800 p-6">
            <Brain className="text-violet-400 mb-4" />
            <p className="text-slate-400">Skills</p>
            <h3 className="text-3xl font-bold mt-2">18</h3>
          </div>

          <div className="rounded-xl bg-slate-800 p-6">
            <Award className="text-violet-400 mb-4" />
            <p className="text-slate-400">Certificates</p>
            <h3 className="text-3xl font-bold mt-2">7</h3>
          </div>

          <div className="rounded-xl bg-slate-800 p-6">
            <Eye className="text-violet-400 mb-4" />
            <p className="text-slate-400">Profile Views</p>
            <h3 className="text-3xl font-bold mt-2">324</h3>
          </div>

        </div>

        {/* Recent Projects */}

        <div className="border-t border-slate-800 p-8">

          <h3 className="text-xl font-semibold mb-6">
            Recent Projects
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between rounded-lg bg-slate-800 px-6 py-4">
              <span>DevVault</span>
              <span className="text-violet-400">React</span>
            </div>

            <div className="flex justify-between rounded-lg bg-slate-800 px-6 py-4">
              <span>Hospital Management System</span>
              <span className="text-violet-400">MERN</span>
            </div>

            <div className="flex justify-between rounded-lg bg-slate-800 px-6 py-4">
              <span>Marine Pollution Detection</span>
              <span className="text-violet-400">Python</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;