export enum SkillNames {
  LINUX = "linux",
  RHEL = "rhel",
  PODMAN = "podman",
  DOCKER = "docker",
  AWS = "aws",
  ANSIBLE = "ansible",
  BASH = "bash",
  PYTHON = "python",
  TERRAFORM = "terraform",
  GIT = "git",
  GITHUB = "github",
  NGINX = "nginx",
  OPENSHIFT = "openshift",
  VIM = "vim",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  category: "linux" | "containers" | "cloud" | "automation" | "networking";
  shortDescription: string;
  color: string;
  icon: string;
  keyboardIcon?: string;
  keyboardColor?: string;
  shortcut?: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.RHEL]: {
    id: 1,
    name: "rhel",
    label: "Red Hat Enterprise Linux",
    category: "linux",
    shortDescription: "Certified System Administrator (RHCSA EX200) environment with systemd & SELinux.",
    color: "#ee0000",
    icon: "/images/tech/rhel.svg",
    keyboardIcon: "/assets/keyboard/logos/rhel.svg",
    keyboardColor: "#ee0000",
  },
  [SkillNames.LINUX]: {
    id: 2,
    name: "linux",
    label: "Linux SysAdmin",
    category: "linux",
    shortDescription: "RHEL & Fedora system administration, user & permissions management, journalctl log analysis.",
    color: "#f5ba24",
    icon: "/images/tech/linux.svg",
    keyboardIcon: "/assets/keyboard/logos/linux.svg",
    keyboardColor: "#333537",
  },
  [SkillNames.PODMAN]: {
    id: 3,
    name: "podman",
    label: "Podman",
    category: "containers",
    shortDescription: "Rootless container engine, pod generation, container registries, and EX188 developer workflows.",
    color: "#892ca0",
    icon: "/images/tech/podman.svg",
    keyboardIcon: "/assets/keyboard/logos/podman.svg",
    keyboardColor: "#892ca0",
  },
  [SkillNames.DOCKER]: {
    id: 4,
    name: "docker",
    label: "Docker",
    category: "containers",
    shortDescription: "Container image builds, multi-stage Dockerfiles, networking, and volume persistence.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    keyboardIcon: "/assets/keyboard/logos/docker.svg",
    keyboardColor: "#009fe8",
  },
  [SkillNames.AWS]: {
    id: 5,
    name: "aws",
    label: "AWS Fundamentals",
    category: "cloud",
    shortDescription: "Amazon S3, IAM policies, EC2 basics, AWS CLI, and cloud architecture fundamentals.",
    color: "#ff9900",
    icon: "/images/tech/aws.svg",
    keyboardIcon: "/assets/keyboard/logos/aws.svg",
    keyboardColor: "#ff9208",
  },
  [SkillNames.ANSIBLE]: {
    id: 6,
    name: "ansible",
    label: "Ansible",
    category: "automation",
    shortDescription: "Infrastructure automation, playbooks, host inventory configuration, and tasks.",
    color: "#000000",
    icon: "/images/tech/ansible.svg",
    keyboardIcon: "/assets/keyboard/logos/ansible.svg",
    keyboardColor: "#22252a",
  },
  [SkillNames.BASH]: {
    id: 7,
    name: "bash",
    label: "Bash Scripting",
    category: "automation",
    shortDescription: "Shell scripting, cron automation, text processing with grep/sed/awk, and system monitoring.",
    color: "#4eaa25",
    icon: "/images/tech/bash.svg",
    keyboardIcon: "/assets/keyboard/logos/bash.svg",
    keyboardColor: "#28382b",
  },
  [SkillNames.PYTHON]: {
    id: 8,
    name: "python",
    label: "Python",
    category: "automation",
    shortDescription: "Scripting, infrastructure automation, REST APIs, and data processing.",
    color: "#3776ab",
    icon: "/images/tech/python.svg",
    keyboardIcon: "/assets/keyboard/logos/python.svg",
    keyboardColor: "#306998",
  },
  [SkillNames.TERRAFORM]: {
    id: 9,
    name: "terraform",
    label: "Terraform",
    category: "cloud",
    shortDescription: "Infrastructure as Code (IaC) fundamentals, declarative HCL configurations, and resource provisioning.",
    color: "#7b42bc",
    icon: "/images/tech/terraform.svg",
    keyboardIcon: "/assets/keyboard/logos/terraform.svg",
    keyboardColor: "#7b42bc",
  },
  [SkillNames.OPENSHIFT]: {
    id: 10,
    name: "openshift",
    label: "OpenShift / Kubernetes",
    category: "containers",
    shortDescription: "Cloud-native application deployment, container scaling, pod management, and DO101/DO188 competencies.",
    color: "#ee0000",
    icon: "/images/badges/do101.png",
    keyboardIcon: "/assets/keyboard/logos/rhel.svg",
    keyboardColor: "#ee0000",
  },
  [SkillNames.GIT]: {
    id: 11,
    name: "git",
    label: "Git",
    category: "automation",
    shortDescription: "Distributed version control, branching strategies, and commit hygiene.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    keyboardIcon: "/assets/keyboard/logos/git.svg",
    keyboardColor: "#ff4622",
  },
  [SkillNames.GITHUB]: {
    id: 12,
    name: "github",
    label: "GitHub",
    category: "automation",
    shortDescription: "Remote collaboration, pull requests, CI/CD GitHub Actions concepts, and repository workflows.",
    color: "#24292e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    keyboardIcon: "/assets/keyboard/logos/github.svg",
    keyboardColor: "#343638",
  },
  [SkillNames.NGINX]: {
    id: 13,
    name: "nginx",
    label: "Nginx",
    category: "networking",
    shortDescription: "Reverse proxying, HTTP/HTTPS web serving, load balancing concepts, and TLS certificates.",
    color: "#009639",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nginx.svg",
    keyboardColor: "#00a20b",
  },
  [SkillNames.VIM]: {
    id: 14,
    name: "vim",
    label: "Vim",
    category: "linux",
    shortDescription: "Terminal-based text editing, efficient configuration management across remote servers.",
    color: "#019733",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
    keyboardIcon: "/assets/keyboard/logos/vim.svg",
    keyboardColor: "#009f18",
  },
  [SkillNames.TS]: {
    id: 15,
    name: "ts",
    label: "TypeScript",
    category: "automation",
    shortDescription: "Strict typing and robust application development for modern tooling and web systems.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    keyboardIcon: "/assets/keyboard/logos/ts.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.REACT]: {
    id: 16,
    name: "react",
    label: "React",
    category: "automation",
    shortDescription: "Component-driven architectures, state management, and modern interactive user interfaces.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    keyboardIcon: "/assets/keyboard/logos/react.svg",
    keyboardColor: "#00cce8",
  },
  [SkillNames.NEXTJS]: {
    id: 17,
    name: "nextjs",
    label: "Next.js",
    category: "automation",
    shortDescription: "Server-side rendering, App Router, full-stack React framework for high performance.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nextjs.svg",
    keyboardColor: "#333537",
  },
  [SkillNames.TAILWIND]: {
    id: 18,
    name: "tailwind",
    label: "Tailwind CSS",
    category: "automation",
    shortDescription: "Utility-first CSS framework for clean, responsive, and maintainable styling.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    keyboardIcon: "/assets/keyboard/logos/tailwind.svg",
    keyboardColor: "#00bfd8",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  skills: SkillNames[];
  type: "academic" | "certification" | "lab";
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2022",
    endDate: "Present",
    title: "Bachelor of Technology (B.Tech) - Computer Science and Engineering",
    company: "Maharashtra Institute of Technology",
    location: "Maharashtra, India",
    type: "academic",
    description: [
      "Rigorous undergraduate engineering program focused on Operating Systems, Computer Networks, Systems Architecture, and Database Systems.",
      "Dedicated focus on Linux administration, containerization, cloud infrastructure, and network protocols.",
      "Engaged in technical lab experiments, troubleshooting kernel and network stack configurations, and applying automated deployment best practices."
    ],
    skills: [
      SkillNames.LINUX,
      SkillNames.RHEL,
      SkillNames.BASH,
      SkillNames.PYTHON,
      SkillNames.GIT,
      SkillNames.GITHUB
    ],
  },
  {
    id: 2,
    startDate: "2025",
    endDate: "Present",
    title: "Linux & Cloud Infrastructure Practice",
    company: "Hands-on Technical Labs & Certification Preparation",
    location: "Self-Driven / Red Hat Academy",
    type: "lab",
    description: [
      "Achieved Red Hat Certified System Administrator (RHCSA EX200) certification, verifying enterprise RHEL management skills.",
      "Earned Red Hat Certified Developer in Cloud-native Applications (EX188) with Podman container architecture and deployment.",
      "Built multi-container environments, automated host configuration using Ansible and Bash, and practiced local AWS cloud emulation."
    ],
    skills: [
      SkillNames.RHEL,
      SkillNames.PODMAN,
      SkillNames.DOCKER,
      SkillNames.AWS,
      SkillNames.ANSIBLE,
      SkillNames.TERRAFORM,
      SkillNames.OPENSHIFT
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Switching to crisp high-contrast daylight mode.",
    "Daylight mode activated: clean contrast for technical review.",
  ],
  dark: [
    "Dark terminal aesthetic activated: optimized for systems engineers.",
    "Console dark mode enabled: easy on the eyes during late-night debugging.",
  ],
};
