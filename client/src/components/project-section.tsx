export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my latest work and the impact it has made
          </p>
        </div>

        <div className="space-y-12">
          {/* Uradi-Zaradi Project */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl animate-slide-up">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <i className="fas fa-tasks text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary">
                      Uradi-Zaradi
                    </h3>
                    <p className="text-primary font-medium">
                      Task-Based Reward Platform
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  A comprehensive task-based platform connecting individuals with micro-job
                  opportunities. Built a scalable system with user wallets, role-based
                  dashboards, and automated payouts that successfully onboarded over{" "}
                  <strong>5,000 users in the first 3 months</strong>.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary">5,000+</div>
                    <div className="text-sm text-gray-600">Users Onboarded</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-accent">MVP</div>
                    <div className="text-sm text-gray-600">Successfully Launched</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>
                      User wallet integration & payout automation
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>
                      Role-based dashboards (User/Admin)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>
                      Mobile-responsive frontend
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>
                      RESTful API architecture
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Laravel
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    React.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    MySQL
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    JWT Auth
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://uradi-zaradi.rs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Visit Live Site
                  </a>
                  <button className="border-2 border-primary hover:bg-primary hover:text-white text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    <i className="fab fa-github mr-2"></i>
                    View Code
                  </button>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Task management platform interface with dashboard analytics"
                  className="rounded-2xl shadow-xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* ChargeGo Project */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl overflow-hidden shadow-2xl animate-slide-up">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg mr-4">
                    <i className="fas fa-charging-station text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary">
                      ChargeGo
                    </h3>
                    <p className="text-green-600 font-medium">
                      EV Charging Station Finder
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  ChargeGo allows EV users to find, book, and pay for nearby charging stations. 
                  I designed a user-friendly web app with real-time map updates, station 
                  availability, and secure payment options. Built an admin backend for station 
                  owners to manage schedules and analytics. The platform streamlined{" "}
                  <strong>EV charging for hundreds of early adopters</strong>.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600">Live</div>
                    <div className="text-sm text-gray-600">Platform Status</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-accent">Hundreds</div>
                    <div className="text-sm text-gray-600">Early Adopters</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>
                      Real-time map updates & station availability
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>
                      Booking system with secure payments
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>
                      Admin dashboard for station owners
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>
                      Analytics and schedule management
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Laravel
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    React.js
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Google Maps API
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Stripe
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Tailwind CSS
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chargego.rs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Visit Live Site
                  </a>
                  <button className="border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    <i className="fab fa-github mr-2"></i>
                    View Code
                  </button>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Modern electric vehicle charging station with mobile app interface"
                  className="rounded-2xl shadow-xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
