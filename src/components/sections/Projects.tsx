import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

export function Projects() {
  const projects = [
    // {
    //   id: 1,
    //   title: 'E-Commerce Platform',
    //   description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: true,
    // },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      liveUrl: 'https://simple-to-do-list-hazel.vercel.app/',
      githubUrl: 'https://github.com/umer987/simple_to_do_list/tree/main/simple%20to%20do%20list%20app',
      featured: true,
    },
    {
      id: 3,
      title: 'City Servillance Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and automated reporting.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: 'https://react-flax-one.vercel.app/',
      githubUrl: 'https://github.com/umer987/react#',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile Photo Gallery ',
      description: 'Educational platform with course management, progress tracking, and interactive learning modules.',
      image: 'g.jpg',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      liveUrl: 'https://photo-gallery-eta-eight.vercel.app/',
      githubUrl: 'https://github.com/umer987/photo_gallery',
      featured: false,
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      description: 'Property listing platform with advanced search, virtual tours, and mortgage calculator.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'GraphQL', 'MongoDB', 'AWS'],
      liveUrl: 'https://vilaagency.vercel.app/',
      githubUrl: 'https://github.com/umer987/vilaagency',
      featured: false,
    },
    {
      id: 6,
      title: 'Health & Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and health metrics with social features.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'Firebase', 'ML Kit', 'HealthKit'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={project.featured ? 'lg:col-span-2' : ''}
            >
              <Card className="overflow-hidden  h-full group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <div className="relative  overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48  object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/umer987/" className="inline-flex items-center gap-2">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}