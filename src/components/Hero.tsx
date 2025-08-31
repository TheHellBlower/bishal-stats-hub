import { Button } from '@/components/ui/button';
import { Github, Mail, ExternalLink } from 'lucide-react';
import bishalProfile from '@/assets/bishal-profile.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Data Science Background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="hero-card rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 section-fade-in">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  <span className="gradient-text">Bishal Paul</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium mb-6">
                  Statistician & Data Scientist | IIT Kanpur
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate about applying statistics, data science, and machine learning 
                  to solve real-world problems. M.Sc. Statistics student at IIT Kanpur with 
                  expertise in predictive modeling, NLP, and deep learning.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="skill-badge text-white hover:shadow-glow"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Get in Touch
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <a 
                  href="https://github.com/TheHellBlower" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="mailto:bishalpaul423t@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end stagger-animation">
              <div className="relative">
                <div className="absolute inset-0 bg-hero-gradient rounded-full blur-2xl opacity-30 scale-110"></div>
                <img 
                  src={bishalProfile} 
                  alt="Bishal Paul - Professional Portrait" 
                  className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white shadow-strong"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;