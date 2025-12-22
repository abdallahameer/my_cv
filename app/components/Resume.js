export default function Resume({ id }) {
  return (
    <section id={id} className="scroll-mt-[80px]">
      <div className="w-full flex flex-col gap-20">
        <div className="w-full flex justify-center">
          <p className="text-5xl font-bold">Resume</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold">Experience</h1>
            </div>
            <div className="flex flex-col gap-5 pl-7 border-l-2 border-[#8487bf]">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg">
                  Frontend Developer — Jaras.io, Saudi Arabia (Aug 2023 – Oct
                  2025)
                </p>
                <p className=" opacity-80">
                  Core member of the frontend development team for Jaras hotel
                  management platform.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold">Education</h1>
            </div>
            <div className="flex flex-col gap-5 pl-7 border-l-2 border-[#8487bf]">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg">
                  Bachelor of Computer Science – Arab Open University (Currently
                  Enrolled)
                </p>
                <p className=" opacity-80">
                  Studying core computer science concepts including programming
                  fundamentals, data structures, algorithms, and software
                  development principles.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold">Courses & Certificates</h1>
            </div>
            <div className="flex flex-col gap-5 pl-7 border-l-2 border-[#8487bf]">
              <div className="flex flex-col gap-5   ">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg">
                    React - The Complete Guide 2025 (incl. Next.js, Redux)
                  </p>
                  <p className=" opacity-80">
                    Comprehensive training in React, covering modern React
                    features, hooks, state management, Next.js, Redux, and
                    building scalable real-world applications.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5  ">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg">
                    freeCodeCamp - Front End Development Libraries Certification
                  </p>
                  <p className=" opacity-80">
                    Completed comprehensive training in front-end development
                    libraries, including React, Redux, Bootstrap, jQuery, and
                    modern UI development practices.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5  ">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg">
                    Elzero Web School - Frontend Development Track
                  </p>
                  <p className=" opacity-80">
                    Completed a comprehensive frontend development track
                    covering HTML, CSS, JavaScript, React, responsive design,
                    and best practices for building modern web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
