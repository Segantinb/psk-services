import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { useState, useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { GetStartedButton } from "@/components/ui/get-started-button";

interface BulletPoint {
  icon: React.ReactNode;
  text: string;
}

interface TabContent {
  badge: string;
  title: string;
  description: string | BulletPoint[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Boost Revenue",
      content: {
        badge: "Modern Tactics",
        title: "Make your site a true standout.",
        description:
          "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
        buttonText: "See Plans",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Higher Engagement",
      content: {
        badge: "Expert Features",
        title: "Boost your site with top-tier design.",
        description:
          "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
        buttonText: "See Tools",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Stunning Layouts",
      content: {
        badge: "Elite Solutions",
        title: "Build an advanced web experience.",
        description:
          "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
        buttonText: "See Options",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "placeholder",
      },
    },
  ],
}: Feature108Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex((tab) => tab.value === current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].value;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [tabs]);

  return (
    <section className="pt-12 pb-32 bg-[#FFC800]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
          {badge && <Badge variant="outline">{badge}</Badge>}
          <h1 className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-gelada text-black uppercase" style={{ fontWeight: 900 }}>
            {heading}
          </h1>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-black data-[state=active]:bg-black data-[state=active]:text-white bg-transparent"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-white p-6 lg:p-16 relative min-h-[600px] lg:min-h-[500px]">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10 absolute inset-0 p-6 lg:p-16 data-[state=inactive]:pointer-events-none data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 transition-opacity duration-700"
              >
                <div className="flex flex-col h-full" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  <div className="flex flex-col gap-6">
                    {tab.content.badge && (
                      <Badge variant="outline" className="w-fit bg-[#FFC800] text-black border-[#FFC800]">
                        {tab.content.badge}
                      </Badge>
                    )}
                    <h3 className="text-[1.75rem] lg:text-[2.75rem] text-black leading-tight" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 900, lineHeight: '1.2' }}>
                      {tab.content.title}
                    </h3>
                    {typeof tab.content.description === 'string' ? (
                      <p className="text-black lg:text-lg whitespace-pre-line">
                        {tab.content.description}
                      </p>
                    ) : (
                      <div className="flex flex-col gap-4">
                        {tab.content.description.map((item, index) => (
                          <div key={index} className="flex items-center gap-3 text-black lg:text-lg">
                            <div className="text-black shrink-0">
                              {item.icon}
                            </div>
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="w-fit mt-8">
                    <GetStartedButton />
                  </div>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };

