import { useState, useRef, useEffect } from "react";
import "./App.css";

// --- DATA (icons removed) ---

const teamMembers = [
  {
    name: "Srikar Vemuri",
    role: "Founder & CEO",
    bio: "A passionate advocate for accessible AI education, driving the vision and strategy of ThrAIve. Loves to .",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "TO Be Filled",
    role: "Chief Technology Officer",
    bio: "Leads the technical development of all ThrAIve projects, with expertise in machine learning and full-stack development. MIT student.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Praneel Vema",
    role: "Head of Community",
    bio: "Fosters our vibrant community by organizing events, managing communications, and ensuring every member feels welcome. Studies at UC Berkeley.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Neeraj Chandekar",
    role: "Director of Non-Profit Outreach",
    bio: "Connects ThrAIve with non-profit organizations, leading projects that apply AI for social good. A student at Johns Hopkins University.",
    socials: { linkedin: "#", twitter: "#" },
  },
];
const projects = [
  {
    // icon: Heart, // removed
    title: "HART Nonprofit Connect",
    status: "Completed",
    description:
      "Developed an AI-powered social media content generator for HART of Folsom. This tool automates the creation of flyers and promotional materials, significantly boosting their outreach capabilities and allowing them to focus more on their core mission.",
    tech: ["Python Flask", "Canva API", "OpenAI API", "Unsplash API"],
  },
  {
    // icon: Eye, // removed
    title: "NY State Ophthalmology Society Research",
    status: "Ongoing",
    description:
      "A collaborative research project leveraging AI to analyze complex ophthalmic data. Our goal is to develop models that can assist in early disease detection and support ophthalmologists in their diagnostic processes.",
    tech: ["Data Analysis", "Machine Learning", "AI Research", "PyTorch"],
  },
];

const pastEvents = [
  {
    title: "Intro to Generative AI for Social Impact",
    description:
      "Our inaugural webinar featuring a guest speaker from a leading AI research lab. We explored the fundamentals of generative AI and brainstormed applications for non-profit organizations.",
    date: "June 15, 2025",
    recordingUrl: "https://youtu.be/16QUs5ypwLA", // Example URL
  },
];

// const initiatives = [
//   {
//     // icon: Zap, // removed
//     title: "AI Webinars",
//     description:
//       "Engaging webinars with industry experts and guest speakers on cutting-edge AI topics.",
//   },
//   {
//     // icon: Users, // removed
//     title: "Student Community",
//     description:
//       "A thriving network for high school and college students to connect, collaborate, and share their passion for AI.",
//   },
//   {
//     // icon: Heart, // removed
//     title: "AI for Social Good",
//     description:
//       "Promoting the use of AI for nonprofit projects, providing resources and support to make a real-world impact.",
//   },
//   {
//     // icon: Code, // removed
//     title: "Hackathons",
//     description:
//       "High-energy hackathons designed to foster creativity, problem-solving, and innovation in AI.",
//   },
// ];

// --- CORE APP STRUCTURE ---

