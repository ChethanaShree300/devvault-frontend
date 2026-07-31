import {
  FolderKanban,
  FileText,
  Award,
  BarChart3,
  Brain,
  UserRound,
} from "lucide-react";

const features = [
  {
    icon: FolderKanban,
    title: "Projects",
    description: "Showcase your development projects with descriptions, technologies, and GitHub links.",
  },
  {
    icon: Brain,
    title: "Skills",
    description: "Maintain an organized list of technical and soft skills.",
  },
  {
    icon: FileText,
    title: "Resume",
    description: "Upload and manage the latest version of your resume.",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Store certifications from courses, hackathons, and competitions.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track profile views, resume downloads, and project engagement.",
  },
  {
    icon: UserRound,
    title: "Portfolio",
    description: "Create a professional portfolio page that recruiters can easily access.",
  },
];

function Features() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-violet-400 uppercase tracking-widest font-semibold">
            Features
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Manage every aspect of your developer journey from one beautiful dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
              >
                <Icon
                  className="text-violet-500 mb-6"
                  size={40}
                />

                <h3 className="text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Features;