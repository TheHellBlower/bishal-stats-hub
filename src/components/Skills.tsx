import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "R", "SQL", "LaTeX", "HTML"],
      description: "Core programming languages for data analysis and statistical computing"
    },
    {
      title: "Frameworks & Libraries",
      icon: Brain,
      skills: ["TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "NLTK"],
      description: "Machine learning and data manipulation frameworks"
    },
    {
      title: "Data & Analytics",
      icon: BarChart,
      skills: ["Data Analysis", "Machine Learning", "Deep Learning", "NLP", "Statistical Modeling"],
      description: "Advanced analytical and modeling techniques"
    },
    {
      title: "Visualization & Tools",
      icon: Database,
      skills: ["Data Visualization", "R Shiny", "ggplot2", "Statistical Software", "Research Methods"],
      description: "Tools for data presentation and statistical analysis"
    }
  ];

  const expertiseAreas = [
    { name: "Predictive Modeling", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Statistical Analysis", level: 95 },
    { name: "Data Visualization", level: 85 },
    { name: "Deep Learning", level: 80 },
    { name: "Natural Language Processing", level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 racing-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-racing">
            <span className="racing-text">⚡ RACING SKILLS & TECH STACK</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🏁 High-performance skill set in statistics, data science, and machine learning 
            with turbocharged experience in modern frameworks and racing-speed tools.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="racing-card p-6 speed-stagger">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="outline" 
                    className="f1-badge text-white border-none hover:scale-105 transition-transform"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* F1 Performance Metrics */}
        <div className="racing-card p-8 racing-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-center uppercase tracking-wider">🏎️ PERFORMANCE DASHBOARD</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{area.name}</span>
                  <span className="text-sm text-muted-foreground">{area.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-racing-gradient h-3 rounded-full transition-all duration-1000 ease-out racing-pulse"
                    style={{ width: `${area.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;