import { Button } from '@/components/ui/button';
import { Github, Mail, ExternalLink, Zap } from 'lucide-react';
import bishalProfile from '@/assets/bishal-f1-profile.jpg';
import heroBg from '@/assets/f1-hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* F1 Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Formula 1 Racing Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-racing-gradient opacity-20"></div>
        <div className="absolute inset-0 checkered-bg"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="racing-card rounded-2xl p-8 lg:p-12 carbon-texture">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Racing Content */}
            <div className="space-y-8 racing-fade-in">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 font-racing">
                  <span className="racing-text">BISHAL PAUL</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-primary font-bold mb-6 uppercase tracking-wider">
                  🏎️ Data Science Champion | IIT Kanpur Racing Team
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  🏁 Racing through data like a Formula 1 champion! Passionate about applying 
                  statistics, machine learning, and AI to solve real-world problems at lightning speed. 
                  M.Sc. Statistics at IIT Kanpur with expertise in predictive modeling, NLP, and deep learning.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="f1-badge text-white hover:shadow-glow racing-pulse"
                  onClick={() => scrollToSection('projects')}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  VIEW PROJECTS
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => scrollToSection('contact')}
                >
                  GET IN TOUCH
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
                  <span className="uppercase tracking-wider font-semibold">GITHUB</span>
                </a>
                <a 
                  href="mailto:bishalpaul423t@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="uppercase tracking-wider font-semibold">EMAIL</span>
                </a>
              </div>
            </div>

            {/* F1 Profile Image */}
            <div className="flex justify-center lg:justify-end speed-stagger">
              <div className="relative">
                <div className="absolute inset-0 bg-racing-gradient rounded-full blur-3xl opacity-40 scale-110 racing-pulse"></div>
                <div className="absolute -inset-4 border-2 border-primary rounded-full opacity-30"></div>
                <img 
                  src={bishalProfile} 
                  alt="Bishal Paul - F1 Racing Data Scientist" 
                  className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary shadow-racing"
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