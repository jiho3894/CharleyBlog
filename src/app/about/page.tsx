import Link from 'next/link';
import { Github, Mail, ExternalLink } from 'lucide-react';

const AboutPage = () => {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      title: 'Software Engineer',
      duration: '2022 - Present',
      description: 'Leading frontend',
      projects: [
        {
          name: 'Projcet',
          description: '1',
        },
        {
          name: 'Mobile App',
          description: '2',
        },
        {
          name: 'Performance',
          description: '3',
        },
      ],
    },
    {
      company: 'Tech Innovations Inc.',
      title: 'Software Engineer',
      duration: '2022 - Present',
      description: 'Leading frontend',
      projects: [
        {
          name: 'Projcet',
          description: '1',
        },
        {
          name: 'Mobile App',
          description: '2',
        },
        {
          name: 'Performance',
          description: '3',
        },
      ],
    },
    {
      company: 'Tech Innovations Inc.',
      title: 'Software Engineer',
      duration: '2022 - Present',
      description: 'Leading frontend',
      projects: [
        {
          name: 'Projcet',
          description: '1',
        },
        {
          name: 'Mobile App',
          description: '2',
        },
        {
          name: 'Performance',
          description: '3',
        },
      ],
    },
  ];

  return (
    <div className="space-y-16 pt-8">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <div className="w-[120px] h-[120px] rounded-full border-2 border-border/50 bg-muted flex items-center justify-center">
              <div className="text-4xl font-bold text-muted-foreground">Ch</div>
            </div>
          </div>
          <div className="space-y-6 flex-1">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
              <p className="text-lg text-muted-foreground mt-2">Frontend Developer</p>
            </div>
            <div className="space-y-4">
              <p className="text-foreground leading-7 text-base">Hello!</p>
              <p className="text-foreground leading-7 text-base">Home</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
          <Link
            href="mailto:hello@example.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
            <span>hello@example.com</span>
          </Link>
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">Professional Experience</h2>
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border"></div>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 space-y-6 pb-2">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                    <p className="text-base font-medium text-primary">{experience.company}</p>
                    <p className="text-sm text-muted-foreground font-medium">{experience.duration}</p>
                  </div>
                  <p className="text-muted-foreground leading-6 text-sm">{experience.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-primary rounded-full"></div>
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                        Project Highlights & Achievements
                      </h4>
                    </div>
                    <div className="grid gap-4">
                      {experience.projects.map((project, projectIndex) => (
                        <div
                          key={projectIndex}
                          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-muted/50 via-muted/30 to-muted/10 p-6 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                {project.name}
                              </h5>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <p className="text-sm font-medium text-foreground/90 mb-1">Project Overview</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
