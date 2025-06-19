"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Brain,
  Code,
  Database,
  Cpu,
  Lightbulb,
  Target,
  ChevronDown,
} from "lucide-react"

export default function Portfolio() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [activePersona, setActivePersona] = useState<"ika" | "genesis">("ika")
  const [projectFilter, setProjectFilter] = useState<"all" | "ika" | "genesis">("all")

  const phrases = ["Seeker", "Builder", "Shadow-Bound", "Free Thinker"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const projects = [
    {
      title: "Neural Network Playground",
      description: "Interactive visualization of deep learning concepts with real-time parameter tuning.",
      tags: ["Python", "TensorFlow", "React"],
      persona: "ika",
      link: "#",
    },
    {
      title: "Quantum State Simulator",
      description: "Exploring quantum mechanics through computational models and probability distributions.",
      tags: ["Python", "NumPy", "Quantum"],
      persona: "ika",
      link: "#",
    },
    {
      title: "Reality Mining Framework",
      description: "Advanced data analysis pipeline for extracting patterns from complex systems.",
      tags: ["Python", "Pandas", "ML"],
      persona: "genesis",
      link: "#",
    },
    {
      title: "Consciousness Mapping Tool",
      description: "Systematic approach to understanding cognitive patterns and decision-making processes.",
      tags: ["Psychology", "Data Science", "Visualization"],
      persona: "genesis",
      link: "#",
    },
    {
      title: "Satellite Trajectory Optimizer",
      description: "Orbital mechanics simulation with machine learning-enhanced path planning.",
      tags: ["C++", "Orbital Mechanics", "Optimization"],
      persona: "genesis",
      link: "#",
    },
    {
      title: "Creative Code Experiments",
      description: "Collection of generative art and algorithmic creativity explorations.",
      tags: ["Processing", "Creative Coding", "Art"],
      persona: "ika",
      link: "#",
    },
  ]

  const skills = {
    programming: ["Python", "C/C++", "JavaScript", "SQL", "R"],
    tools: ["Git", "VS Code", "Jupyter", "Docker", "Linux"],
    frameworks: ["TensorFlow", "Pandas", "React", "NumPy", "Matplotlib"],
    meta: ["System Design", "Research Methodology", "Technical Writing", "Problem Solving"],
  }

  const filteredProjects = projects.filter((project) => projectFilter === "all" || project.persona === projectFilter)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
              IM
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("hero")} className="hover:text-teal-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("identity")} className="hover:text-teal-400 transition-colors">
                Identity
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-teal-400 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-teal-400 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection("philosophy")} className="hover:text-teal-400 transition-colors">
                Philosophy
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-teal-400 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="matrix-rain"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-100 via-teal-400 to-violet-400 bg-clip-text text-transparent">
            Ikansh Mahajan
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Machine Intelligence. Scientific Inquiry. Relentless Curiosity.
          </p>
          <div className="text-lg md:text-xl text-slate-400 mb-8 h-8">
            <span className="transition-all duration-500 ease-in-out">{phrases[currentPhrase]}</span>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            A mind split between playful exploration and relentless ambition. Building at the intersection of
            consciousness and computation, where curiosity meets the shadows of deeper understanding.
          </p>
          <Button
            onClick={() => scrollToSection("identity")}
            className="bg-gradient-to-r from-teal-600 to-violet-600 hover:from-teal-500 hover:to-violet-500 text-white px-8 py-3 text-lg"
          >
            Explore <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Identity Split Section */}
      <section id="identity" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
            The Duality Within
          </h2>

          <Tabs
            value={activePersona}
            onValueChange={(value) => setActivePersona(value as "ika" | "genesis")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-slate-800">
              <TabsTrigger value="ika" className="data-[state=active]:bg-teal-600">
                IkaBrain
              </TabsTrigger>
              <TabsTrigger value="genesis" className="data-[state=active]:bg-violet-600">
                TheGenesis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ika" className="space-y-8">
              <Card className="bg-gradient-to-br from-teal-950/50 to-slate-900 border-teal-800">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-teal-600 rounded-full">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-teal-400">IkaBrain</CardTitle>
                      <CardDescription className="text-slate-300">The Curious Explorer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    The playful architect of experiments and wild ideas. IkaBrain thrives in the realm of "what if?" —
                    building neural networks for fun, simulating quantum states, and turning abstract concepts into
                    interactive experiences. This is where creativity meets code, where learning happens through play,
                    and where the impossible becomes merely improbable.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-teal-400 mb-3">Drives</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Experimental learning</li>
                        <li>• Creative problem-solving</li>
                        <li>• Interdisciplinary exploration</li>
                        <li>• Joyful discovery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-400 mb-3">Projects</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Neural playgrounds</li>
                        <li>• Quantum simulations</li>
                        <li>• Creative coding</li>
                        <li>• Interactive visualizations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="genesis" className="space-y-8">
              <Card className="bg-gradient-to-br from-violet-950/50 to-slate-900 border-violet-800">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-violet-600 rounded-full">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-violet-400">TheGenesis</CardTitle>
                      <CardDescription className="text-slate-300">The Relentless Force</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    The shadow that drives ambition and self-transcendence. TheGenesis operates in the depths of
                    systematic inquiry, reality mining, and the pursuit of fundamental understanding. This is the force
                    that refuses to accept surface-level answers, that pushes beyond comfort zones, and that transforms
                    curiosity into relentless investigation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-violet-400 mb-3">Drives</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Deep understanding</li>
                        <li>• Systematic investigation</li>
                        <li>• Pattern recognition</li>
                        <li>• Self-transcendence</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-violet-400 mb-3">Focus Areas</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Reality mining</li>
                        <li>• Consciousness mapping</li>
                        <li>• Complex systems</li>
                        <li>• Optimization frameworks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
            Projects & Experiments
          </h2>

          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-slate-800 p-1 rounded-lg">
              <Button
                variant={projectFilter === "all" ? "default" : "ghost"}
                onClick={() => setProjectFilter("all")}
                className="px-4 py-2"
              >
                All
              </Button>
              <Button
                variant={projectFilter === "ika" ? "default" : "ghost"}
                onClick={() => setProjectFilter("ika")}
                className="px-4 py-2 data-[state=active]:bg-teal-600"
              >
                IkaBrain
              </Button>
              <Button
                variant={projectFilter === "genesis" ? "default" : "ghost"}
                onClick={() => setProjectFilter("genesis")}
                className="px-4 py-2 data-[state=active]:bg-violet-600"
              >
                TheGenesis
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className={`bg-slate-800 border-slate-700 hover:border-${project.persona === "ika" ? "teal" : "violet"}-500 transition-all duration-300 hover:scale-105`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-slate-100">{project.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className={`${project.persona === "ika" ? "border-teal-500 text-teal-400" : "border-violet-500 text-violet-400"}`}
                    >
                      {project.persona === "ika" ? "IkaBrain" : "TheGenesis"}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-slate-700 text-slate-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
            Skills & Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-teal-400" />
                  <CardTitle className="text-lg">Programming</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.programming.map((skill, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2 border-teal-500 text-teal-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Database className="h-6 w-6 text-violet-400" />
                  <CardTitle className="text-lg">Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.tools.map((skill, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2 border-violet-500 text-violet-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Cpu className="h-6 w-6 text-teal-400" />
                  <CardTitle className="text-lg">Frameworks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.frameworks.map((skill, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2 border-teal-500 text-teal-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Brain className="h-6 w-6 text-violet-400" />
                  <CardTitle className="text-lg">Meta Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.meta.map((skill, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2 border-violet-500 text-violet-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
              Philosophy & Drive
            </h2>

            <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
              <p>
                Reality is a puzzle with infinite pieces, and I am both the solver and the piece. My work exists at the
                intersection of consciousness and computation, where the playful curiosity of IkaBrain meets the
                relentless drive of TheGenesis. Together, they form a complete investigative apparatus — one that
                builds, questions, and transcends.
              </p>

              <p>
                Through systematic inquiry and experimental play, I seek to understand the patterns that govern complex
                systems — whether they exist in neural networks, quantum states, or the depths of human consciousness.
                Every project is both a technical challenge and a philosophical exploration.
              </p>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg border border-slate-600">
              <blockquote className="text-xl italic text-slate-200 mb-4">
                "Until you make the unconscious conscious, it will direct your life and you will call it fate."
              </blockquote>
              <cite className="text-slate-400">— Carl Jung</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
              Connect & Collaborate
            </h2>
            <p className="text-center text-slate-400 mb-12">Collaborator? Curious mind? Fellow seeker? Reach out.</p>

            <Card className="bg-slate-800 border-slate-700 mb-8">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="your.email@domain.com"
                      className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your message, idea, or collaboration proposal..."
                      rows={5}
                      className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-violet-600 hover:from-teal-500 hover:to-violet-500">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-6">
              <Button variant="outline" size="lg" className="border-slate-600 hover:border-teal-500">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 hover:border-violet-500">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 hover:border-teal-500">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400">© 2024 Ikansh Mahajan</p>
              <p className="text-sm text-slate-500">Built by IkaBrain. Forged by TheGenesis.</p>
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
