
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { GithubIcon, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      await emailjs.send(
        'service_5z0w1j2',  // Service ID
        'template_i8kb4gg', // Template ID
        templateParams,
        '8JPALeYsdyXdGwrxz'  // Public key
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "charank0515@gmail.com",
      link: "mailto:charank0515@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9493405383",
      link: "tel:+919493405383"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      link: "https://maps.google.com/?q=Hyderabad,Telangana,India"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Charan Konkati",
      link: "https://www.linkedin.com/in/charan-konkati-98910a25a/"
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "Charan Konkati",
      link: "https://github.com/Charan0k"
    }
  ];

  const services = [
    "Web Development",
    "UI & UX Design",
    "Backend Development",
    "Application Development",
    "Sentiment Analysis Tools",
    "Frontend Development",
    "Data Analysis and Automation Scripts"
  ];

  return (
    <section id="contact" className="py-20 bg-[#0a0d16]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-[#8A63FF] to-[#3E92CC] bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8A63FF] to-[#3E92CC] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-[#131629]/50 border border-[#8A63FF]/20 rounded-xl p-8 hover:border-[#8A63FF]/40 transition-all transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-300 block">Name</label>
                  <Input 
                    id="name"
                    placeholder="Your Name"
                    className="bg-[#0c101e] border-[#8A63FF]/30 placeholder:text-gray-500 focus:border-[#8A63FF] transition-colors" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-300 block">Email</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-[#0c101e] border-[#8A63FF]/30 placeholder:text-gray-500 focus:border-[#8A63FF] transition-colors" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-gray-300 block">Subject</label>
                <Input 
                  id="subject"
                  placeholder="Subject"
                  className="bg-[#0c101e] border-[#8A63FF]/30 placeholder:text-gray-500 focus:border-[#8A63FF] transition-colors" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 block">Message</label>
                <Textarea 
                  id="message"
                  placeholder="Your Message"
                  className="bg-[#0c101e] border-[#8A63FF]/30 placeholder:text-gray-500 focus:border-[#8A63FF] transition-colors min-h-[150px]" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#8A63FF] to-[#3E92CC] hover:opacity-90 py-6 transition-all transform hover:scale-[1.02] disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8A63FF] to-[#3E92CC] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={20} className="text-white" />
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white group-hover:text-[#8A63FF] transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-12 backdrop-blur-md bg-[#131629]/50 border border-[#8A63FF]/20 rounded-xl p-6 hover:border-[#8A63FF]/40 transition-all transform hover:-translate-y-1">
              <h4 className="text-lg font-semibold text-white mb-4">Services I Offer</h4>
              <div className="flex flex-wrap gap-3">
                {services.map((service, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-2 bg-[#0c101e] rounded-full text-sm text-white border border-[#8A63FF]/30 hover:border-[#8A63FF] transition-colors hover:bg-[#131629]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
