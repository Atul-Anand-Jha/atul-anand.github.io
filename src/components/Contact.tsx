'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Using Web3Forms API for reliable email delivery
      const submitData = new FormData()
      submitData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY') // You'll need to get this from web3forms.com
      submitData.append('name', formData.name)
      submitData.append('email', formData.email)
      submitData.append('subject', formData.subject || 'Portfolio Contact Form')
      submitData.append('message', formData.message)
      submitData.append('to', 'atulanand.jha@gmail.com')

      // For demo purposes, let's simulate the submission
      // In production, you would uncomment the fetch call below
      
      /*
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      */

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Log the form data for demo
      console.log('Form submission:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Portfolio Contact Form',
        message: formData.message,
        to: 'atulanand.jha@gmail.com'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      setSubmitStatus('success')
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m always interested in discussing new opportunities, innovative ML projects,
              or collaborating on cutting-edge technology solutions. Let&apos;s connect!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-blue-600 w-6"></i>
                  <span className="ml-3 text-gray-600">atulanand.jha@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-blue-600 w-6"></i>
                  <span className="ml-3 text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-600 w-6"></i>
                  <span className="ml-3 text-gray-600">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Connect on Social</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex flex-col items-center group p-2 rounded-lg hover:bg-blue-50">
                    <i className="fab fa-linkedin text-2xl mb-1"></i>
                    <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex flex-col items-center group p-2 rounded-lg hover:bg-gray-50">
                    <i className="fab fa-github text-2xl mb-1"></i>
                    <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">GitHub</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors flex flex-col items-center group p-2 rounded-lg hover:bg-gray-50">
                    <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">X.com</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors flex flex-col items-center group p-2 rounded-lg hover:bg-green-50">
                    <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529.871 1.257 1.66 2.117 2.2C11.539 12.795 11 14.409 11 16.143c0 4.462 3.405 8.257 7.766 8.257 4.36 0 7.766-3.795 7.766-8.257 0-1.731-.54-3.342-1.681-4.525.86-.54 1.588-1.329 2.117-2.2v1.19c0 2.914 2.37 5.303 5.283 5.303V0h-2.738v7.112c-.002 1.406-1.143 2.546-2.547 2.546z"/>
                    </svg>
                    <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">Upwork</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors flex flex-col items-center group p-2 rounded-lg hover:bg-gray-50">
                    <i className="fab fa-medium text-2xl mb-1"></i>
                    <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">Medium</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors flex flex-col items-center group p-2 rounded-lg hover:bg-blue-50">
                    <i className="fab fa-kaggle text-2xl mb-1"></i>
                    <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">Kaggle</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors flex flex-col items-center group p-2 rounded-lg hover:bg-pink-50">
                    <i className="fab fa-instagram text-2xl mb-1"></i>
                    <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">Instagram</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-600 transition-colors flex flex-col items-center group p-2 rounded-lg hover:bg-red-50">
                    <i className="fab fa-youtube text-2xl mb-1"></i>
                    <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    There was an error sending your message. Please try again or contact me directly at atulanand.jha@gmail.com
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 border-t border-gray-200 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            &copy; 2025 Atul Anand - ML Platform Engineer. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
