import { Button } from "@repo/ui/components/button";
import { Helmet } from "@modern-js/runtime/head";

const Index = () => (
  <div className="container-box">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main>
      <div className="relative isolate">
        <div className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span className="block">The future of work</span>
                <span className="block text-primary">starts here</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Mase Platform is a productivity tool for students and
                professionals. It helps you manage your timetable, upload and
                share files, and collaborate with others in real-time.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button>Get started</Button>
                <Button variant="ghost">Learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Index;
