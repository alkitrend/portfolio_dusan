export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Dusan Radosavljevic</h3>
          <p className="text-gray-400 mb-6">Full Stack Developer based in Serbia</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-xl"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-gray-400 text-sm">
            <p>&copy; 2024 Dusan Radosavljevic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
