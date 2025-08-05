export const siteConfig = {
  name: "Alex Chen",
  title: "Senior Full-Stack Developer & Tech Lead",
  description: "Building cutting-edge web applications with modern technologies. Specialized in React, Node.js, and cloud architecture.",
  url: "https://alexchen.dev",
  ogImage: "https://alexchen.dev/og.jpg",
  links: {
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
    email: "alex@alexchen.dev"
  }
}

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" }
]

export const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "Next.js", level: 92, icon: "⚡" },
      { name: "Tailwind CSS", level: 88, icon: "🎨" },
      { name: "Vue.js", level: 85, icon: "💚" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "PostgreSQL", level: 88, icon: "🐘" },
      { name: "Redis", level: 82, icon: "🔴" },
      { name: "Docker", level: 85, icon: "🐳" }
    ]
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", level: 88, icon: "☁️" },
      { name: "Kubernetes", level: 80, icon: "⚓" },
      { name: "Terraform", level: 75, icon: "🏗️" },
      { name: "CI/CD", level: 85, icon: "🔄" },
      { name: "Monitoring", level: 82, icon: "📊" }
    ]
  }
]

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, payment processing, and analytics dashboard.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    github: "https://github.com/alexchen/ecommerce",
    live: "https://ecommerce-demo.alexchen.dev",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights and predictive analytics.",
    image: "/projects/analytics.jpg",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "AWS"],
    github: "https://github.com/alexchen/analytics",
    live: "https://analytics.alexchen.dev",
    featured: true
  },
  {
    id: 3,
    title: "Team Collaboration Tool",
    description: "Real-time collaboration platform with video conferencing, file sharing, and project management.",
    image: "/projects/collaboration.jpg",
    technologies: ["Vue.js", "Socket.io", "WebRTC", "MongoDB", "Docker"],
    github: "https://github.com/alexchen/collaboration",
    live: "https://collab.alexchen.dev",
    featured: false
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "/projects/banking.jpg",
    technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "AWS"],
    github: "https://github.com/alexchen/banking",
    live: "https://banking.alexchen.dev",
    featured: false
  }
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content: "Alex is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are outstanding.",
    avatar: "/testimonials/sarah.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Developer at StartupXYZ",
    content: "Working with Alex was a game-changer for our project. His expertise in modern web technologies helped us build a scalable solution.",
    avatar: "/testimonials/michael.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager at InnovateLab",
    content: "Alex's technical leadership and communication skills made our complex project successful. He's a true professional.",
    avatar: "/testimonials/emily.jpg",
    rating: 5
  }
]

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Node.js",
    excerpt: "Learn how to design and implement microservices architecture that can handle millions of requests...",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Node.js", "Microservices", "Architecture"]
  },
  {
    id: 2,
    title: "Optimizing React Performance in 2024",
    excerpt: "Advanced techniques for improving React application performance, including code splitting and lazy loading...",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["React", "Performance", "Optimization"]
  },
  {
    id: 3,
    title: "Security Best Practices for Modern Web Apps",
    excerpt: "Comprehensive guide to implementing security measures in your web applications...",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Security", "Web Development", "Best Practices"]
  }
]