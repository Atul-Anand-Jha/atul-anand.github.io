export default function Projects() {
  const projects = [
    {
      title: "Enterprise ML Platform",
      description: "Built a comprehensive ML platform serving 50+ data scientists with automated model training, deployment, and monitoring capabilities.",
      technologies: ["Kubernetes", "MLflow", "Apache Airflow", "PostgreSQL", "React"],
      metrics: "99.9% uptime, 1000+ models deployed",
      category: "Platform Engineering"
    },
    {
      title: "Real-time Recommendation Engine",
      description: "Designed and implemented a high-performance recommendation system handling 1M+ requests per minute with sub-100ms latency.",
      technologies: ["Apache Kafka", "Redis", "TensorFlow", "Go", "MongoDB"],
      metrics: "< 100ms latency, 15% CTR improvement",
      category: "ML Systems"
    },
    {
      title: "Multi-Cloud MLOps Pipeline",
      description: "Created a vendor-agnostic MLOps pipeline supporting AWS, GCP, and Azure with automated CI/CD for ML models.",
      technologies: ["Terraform", "Docker", "GitHub Actions", "AWS SageMaker", "GCP AI Platform"],
      metrics: "50% faster deployment, 3 cloud providers",
      category: "DevOps"
    },
    {
      title: "Edge AI Optimization Framework",
      description: "Developed framework for deploying ML models on edge devices with 90% size reduction while maintaining accuracy.",
      technologies: ["TensorFlow Lite", "ONNX", "PyTorch Mobile", "C++", "ARM"],
      metrics: "90% model compression, edge deployment",
      category: "Edge Computing"
    },
    {
      title: "Fraud Detection System",
      description: "Built real-time fraud detection system processing 10M+ transactions daily with advanced ML algorithms.",
      technologies: ["Apache Spark", "Python", "XGBoost", "Apache Kafka", "Elasticsearch"],
      metrics: "95% accuracy, 10M+ daily transactions",
      category: "Applied ML"
    },
    {
      title: "Data Quality Monitoring",
      description: "Implemented comprehensive data quality monitoring system with automated alerting and drift detection.",
      technologies: ["Great Expectations", "Apache Airflow", "Prometheus", "Grafana", "Python"],
      metrics: "100% data coverage, automated monitoring",
      category: "Data Engineering"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow group">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="text-sm text-green-600 font-medium">
                <i className="fas fa-chart-line mr-2"></i>
                {project.metrics}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            <i className="fab fa-github mr-2"></i>
            View More Projects
          </a>
        </div>
      </div>
    </section>
  )
}
