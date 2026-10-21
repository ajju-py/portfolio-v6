import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Live Demo
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"outline"} size={"sm"}>
            GitHub Repository
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  tailwind: brand("Tailwind CSS", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  react: brand("React", "react-mono.svg"),
  linux: {
    title: "Linux / RHEL",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/linux.svg" title="Linux" />,
  },
  podman: {
    title: "Podman",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/podman.svg" title="Podman" />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/aws.svg" title="AWS" />,
  },
  bash: {
    title: "Bash Scripting",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/bash.svg" title="Bash" />,
  },
  ansible: {
    title: "Ansible",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/ansible.svg" title="Ansible" />,
  },
  rhel: {
    title: "Red Hat Enterprise Linux",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/rhel.svg" title="RHEL" />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "rhcsa",
    category: "Linux & SysAdmin Lab",
    title: "RHCSA EX200 & Linux Administration Practice Lab",
    src: "/assets/projects-screenshots/rhcsa/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.rhel,
      ],
      backend: [
        PROJECT_SKILLS.bash,
        PROJECT_SKILLS.ansible,
        PROJECT_SKILLS.podman,
        PROJECT_SKILLS.docker,
      ],
    },
    github: "https://github.com/ajju-py/REDHAT-RHCSA-EX200",
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Comprehensive Linux Infrastructure &amp; RHCSA Administration Lab
          </TypographyP>
          <TypographyP className="font-mono">
            Practical hands-on repository aligned directly with Red Hat Certified System Administrator
            (RHCSA EX200) exam standards on Red Hat Enterprise Linux. Explores enterprise systems administration
            competencies including disk partitioning, Logical Volume Manager (LVM) volume creation and resizing,
            systemd service control, journalctl log auditing, firewall management using firewalld, and rigorous
            SELinux policy troubleshooting in enforcing mode.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">System Engineering Highlights</TypographyH3>
          <ul className="list-disc list-inside font-mono space-y-2 text-sm text-muted-foreground">
            <li>Storage Architecture: LVM volume groups, logical volumes, file system formatting (XFS/ext4), and persistent fstab mounting.</li>
            <li>Security &amp; Policy: SELinux context management (chcon, restorecon), boolean switches, and firewalld port/service security.</li>
            <li>Process &amp; Service Automation: systemd target unit definitions, automated timer units, and log extraction via journalctl.</li>
            <li>User &amp; Privilege Control: Sudoers group permissions, sticky bits, SGID directory inheritance, and SSH key management.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "carbon",
    category: "Cloud Analytics & Python",
    title: "Carbon Intelligence Platform",
    src: "/assets/projects-screenshots/carbon/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.docker,
      ],
    },
    github: "https://github.com/ajju-py/carbon-intelligence-platform",
    live: "https://carbon-intelligence-platform-navy.vercel.app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Automated Carbon Emission Tracking &amp; Analytics Platform
          </TypographyP>
          <TypographyP className="font-mono">
            An end-to-end full stack platform designed to calculate, analyze, and visualize corporate carbon
            footprint metrics across Scope 1, 2, and 3 emission streams. Built with a modular Python backend
            for metric calculations and predictive assessments, coupled with a responsive interactive dashboard.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Engineering Deliverables</TypographyH3>
          <ul className="list-disc list-inside font-mono space-y-2 text-sm text-muted-foreground">
            <li>Emission Analysis Engine: Computes greenhouse gas equivalents using standard emission factors.</li>
            <li>Responsive Analytics UI: Interactive charts and dynamic data tables for executive emission auditing.</li>
            <li>Cloud Deployment: Configured for automated continuous deployment with containerized runtime compatibility.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "building-passport",
    category: "Digital Infrastructure",
    title: "Building Passport (Ghar Ki Pehchan)",
    src: "/assets/projects-screenshots/building-passport/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    github: "https://github.com/ajju-py/Building-passport-Ghar-ki-pehchan",
    live: "https://building-passport-ghar-ki-pehchan-ecru.vercel.app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Civic Infrastructure Registry &amp; Building Identity System
          </TypographyP>
          <TypographyP className="font-mono">
            Digital civic infrastructure registry providing verifiable building identity passports. Implements
            property metadata tracking, structural compliance records, and secure identity records with high
            availability and responsive performance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Architecture Details</TypographyH3>
          <ul className="list-disc list-inside font-mono space-y-2 text-sm text-muted-foreground">
            <li>Structured Metadata: Consistent digital passports with verified structural and geographic identifiers.</li>
            <li>Type-Safe Data Flow: End-to-end TypeScript validation ensuring reliable property records.</li>
            <li>Responsive Interface: Accessible layout optimized across desktop, tablet, and mobile browsers.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "sahmatipay",
    category: "FinTech Protocol",
    title: "SahmatiPay - Consent-Driven Financial Protocol",
    src: "/assets/projects-screenshots/sahmatipay/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.docker,
      ],
    },
    github: "https://github.com/ajju-py/SahmatiPay",
    live: "https://sahmati-pay.vercel.app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Consent-Driven Financial Transaction &amp; Account Aggregator Prototype
          </TypographyP>
          <TypographyP className="font-mono">
            Prototype exploring user consent management in digital financial protocols, drawing on the Indian
            Account Aggregator (AA) framework. Focuses on cryptographically secure consent tokens, transparent
            data-sharing authorization flows, and clear verification interfaces.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Protocol Highlights</TypographyH3>
          <ul className="list-disc list-inside font-mono space-y-2 text-sm text-muted-foreground">
            <li>Consent Lifecycle: Explicit user authorization, revocation flows, and token time-to-live enforcement.</li>
            <li>API Verification: Clear request/response validations simulating financial information user (FIU) interactions.</li>
            <li>Security First: Designed with privacy-by-design principles and strict boundary isolation.</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
