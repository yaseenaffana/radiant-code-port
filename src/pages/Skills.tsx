import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Database, Globe, Smartphone, Zap, Star } from "lucide-react";
import Layout from "@/components/Layout";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const categories = ["Frontend", "Backend", "Database", "Tools", "Design"];

  const skillsData = {
    Frontend: [
      { name: "React", level: 25, icon: "⚛️" },
      { name: "Next.js", level: 25, icon: "▲" },
      { name: "JavaScript", level: 25, icon: "🟨" },
      { name: "HTML5", level: 50, icon: "🌐" }
    ],
    Backend: [
      { name: "Node.js", level: 25, icon: "🟢" },
      { name: "Python", level: 50, icon: "🐍" },
      { name: "Java", level: 50, icon: "☕" }
    ],
    Database: [
      { name: "MongoDB", level: 40, icon: "🍃" },
      { name: "MySQL", level: 75, icon: "🗄️" }
    ],
    Tools: [
      { name: "Git", level: 70, icon: "📝" },
      { name: "VS Code", level: 80, icon: "💻" },
      { name: "Cursor", level: 75, icon: "🎯" }
    ],
    Design: [
      { name: "Adobe XD", level: 80, icon: "🎨" }
    ]
  };

  const currentSkills = skillsData[selectedCategory as keyof typeof skillsData];

  const achievements = [
    { icon: <Code className="w-8 h-8" />, title: "5+ ", subtitle: " Tech Stacks Explored" },
    { icon: <Star className="w-8 h-8" />, title: "3", subtitle: "  Projects in Progress" },
    { icon: <Zap className="w-8 h-8" />, title: "24/7", subtitle: "Learning Mindset" },
    { icon: <Globe className="w-8 h-8" />, title: "∞", subtitle: " Always Curious" }
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
    { name: "React Developer Certification", issuer: "Meta", year: "2023" },
    { name: "Google UX Design Certificate", issuer: "Google", year: "2022" }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and technologies 
              I work with to create amazing digital experiences.
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="portfolio-card card-glow rounded-lg p-6 text-center"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-1">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {currentSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="portfolio-card card-glow rounded-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="portfolio-card card-glow rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">My Learning Philosophy</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I'm not just learning to code — I'm learning to create. In a world where technology never 
                stands still, I believe in staying curious, experimenting often, and leveling up continuously. 
                Whether it's exploring a new JavaScript framework, understanding UI design, or diving into backend 
                development, I treat every bug, every late night, and every "aha!" moment as part of the journey.
                <br /><br />
                Progress over perfection. Learning is the mission. Growth is the mindset.
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex items-center space-x-2 text-primary">
                  <Zap className="w-5 h-5" />
                  <span className="font-medium">Always Learning, Always Growing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Certifications & Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="portfolio-card card-glow rounded-lg p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                  <p className="text-primary text-sm font-medium">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="portfolio-card card-glow rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Currently Learning</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">☕</div>
                <h3 className="font-semibold">Java</h3>
                <p className="text-muted-foreground text-sm">Mastering core Java concepts, OOP, and backend fundamentals. Building CLI and web-based apps.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">🧠</div>
                <h3 className="font-semibold">Data Structures & Algorithms</h3>
                <p className="text-muted-foreground text-sm">Practicing logic-building, problem-solving, and understanding time-space complexity. Focused on consistency and growth.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">⚛️</div>
                <h3 className="font-semibold">React.js</h3>
                <p className="text-muted-foreground text-sm">Learning component-based UI building and state management for modern frontend development.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;