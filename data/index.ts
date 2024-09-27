export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working as a freelancer on Upwork.com",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "React Landing Page",
    des: "This is a React.js/Next.js based landing page plug-n-play template, ideal for startups/companies/service providers wanting to showcase their vision in a single page sleek and modern landing page.",
    img: "/project1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/vit718/React-Landing-Page-2021",
  },
  {
    id: 2,
    title: "MERN-ECommerce-App",
    des: "This is a Full E-commerce Web App using MERN Stack (MongoDB, Express, React, Node.js) and Redux for state management.",
    img: "/project2.png",
    iconLists: ["/re.svg", "/tail.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/vit718/mern-ecommerce-webapp",
  },
  {
    id: 3,
    title: "GenZAI - Unleash Your Creativity with AI Image Generation",
    des: "Turn text into captivating visuals with GenZAI, a full-stack web app powered by OpenAI DALL-E. Experience seamless text-to-image generation with the powerful MERN stack (Node.js, Express.js, MongoDB, React.js) and a sleek Tailwind CSS interface. Securely store your creations with Cloudinary",
    img: "/project3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/vit718/Fullstack-MERN-generative-AI-Project-GenzAI-",
  },
  {
    id: 4,
    title: "ChatGPT-Web",
    des: "ChatGPT-web is a simple one-page web interface to the OpenAI ChatGPT API. To use it, you need to register for an OpenAI API key first. All messages are stored in your browser's local storage, so everything is private. You can also close the browser tab and come back later to continue the conversation.",
    img: "/project4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://niek.github.io/chatgpt-web",
  },
];

export const testimonials = [
  {
    quote:
      "Exceptional Work on React Project! I am extremely pleased with the work he did on my web development task using React. His attention to detail and ability to translate my ideas into a functional and visually appealing application exceeded my exapectations. He was responsive to my feedback throughout the process, and I appreciate his commitment to delivering a high-quality product. I look forward to working with him again in the future!",
    name: "Michael Johnson",
    title: "React Landing Page",
  },
  {
    quote:
      "Outstanding Communication and Technical Skills! Thank you for his excellent work on the React project! His technical skills are impressive, and I was particularly grateful for your proactive communication and timely updates. You took the time to ensure I was on board with each step of the project, which made the entire process smooth and stress-free. I would highly recommend you to others looking for a skilled developer!",
    name: "Michael Wallson",
    title: "MERN-ECommerce-App",
  },
  {
    quote:
      "Fantastic Collaboration and Result! I am thrilled with the results of my web development tasks! His expertise in React shone through, and the final product is not only functional but also intuitive for users. I truly appreciate how well he incorporated my feedback and suggestions, making adjustments seamlessly to achieve the desired outcome. His professionalism and dedication to quality work were evident throughout the project. Thank him for his hard work!",
    name: "John William",
    title: "ChatGPT-Web",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer - Apify",
    desc: "Developed responsive and dynamic front-end interfaces using React.js and Next.js, improving user experience and site performance. Worked closely with data scientists to integrate AI models into web applications, providing real-time insights and predictions. Implemented server-side logic with Node.js and Express.js, ensuring robust and efficient back-end operations. Managed database operations using MongoDB and SQL, optimizing queries for better performance and scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer - Freelancer",
    desc: "Website project development from scratch and delivery to production. Implementation of intranet networks, integration with payment systems. Maintenance and monitoring of the implemented systems.Reengineering and improvement of customer's legacy systems. Technologies: ASP.NET, C#, XHTML, CSS, JavaScript, JQuery, Microsoft SQL Server",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  // {
  //   id: 3,
  //   img: "/link.svg",
  // },
];
