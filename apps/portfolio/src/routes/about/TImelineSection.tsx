import {
  Section,
  SectionHeader,
  SectionTitle,
} from "@repo/ui/components/section";
import { Separator } from "@repo/ui/components/separator";
import { cn } from "@repo/ui/lib/utils";
import {
  BookPlusIcon,
  BriefcaseIcon,
  FolderKanbanIcon,
  GithubIcon,
  GraduationCapIcon,
  LinkIcon,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

interface GeneralActivity {
  type: string;
  date: string;
  title: string;
  description?: string;
  externalLink?: string;
}

interface WorkActivity extends GeneralActivity {
  type: "work";
}

interface ProjectActivity extends GeneralActivity {
  type: "project";
}

interface EducationActivity extends GeneralActivity {
  type: "education";
}

interface SelfTaughtActivity extends GeneralActivity {
  type: "self-taught";
}

type Activity =
  | WorkActivity
  | ProjectActivity
  | EducationActivity
  | SelfTaughtActivity;

type StampedActivity = Activity & { stamp: string };

const activities: Activity[] = [
  {
    type: "work",
    date: "Mar 2017",
    title: "Joined <span>FutureWork</span> as helper",
  },
  {
    type: "self-taught",
    date: "2017",
    title: "Started learning programming",
  },
  {
    type: "self-taught",
    date: "2017 - Now",
    title: "Advancing my programming skills",
  },
  {
    type: "work",
    date: "Sep 2017",
    title: "Joined <span>LoongWork</span> as webdev & ops",
    description:
      "A non-profit studio of enthusiasts with a focus on Chinese-style architecture in Minecraft. (Formerly known as BuildDragon.)",
    externalLink: "https://loongwork.net",
  },
  {
    type: "project",
    date: "Nov 2021",
    title: "Participated in <span>php-libonebot</span> OSS project",
    description:
      "A PHP library for building a OneBot-compliant bot. Also my first long-term collborative project.",
    externalLink: "https://github.com/botuniverse/php-libonebot",
  },
  {
    type: "project",
    date: "Mar 2022",
    title:
      "Joined <span>zhamao-robot</span> organization & started contributing to <span>zhamao-framework</span>",
    description:
      "A high performance chat robot and web server development framework written in PHP.",
    externalLink: "https://github.com/zhamao-robot/zhamao-framework",
  },
  {
    type: "education",
    date: "2022",
    title: "Graduated from high school",
  },
  {
    type: "self-taught",
    date: "2022",
    title: "Discovered the world of architecture",
  },
  {
    type: "education",
    date: "Sep 2022",
    title: "Started studying Computer Science",
    description:
      "Bachelor of Science (Honours) Scheme in Computing and AI at PolyU",
  },
  {
    type: "work",
    date: "2023",
    title: "Started working as a freelance developer",
  },
  {
    type: "education",
    date: "2023",
    title: "Chosen Enterprise Information System as major",
    description:
      "Bachelor of Science (Hons) in Enterprise Information Systems at PolyU",
  },
  {
    type: "project",
    date: "Jun 2024",
    title: "Started making my personal website (this)",
    externalLink: "https://github.com/sunxyw/sunxyw-website",
  },
];

const TimelineIcon = ({ activity }: { activity: Activity }) => {
  switch (activity.type) {
    case "work":
      return (
        <BriefcaseIcon className="size-6 text-[#0A66C2]" aria-hidden="true" />
      );
    case "project":
      return (
        <FolderKanbanIcon
          className="size-6 text-[#DA552F]"
          aria-hidden="true"
        />
      );
    case "education":
      return (
        <GraduationCapIcon
          className="size-6 text-[#04AA6D]"
          aria-hidden="true"
        />
      );
    case "self-taught":
      return (
        <BookPlusIcon className="size-6 text-[#4951F5]" aria-hidden="true" />
      );
    default:
      return (
        <div className="size-1.5 rounded-full bg-border ring-1 ring-ring" />
      );
  }
};

const TimelineLink = ({ href }: { href: string }) => {
  let Icon: LucideIcon = LinkIcon;
  if (href.startsWith("https://github.com")) {
    Icon = GithubIcon;
  }
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Icon
        className="size-4 -m-1 hover:text-secondary-foreground"
        aria-hidden="true"
      />
      <span className="sr-only">Open project link</span>
    </a>
  );
};

const TimelineDescriptionWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  if (!children || (Array.isArray(children) && children.every((c) => !c))) {
    return null;
  }

  return (
    <div className="mt-1 gap-1 rounded-md px-3 py-2 text-xs text-muted-foreground leading-6 ring-1 ring-border ring-inset">
      {children}
    </div>
  );
};

const TimelineItem = ({
  activity,
  isLastOne,
}: {
  activity: Activity;
  isLastOne: boolean;
}) => {
  return (
    <li className="relative flex gap-x-4">
      <div
        className={cn(
          "absolute left-0 top-0 w-6 flex justify-center",
          isLastOne ? "h-6" : "-bottom-6",
        )}
      >
        <Separator orientation="vertical" />
      </div>
      <div className="relative h-6 w-6 flex flex-none items-center justify-center bg-background">
        <TimelineIcon activity={activity} />
      </div>
      <div className="flex-auto">
        <div className="flex justify-between gap-x-4">
          <div className="flex-auto py-0.5 text-sm text-muted-foreground">
            <p
              className="leading-5 [&>span]:text-foreground [&>span]:font-medium"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe because the content is moderated
              dangerouslySetInnerHTML={{ __html: activity.title }}
            />
          </div>
          <div className="flex flex-none items-center gap-x-2 py-0.5 text-xs text-muted-foreground">
            {activity.externalLink && (
              <TimelineLink href={activity.externalLink} />
            )}
            <time dateTime={activity.date} className="leading-5">
              {activity.date}
            </time>
          </div>
        </div>
        <TimelineDescriptionWrapper>
          {activity.description}
        </TimelineDescriptionWrapper>
      </div>
    </li>
  );
};

export default function TimelineSection() {
  const stampedActivities: StampedActivity[] = activities
    .reverse()
    .map((activity, index) => ({
      ...activity,
      stamp: `${activity.date}-${activity.type}-${index}`,
    }));

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Timeline</SectionTitle>
      </SectionHeader>
      <ul className="space-y-6">
        {stampedActivities.map((activity, idx) => (
          <TimelineItem
            key={activity.stamp}
            activity={activity}
            isLastOne={idx === stampedActivities.length - 1}
          />
        ))}
      </ul>
    </Section>
  );
}
