import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'Tech Innovations Inc.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      quote: "Alex is an exceptional developer who consistently delivers high-quality solutions. His ability to understand complex requirements and translate them into elegant code is remarkable. He's been instrumental in scaling our platform to serve over 100K users.",
      project: 'E-commerce Platform',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'Digital Solutions Co.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      quote: "Working with Alex was a game-changer for our startup. He not only delivered excellent code but also provided valuable insights on architecture and user experience. His attention to detail and proactive communication made the entire project smooth.",
      project: 'SaaS Dashboard',
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Design Director',
      company: 'Creative Agency Pro',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      quote: "Alex has an incredible eye for translating designs into pixel-perfect implementations. He understands the importance of user experience and always suggests improvements that enhance the final product. A true professional.",
      project: 'Portfolio Website',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Startup Founder',
      company: 'InnovateLab',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      quote: "Alex helped us build our MVP from scratch and guided us through the technical decisions. His expertise in both frontend and backend development saved us months of development time. Highly recommended!",
      project: 'Mobile App',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Project Manager',
      company: 'Enterprise Solutions',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      quote: "Alex consistently exceeds expectations. His technical skills are top-notch, and he's always willing to go the extra mile to ensure project success. He's the kind of developer every team needs.",
      project: 'Enterprise Platform',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
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
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].name}
                      />
                      <AvatarFallback>
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>

                  {/* Project Badge */}
                  <div className="mt-4">
                    <Badge variant="outline" className="text-xs">
                      Project: {testimonials[currentIndex].project}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                <Card className={`h-full ${index === currentIndex ? 'ring-2 ring-blue-500' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                    
                    <Badge variant="outline" className="text-xs mt-3">
                      {testimonial.project}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: '50+', label: 'Happy Clients' },
            { number: '100+', label: 'Projects Completed' },
            { number: '5.0', label: 'Average Rating' },
          ].map((stat, _i) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
             
              </div>
            </div>
            
          ))}
        </motion.div>
      </div>
    </section>
  );
}