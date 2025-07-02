import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, TrendingUp } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'SAAQI-TECH.',
      position: 'Junior Frontend Developer',
      duration: '2021-2023',
      location: 'Karachi PK',
      type: 'Full-time',
      logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Leading development of enterprise-scale applications serving 100K+ users. Architecting scalable microservices and mentoring junior developers.',
      achievements: [
        
        'Designed and built RESTful APIs handling 1000 requests daily',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      current: true,
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and companies, building expertise in full-stack development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, _index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 ${
                  exp.current 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse' 
                    : 'bg-gradient-to-r from-gray-400 to-gray-500'
                }`} />

                <Card className="ml-16 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-16 h-16 rounded-lg object-cover border-2 border-border"
                        />
                      </div>

                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {exp.position}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground mt-1">
                              <Building className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                              {exp.current && (
                                <Badge className="bg-green-100 text-green-700 text-xs">
                                  Current
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col items-start md:items-end gap-1 mt-2 md:mt-0">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/20">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">
              1+ years of professional development experience
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}