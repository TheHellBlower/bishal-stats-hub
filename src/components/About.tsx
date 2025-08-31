import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "M.Sc. Statistics",
      institution: "IIT Kanpur",
      year: "2024 – Present",
      description: "Pursuing advanced studies in statistical methods and applications"
    },
    {
      degree: "B.Sc. (Hons) Statistics",
      institution: "University of Calcutta",
      year: "2020 – 2023",
      description: "Specialized in statistical theory and mathematical foundations"
    },
    {
      degree: "Higher Secondary (94.6%)",
      institution: "Jadavpur Vidyapith",
      year: "2020",
      description: "Excellence in mathematics and sciences"
    },
    {
      degree: "Secondary (89.29%)",
      institution: "Jadavpur Vidyapith",
      year: "2018",
      description: "Strong foundation in core subjects"
    }
  ];

  const achievements = [
    { title: "IIT JAM AIR 54", description: "Joint Admission Test for M.Sc." },
    { title: "ISI M.Stat AIR 37", description: "Indian Statistical Institute entrance" },
    { title: "DST-INSPIRE Scholar", description: "Department of Science & Technology scholarship" }
  ];

  const memberships = [
    "Royal Statistical Society",
    "Cricket Team Representative"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate statistician and data scientist pursuing advanced studies at IIT Kanpur, 
            with a strong foundation in mathematical statistics and machine learning applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8 stagger-animation">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="project-card p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {edu.year}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements & Memberships */}
          <div className="space-y-8 stagger-animation">
            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Scholastic Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="project-card p-6">
                    <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Memberships */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Memberships & Activities</h3>
              </div>

              <Card className="project-card p-6">
                <div className="space-y-3">
                  {memberships.map((membership, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{membership}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;