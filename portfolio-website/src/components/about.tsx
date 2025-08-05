"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Terminal, Code, Database, Cloud, Users, Award } from "lucide-react"

export function About() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  
  const terminalLines = [
    "const developer = {",
    "  name: 'Alex Chen',",
    "  role: 'Full-Stack Developer',",
    "  experience: '8+ years',",
    "  passion: 'Building amazing products',",
    "  skills: ['React', 'Node.js', 'Python', 'AWS'],",
    "  location: 'San Francisco, CA'",
    "};",
    "",
    "// Always learning, always building",
    "developer.learn();",
    "developer.build();",
    "developer.ship();"
  ]

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + terminalLines[currentLine] + "\n")
        setCurrentLine(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [currentLine, terminalLines])

  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Database, label: "Databases Designed", value: "25+" },
    { icon: Cloud, label: "Cloud Deployments", value: "100+" },
    { icon: Users, label: "Team Members Led", value: "15+" },
    { icon: Award, label: "Awards Won", value: "8" }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Passionate full-stack developer with a love for clean code, innovative solutions, and exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Terminal className="h-4 w-4 text-foreground/60" />
                <span className="text-sm text-foreground/60">terminal</span>
              </div>
              <pre className="text-sm font-mono text-green-400 overflow-hidden">
                <code>{displayedText}</code>
              </pre>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Who I Am</h3>
              <p className="text-foreground/70 leading-relaxed">
                I'm a senior full-stack developer with over 8 years of experience building scalable web applications. 
                I specialize in modern JavaScript frameworks, cloud architecture, and creating intuitive user experiences.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers, 
                or exploring the latest technologies to stay ahead of the curve.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What I Do</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Design and implement scalable web applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Lead development teams and mentor junior developers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Optimize performance and ensure security best practices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Collaborate with cross-functional teams</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}