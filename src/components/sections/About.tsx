import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

export function About() {
  const skills = [
    { name: 'React/Next.js', level: 80, category: 'Frontend' },
    { name: 'TypeScript', level: 60, category: 'Language' },
    { name: 'Node.js', level: 50, category: 'Backend' },
    { name: 'Python', level: 70, category: 'Language' },
    { name: 'PostgreSQL', level: 40, category: 'Database' },
    
    { name: 'UI/UX Design', level: 88, category: 'Design' },
    { name: 'Mobile Dev', level: 40, category: 'Mobile' },
  ];

  const specialties = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive, performant web applications with modern frameworks',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating scalable APIs and robust server-side solutions',
      tech: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive user experiences and beautiful interfaces',
      tech: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance',
      tech: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'MATRICULATION',
      company: 'Maryam academy school.',
      description: 'with (69%)',
    },
    {
      year: '2020',
      title: 'INTERMEDIATE',
      company: 'Taqwiyat-Ul-Iman',
      description: 'with (72%)',
    },
    {
      year: '2021',
      title: 'BS(SE)',
      company: 'iqra University',
      description: 'Continued with (2.8) CGPA',
    },
    {
      year: '2020',
      title: 'Full Stack Developer',
      company: 'Saaqi tech',
      description: 'Work As a Fronend Developer',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 1+ years of experience creating digital solutions 
            that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My passion for technology started early when I built my first website at 14. 
                What began as curiosity evolved into a career dedicated to creating exceptional 
                digital experiences.
              </p>
              <p>
                I believe in the power of clean code, thoughtful design, and collaborative 
                problem-solving. Every project is an opportunity to learn something new and 
                push the boundaries of what's possible.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, _index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="secondary">{skill.category}</Badge>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, _index) => {
              const Icon = specialty.icon;
              return (
                <Card key={specialty.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{specialty.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {specialty.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {specialty.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">My Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <Card className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-5/12`}>
                    <CardContent className="p-6">
                      <div className="text-sm text-blue-600 font-semibold mb-1">
                        {item.year}
                      </div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <div className="text-sm text-muted-foreground mb-2">
                        {item.company}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}