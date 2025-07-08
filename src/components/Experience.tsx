'use client'

export default function Experience() {
  // Calculate experience from January 1, 2019 to current date
  const getExperience = () => {
    const startDate = new Date('2019-01-01')
    const currentDate = new Date()
    
    // Calculate total days
    const totalDays = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    
    // Calculate years and remaining days
    const years = Math.floor(totalDays / 365.25) // Using 365.25 to account for leap years
    const remainingDays = totalDays - (years * 365.25)
    
    // If remaining days are within ±30 days of a full year, show exact years
    // Otherwise show n+ years
    if (Math.abs(remainingDays) <= 30) {
      return `${years} years`
    } else {
      return `${years}+ years`
    }
  }

  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior ML Platform Engineer",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      description: "Leading the design and implementation of enterprise-scale ML platforms serving 50+ data scientists. Built automated model training, deployment, and monitoring systems achieving 99.9% uptime.",
      achievements: [
        "Designed and deployed ML platform handling 1000+ models in production",
        "Reduced model deployment time by 75% through automated CI/CD pipelines",
        "Implemented real-time monitoring system reducing model drift detection time by 90%",
        "Led team of 8 engineers across ML infrastructure and DevOps"
      ],
      technologies: ["Kubernetes", "MLflow", "Apache Airflow", "AWS SageMaker", "Terraform"]
    },
    {
      id: 2,
      company: "DataFlow Industries",
      position: "ML Platform Engineer",
      duration: "Jun 2020 - Dec 2021",
      location: "Austin, TX",
      description: "Developed and maintained ML infrastructure for real-time recommendation systems and fraud detection models. Focused on scalability, performance optimization, and system reliability.",
      achievements: [
        "Built real-time recommendation engine handling 1M+ requests per minute",
        "Implemented fraud detection system processing 10M+ daily transactions",
        "Optimized model serving infrastructure reducing latency by 60%",
        "Established MLOps best practices and monitoring standards"
      ],
      technologies: ["Apache Kafka", "Redis", "TensorFlow", "Docker", "Python", "Go"]
    },
    {
      id: 3,
      company: "StartupAI Inc.",
      position: "ML Engineer",
      duration: "Jan 2019 - May 2020",
      location: "Remote",
      description: "Worked on end-to-end ML projects from data preprocessing to model deployment. Collaborated with cross-functional teams to deliver AI-powered solutions for various business domains.",
      achievements: [
        "Developed computer vision models for automated quality inspection",
        "Built NLP pipeline for customer sentiment analysis",
        "Created edge AI framework reducing model size by 90%",
        "Implemented A/B testing framework for ML model evaluation"
      ],
      technologies: ["PyTorch", "scikit-learn", "Apache Spark", "TensorFlow Lite", "ONNX"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600">
            {getExperience()} of building scalable ML systems and platforms
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-blue-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-20">
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600">
                        <span className="font-semibold text-blue-600">{exp.company}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{exp.duration}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {getExperience()}
              </h3>
              <p className="text-gray-600">Total Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">3</h3>
              <p className="text-gray-600">Companies Worked</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Team Members Led</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
