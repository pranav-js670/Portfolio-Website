import { HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "@/components/ui/icons";

export const DATA = {
  name: "Pranav J S Portfolio",
  // initials: "DV",
  url: "https://www.linkedin.com/in/pranav-j-s",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore,+India",
  description:
    "Final-year Computer Science Engineering student passionate about web development and data analysis. Skilled in Generative AI, Python, MERN Stack, and Power BI.",
  summary:
    "I’m a passionate Computer Science student specializing in full-stack development and data-driven solutions. My projects combine cutting-edge technologies with practical applications, aiming to deliver scalable and impactful results. I thrive in fast-paced, collaborative environments and am constantly looking for ways to push the boundaries of what technology can do. Currently, I'm excited to expand my knowledge in AI and contribute to projects that bridge the gap between technology and real-world challenges.",
  // avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C++",
    "Javascript",
    "Langchain",
    "SQL",
    "CrewAI",
    "MERN Stack",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jspranav15@gmail.com",
    tel: "+91 [Your Phone Number]", // Replace with your contact number
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pranav-js670",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pranav-j-s",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jspranav15@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "Dayananda Sagar College of Engineering",
      href: "https://www.dsce.edu.in",
      degree: "Bachelor's Degree in Computer Science and Engineering (BE)",
      logoUrl: "/dsce-logo.png", // Replace with the actual logo file path
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Threadcraft AI",
      href: "https://github.com/pranav-js670/Threadcraft-AI",
      active: true,
      description:
        "Built an AI-powered SaaS platform that auto-generates optimized social media content for Twitter, Instagram, and LinkedIn, leveraging Google Gemini AI for advanced NLP and personalized content creation.",
      technologies: [
        "Next.js",
        "Supabase",
        "Google Gemini",
        "TailwindCSS",
        "ShadCN UI",
      ],
      category: "Full-Stack Development",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Threadcraft-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Nexx-SaaS Feedback Widget",
      href: "https://github.com/pranav-js670/Nexx-SaaS-Feedback-Widget",
      dates: "June 2024 - Sept 2024",
      active: true,
      description:
        "Developed a reusable feedback widget that integrates seamlessly into various web applications to collect real-time user insights, making it scalable for SaaS platforms.",
      technologies: ["Next.js", "Supabase", "Typescript", "TailwindCSS"],
      category: "Full-Stack Development",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Nexx-SaaS-Feedback-Widget",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Ride Hailing Microservices System",
      href: "https://github.com/pranav-js670/Ride-Hailing-Microservices-System",
      active: true,
      description:
        "Built a modular, scalable backend system for a ride-hailing platform using microservices architecture, ensuring secure communication and robust API design with token-based authentication.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST API",
        "RabbitMQ",
        "JWT",
      ],
      category: "Full-Stack Development",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Ride-Hailing-Microservices-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ShopEase Ecommerce Website",
      href: "https://github.com/pranav-js670/ShopEase-Ecommerce-Platform.git",
      dates: "Sept 2023 - Oct 2023",
      active: true,
      description:
        "Developed a feature-rich ecommerce website with an admin panel, integrating pagination, filters, secure payment options, and SEO optimization to enhance usability and discoverability.",
      technologies: [
        "MERN Stack",
        "Node.js",
        "React",
        "MongoDB",
        "Stripe",
        "CSS",
      ],
      category: "Full-Stack Development",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/ShopEase-Ecommerce-Platform.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Customer Churn Analysis and Prediction",
      href: "https://github.com/pranav-js670/Customer-Churn-Analysis-and-Prediction-Using-Power-BI.git",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description:
        "Developed an ETL pipeline using SQL to extract, transform, and load customer data. Implemented a machine learning model using random forest to predict churn and created a Power BI dashboard for visualizing insights.",
      technologies: ["SQL", "Power BI", "Scikit-learn"],
      category: "Data Analysis",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Customer-Churn-Analysis-and-Prediction-Using-Power-BI.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "CrewAI Email Personalizer",
      href: "https://github.com/pranav-js670/Personalize-Emails-using-Crew-AI",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "Developed a multi-agent system using CrewAI and Langchain to personalize email content. Integrated Mixtral 8x7B LLM for automating and personalizing marketing emails.",
      technologies: ["CrewAI", "Langchain"],
      category: "Generative AI",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Personalize-Emails-using-Crew-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Nature Classifier using CNN",
      href: "https://github.com/pranav-js670/Nature-Classifier-using-CNN.git",
      dates: "Sept 2023 - Oct 2023",
      active: true,
      description:
        "Built a Convolutional Neural Network (CNN) to classify nature images into six categories: Building, Forest, Glacier, Mountain, Sea, and Street using PyTorch.",
      technologies: ["PyTorch"],
      category: "Maachine Learning",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Nature-Classifier-using-CNN.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Amazon Stock Price Prediction using LSTM",
      href: "https://github.com/pranav-js670/Amazon-Stock-Price-Prediction-LSTM.git",
      active: true,
      description:
        "Demonstrated time series analysis and prediction of Amazon stock prices using an LSTM neural network. Leveraged historical stock data for future price forecasting with preprocessing steps like normalization, time-step creation, and MinMax scaling. Model evaluated with MSE loss and Adam optimizer.",
      technologies: ["PyTorch", "Pandas", "NumPy"],
      category: "Machine Learning",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Amazon-Stock-Price-Prediction-LSTM.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Global CO2 Emissions Analysis",
      href: "https://github.com/pranav-js670/Global-CO2-Emissions-Analysis.git",
      active: true,
      description:
        "Conducted an in-depth analysis of global CO2 emissions (2019–2023), preprocessing raw data and creating calculated insights for visualizing key trends in Power BI. Analyzed sector-specific trends, country-level comparisons, and global contributions to CO2 emissions for actionable climate insights.",
      technologies: ["Power BI", "Pandas", "Scikit-learn"],
      category: "Data Analysis",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Global-CO2-Emissions-Analysis.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title:
        "Comprehensive Sales Dashboard Analysis and Forecasting with Power BI",
      href: "https://github.com/pranav-js670/Comprehensive-Sales-Dashboard-Analysis-and-Forecasting-with-Power-BI.git",
      active: true,
      description:
        "Developed a detailed sales analysis dashboard in Power BI, featuring KPIs, regional sales distribution, sales trends, and advanced analytics like sales forecasting and average shipping time calculation. The dashboard allows for dynamic filtering, segment breakdowns, and predictive insights.",
      technologies: ["Power BI", "DAX"],
      category: "Data Analysis",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Comprehensive-Sales-Dashboard-Analysis-and-Forecasting-with-Power-BI.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MediBot Q&A",
      href: "https://github.com/pranav-js670/MediBot-Q-A.git",
      dates: "Aug 2023 - Oct 2023",
      active: true,
      description:
        "Developed a health-related chatbot using Llama 2 (7B) with Retrieval-Augmented Generation (RAG) for fast and accurate response retrieval using FAISS.",
      technologies: ["Llama 2", "FAISS", "RAG"],
      category: "Generative AI",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/MediBot-Q-A.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "EcoLens- Personal CO2 Emissions Assistant",
      href: "https://github.com/pranav-js670/EcoLens-CO2-Emissions-Assistant",
      active: true,
      description:
        "Developed an AI assistant to help users calculate and analyze their daily CO2 emissions, integrating Langchain, FAISS, and Llama3-8B for personalized suggestions.",
      technologies: ["Langchain", "FAISS", "Llama 3-8B"],
      category: "Generative AI",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/EcoLens-CO2-Emissions-Assistant",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AdaptAI - Dynamic Role-Based Agent Framework",
      href: "https://github.com/pranav-js670/AdaptAI-Dynamic-Role-Based-Agent-Framework.git",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Developed an adaptive framework enabling users to dynamically shape the expertise and personality of AI agents. Incorporated multi-LLM support and tool integration like Tavily Search for role-specific query responses. Dockerized the application for seamless deployment.",
      technologies: [
        "Langchain",
        "Tavily Search",
        "Multi-LLM Support",
        "Docker",
      ],
      category: "Generative AI",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/AdaptAI-Dynamic-Role-Based-Agent-Framework.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Multi-Agent Finance Portfolio Optimizer",
      href: "https://github.com/pranav-js670/Multi-AI-Agent-finance-portfolio-optimizer.git",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Designed a multi-agent system to optimize financial portfolios by integrating real-time web search and financial analysis agents. Gathered stock data, company news, and recommendations using YFinanceTools and DuckDuckGo. Developed collaborative agent workflows for enhanced financial decision-making.",
      technologies: ["PhiData", "YFinanceTools", "DuckDuckGo API", "Python"],
      category: "Generative AI",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Multi-AI-Agent-finance-portfolio-optimizer.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Movie Review Sentiment Analysis",
      href: "https://github.com/pranav-js670/Movie-Review-Sentiment-Analysis.git",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "Built a sentiment analysis model to classify movie reviews as positive or negative. Utilized WordCloud to visualize sentiment distribution.",
      technologies: ["NLTK", "Scikit-learn", "WordCloud"],
      category: "Machine Learning",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Movie-Review-Sentiment-Analysis.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Object Detection using YoloV8",
      href: "https://github.com/pranav-js670/Object-Detection-using-Yolov8.git",
      active: true,
      description:
        "Trained a YoloV8 model on custom data for object detection, enabling real-time detection of various objects in images. The project involved preparing the dataset, training the model, and evaluating its performance on custom detection tasks.",
      technologies: ["YoloV8", "Python"],
      category: "Machine Learning",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pranav-js670/Object-Detection-using-Yolov8.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Innotech Ideathon 2024",
      dates: "December 20th - 21st, 2024",
      location: "DSCE, Bangalore",
      description:
        "Competed in the Circular Economy category and presented 'Green Orbit,' an AI-driven carbon management platform. The platform empowers businesses with real-time emissions tracking, AI-powered sustainability insights, and scalable solutions. In just 24 hours, we ideated, designed, and refined a cutting-edge tool that garnered attention for its potential to disrupt the carbon management landscape, offering an affordable, customizable solution for businesses striving towards sustainability.",
      links: [],
    },
    {
      title: "Jayadeva Hackathon",
      dates: "June 7th - 8th, 2024",
      location: "DSCE, Bangalore",
      description:
        "Led a team to build an innovative LLM-powered system designed to simplify complex medical jargon for patients. The system uses advanced language models to transform technical medical terminology into easy-to-understand explanations, enhancing patient comprehension and engagement. This solution, developed in a high-pressure 24-hour hackathon, received recognition for its potential to bridge communication gaps in healthcare, improving patient experiences and outcomes.",
      links: [],
    },
    {
      title: "Hack Refine Hackathon",
      dates: "December 21st, 2023",
      location: "DSCE, Bangalore",
      description:
        "Led the development of Skill-Track-365, a platform for continuous skill development and personalized learning pathways.",
      links: [],
    },
    {
      title: "Hack-Elite 24 Hours Hackathon",
      dates: "August 17th - 18th, 2023",
      location: "DSCE, Bangalore",
      description:
        "Led a team to develop a machine learning application to help farmers predict the most favorable crop to be planted depending on various factors, using algorithms like logistic regression and random forest.",
      links: [],
    },
  ],
} as const;