function MainPage({ setPages }: { setPages: (page: string) => void }) {
  const scrollIntoViewRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen w-screen px-4 flex flex-col items-center justify-center overflow-hidden bg-base-200">
        <div className="w-full text-center space-y-6 md:space-y-12">
          <p className="text-xl font-mono md:text-8xl lg:text-7xl">
            ThraiveAI, a <span className="text-sky-500 font-bold">student</span>{" "}
            volunteer-run organization with{" "}
            <span className="text-orange-400 font-bold">AI</span> as a focus.
          </p>
          <button
            className="w-1/2 px-4 py-3 bg-primary text-white rounded-full md:h-28 md:text-4xl btn border-0 2xl:w-1/4 transition delay-150 duration-250 ease-in-out hover hover:scale-110 hover:bg-red-500"
            onClick={() =>
              scrollIntoViewRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn MORE
          </button>
        </div>
      </div>

      {/* About Section */}
      <section ref={scrollIntoViewRef} className="px-4 py-12">
        <div className="w-full max-w-lg mx-auto text-center space-y-6">
          <h1 className="text-3xl font-bold md:text-7xl lg:text-8xl">
            About US
          </h1>
          <p className="text-lg font-bold md:text-2xl lg:text-3xl">
            We are a nationwide community of{" "}
            <span className="text-orange-500">students</span>, united by a
            curiosity for AI and a drive to make a difference.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-4 py-12">
        <div className="flex flex-col gap-8 max-w-7xl mx-auto md:flex-row md:gap-12">
          <div className="flex-1 bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 space-y-4 text-center border border-zinc-700 transition delay-150 duration-250 ease-in-out hover hover:scale-110 hover:border-orange-400">
            <h2 className="text-3xl font-bold text-orange-400 md:text-6xl lg:text-7xl">
              OUR MISSION
            </h2>
            <p className="text-base md:text-2xl lg:text-3xl ">
              Our mission is to democratize AI education and application. We aim
              to conduct insightful webinars, build a collaborative student
              community, promote AI for nonprofit impact, and organize
              innovative hackathons. We're creating a launchpad for the next
              generation of AI leaders and problem-solvers.
            </p>
          </div>

          <div className="flex-1 bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 space-y-4 text-center border border-zinc-700 transition delay-150 duration-250 ease-in-out hover hover:scale-110 hover:border-sky-400">
            <h2 className="text-3xl font-bold text-sky-400 md:text-6xl lg:text-7xl">
              OUR VISION
            </h2>
            <p className="text-base md:text-2xl lg:text-3xl">
              We envision a future where students from all backgrounds can
              access the tools and knowledge to harness AI for positive change.
              By connecting aspiring minds and providing hands-on opportunities,
              we believe in fostering a more innovative, equitable, and
              intelligent world.
            </p>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <div className="px-4 py-12">
        <div className="w-full mx-auto bg-base-200 rounded-lg p-6 text-center space-y-4">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-5xl ">
            MEET THE TEAM
          </h2>
          <p className="text-lg sm:text-2xl lg:text-3xl">
            Our organization is powered by a dedicated team of student leaders.
          </p>
          <button
            className="px-6 py-2 bg-primary text-white rounded-lg lg:text-3xl btn transition delay-150 duration-250 ease-in-out hover hover:scale-110 hover:bg-red-500"
            onClick={() => setPages("team")}
          >
            See Team
          </button>
        </div>
      </div>

      {/* Initiatives Section */}
      <div className="px-4 py-12 text-center">
        <h1 className="text-xl sm:text-3xl 2xl:text-5xl mb-8 font-bold">
          OUR INITIATIVES
        </h1>
        <h3 className="text-md sm:text-xl 2xl:text-2xl mb-20 font-thin">
          We empower our community through a variety of engaging and impactful
          activities.
        </h3>
        <div className="flex flex-col space-y-6 md:grid md:grid-cols-2 2xl:grid-cols-4 md:gap-6 md:space-y-0">
          {/* Initiative Cards */}
          <div className="bg-zinc-800 rounded-lg p-6 text-center space-y-4 transition delay-150 duration-250 ease-in-out hover hover:scale-105 hover:shadow-blue-500/50 hover:shadow-lg flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>

            <h2 className="text-xl font-bold text-sky-400 sm:text-4xl">
              AI Webinars
            </h2>
            <p className="text-sm text-gray-200 sm:text-3xl">
              Engaging webinars with industry experts and guest speakers on
              cutting-edge AI topics.
            </p>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center space-y-4 transition delay-150 duration-250 ease-in-out hover hover:scale-105 hover:shadow-blue-500/50 hover:shadow-lg  flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <h2 className="text-xl font-bold text-sky-400 sm:text-4xl">
              Student Community
            </h2>
            <p className="text-sm text-gray-200 sm:text-3xl">
              A thriving network for high school and college students to
              connect, collaborate, and share their passion for AI.
            </p>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center space-y-4 transition delay-150 duration-250 ease-in-out hover hover:scale-105 hover:shadow-blue-500/50 hover:shadow-lg  flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>

            <h2 className="text-xl font-bold text-sky-400 sm:text-4xl">
              AI for Social Good
            </h2>
            <p className="text-sm text-gray-200 sm:text-3xl">
              Promoting the use of AI for nonprofit projects, providing
              resources and support to make a real-world impact.
            </p>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center space-y-4 transition delay-150 duration-250 ease-in-out hover hover:scale-105 hover:shadow-blue-500/50 hover:shadow-lg  flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>

            <h2 className="text-xl font-bold text-sky-400 sm:text-4xl">
              Hackathons
            </h2>
            <p className="text-sm text-gray-200 sm:text-3xl">
              High-energy hackathons designed to foster creativity,
              problem-solving, and innovation in AI.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function TeamPage() {
  return (
    <div className="min-h-screen px-4 py-16 sm:flex sm:flex-col sm:items-center sm:justify-center">
      <div className="text-center m-8">
        <h1 className="text-2xl sm:text-5xl font-bold mb-2">
          MEET THE CORE TEAM
        </h1>
        <p className="text-sm sm:text-lg px-4">
          The driving force behind ThrAIve's mission.
        </p>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 px-4">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-base-200 rounded-lg shadow-sm p-4 sm:p-6 flex items-center border border-base-300"
          >
            <figure className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-30"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </figure>
            <div className="text-center">
              <h2 className="text-xl font-bold lg:text-4xl">{member.name}</h2>
              <p className="text-sky-500 text-sm font-semibold mb-2 lg:text-2xl">
                {member.role}
              </p>
              <p className="text-sm lg:text-2xl">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function ProjectPage() {
  return (
    <div className=" py-20 md:py-28">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Projects Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Our Projects</h1>
          <p className="text-sm sm:text-base text-gray-400 lg:text-2xl">
            Applying AI to solve real-world problems
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2  gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700"
            >
              <div className="mb-4">
                <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <span
                  className={
                    "inline-block px-2 py-1 text-xs rounded-full lg:text-xl " +
                    (project.status === "Completed"
                      ? "bg-green-600 text-green-100"
                      : "bg-yellow-600 text-yellow-100")
                  }
                >
                  {project.status}
                </span>
              </div>
              <p className="text-sm sm:text-lg text-gray-300 mb-4 lg:text-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 ">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 px-2 py-1 rounded-full lg:text-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Past Events Section */}
        <div className="text-center my-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Past Events & Webinars
          </h2>
          <p className="text-lg text-white-500 mt-4 max-w-3xl mx-auto lg:text-2xl font-bold">
            Sharing knowledge and fostering discussion within our community.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700"
            >
              <p className="text-sm text-blue-400 font-semibold mb-2 lg:text-2xl">
                {event.date}
              </p>
              <h3 className="text-3xl font-bold text-white mb-3 lg:text-4xl">
                {event.title}
              </h3>
              <p className="text-gray-300 mb-6 lg:text-2xl">
                {event.description}
              </p>
              <a
                href={event.recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-bold text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors"
              >
                Watch Recording
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <section id="contact" className={`py-20 md:py-32 `}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Get Involved
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto lg:text-3xl">
            Whether you're a student, a non-profit, or a professional, there's a
            place for you at ThrAIve.
          </p>
        </div>
        <div className="max-w-lg lg:max-w-xl mx-auto bg-gray-800 p-4 md:p-8 lg:p-10 rounded-2xl shadow-2xl">
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-300 font-bold mb-2 md:text-xl lg:text-2xl"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 sm:text-lg lg:text-2xl"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 font-bold mb-2 md:text-xl lg:text-2xl"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 sm:text-lg lg:text-2xl"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-300 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 lg:text-2xl"
                placeholder="How would you like to get involved?"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default function App() {
  const [pages, setPage] = useState("main");
  useEffect(() => {
    console.log(pages)
    scrollTo(0, 0);
  }, [pages]);
  const renderPage = () => {
    switch (pages) {
      //setCurrentPage={setCurrentPage}
      case "main":
        return <MainPage setPages={setPage} />;
      case "team":
        return <TeamPage />;
      case "projects":
        return <ProjectPage />;
      case "contact":
        return <ContactPage />;
      // case 'team':
      //   return <TeamPage />;
      // case 'projects':
      //   return <ProjectsPage />;
      // case 'contact':
      //   return <ContactSection isPage={true} />;
      // default:
      //   return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };
  return (
    <main>
      {/* Navbar */}
      <div
        className="navbar  shadow-sm stick fixed top-0 z-50 w-screen"
        id="navbar"
      >
        <div className="flex-1">
          <a className=" btn-ghost text-xl md:text-3xl lg:text-4xl">
            ThraiveAI
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal ">
            {window.screen.width < 500 ? (
              <li>
                <details>
                  <summary className = "btn btn-ghost">
                    Menu
                  </summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <button className={"btn"+(pages==="main"?"text-sky-300":"")} onClick={() => setPage("main")}>
                        Home
                      </button>
                    </li>
                    <li>
                      <button
                       className={"btn"+ (pages==="projects"?"text-sky-300":"")}
                        onClick={() => setPage("projects")}
                      >
                        Projects
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn"
                        onClick={() => setPage("contact")}
                      >
                        Contact
                      </button>
                    </li>
                    <li>
                      <button className="btn" onClick={() => setPage("team")}>
                        Team
                      </button>
                    </li>{" "}
                  </ul>
                </details>
              </li>
            ) : (
              <>
                <li>
                  <button  className={"btn"} onClick={() => setPage("main")}>
                    <p className = {pages==="main"?"text-sky-300":""}>
                      Home
                    </p>
                  </button>
                </li>
                <li>
                  <button className="btn" onClick={() => setPage("projects")}>
                    Projects
                  </button>
                </li>
                <li>
                  <button className="btn" onClick={() => setPage("contact")}>
                    Contact
                  </button>
                </li>
                <li>
                  <button className="btn" onClick={() => setPage("team")}>
                    Team
                  </button>
                </li>{" "}
              </>
            )}
          </ul>
        </div>
      </div>
      {renderPage()}

      <footer className="footer sm:footer-horizontal bg-base-300 text-neutral-content p-10">
        <aside>
          <h6 className="footer-title">ThrAIve</h6>
          <p>
            Don't copy our crap, ask for permission, we will probably say yes.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            Don't have any social media yet
          </div>
        </nav>
      </footer>
    </main>
  );
}
