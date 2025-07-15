"use client"

import { useState, useEffect, Fragment } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Dialog, Transition } from "@headlessui/react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Briefcase,
  GraduationCap,
  User,
  Send,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const skills = {
    languages: ["JavaScript", "C++", "C", "HTML/CSS", "SQL"],
    frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "Nest.js"],
    databases: ["MongoDB", "MySQL"],
    tools: ["AWS", "GitHub", "VS Code", "Linux", "GitLab", "REST API"],
    soft: ["Teamwork", "Communication", "Adaptability", "Leadership"],
  }

  const projects = [
    {
      title: "ChatBot Song Recommender",
      description:
        "Conversational chatbot that recommends songs based on user preferences using NLP techniques and machine learning algorithms.",
      tech: ["React.js", "IBM Tone Analyzer API", "Last.fm API", "Python", "Flask"],
      github: "https://github.com/harshitaipro/chatbot-song-recommender",
      features: ["Natural Language Processing", "Personalized Recommendations", "External API Integration"],
    },
    {
      title: "Fashion Store Web Application",
      description:
        "Dynamic e-commerce platform with user authentication, product search, shopping cart, and secure payment gateway.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Bootstrap"],
      github: "https://github.com/harshitaipro/fashion-store-webapp",
      features: ["User Authentication", "Payment Gateway", "Responsive Design", "Product Filtering"],
    },
    {
      title: "College Administration System",
      description:
        "Web-based platform to automate college administrative tasks with role-based access control for different user types.",
      tech: ["MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/harshitaipro/college-admin-system",
      features: ["Role-based Access", "Student Records", "Exam Scheduling", "Faculty Management"],
    },
  ]

  const certifications = [
    { name: "CCNA: Introduction to Networks", issuer: "CISCO", icon: Globe },
    { name: "Data Structures in C++", issuer: "Codehelp", icon: Code },
    { name: "IBM Cloud Certification", issuer: "IBM", icon: Server },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "certifications", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Background Animation */}
      <motion.div
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)",
          y: backgroundY,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Harshit Tiwari
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-800"
            >
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-300 hover:text-purple-400"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Harshit Tiwari
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-4">Full Stack Developer | MERN & Next.js Specialist</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Building scalable, intelligent, and user-friendly web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={() => setIsResumeOpen(true)}
              >
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/harshitaipro" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://linkedin.com/in/harshit-tiwari-00b0b8204" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Varanasi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9569887746</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>harshit27062002@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Modal */}
      <Transition appear show={isResumeOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsResumeOpen(false)}>
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-gray-900 rounded-lg shadow-lg max-w-4xl w-full p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-white">My Resume</h2>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <iframe
                src="/harshit-resume.pdf"
                className="w-full h-[500px] border-none"
                title="Harshit Tiwari Resume"
              />
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <User className="h-5 w-5 text-purple-400" />
                    Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    I'm a passionate Full Stack Developer with expertise in the MERN stack and Next.js. I love creating
                    scalable web applications that solve real-world problems and provide exceptional user experiences.
                  </p>
                  <p>
                    My journey in software development has been driven by curiosity and a desire to continuously learn
                    and adapt to new technologies. I enjoy working on challenging projects that push the boundaries of
                    what's possible.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <GraduationCap className="h-5 w-5 text-blue-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white">B.E in Computer Science and Engineering</h4>
                      <p className="text-sm text-gray-400">Institute of Engineering and Technology, Agra</p>
                      <p className="text-sm text-gray-400">Nov 2020 - July 2024 | CGPA: 7.59/10.00</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Senior Secondary</h4>
                      <p className="text-sm text-gray-400">DLW Inter College, Varanasi</p>
                      <p className="text-sm text-gray-400">2019 | 81/100</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Code className="h-5 w-5 text-green-400" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-green-900/30 text-green-300 border-green-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Globe className="h-5 w-5 text-blue-400" />
                    Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-900/30 text-blue-300 border-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Database className="h-5 w-5 text-purple-400" />
                    Databases & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.databases, ...skills.tools].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-purple-900/30 text-purple-300 border-purple-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <User className="h-5 w-5 text-orange-400" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-orange-900/30 text-orange-300 border-orange-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full hover:bg-gray-800/70 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4">
                        <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Briefcase className="h-5 w-5 text-blue-400" />
                      Software Intern
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-400 font-semibold">
                      Banaras Locomotive Works
                    </CardDescription>
                    <p className="text-sm text-gray-400 mt-1">June 2023 - July 2023</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Developed and optimized RESTful APIs, increasing data accessibility by 40%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Reduced data retrieval time by 30% through API optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Implemented DevOps practices, reducing deployment time by 50%</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Responsibilities:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Streamlined CI/CD processes and reduced manual intervention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Collaborated with networking and storage teams</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Optimized infrastructure for smooth deployments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full hover:bg-gray-800/70 transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-fit">
                      <cert.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400">{cert.issuer}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href="mailto:harshit27062002@gmail.com"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        harshit27062002@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+919569887746" className="text-white hover:text-purple-400 transition-colors">
                        +91 9569887746
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Varanasi, Uttar Pradesh, India</p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://github.com/harshitaipro" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://linkedin.com/in/harshit-tiwari-00b0b8204"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        placeholder="Subject"
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Harshit Tiwari. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
