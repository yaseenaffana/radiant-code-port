import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, Target } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code with best practices."
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Innovative problem-solving approach to complex technical challenges."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication skills."
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that exceed expectations."
    }
  ];

  return (
    <Layout>
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 particle-container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with a keen eye for design and a love for creating exceptional user experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hello! I'm Alex Johnson
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience in creating 
                digital solutions that make a difference. My journey started with a curiosity about 
                how websites work, and it has evolved into a deep passion for crafting beautiful, 
                functional applications.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I specialize in React, Node.js, and modern web technologies. When I'm not coding, 
                you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  What drives me:
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Building products that solve real-world problems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Continuous learning and staying updated with latest trends
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Mentoring aspiring developers
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="portfolio-card p-6 rounded-xl text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h5 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h5>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
              My Journey
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
                
                {/* Timeline items */}
                {[
                  { year: "2024", title: "Senior Full Stack Developer", company: "Tech Innovation Inc." },
                  { year: "2022", title: "Full Stack Developer", company: "Digital Solutions Ltd." },
                  { year: "2020", title: "Frontend Developer", company: "Web Agency Co." },
                  { year: "2019", title: "Computer Science Graduate", company: "State University" }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1 md:w-1/2">
                      <div className={`portfolio-card p-6 rounded-xl ${
                        index % 2 === 0 ? "md:mr-8 ml-12 md:ml-0" : "md:ml-8 ml-12"
                      }`}>
                        <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                        <h4 className="text-foreground font-semibold text-xl mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.company}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;