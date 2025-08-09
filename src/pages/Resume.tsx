import { motion } from "framer-motion";
import { Download, ExternalLink, Calendar, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Resume = () => {
  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      responsibilities: [
        "Lead development of React-based web applications serving 100k+ users",
        "Architected microservices backend using Node.js and PostgreSQL",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization techniques"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "Remote",
      period: "2020 - 2022",
      responsibilities: [
        "Developed and maintained e-commerce platforms using React and Node.js",
        "Implemented responsive designs and improved mobile user experience",
        "Collaborated with UI/UX team to implement design systems",
        "Reduced page load times by 60% through performance optimizations"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Web Agency Co.",
      location: "Los Angeles, CA",
      period: "2019 - 2020",
      responsibilities: [
        "Built responsive websites using modern JavaScript frameworks",
        "Collaborated with designers to implement pixel-perfect interfaces",
        "Optimized websites for SEO and accessibility compliance",
        "Maintained and updated existing client websites"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "State University",
      location: "California, USA",
      period: "2015 - 2019",
      details: "Graduated Magna Cum Laude, GPA: 3.8/4.0"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "Docker", "AWS", "Figma", "Jest"]
  };

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 particle-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              Resume
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Download my resume or view my experience and qualifications below
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero text-primary-foreground px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Online
              </Button>
            </div>
          </motion.div>

          {/* Contact Info Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="portfolio-card p-8 rounded-xl mb-12"
          >
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Alex Johnson</h1>
              <p className="text-xl text-primary mb-4">Full Stack Developer & UI/UX Designer</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="flex items-center justify-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">hello@alexjohnson.dev</span>
              </div>
              <div className="flex items-center justify-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center justify-center text-muted-foreground">
                <ExternalLink className="h-4 w-4 mr-2" />
                <span className="text-sm">alexjohnson.dev</span>
              </div>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="portfolio-card p-8 rounded-xl mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-1 h-8 bg-gradient-primary rounded-full mr-4"></span>
              Professional Summary
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Passionate Full Stack Developer with 5+ years of experience in creating scalable web applications 
              and intuitive user interfaces. Proven track record of delivering high-quality solutions using 
              modern technologies like React, Node.js, and cloud platforms. Strong collaborative skills with 
              experience leading development teams and mentoring junior developers.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <span className="w-1 h-8 bg-gradient-primary rounded-full mr-4"></span>
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="portfolio-card p-6 rounded-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{job.title}</h4>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="text-muted-foreground text-sm mt-2 sm:mt-0 sm:text-right">
                      <div className="flex items-center sm:justify-end">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.period}
                      </div>
                      <div className="flex items-center sm:justify-end mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <span className="w-1 h-8 bg-gradient-primary rounded-full mr-4"></span>
              Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="portfolio-card p-6 rounded-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.school}</p>
                  </div>
                  <div className="text-muted-foreground text-sm mt-2 sm:mt-0 sm:text-right">
                    <div className="flex items-center sm:justify-end">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center sm:justify-end mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{edu.details}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <span className="w-1 h-8 bg-gradient-primary rounded-full mr-4"></span>
              Core Skills
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="portfolio-card p-6 rounded-xl"
                >
                  <h4 className="text-lg font-bold text-foreground mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;