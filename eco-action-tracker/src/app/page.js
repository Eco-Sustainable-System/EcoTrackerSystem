  "use client";
  import Link from 'next/link';
  import { Battery, Zap, Activity, Users, Award, TrendingUp, BarChart, Globe, Shield, Trophy, Menu, X, Star } from 'lucide-react';

  export default function HomePage() {


    const products = [
      {
        title: "EcoStep Power Generator",
        description: "Convert your daily steps into clean, renewable energy",
        icon: <Activity className="h-6 w-6 text-[#fdb713]" />,
        metric: "500W per day",
        price: "$299.99"
      },
      {
        title: "KineticFlow Doorway System",
        description: "Harness energy from every door opening in your space",
        icon: <Zap className="h-6 w-6 text-[#fdb713]" />,
        metric: "100W per use",
        price: "$199.99"
      },
      {
        title: "Motion-Power Fitness Equipment",
        description: "Turn your workout into watts with our smart gym gear",
        icon: <TrendingUp className="h-6 w-6 text-[#fdb713]" />,
        metric: "1kW per session",
        price: "$599.99"
      },
      {
        title: "KineticPlay Children's Area",
        description: "Let kids play while generating clean energy",
        icon: <Users className="h-6 w-6 text-[#fdb713]" />,
        metric: "2kW per hour",
        price: "$899.99"
      },
      {
        title: "EnergyHarvest Dance Floor",
        description: "Transform dance moves into electricity",
        icon: <Battery className="h-6 w-6 text-[#fdb713]" />,
        metric: "5kW per event",
        price: "$1,499.99"
      },
      {
        title: "PowerWalk Sidewalk Tiles",
        description: "Generate power with every step in public spaces",
        icon: <Award className="h-6 w-6 text-[#fdb713]" />,
        metric: "10kW per day",
        price: "$2,999.99"
      }
    ];

    const features = [
      {
        icon: <Shield className="h-8 w-8 text-[#fdb713]" />,
        title: "Secure Login System",
        description: "Multi-factor authentication keeps your energy data safe"
      },
      {
        icon: <Trophy className="h-8 w-8 text-[#fdb713]" />,
        title: "Achievement Badges",
        description: "Earn rewards as you reach energy generation milestones"
      },
      {
        icon: <BarChart className="h-8 w-8 text-[#fdb713]" />,
        title: "Real-Time Tracking",
        description: "Monitor your energy production with live updates"
      },
      {
        icon: <Globe className="h-8 w-8 text-[#fdb713]" />,
        title: "Community Impact",
        description: "Transforming your energy into a force for global sustainability"
      }
    ];

    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "Home User",
        content: "Thanks to EcoAction, my daily routine now powers my home. It's incredible!",
        impact: "2.5 kWh daily"
      },
      {
        name: "Tech Innovators Inc.",
        role: "Corporate Client",
        content: "Implementing EcoAction solutions reduced our energy costs by 40%.",
        impact: "500 kWh weekly"
      },
      {
        name: "Green City Council",
        role: "Municipal Partner",
        content: "Our city's parks now generate enough power for all street lighting.",
        impact: "10 MWh monthly"
      }
    ];
    const conversionSteps = [
      {
        icon: <Activity className="w-12 h-12 text-[#fdb713]" />,
        title: "Capture Motion",
        description: "Our advanced sensors detect and capture various forms of kinetic energy from your daily movements.",
      },
      {
        icon: <Zap className="w-12 h-12 text-[#fdb713]" />,
        title: "Convert Energy",
        description: "Proprietary technology efficiently converts kinetic energy into clean, usable electrical power.",
      },
      {
        icon: <Battery className="w-12 h-12 text-[#fdb713]" />,
        title: "Store & Utilize",
        description: "The generated electricity is stored in high-capacity batteries or directly powers your devices.",
      },
    ];
    
    return (
  <div className="bg-[#2D3134] min-h-screen mt-8">
    {/* Hero Section */}
    <header className="py-16 px-4 sm:px-6 lg:px-8 xl:px-0 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-[#FAF8ED] animate-fade-in">
              Power the Future with <span className="text-[#fdb713]">Every Move</span>
            </h1>
            <p className="text-lg mb-6 text-[#FAF8ED] animate-slide-up delay-200">
              Transform your daily movements into clean, sustainable energy. Join the kinetic revolution and be part of the solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#fdb713] text-[#2D3134] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 transform hover:scale-105 animate-slide-up delay-400">
                Get Started
              </button>
              <button className="border-2 border-[#fdb713] text-[#fdb713] px-8 py-3 rounded-full font-semibold hover:bg-[#fdb713] hover:text-[#2D3134] transition duration-300 transform hover:scale-105 animate-slide-up delay-500">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full bg-[#fdb713] bg-opacity-20 flex items-center justify-center animate-pulse">
              <Zap className="w-32 h-32 text-[#fdb713] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Impact Counter Section */}
    <section className="py-8 bg-[#FAF8ED]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-[#2D3134] mb-2 animate-count">1.5M kWh</h3>
            <p className="text-gray-600">Total Energy Generated</p>
          </div>
          <div className="p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-[#2D3134] mb-2 animate-count">50,000+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-[#2D3134] mb-2 animate-count">500 tons</h3>
            <p className="text-gray-600">CO2 Emissions Prevented</p>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section id="features" className="py-16 bg-[#2D3134]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#FAF8ED]">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#FAF8ED] rounded-lg p-6 transform hover:scale-105 transition duration-300 hover:shadow-xl">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#2D3134] text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Products Section */}
    <section id="products" className="py-16 bg-[#2D3134]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#FAF8ED]">
          Our Kinetic Energy Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-[#FAF8ED] rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="mb-4 flex justify-center">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#2D3134] text-center">{product.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[#2D3134]">{product.metric}</span>
                <span className="text-[#fdb713] font-bold">{product.price}</span>
              </div>
              <button className="mt-4 w-full bg-[#2D3134] text-[#FAF8ED] py-2 rounded-full hover:bg-opacity-90 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-16 bg-[#FAF8ED]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#2D3134]">
          From Motion to Power: Our Energy Conversion Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conversionSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="font-bold text-[#2D3134] text-xl mb-2 text-center">{step.title}</h3>
              <p className="text-gray-700 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-[#2D3134]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#FAF8ED]">Ready to Generate Change?</h2>
        <p className="text-lg mb-8 text-[#FAF8ED] max-w-2xl mx-auto">
          Join thousands of energy pioneers who are already powering their lives through movement.
        </p>
        <Link href="/register" className="bg-[#fdb713] text-[#2D3134] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
          Start Your Journey
        </Link>
      </div>
    </section>

    {/* Impact Section */}
    <section id="impact" className="py-16 bg-[#FAF8ED]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#2D3134]">
          Real-World Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#2D3134] text-[#FAF8ED] rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <p className="text-lg mb-4 text-center">"{testimonial.content}"</p>
              <div className="font-semibold text-lg text-center">{testimonial.name}</div>
              <div className="text-sm text-gray-400 mb-2 text-center">{testimonial.role}</div>
              <div className="text-sm text-[#fdb713] text-center">Impact: {testimonial.impact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
    );
  }