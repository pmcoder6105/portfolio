import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pratyush Mahadevaiah",
  initials: "PM",
  url: "https://pratyushm.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "As an ambitious high schooler, life is hard. Despite being a full time honors student, I'm very passionate about business and software development. In the summer of 2024, I built my first investor-backed SAAS startup with over $9.6k in revenue. Now, I'm [interning at one of the biggest entrepreneurship incubators](/#work) in the US, in the works of [launching my next big tech startup](/#work), and [competed in over 18 hackathons for fun](/#hackathons). For fun, I like to make professional video games, do competitive programming, and publish research!",
  avatarUrl: "/pratyush3.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Astro",
    "C#",
    "Flutter",
    "HTML",
    "Java",
    "CSS",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pratyush.mahadevaiah@gmail.com",
    tel: "+1 (925) 425-8395",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pmcoder6105",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/pmcoder6105",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "NexLaunch",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Founder CTO & Product Dev",
      logoUrl: "/nexlaunch.png",
      start: "X",
      end: "Launching Soon",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "BETA Camp",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Intern",
      logoUrl: "/betacamp.png",
      start: "August 2024",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Poppy",
      href: "https://usepoppy.org/",
      badges: [],
      location: "Remote",
      title: "Founder CEO & Product Dev",
      logoUrl: "/poppy.png",
      start: "June 2024",
      end: "Present",
      description:
        "Poppy, my investor-backed SAAS company, is designed to help small businesses convert site visitors into loyal customers by providing access to no-code tools for conversion rate optimization, such as on-site popups, email capturing, scroll animations, which all help grab visitors attention and make them more interested and willing to buy your product.",
    },
    {
      company: "Windemere Coding Initiative",
      href: "https://wrms.srvusd.net/Students/ClubsContestsAfter-School-Sports/index.html",
      badges: [],
      location: "Santa Clara, CA",
      title: "Founder & Former President",
      logoUrl: "/wrms.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
  ],
  education: [
    {
      school: "Dougherty Valley High School",
      href: "https://dvhs.srvusd.net/",
      degree: "High School Diploma",
      logoUrl: "/dvhs.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Windemere Ranch Middle School",
      href: "https://wrms.srvusd.net/",
      degree: "Middle School Diploma",
      logoUrl: "/wrms.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Reclaiming History",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Devpost",
          href: "https://equitable-elevation-iii.devpost.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://eqhacks.org/winners/reclaiming-history",
        },
        {
          type: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=pEnie1QY-TA",
        },
        {
          type: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://app.uizard.io/p/f86a54cb",
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "BeanBox: Multiplayer FPS Game",
      href: "https://pmgamedev.itch.io/beanbox",
      dates: "June 2022 - February 2023",
      active: true,
      description:
        "Developed and released an entertaining multiplayer FPS Game to play with friends. With 9 unique maps, millions of customization options, and 5 destructive weapons, you can jump in and see who's the strongest in BeanBox.",
      technologies: [
        "Unity Engine",
        "C#",
        "Itch.io",
        "Photon Engine",
        "Agora Voice SDK",
        "Firebase Realtime Database",
        "ProBuilder",
        "Universal Render Pipeline",
        "Cowsins",
      ],
      links: [
        {
          type: "Website",
          href: "https://pmgamedev.itch.io/beanbox",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/beanbox.mp4",
    },
  ],
  hackathons: [
    {
      title: "CS Base Climate Hack",
      dates: "May 1st - 31st, 2024",
      location: "International",
      description:
        "Developed a social media app where users can track their eco-friendly transportation activities to help transform the environment by sharing and connecting with the community to inspire others and make a change.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/832/833/datas/medium.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/ecocommute-wpjoqf",
        },
        {
          title: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=6xU9EAFY6sI",
        },
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://app.uizard.io/p/c02c644d",
        },
      ],
    },
    {
      title: "EduCathon",
      dates: "March 18th - April 15th, 2024",
      location: "International",
      description:
        "Developed an application that safeguarded our robotic industries with advanced sound analysis. Built by using AI to detect anomalies for safer operations in factories globally.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/799/643/datas/medium.jpg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://educathon.devpost.com/",
        },
        {
          title: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=5W7Q9i4uE7E",
        },
      ],
    },
    {
      title: "MAD Club: EcoInnovators March Hackathon",
      dates: "February 28th, 2024",
      location: "San Ramon, California",
      description:
        "Developed an algorithm to detect open trash cans in given locations based on trained data provided by the city to help promote environmental sustainability and eliminate litter.",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVuHl7KvTkQ1_6PBZYsS3TQEE8ZcXMZoAwXPjDWxe3zi34FALY=s40-p",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/pmcoder6105/EcoBinHackathon",
        },
      ],
    },
    {
      title: "CodeEdu: WinterHacks 2023",
      dates: "December 15th, 2023 - January 14th, 2024",
      location: "International",
      description:
        "Developed a innovative personalized education platform for all learning types using AI and adaptive learning pathways. Targeted the United Nation's Sustainability Goal #4: Quality Education.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/709/289/datas/medium.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/learnly-w7fsh8",
        },
        {
          title: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=7Bi4RlRTGLI",
        },
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://app.uizard.io/p/5739824e",
        },
      ],
    },
    {
      title: "HackBlue Cyber Hackathon",
      dates: "November 17th - 27th, 2023",
      location: "International",
      description:
        "Developed a digital finance hub that directly combated cyber-attacks using AI anomaly detectors to help keep finances safe while still being interactive, powerful, and user-friendly.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/626/649/datas/medium.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/neurawallet"
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=q23CrkcpOtE",
        },
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://app.uizard.io/p/dc99aa4f",
        },
      ],
    },
    {
      title: "MAD Club: October Hackathon",
      dates: "October 19th, 2023",
      location: "San Ramon, California",
      description:
        "Developed an open platform for student mindfulness and academic motivation. Presented in front of a panel of CEOs and tech entrepreneurs.",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVuHl7KvTkQ1_6PBZYsS3TQEE8ZcXMZoAwXPjDWxe3zi34FALY=s40-p",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/pmcoder6105/AurahHackathon",
        },
      ],
    },
    {
      title: "2024 Equitable Elevation III",
      dates: "October 8th - November 5th, 2023",
      location: "International",
      description: "Improved land inequalities and land grabbing through a social media/community based support app, 'Reclaiming History'. Like-minded individuals are allowed to contribute donations and sign petitions aimed at restoring land to its rightful owners. I focused on developing a slick and aesthetically beautiful mobile app and used UIzard, a UI graphic application, to accomplish my goals. The early-stage prototype demonstrates the commitment and labor put into the project during the hackathon.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/002/615/993/datas/large.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://eqhacks.org/winners/reclaiming-history",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://equitable-elevation-iii.devpost.com/",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=pEnie1QY-TA",
        },
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://app.uizard.io/p/f86a54cb",
        },
      ],
    },
  ],
} as const;
