import React, { useState } from 'react';
import { Menu, X, Heart, Users, Target, Shield, CheckCircle, Lightbulb, Mail, Phone, MapPin, Facebook, Twitter, Instagram, ChevronDown, Wallet, Building2, Copy, } from 'lucide-react';
import {  FaWhatsapp, FaTiktok } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

const handleCopy = (text: string, key: string) => {
  navigator.clipboard.writeText(text).then(() => {
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  });
};

const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Mothers of Hope Organisation</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollTo('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollTo('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About Us</button>
              <button onClick={() => scrollTo('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollTo('team')} className="text-gray-700 hover:text-blue-600 transition-colors">Team</button>
              <button onClick={() => scrollTo('support')} className="text-gray-700 hover:text-blue-600 transition-colors">Support Us</button>
              <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <button onClick={() => scrollTo('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</button>
                <button onClick={() => scrollTo('about')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">About Us</button>
                <button onClick={() => scrollTo('projects')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
                <button onClick={() => scrollTo('team')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Team</button>
                <button onClick={() => scrollTo('support')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Support Us</button>
                <button onClick={() => scrollTo('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-amber-50 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building Brighter
                <span className="text-blue-600 block">Futures Together</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                We are a community-driven organisation committed to fostering self-resilience equipping children and disadvantaged individuals with the skills, knowledge and confidence to shape their Own futures.

              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollTo('about')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                >
                  Learn More
                </button>
                <button
                  onClick={() => scrollTo('support')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    Donate Now
              </button>

              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-green-200 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="/logo.jpg" 
                  alt="Community volunteers working together"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
  <div className="flex items-center space-x-2">
    <Users className="w-6 h-6 text-green-600" /> {/* smaller icon */}
    <div>
      <p className="text-lg font-bold text-gray-900">500+</p> {/* smaller text */}
      <p className="text-xs text-gray-600">Lives Impacted</p>
    </div>
  </div>
</div>


            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Mothers of Hope Organisation</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Founded in 2025, Mothers of Hope Organisation emerged from a shared vision of community leaders who recognized the need for 
              sustainable, locally-driven development programs that address the root causes of social challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-7 h-7 text-blue-600 mr-3" />
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Self correction/ Reasoning for future.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="w-7 h-7 text-green-600 mr-3" />
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where every child regardless of their past circumstances is cherished safe and empowered to reach their full potential, thriving within supportive families and communities.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { icon: Heart, title: 'Compassion', description: 'We approach every child and individual with deep empathy,kindness and understanding recognizing their inherent worth and potential ' },
                { icon: Shield, title: 'Dignity', description: 'we uphold the fundamental human dignity of every person we serve ensuring they are treated with respect,provided with a safe environment and empowered to lead fulfilling lives ' },
                { icon: Users, title: 'Empowerment', description: 'Committed to fostering self-resilience equipping children and disadvantaged individuals with the skills, knowledge and confidence to shape their Own futures.' },
                { icon: Lightbulb, title: 'Hope', description: 'We believe in the transformative power of hope, inspiring a belief in a brighter future and providing the super necessary to achieve it.' },
                { icon: CheckCircle, title: 'Integrity', description: 'We operate with transparency, honesty and responsibility in all our actions ensuring that resources are utilized effectively and ethically for the benefit of those we serve.' }
              ].map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Impact Projects</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how we're making a difference through targeted programs that address critical community needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Education Excellence Program',
                description: 'Providing tutoring, scholarships, and educational resources to ensure every child has access to quality learning opportunities.',
                image: '/education.jpg',
                color: 'blue'
              },
              {
                title: 'Community Health Initiative',
                description: 'Mobile clinics and health education programs bringing essential healthcare services directly to underserved communities.',
                image: '/health.jpg',
                color: 'green'
              },
              {
                title: 'Feeding Program',
                description: 'Weekly meal distributions and nutrition workshops to combat food insecurity and promote healthy eating habits among children and families.',
                image: '/feeding.jpg',
                color: 'amber'
              },
              {
                title: 'Counseling and Support Services',
                description: 'Offering trauma-informed counseling and emotional support to help children and families heal and thrive.',
                image: '/support.jpg',
                color: 'purple'
              },
              {
                title: 'Environmental Conservation',
                description: 'Community clean-up drives, tree planting, and sustainability education to promote a healthier environment.',
                image: '/conservation.jpg',
                color: 'teal'
              },
              {
                title: 'Empowerment',
                description: 'Committed to fostering self-resilience equipping children and disadvantaged individuals with the skills, knowledge and confidence to shape their Own futures.',
                image: '/empowerment.jpg',
                color: 'red'
              }

            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 bg-${project.color}-600 text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    Active
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our dedicated team brings together diverse expertise and a shared commitment to community transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Grace W Mathangani',
                role: 'Executive Director',
                image: '/executiveDirector.jpg',
                bio: 'Provides strategic leadership and vision for the organization, ensures compliance with policies, and represents the CBO in partnerships and community engagements.'
              },
              {
                name: 'Nancy Gachugu',
                role: 'Deputy Director',
                image: '/NancyGachugu.jpg',
                bio: 'Supports the Executive Director in managing daily operations, program implementation, and stakeholder relations.'
              },
              {
                name: 'Lydia Kiilu',
                role: 'Community Outreach Coordinator',
                image: '/lydia.jpg',
                bio: 'Passionate advocate for community engagement and volunteer coordination.'
              },
              {
                name: 'Abraham Wekesa',
                role: 'Member',
                image: '/wekesa.jpg',
                bio: 'Committed to driving positive change through grassroots initiatives and community development.'
              }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Us */}
      {/* Support Us (Donations) */}
<section id="support" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Support Our Mission</h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Your generosity fuels education, health, and empowerment programs. Donate via M-Pesa Paybill or Bank transfer below.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* M-Pesa Paybill */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-3">
            <Wallet className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">M-Pesa Paybill</h3>
        </div>

        {/* TODO: Replace with your real numbers */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-gray-700">
              Business Number: <span className="font-semibold">247247</span>
            </div>
            <button
              onClick={() => handleCopy('123456', 'paybill-business')}
              className="flex items-center text-sm px-3 py-1 rounded-lg border hover:bg-gray-50"
              aria-label="Copy Business Number"
            >
              <Copy className="w-4 h-4 mr-1" />
              {copied === 'paybill-business' ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-gray-700">
              Account (Name/No.): <span className="font-semibold">671590</span>
            </div>
            <button
              onClick={() => handleCopy('Mothers of Hope', 'paybill-account')}
              className="flex items-center text-sm px-3 py-1 rounded-lg border hover:bg-gray-50"
              aria-label="Copy Paybill Account"
            >
              <Copy className="w-4 h-4 mr-1" />
              {copied === 'paybill-account' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Tip: In M-Pesa, choose <span className="font-medium">Lipa na M-Pesa → Paybill</span>, then enter the Business Number followed by the Account details.
        </p>
      </div>

      {/* Bank Account */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-3">
            <Building2 className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Bank Transfer</h3>
        </div>

        {/* TODO: Replace with your real bank details */}
        <div className="space-y-3">
          <div className="text-gray-700">
            Bank: <span className="font-semibold">Equity Bank</span>
          </div>

          <div className="text-gray-700">
            Account Name: <span className="font-semibold">Mothers of Hope Organization(CBO)</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-gray-700">
              Account Number: <span className="font-semibold">0650186671590</span>
            </div>
            <button
              onClick={() => handleCopy('0123456789', 'bank-account')}
              className="flex items-center text-sm px-3 py-1 rounded-lg border hover:bg-gray-50"
              aria-label="Copy Account Number"
            >
              <Copy className="w-4 h-4 mr-1" />
              {copied === 'bank-account' ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="text-gray-700">
            Branch: <span className="font-semibold">Nairobi CBD</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Thank you for your support! Every contribution helps us create lasting change.
        </p>
      </div>
    </div>

    {/* Optional: Little note about receipts */}
    <div className="mt-10 text-center text-gray-600">
      After donating, you can email your confirmation to <span className="font-medium">mothersofhopeorganisation@gmail.com</span> for a receipt.
    </div>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to make a difference? Contact us to learn more about our programs or explore partnership opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how you'd like to get involved or ask any questions"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">mothersofhopeorganisation@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">+254757530219</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Komarock Market, Nairobi.</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/25457530219" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaWhatsapp className="w-11 h-11" />
                  </a>
                  <a href="https://www.tiktok.com/@mothersofhope?_t=ZM-8z2EGpfooVS&_r=1" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                    <FaTiktok className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Mothers of Hope Organisation</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building brighter futures through community empowerment, education, and sustainable development programs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollTo('about')} className="block text-gray-400 hover:text-white transition-colors">About Us</button>
                <button onClick={() => scrollTo('projects')} className="block text-gray-400 hover:text-white transition-colors">Our Projects</button>
                <button onClick={() => scrollTo('team')} className="block text-gray-400 hover:text-white transition-colors">Team</button>
                <button onClick={() => scrollTo('support')} className="block text-gray-400 hover:text-white transition-colors">Support Us</button>
                <button onClick={() => scrollTo('contact')} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Nairobi</p>
                <p>Komarock Market, Nairobi.</p>
                <p>mothersofhopeorganisation@gmail.com</p>
                <p>+254757530219</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Mothers of Hope Organisation. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/25457530219" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@mothersofhope?_t=ZM-8z2EGpfooVS&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;