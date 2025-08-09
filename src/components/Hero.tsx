import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-container">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 20}%`,
                width: `${8 + (i % 3) * 4}px`,
                height: `${8 + (i % 3) * 4}px`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-primary/30 shadow-glow-primary object-cover"
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-foreground">Hi, I'm</span>
          <span className="block gradient-text glow-text">yaseen affan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          Java Backend Developer | DSA Enthusiast | Problem Solver
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Currently focused on mastering Java fundamentals and building problem-solving skills through DSA. 
          Excited to start building backend projects and exploring the world of scalable systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="btn-hero text-primary-foreground px-8 py-3 text-lg font-medium"
            onClick={() => window.location.href = '/projects'}
          >
            <ArrowDown className="mr-2 h-5 w-5 rotate-[-90deg]" />
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-lg font-medium"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">Building</div>
            <div className="text-muted-foreground text-sm">Java + DSA Skills</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">Goal</div>
            <div className="text-muted-foreground text-sm">Backend Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground text-sm">Client Satisfaction</div>
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="portfolio-card p-6 rounded-xl group"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">College Management System</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Java + MySQL + JDBC, with CRUD features and authentication (coming soon).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Java</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">MySQL</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">JDBC</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs opacity-50">Live Demo</Button>
                <Button variant="outline" size="sm" className="text-xs opacity-50">GitHub</Button>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="portfolio-card p-6 rounded-xl group"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">Expense Tracker</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Java console-based, OOP principles, file handling for expense logs (coming soon).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Java</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">OOP</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">File I/O</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs opacity-50">Live Demo</Button>
                <Button variant="outline" size="sm" className="text-xs opacity-50">GitHub</Button>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="portfolio-card p-6 rounded-xl group"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">DSA Practice Tracker</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Java tool to track daily problem-solving activity across platforms (planned).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Java</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">LocalStorage</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">OOP</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs opacity-50">Live Demo</Button>
                <Button variant="outline" size="sm" className="text-xs opacity-50">GitHub</Button>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3"
              onClick={() => window.location.href = '/projects'}
            >
              View All Projects
              <ArrowDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
};

export default Hero;