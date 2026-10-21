const config = {
  title: "Ajay Tandale | Cloud Engineer & Linux Enthusiast",
  description: {
    long: "Explore the portfolio of Ajay Tandale, a Computer Science Engineering student focused on Linux, Red Hat technologies, cloud engineering, containerization, DevOps, infrastructure automation, and cybersecurity. Building practical, secure, and reliable systems.",
    short:
      "Ajay Tandale - Cloud Engineer, Linux Enthusiast, Containers & DevOps.",
  },
  keywords: [
    "Ajay Tandale",
    "Ajay Raju Tandale",
    "portfolio",
    "Cloud Engineer",
    "Linux",
    "RHCSA",
    "Red Hat",
    "Containers",
    "Podman",
    "Docker",
    "AWS",
    "DevOps",
    "Ansible",
    "Bash",
    "OpenShift",
    "Infrastructure Automation",
  ],
  author: "Ajay Tandale",
  fullName: "Ajay Raju Tandale",
  email: "work.ajaytandale@gmail.com",
  site: "https://www.ajaytandale.in",

  // for github stars button
  githubUsername: "ajju-py",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/ajay-tandale-8030b8231/",
    github: "https://github.com/ajju-py",
    instagram: "https://www.instagram.com/ajju.py/",
    credly: "https://www.credly.com/users/ajay-tandale",
  },
};
export { config };
