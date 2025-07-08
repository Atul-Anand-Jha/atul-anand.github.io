export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate ML Platform Engineer with 6 years of experience building enterprise-scale
              machine learning infrastructure. I specialize in designing end-to-end ML platforms that
              seamlessly integrate data pipelines, model training, deployment, and monitoring systems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From edge computing optimizations to cloud-native ML architectures, I've worked on every
              stage of the ML lifecycle. I believe in building robust, secure, and scalable systems
              that enable data scientists to focus on innovation while ensuring models perform reliably in production.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-600 mt-2">ML Models Deployed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">6+</h3>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                <p className="text-gray-600 mt-2">TB Data Processed</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-purple-100 to-blue-200 rounded-lg flex items-center justify-center shadow-lg">
              <i className="fas fa-brain text-8xl text-purple-600/70"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
