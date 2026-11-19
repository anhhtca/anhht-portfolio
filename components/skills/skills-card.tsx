import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

const categoryBadgeStyles: Record<string, string> = {
  "Frontend Development":
    "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  "Backend Development":
    "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
  Databases:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  "AI Engineering":
    "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  "Infrastructure & DevOps":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  "Engineering Practices":
    "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
};

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => {
        const iconStyle =
          (skill.category && categoryBadgeStyles[skill.category]) ||
          "bg-secondary text-secondary-foreground";

        return (
          <div
            key={skill.name}
            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card-hover"
          >
            <div className="flex items-center justify-between gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconStyle}`}
              >
                <skill.icon size={24} />
              </div>
              {skill.category ? (
                <span className="font-mono text-[11px] font-medium text-muted-foreground">
                  {skill.category}
                </span>
              ) : null}
            </div>

            <div className="mt-5 space-y-1.5">
              <h3 className="text-base font-bold tracking-tight text-foreground">
                {skill.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
