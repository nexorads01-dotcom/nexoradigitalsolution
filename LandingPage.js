import React, { useState } from 'react';
import { 
  Share2, Globe, TrendingUp, Palette, Award, Target, DollarSign, 
  Headphones, Zap, Search, Lightbulb, Code, Rocket, 
  ArrowRight, Check, Star, Menu, X, ChevronRight, Mail, Phone, MapPin
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { services, whyChooseUs, processSteps, pricingPlans, testimonials, trustedBrands } from '../mock';

const iconMap = {
  'share-2': Share2,
  'globe': Globe,
  'trending-up': TrendingUp,
  'palette': Palette,
  'award': Award,
  'target': Target,
  'dollar-sign': DollarSign,
  'headphones': Headphones,
  'zap': Zap,
  'search': Search,
  'lightbulb': Lightbulb,
  'code': Code,
  'rocket': Rocket
};

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav-header">
        <div className="nav-container">
          <div className="nav-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_digital-solutions-75/artifacts/994dloc7_N_20251016_114851_0001.png" 
              alt="Nexora Digital Solutions" 
              className="logo-img"
            />
          </div>
          
          <div className="nav-links-desktop">
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('process')} className="nav-link">Process</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
            <Button onClick={() => scrollToSection('contact')} className="cta-button">Contact Us</Button>
          </div>

          <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Services</button>
            <button onClick={() => scrollToSection('process')} className="mobile-nav-link">Process</button>
            <button onClick={() => scrollToSection('pricing')} className="mobile-nav-link">Pricing</button>
            <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">Testimonials</button>
            <Button onClick={() => scrollToSection('contact')} className="cta-button w-full">Contact Us</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Grow Your Brand Digitally with <span className="text-gradient">Nexora Digital Solutions</span>
            </h1>
            <p className="hero-subtitle">
              We help businesses scale with powerful social media marketing, stunning websites, and result-driven digital strategies.
            </p>
            <div className="hero-buttons">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="cta-button cta-button-large">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button onClick={() => scrollToSection('services')} variant="outline" size="lg" className="secondary-button">
                View Our Services
              </Button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <TrendingUp size={120} className="hero-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <p className="trust-text">Trusted by startups and businesses across Sri Lanka and beyond</p>
        <div className="trust-brands">
          {trustedBrands.map((brand, index) => (
            <span key={index} className="trust-badge">{brand}</span>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              Comprehensive digital solutions to elevate your brand
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="service-card">
                  <CardHeader>
                    <div className="service-icon">
                      <Icon size={32} />
                    </div>
                    <CardTitle className="service-card-title">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="service-card-description">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-container">
          <div className="why-grid">
            <div className="why-content">
              <h2 className="section-title">Why Choose Nexora?</h2>
              <p className="section-description">
                We combine expertise, creativity, and dedication to deliver exceptional results for your business.
              </p>
              <div className="why-list">
                {whyChooseUs.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={item.id} className="why-item">
                      <div className="why-icon">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="why-item-title">{item.title}</h3>
                        <p className="why-item-description">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="why-image">
              <div className="why-image-placeholder">
                <Award size={120} className="why-placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">How We Work</h2>
            <p className="section-description">
              A proven process to ensure your success
            </p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.id} className="process-step">
                  <div className="process-step-number">{index + 1}</div>
                  <div className="process-step-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-description">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <ChevronRight className="process-arrow" size={24} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Flexible Pricing Plans</h2>
            <p className="section-description">
              Choose the perfect plan for your business needs
            </p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <Card key={plan.id} className={`pricing-card ${plan.recommended ? 'pricing-card-recommended' : ''}`}>
                {plan.recommended && <div className="recommended-badge">Most Popular</div>}
                <CardHeader>
                  <CardTitle className="pricing-card-name">{plan.name}</CardTitle>
                  <div className="pricing-card-price">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">/{plan.period.split(' ')[1]}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="pricing-features">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="pricing-feature">
                        <Check size={18} className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('contact')} 
                    className={plan.recommended ? 'cta-button w-full mt-6' : 'secondary-button w-full mt-6'}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Real results from real businesses
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card">
                <CardContent className="testimonial-content">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.testimonial}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="testimonial-name">{testimonial.name}</p>
                      <p className="testimonial-business">{testimonial.business}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Take Your Business to the Next Level?</h2>
          <p className="cta-description">
            Let's work together to create digital solutions that drive real results
          </p>
          <Button onClick={() => scrollToSection('contact')} size="lg" className="cta-button cta-button-large">
            Contact Nexora Today <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-description">
                Ready to start your digital journey? Contact us today and let's discuss how we can help grow your business.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <Mail size={24} className="contact-icon" />
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">hello@nexoradigital.com</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <Phone size={24} className="contact-icon" />
                  <div>
                    <p className="contact-label">WhatsApp</p>
                    <p className="contact-value">+94 77 123 4567</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <MapPin size={24} className="contact-icon" />
                  <div>
                    <p className="contact-label">Location</p>
                    <p className="contact-value">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    placeholder="+94 77 123 4567"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="form-input"
                  />
                </div>
                <Button type="submit" className="cta-button w-full">
                  Send Message <ArrowRight className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img 
                src="https://customer-assets.emergentagent.com/job_digital-solutions-75/artifacts/994dloc7_N_20251016_114851_0001.png" 
                alt="Nexora Digital Solutions" 
                className="footer-logo"
              />
              <p className="footer-description">
                Your trusted partner for digital growth and innovation. We transform businesses through creative solutions and data-driven strategies.
              </p>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <button onClick={() => scrollToSection('services')} className="footer-link">Services</button>
              <button onClick={() => scrollToSection('process')} className="footer-link">Process</button>
              <button onClick={() => scrollToSection('pricing')} className="footer-link">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Services</h4>
              <p className="footer-link">Social Media Marketing</p>
              <p className="footer-link">Website Development</p>
              <p className="footer-link">Digital Marketing</p>
              <p className="footer-link">Branding & Creative</p>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Connect</h4>
              <p className="footer-link">Facebook</p>
              <p className="footer-link">Instagram</p>
              <p className="footer-link">LinkedIn</p>
              <p className="footer-link">Twitter</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Nexora Digital Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
