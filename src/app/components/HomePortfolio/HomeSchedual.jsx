import React from "react";

const HomeSchedual = () => {
  return (
    <div className="relative bg-gray-50 apple-font md:h-[600px] h-[850px] ">
      <div className="relative overflow-hidden h-full bg-neutral-900  px-4">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 ">
          <div className="relative h-full w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              src="https://www.youtube.com/embed/mOFoh9FUR8w?autoplay=1&mute=1&loop=1&playlist=mOFoh9FUR8w&controls=0&rel=0&modestbranding=1"
              title="Background Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-black/80"></div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-row gap-5 text-white">
          <div className="w-1/2 h-96">
            <h1 className="text-6xl font-semibold">AI-Driven <br /> Development <br /> Excellence</h1>
            <p className="text-2xl mt-10 text-gray-100">
              We integrate cutting-edge AI across the development lifecycle—delivering
              solutions 10X faster with unmatched reliability. Our engineers augment human
              expertise with AI to automate, optimize, and future-proof your software.
            </p>
          </div>
          <div className="w-1/2 h-full flex justify-end">
            <div className="flex flex-col gap-20">
              {/* Sections */}
              {[{
                percent: '70%', title: 'Intelligent Coding', desc: 'AI-powered code synthesis and auto-completion reduce manual effort while maintaining enterprise-grade standards.', sub: 'Faster Development'
              }, {
                percent: '40%', title: 'Peak Performance', desc: 'ML algorithms optimize resource allocation, predict scaling needs, and eliminate bottlenecks in real-time.', sub: 'Higher Efficiency'
              }, {
                percent: '90%', title: 'Zero-Downtime DevOps', desc: 'AI-driven CI/CD pipelines automate rollbacks and canary releases for seamless updates.', sub: 'Faster Deployments'
              }].map((item, idx) => (
                <div key={idx}>
                  <h1 className="flex items-center gap-5">
                    <span className="font-light text-6xl fontPoppins">{item.percent}</span> / {item.sub}
                  </h1>
                  <h1 className="text-3xl mt-5 font-semibold">{item.title}</h1>
                  <p className="text-md font-semibold text-gray-300 w-96 mt-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomeSchedual;
