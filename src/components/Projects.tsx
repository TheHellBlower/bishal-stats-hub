import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, TrendingUp, Brain, BarChart3, Shield, MessageSquare, Car, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Data Science Salary Prediction",
      description: "Comprehensive salary prediction model comparing Lasso Regression and XGBoost algorithms for data science positions.",
      icon: TrendingUp,
      metrics: "R² = 0.56",
      technologies: ["Python", "XGBoost", "Lasso Regression", "Scikit-Learn", "Pandas"],
      highlights: ["Feature engineering for salary prediction", "Model comparison and evaluation", "Statistical analysis of salary trends"],
      githubUrl: "https://github.com/TheHellBlower",
      category: "Machine Learning"
    },
    {
      title: "Loan Default Prediction",
      description: "Advanced credit risk assessment using multiple ML algorithms with comprehensive feature engineering.",
      icon: Shield,
      metrics: "XGBoost: 76%, ANN: 97%",
      technologies: ["Python", "XGBoost", "Neural Networks", "WOE", "Information Value"],
      highlights: ["Weight of Evidence (WOE) transformation", "Information Value analysis", "Correlation matrix optimization"],
      githubUrl: "https://github.com/TheHellBlower",
      category: "Risk Analytics"
    },
    {
      title: "Stock Price Forecasting",
      description: "Time series analysis comparing traditional and deep learning approaches for stock market prediction.",
      icon: BarChart3,
      metrics: "RMSE Comparison",
      technologies: ["Python", "ARIMA", "Prophet", "LSTM", "TensorFlow", "Time Series"],
      highlights: ["Multiple forecasting methodologies", "RMSE-based model evaluation", "Deep learning for time series"],
      githubUrl: "https://github.com/TheHellBlower",
      category: "Time Series"
    },
    {
      title: "Fake News Detection",
      description: "NLP-based classification system to identify fake news using advanced text processing and machine learning.",
      icon: MessageSquare,
      metrics: "LR: 89.4%, RF: 89.5%",
      technologies: ["Python", "NLP", "TF-IDF", "Logistic Regression", "Random Forest", "NLTK"],
      highlights: ["TF-IDF vectorization", "Text preprocessing pipeline", "Ensemble model comparison"],
      githubUrl: "https://github.com/TheHellBlower",
      category: "NLP"
    },
    {
      title: "RAG-Powered Q&A System",
      description: "Retrieval-Augmented Generation system for intelligent question answering using state-of-the-art NLP frameworks.",
      icon: Brain,
      metrics: "LangChain + Llama 3",
      technologies: ["Python", "LangChain", "Sentence-Transformers", "ChromaDB", "Llama 3", "RAG"],
      highlights: ["Vector database integration", "Semantic search capabilities", "Large language model integration"],
      githubUrl: "https://github.com/TheHellBlower",
      category: "AI/ML"
    },
    {
      title: "Automobile Data Analysis",
      description: "Interactive R Shiny application for comprehensive automobile dataset analysis with dynamic visualizations.",
      icon: Car,
      metrics: "R Shiny Dashboard",
      technologies: ["R", "Shiny", "ggplot2", "Data Visualization", "Statistical Analysis"],
      highlights: ["Interactive dashboard development", "Dynamic data visualization", "Statistical insights generation"],
      githubUrl: "https://github.com/TheHellBlower",
      category: "Data Visualization"
    },
    {
      title: "Brain Tumor Detection",
      description: "Deep learning application using transfer learning for medical image classification with high accuracy.",
      icon: Activity,
      metrics: "88% Accuracy",
      technologies: ["Python", "TensorFlow", "VGG-16", "Transfer Learning", "Computer Vision"],
      highlights: ["Transfer learning implementation", "Medical image processing", "Convolutional neural networks"],
      githubUrl: "https://github.com/TheHellBlower",
      category: "Computer Vision"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 racing-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-racing">
            <span className="racing-text">🏆 CHAMPIONSHIP PROJECTS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🏁 A podium showcase of data science and machine learning projects demonstrating 
            championship-level expertise in statistical modeling, deep learning, and real-world problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="racing-card p-6 speed-stagger flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="text-xs mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">🏁 Performance</div>
                  <div className="text-sm text-muted-foreground font-semibold">{project.metrics}</div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2 uppercase tracking-wider">⚙️ Tech Stack</div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2 uppercase tracking-wider">🎯 Key Features</div>
                  <div className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, hlIndex) => (
                      <div key={hlIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1" 
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="f1-badge text-white"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="hover:shadow-medium transition-all"
          >
            <a href="https://github.com/TheHellBlower" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;