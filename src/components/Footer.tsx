import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="racing-text font-bold text-lg">🏁 BISHAL PAUL</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground uppercase tracking-wider">F1 Data Scientist</span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/TheHellBlower" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:bishalpaul423t@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Bishal Paul. Built with 
            <Heart className="h-4 w-4 text-primary" /> 
            using React & TypeScript | 🏎️ Racing to Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;