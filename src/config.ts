export const siteConfig = {
  name: "Eunseok Kang",
  title: "Software Engineer",
  description: "Portfolio website of Eunseok Kang - Results-driven engineer with 10+ years of experience",
  accentColor: "#667eea",
  social: {
    email: "ethan.es.kang@gmail.com",
    linkedin: "https://www.linkedin.com/in/eunseokkang",
    github: "https://github.com/ethan-k",
  },
  aboutMe:
    "Results-driven engineer with 10+ years of experience connecting domains to solve complex problems. Expert in backend development using Java, Go, Kotlin, Python and PHP, frontend development with React and JavaScript/TypeScript, implementation of distributed systems in microservice architecture, and development of CI/CD pipelines for deployment, test automation, and infrastructure provisioning. Currently working as a Senior Software Engineer and Tech Lead at Banksalad, where I've reduced API costs by 20% and led architectural initiatives for the MyData 2.0 platform.",
  skills: [
    "Java",
    "Kotlin",
    "Spring",
    "Go",
    "AWS SQS/SNS",
    "Python",
    "PHP",
    "gRPC",
    "React",
    "TypeScript",
    "JavaScript",
    "Redux",
    "MySQL",
    "Redis",
    "Snowflake",
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Helm",
    "Jenkins",
    "Kafka",
    "GitLab CI/CD",
    "GitHub Actions",
    "RabbitMQ",
    "Keycloak",
    "Apache Airflow",
    "Datadog",
    "Jest",
    "Microservices",
    "Agile"
  ],
  projects: [
    {
      name: "MyData 2.0 Financial Data Platform - Banksalad",
      description:
        "Led architectural design of financial data aggregation platform serving millions of users. Enhanced user connection rates by 20% and reduced API costs by 20% through logical and physical cache optimization using Go microservices on 4TB+ MySQL database.",
      link: "#",
      skills: ["Go", "MySQL", "Kafka", "Redis", "AWS", "Kubernetes", "Spring", "React", "TypeScript"],
    },
    {
      name: "Enterprise Authentication System - Raisin",
      description:
        "Designed and implemented company-wide Keycloak authentication solution supporting SSO, role-based access control, legal representative access for minors, and power of attorney scenarios. Integrated with Spring, Kafka, and Twilio for OTP authentication.",
      link: "#",
      skills: ["Keycloak", "Spring", "Kafka", "Twilio", "React", "TypeScript", "Python"],
    },
    {
      name: "Travel Itinerary System - Rakuten",
      description:
        "Developed comprehensive travel booking platform for Japan's second-largest travel service. Built itinerary management system using Spring, MongoDB, PostgreSQL, and Cloud Foundry with data communication systems connecting to vendor platforms.",
      link: "#",
      skills: ["Spring", "Java", "MongoDB", "PostgreSQL", "Cloud Foundry"],
    },
    {
      name: "E2E Testing Framework - Facebook",
      description:
        "Enhanced internal end-to-end testing framework used across Facebook's applications. Developed automated test failure analysis systems and established pipelines for test automation, significantly increasing testing velocity for development teams.",
      link: "#",
      skills: ["Jest", "TypeScript", "React", "Python", "Hack"],
    },
    {
      name: "Financial Platform - Gojek",
      description:
        "Built distributed financial platform with microservice architecture handling large-scale transaction processing. Implemented data distribution systems using Kafka and Go, with comprehensive logging and monitoring using ELK stack and Datadog.",
      link: "#",
      skills: ["Spring", "Go", "React", "PostgreSQL", "Kafka", "ELK Stack"],
    }
  ],
  experience: [
    {
      company: "Banksalad",
      title: "Senior Software Engineer (Tech Lead)",
      dateRange: "May 2022 - Present",
      bullets: [
        "Reduced API call costs to data providers by 20% through logical and physical cache optimization",
        "Oversaw the architectural design of the MyData 2.0 initiative, enhancing user connection rates by 20%",
        "Architected the transition from synchronous to asynchronous data synchronization to improve resilience",
        "Led a 3-person engineering team, implementing Agile and mob programming practices",
        "Built large-scale Go applications in microservices on a MySQL database exceeding 4 TB",
        "Led migration initiatives from on-premises to cloud infrastructure using AWS and Kubernetes",
      ],
    },
    {
      company: "Raisin",
      title: "Senior Software Engineer (Freelance)",
      dateRange: "Jan 2021 - Present",
      bullets: [
        "Designed and implemented a company-wide authentication solution using Keycloak, supporting SSO, role-based access control, and advanced login flows",
        "Designed and implemented OTP authentication system integrating Spring, Kafka, and Twilio",
        "Created data synchronization application between customer data and Zendesk using Spring and Kafka",
        "Developed deposit order integration system using AWS Lambda (Python), Kafka, and S3",
        "Migrated on-prem Java applications to AWS Cloud and Kubernetes",
        "Developed and optimized CI/CD pipelines using GitLab CI/CD, Harness, Helm, Jenkins, and Ansible",
      ],
    },
    {
      company: "Facebook",
      title: "Software Engineer in Test Infra and Reliability (Contract)",
      dateRange: "Oct 2019 - Dec 2020",
      bullets: [
        "Enhanced internal E2E testing framework, developing features with Jest, TypeScript, and React for frontend; Hack and Python for backend",
        "Developed automated test failure analysis systems to improve debugging efficiency",
        "Established pipelines for test automation and result analysis, increasing testing velocity",
        "Formulated comprehensive test plans for internal Facebook applications",
        "Provided guidance to internal software development teams in adopting E2E test automation practices",
      ],
    },
    {
      company: "Gojek",
      title: "Software Engineer in Financial Department",
      dateRange: "Nov 2018 - Oct 2019",
      bullets: [
        "Developed a financial platform using Spring (Java), Go, React (TypeScript), and PostgreSQL",
        "Designed and implemented distributed systems with microservice architecture",
        "Established CI/CD pipelines using Helm, Terraform, and GitLab CI for AWS and Kubernetes deployments",
        "Developed high-throughput data distribution system using Kafka and Go",
        "Implemented logging and monitoring solutions using ELK stack, Datadog, and Sentry",
      ],
    },
    {
      company: "Rakuten",
      title: "Software Engineer in Travel Department",
      dateRange: "April 2017 - Sep 2018",
      bullets: [
        "Developed travel itinerary system for Japan's second-largest travel booking platform using Spring (Java), MongoDB, PostgreSQL, and Cloud Foundry",
        "Established CI/CD pipeline using Jenkins, Ansible, and shell scripts for deployment processes",
        "Created test data comparison application using React to enhance QA processes",
        "Engineered data communication system between travel itinerary system and vendor platforms",
      ],
    },
    {
      company: "Inspace",
      title: "Software Engineer",
      dateRange: "March 2016 - Feb 2017",
      bullets: [
        "Improved initial loading speed of Cordova-based hybrid application",
        "Developed web and desktop applications for satellite image monitoring system with ASP.NET MVC 4(C#), WPF, Python and SQL Server",
        "Developed a radiation calculation system with Spring (Java), MySQL",
      ],
    },
    {
      company: "KISG",
      title: "Founder / Fullstack Software Engineer",
      dateRange: "Mar 2015 - Feb 2016",
      bullets: [
        "Developed event-booking application using Laravel (PHP), TypeScript, React, and Redux",
        "Created cross-platform mobile application for Android/iOS using React Native",
      ],
    },
  ],
  education: [
    {
      school: "KOREATECH",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "Graduated",
    },
  ],
};
