"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Brain, Code, Database, Cpu, Lightbulb, Target, ChevronDown } from "lucide-react"

// TypeScript declaration for Typed.js
declare global {
  interface Window {
    Typed: any
  }
}

// Matrix Rain Component
const MatrixRain = ({ theme }: { theme: "ika" | "genesis" }) => {
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01"
    const fontSize = 18
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = theme === "ika" ? "#00ffff" : "#bb88ff"
      ctx.font = `bold ${fontSize}px 'Courier New', monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  return (
    <canvas
      id="matrix-canvas"
      className="fixed inset-0 pointer-events-none opacity-30 z-0"
      style={{ background: "transparent" }}
    />
  )
}

export default function Portfolio() {
  const [theme, setTheme] = useState<"ika" | "genesis">("ika")
  const [activePersona, setActivePersona] = useState<"ika" | "genesis">("ika")

  const phrases = ["Seeker", "Builder", "Shadow-Bound", "Free Thinker"]
  // const { displayText, showCursor, isFinale } = useTypingAnimation(phrases)

  // Update active persona when theme changes
  useEffect(() => {
    setActivePersona(theme)
  }, [theme])

  const skills = {
    programming: ["Python", "C/C++", "JavaScript", "SQL", "R"],
    tools: ["Git", "VS Code", "Jupyter", "Docker", "Linux"],
    frameworks: ["TensorFlow", "Pandas", "React", "NumPy", "Matplotlib"],
    meta: ["System Design", "Research Methodology", "Technical Writing", "Problem Solving"],
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const themeClasses = {
    ika: {
      accent: "text-cyan-400",
      accentBg: "bg-cyan-600",
      accentHover: "hover:bg-cyan-500",
      accentBorder: "border-cyan-500",
      gradient: "from-cyan-400 to-blue-400",
      gradientBg: "from-cyan-600 to-blue-600",
      cardBorder: "border-cyan-800",
      cardBg: "from-cyan-950/50 to-slate-900",
    },
    genesis: {
      accent: "text-violet-400",
      accentBg: "bg-violet-600",
      accentHover: "hover:bg-violet-500",
      accentBorder: "border-violet-500",
      gradient: "from-violet-400 to-purple-400",
      gradientBg: "from-violet-600 to-purple-600",
      cardBorder: "border-violet-800",
      cardBg: "from-violet-950/50 to-slate-900",
    },
  }

  const currentTheme = themeClasses[theme]

  // Typed.js initialization
  useEffect(() => {
    // Dynamically load Typed.js
    const script = document.createElement("script")
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"
    script.async = true

    script.onload = () => {
      // Initialize Typed.js after script loads
      if (window.Typed) {
        new window.Typed("#typed-element", {
          strings: [
            "a Pythonista.",
            "an AI enthusiast.",
            "an Amateur Satellist.",
            "a Content Writer.",
            "curiosity-driven.",
            "<b>I^200K^200A^200N^200S^200H^500.</b>^10000",
          ],
          smartBackspace: true,
          loop: true,
          typeSpeed: 50,
          backSpeed: 25,
          backDelay: 500,
          showCursor: true,
          cursorChar: "|",
        })
      }
    }

    document.head.appendChild(script)

    // Cleanup
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-x-hidden relative">
      {/* Matrix Rain Background */}
      <MatrixRain theme={theme} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-100">
              <a href="#" className={`hover:${currentTheme.accent} transition-colors`}>
                Ikansh
              </a>
            </div>

            <div className="flex items-center space-x-6">
              {/* Theme Toggle */}
              <div className="flex items-center space-x-2 bg-slate-800 p-1 rounded-lg shadow-lg">
                <Button
                  variant={theme === "ika" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setTheme("ika")}
                  className={`px-3 py-1 text-xs shadow-md hover:shadow-lg transition-all ${
                    theme === "ika" ? "bg-cyan-600 hover:bg-cyan-500" : "hover:bg-slate-700"
                  }`}
                >
                  <Lightbulb className="h-3 w-3 mr-1" />
                  Ika
                </Button>
                <Button
                  variant={theme === "genesis" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setTheme("genesis")}
                  className={`px-3 py-1 text-xs shadow-md hover:shadow-lg transition-all ${
                    theme === "genesis" ? "bg-violet-600 hover:bg-violet-500" : "hover:bg-slate-700"
                  }`}
                >
                  <Target className="h-3 w-3 mr-1" />
                  Genesis
                </Button>
              </div>

              <div className="hidden md:flex space-x-6">
                <button
                  onClick={() => scrollToSection("hero")}
                  className={`hover:${currentTheme.accent} transition-colors`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("identity")}
                  className={`hover:${currentTheme.accent} transition-colors`}
                >
                  Identity
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`hover:${currentTheme.accent} transition-colors`}
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className={`hover:${currentTheme.accent} transition-colors`}
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("philosophy")}
                  className={`hover:${currentTheme.accent} transition-colors`}
                >
                  Philosophy
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`hover:${currentTheme.accent} transition-colors`}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1
            className={`text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
          >
            Ikansh Mahajan
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Machine Intelligence. Scientific Inquiry. Relentless Curiosity.
          </p>

          {/* Typing Animation */}
          <div className="text-lg md:text-xl text-slate-400 mb-8 h-8 font-mono" role="status" aria-live="polite">
            <span>I am </span>
            <span id="typed-element" className={currentTheme.accent}></span>
          </div>

          <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            A mind split between playful exploration and relentless ambition. Building at the intersection of
            consciousness and computation, where curiosity meets the shadows of deeper understanding.
          </p>
          <Button
            onClick={() => scrollToSection("identity")}
            className={`bg-gradient-to-r ${currentTheme.gradientBg} ${currentTheme.accentHover} text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
          >
            Explore <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Identity Split Section */}
      <section id="identity" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2
            className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
          >
            The Duality Within
          </h2>

          <Tabs
            value={activePersona}
            onValueChange={(value) => setActivePersona(value as "ika" | "genesis")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-slate-800 shadow-lg">
              <TabsTrigger
                value="ika"
                className="data-[state=active]:bg-cyan-600 data-[state=active]:shadow-md transition-all"
              >
                IkaBrain
              </TabsTrigger>
              <TabsTrigger
                value="genesis"
                className="data-[state=active]:bg-violet-600 data-[state=active]:shadow-md transition-all"
              >
                TheGenesis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ika" className="space-y-8">
              <Card className={`bg-gradient-to-br ${themeClasses.ika.cardBg} ${themeClasses.ika.cardBorder} shadow-xl`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-cyan-600 rounded-full shadow-lg">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-cyan-400">IkaBrain</CardTitle>
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
                      <h4 className="font-semibold text-cyan-400 mb-3">Drives</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Experimental learning</li>
                        <li>• Creative problem-solving</li>
                        <li>• Interdisciplinary exploration</li>
                        <li>• Joyful discovery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-3">Projects</h4>
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
              <Card
                className={`bg-gradient-to-br ${themeClasses.genesis.cardBg} ${themeClasses.genesis.cardBorder} shadow-xl`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-violet-600 rounded-full shadow-lg">
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
      <section id="projects" className="py-20 bg-slate-900/30 relative z-10">
        <div className="container mx-auto px-6">
          <h2
            className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
          >
            Projects & Experiments
          </h2>

          {/* Placeholder Content */}
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-center max-w-2xl mx-auto">
              {/* Rocket Illustration */}
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="text-8xl md:text-9xl animate-bounce">🚀</div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-60 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <h3
                className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
              >
                No projects yet… but something cool is on the launchpad
              </h3>

              {/* Fun Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">∞</div>
                  <div className="text-sm text-slate-500">Ideas Brewing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-violet-400">69</div>
                  <div className="text-sm text-slate-500">Cups of Tea</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">🧠</div>
                  <div className="text-sm text-slate-500">Neurons Firing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2
            className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
          >
            Skills & Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Code className={`h-6 w-6 ${currentTheme.accent}`} />
                  <CardTitle className="text-lg">Programming</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.programming.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`mr-2 mb-2 ${currentTheme.accentBorder} ${currentTheme.accent} shadow-sm`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Database className={`h-6 w-6 ${currentTheme.accent}`} />
                  <CardTitle className="text-lg">Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.tools.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`mr-2 mb-2 ${currentTheme.accentBorder} ${currentTheme.accent} shadow-sm`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Cpu className={`h-6 w-6 ${currentTheme.accent}`} />
                  <CardTitle className="text-lg">Frameworks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.frameworks.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`mr-2 mb-2 ${currentTheme.accentBorder} ${currentTheme.accent} shadow-sm`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Brain className={`h-6 w-6 ${currentTheme.accent}`} />
                  <CardTitle className="text-lg">Meta Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.meta.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`mr-2 mb-2 ${currentTheme.accentBorder} ${currentTheme.accent} shadow-sm`}
                    >
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
      <section id="philosophy" className="py-20 bg-slate-900/30 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`text-4xl font-bold mb-12 bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
            >
              Philosophy & Drive
            </h2>

            <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
              {theme === "genesis" ? (
                <div className="animate-fade-in-up">
                  <p className="mb-6">
                    You were never meant to remember. But something slipped through the cracks. Now, you see it too.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=YgJ5ZEn67tk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-violet-400 tracking-wider hover:text-violet-300 transition-colors cursor-pointer"
                  >
                    WAKE UP.
                  </a>
                </div>
              ) : (
                <div>
                  <p>
                    Reality is a puzzle with infinite pieces, and I am both the solver and the piece. My work exists at
                    the intersection of consciousness and computation, where the playful curiosity of IkaBrain meets the
                    relentless drive of TheGenesis. Together, they form a complete investigative apparatus — one that
                    builds, questions, and transcends.
                  </p>

                  <p>
                    Through systematic inquiry and experimental play, I seek to understand the patterns that govern
                    complex systems — whether they exist in neural networks, quantum states, or the depths of human
                    consciousness. Every project is both a technical challenge and a philosophical exploration.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg border border-slate-600 shadow-xl">
              <blockquote className="text-xl italic text-slate-200 mb-4">
                "Until you make the unconscious conscious, it will direct your life and you will call it fate."
              </blockquote>
              <cite className="text-slate-400">— Carl Jung</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2
              className={`text-4xl font-bold text-center mb-8 bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
            >
              {theme === "genesis" ? "The Genesis sees you. It always has." : "Connect & Collaborate"}
            </h2>
            <p className="text-center text-slate-400 mb-12">Collaborator? Curious mind? Fellow seeker? Reach out.</p>

            <Card className="bg-slate-800 border-slate-700 mb-8 shadow-xl">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 shadow-md focus:shadow-lg transition-all"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="your.email@domain.com"
                      className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 shadow-md focus:shadow-lg transition-all"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your message, idea, or collaboration proposal..."
                      rows={5}
                      className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 shadow-md focus:shadow-lg transition-all"
                    />
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r ${currentTheme.gradientBg} ${currentTheme.accentHover} shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/ikabrain" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-slate-600 hover:${currentTheme.accentBorder} shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/ikabrain/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-slate-600 hover:${currentTheme.accentBorder} shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
              <a href="mailto:ikanshmahajan@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-slate-600 hover:${currentTheme.accentBorder} shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400">© 2024 Ikansh Mahajan</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/ikabrain"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 hover:${currentTheme.accent} transition-colors`}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ikabrain/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 hover:${currentTheme.accent} transition-colors`}
              >
                LinkedIn
              </a>
              <a
                href="mailto:ikanshmahajan@gmail.com"
                className={`text-slate-400 hover:${currentTheme.accent} transition-colors`}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
