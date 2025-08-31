import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Innobyte Services",
      period: "August 2025",
      type: "Internship",
      icon: TrendingUp,
      description: "Led comprehensive data analysis projects with significant impact on business decision-making.",
      achievements: [
        "Performed advanced data cleaning and exploratory data analysis on large datasets",
        "Developed XGBoost classifier achieving 89% accuracy for classification tasks",
        "Built predictive models with 95% precision using advanced ML techniques",
        "Delivered actionable recommendations based on statistical insights",
        "Collaborated with cross-functional teams to implement data-driven solutions"
      ],
      skills: ["Python", "XGBoost", "Data Cleaning", "EDA", "Predictive Modeling", "Statistical Analysis"]
    },
    {
      title: "Student Guide",
      company: "IIT Kanpur",
      period: "July 2025 – Present",
      type: "Leadership Role",
      icon: Users,
      description: "Mentoring and guiding fellow students while coordinating orientation programs.",
      achievements: [
        "Provided comprehensive mentorship to new students during transition",
        "Coordinated orientation programs for incoming M.Sc. Statistics cohort",
        "Developed guidance materials and resources for academic success",
        "Facilitated peer learning sessions and study groups",
        "Built strong communication and leadership skills through student interaction"
      ],
      skills: ["Leadership", "Communication", "Mentoring", "Program Coordination", "Team Building"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience in data analysis, machine learning implementation, 
            and student leadership at premier institutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="project-card p-8 stagger-animation">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <experience.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <p className="text-primary font-medium">{experience.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {experience.period}
                    </Badge>
                    <div>
                      <Badge variant="secondary">{experience.type}</Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Key Achievements</h4>
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="skill-badge text-white border-none"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;