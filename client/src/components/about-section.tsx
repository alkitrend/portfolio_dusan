export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">About Me</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                I'm a passionate Full Stack Developer based in{" "}
                <strong>Lazarevac, Serbia</strong>, with expertise in building modern,
                scalable web applications. My journey in software development combines
                creativity with technical precision to deliver exceptional user
                experiences.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I
                specialize in <strong>React.js</strong>, <strong>Laravel</strong>, and
                modern JavaScript frameworks. I'm particularly passionate about creating
                efficient, user-centric solutions that solve real-world problems.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to
                open-source projects, and staying up-to-date with the latest industry
                trends and best practices.
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <i className="fas fa-map-marker-alt text-primary"></i>
              <span className="text-gray-600">
                Rudarsko Naselje 022, Lazarevac, Serbia
              </span>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <img
              src="/dusan-photo.jpg"
              alt="Dusan Radosavljevic - Professional developer portrait"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-lg animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-sm">Users Onboarded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
