import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Navbar } from "@/components/Navbar";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import type { InquiryInput } from "@shared/routes";
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Award, 
  Smile 
} from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  const mutation = useCreateInquiry();
  
  const form = useForm<InquiryInput>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: InquiryInput) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  const services = [
    {
      title: "Interior Designing",
      description: "Complete interior solutions that blend aesthetics with functionality. We transform spaces into living works of art.",
      // living room interior modern
      imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Modular Kitchen",
      description: "Ergonomic and stylish modular kitchens designed for the modern chef. Maximize space with smart storage solutions.",
      // modern kitchen design
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Wood Works",
      description: "Custom carpentry and woodwork that adds warmth and character. From intricate carvings to modern minimalist furniture.",
      // carpentry wood works
      imageUrl: "https://images.unsplash.com/photo-1601058268499-e52642d18d89?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Wardrobes",
      description: "Spacious and elegant wardrobe designs tailored to your storage needs. Sliding, walk-in, and hinged options available.",
      // wardrobe bedroom closet
      imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Electrical Works",
      description: "Safe and strategic electrical planning and installation. Lighting design that sets the perfect mood for every room.",
      // lighting interior design
      imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1000&auto=format&fit=crop"
    },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experienced Team",
      description: "Skilled craftsmen and designers with years of expertise."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Quality Materials",
      description: "We source only the finest materials for lasting durability."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery",
      description: "We value your time and commit to strict project timelines."
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Customer Satisfaction",
      description: "Your vision is our priority. We work until you are delighted."
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* luxury living room interior */}
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
            alt="Interior Design Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 tracking-tight"
          >
            Interiors Vision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light tracking-wide mb-10 max-w-2xl mx-auto text-white/90"
          >
            "Simplicity beats complexity"
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ScrollLink to="contact" smooth={true} offset={-80}>
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                Get a Quote
              </Button>
            </ScrollLink>
            <ScrollLink to="services" smooth={true} offset={-80}>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg bg-white/10 border-white/40 text-white hover:bg-white hover:text-foreground backdrop-blur-sm">
                Our Services
              </Button>
            </ScrollLink>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader 
              title="Our Philosophy" 
              subtitle="We believe that great design should be invisible. It should feel natural, comfortable, and effortlessly beautiful."
              center={false}
            />
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At Interiors Vision, we don't just fill rooms with furniture; we create atmospheres. Our mission is to translate your personality into a tangible living space.
              </p>
              <p>
                Guided by our motto <span className="text-primary font-medium italic">"Simplicity beats complexity"</span>, we strip away the unnecessary to reveal the essence of your home. Whether it's a cozy bedroom or a bustling kitchen, we focus on clean lines, thoughtful layouts, and premium materials.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-secondary rounded-2xl -z-10 transform rotate-2" />
            {/* minimal interior design detail */}
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" 
              alt="Design Philosophy" 
              className="rounded-xl shadow-xl w-full object-cover h-[500px]"
            />
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" background="muted">
        <SectionHeader 
          title="Our Services" 
          subtitle="From concept to completion, we offer comprehensive interior solutions tailored to your lifestyle."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section id="why-us">
        <SectionHeader 
          title="Why Choose Us" 
          subtitle="We bring professionalism, creativity, and reliability to every project we undertake."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl hover:bg-secondary/50 transition-colors"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="dark" className="text-white">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader 
              title="Get in Touch" 
              subtitle="Ready to transform your space? Contact us for a consultation or quote."
              center={false}
              light={true}
            />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Phone</h4>
                  <p className="text-white/70 hover:text-primary transition-colors">
                    <a href="tel:9966665438">+91 99666 65438</a>
                  </p>
                  <p className="text-white/70 hover:text-primary transition-colors">
                    <a href="tel:7036665438">+91 70366 65438</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Email</h4>
                  <p className="text-white/70 hover:text-primary transition-colors">
                    <a href="mailto:interiorsvision21@gmail.com">interiorsvision21@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Location</h4>
                  <p className="text-white/70">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl text-foreground">
            <h3 className="text-2xl font-bold font-display mb-6">Send us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="h-12 bg-secondary/30" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone Number" {...field} className="h-12 bg-secondary/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email Address" {...field} className="h-12 bg-secondary/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project requirements..." 
                          className="min-h-[120px] bg-secondary/30 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full h-12 text-lg font-medium"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <img 
              src="/logo.jpg" 
              alt="Interiors Vision Logo" 
              className="h-16 w-16 object-contain mb-6 hover:scale-105 transition-transform"
            />
            <h2 className="text-2xl font-bold font-display mb-2">Interiors Vision</h2>
            <p className="text-primary italic mb-6">"Simplicity beats complexity"</p>
            <div className="flex justify-center space-x-6 mb-8 text-muted-foreground">
              <ScrollLink to="home" smooth={true} className="cursor-pointer hover:text-primary">Home</ScrollLink>
              <ScrollLink to="about" smooth={true} className="cursor-pointer hover:text-primary">About</ScrollLink>
              <ScrollLink to="services" smooth={true} className="cursor-pointer hover:text-primary">Services</ScrollLink>
              <ScrollLink to="contact" smooth={true} className="cursor-pointer hover:text-primary">Contact</ScrollLink>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Interiors Vision. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919966665438"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
