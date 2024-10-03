import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@repo/ui/components/section";

export default function HistorySection() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>History</SectionTitle>
        <SectionDescription>
          The growing history of my software development journey.
        </SectionDescription>
      </SectionHeader>

      <div className="mx-auto prose prose-gray sm:max-w-3xl">
        <blockquote>
          <p>
            I wrote a lot about my journey in software development. Hope it
            would not bore you.
          </p>
        </blockquote>
        <h3>The Beginning</h3>
        <p>
          My first year of middle school and my first experience with
          programming was in 2017. At that time, I joined FutureWork{" "}
          <em>未来工坊</em>, a studio that creates game maps for mobile games.
          To further raise the studio&apos;s profile and highlight its work, I
          decided to build a simple website. Back then, I was still doing visual
          web designs with Dreamweaver, and the &ldquo;design&rdquo; was in fact
          just a modified version of a template that someone else had posted
          online. All in all, it was from creating my first webpage that I
          became interested in learning programming. I found creating with code
          to be cool at the time. The studio was a wonderful memory even if it
          was disbanded on 2019.
        </p>
        <h3>Learning Programming</h3>
        <p>
          After making (or modifying) my first website using Dreamweaver, I
          started learning about web development on my own. At that time, PHP,
          JQuery, Bootstrap and other technologies were still the mainstay of
          the web. I learned everything I could about web design from a variety
          of sources. The most impressive one is RUNOOB.COM, which contains a
          lot of text tutorials in different programming languages, written in
          Chinese, which was very helpful to me as my English was not so good at
          that time. I started with the basics of HTML, CSS and JS, then moved
          on to PHP and MySQL, learned about Git and GitHub and other version
          control systems, and then started using powerful frameworks like
          Laravel and React.
        </p>
        <p>
          For almost a year and a half, I&apos;ve been working on projects using
          native PHP and JQuery. Then I learned about frameworks, which my
          fellow developers say can dramatically improve the efficiency of
          development and expose me to more modern ways of developing. I still
          remember the first framework I came across was ThinkPHP 5.5, a PHP web
          full-stack development framework developed by a team in China. Even
          though I only actually used it once before switching to Laravel until
          now, it left a lasting impression on me.
        </p>
        <h3>The Rise of Frontend</h3>
        <p>
          In the early days of Internet development, most of the work was done
          by back-end developers, and front-end developers at that time were
          once jokingly called cut-outs, describing that they only needed to be
          responsible for converting PS design drafts into web page elements,
          implying a low level of technical content.
        </p>
        <p>
          As browser technology advances and front-ends diversify, the practice
          of separating front-end and back-end development is starting to gain
          popularity. People develop front-end and back-end separately and
          communicate through APIs. Various types of front-end frameworks have
          also begun to emerge. At that time, Angular, React, and Vue were known
          as the three major front-end frameworks. The first one I came across
          was Vue, because it was known for its low level of difficulty in
          getting started and its simple structure. For a long time, I have been
          using Laravel + Vue to complete my projects.
        </p>
        <p>
          With the advent of Node.js, I was introduced to React and its
          derivative, the Meta framework Next.js, and was blown away by the
          possibilities of full-stack development on the front-end. Although I
          think the front-end is going back to the old way of not separating the
          front-end from the back-end, there is no denying that the efficiency
          gains from JS full-stack frameworks such as Next.js are amazing,
          thanks to the deep integration of server-side and client-side JS.
        </p>
        <h3>Modern Frontend</h3>
        <p>
          With the proliferation of SaaS platforms and a thriving JS ecosystem,
          backend-less web development is entirely possible. On more than one
          occasion, I&apos;ve built an entire website using Supabase (an open
          source Firebase replacement with database, authentication, storage,
          etc.) and Next.js. Meanwhile, platforms as diverse as PlanetScale
          (MySQL SaaS), Auth0 (Auth SaaS), and Vercel (Deploy SaaS) have
          simplified the time and effort required to develop a full-fledged
          system. There is no doubt that the future will be the era of cloud
          computing.
        </p>
        <h3>The Fascination of Architecture</h3>
        <p>
          For a very long time, I&apos;ve been developing projects using the MVC
          architecture because it&apos;s what most frameworks provide or
          advocate by default. While it is perfectly adequate for small to
          medium sized projects, I still wanted to learn more about different
          architectures. While discussing with fellow developers, I came across
          the architectural concept of DDD, Domain Driven Design.
        </p>
        <p>
          Honestly, DDD is much more complex than MVC. But there&apos;s no doubt
          that it&apos;s very attractive. Until now, I&apos;m still researching
          the application of DDD in real projects.
        </p>
        <h3>The Distributed Future</h3>
        <p>
          In the past, we have been upgrading monolithic servers to achieve
          higher performance. But with the prevalence of cloud computing and the
          maturity of containerization and deployment solutions such as Docker,
          k8s, and NoMad, distributed computing has become a new option. We can
          easily deploy projects to thousands of server nodes in different
          locations as needed, and even dynamically scale up and down according
          to real-time demand. This brings great flexibility to the management
          of server resources.
        </p>
        <p>
          Recently, I&apos;ve been trying to learn about microservices and
          distributed deployment in order to gain a deeper understanding of
          modern deployment solutions.
        </p>
      </div>
    </Section>
  );
}
