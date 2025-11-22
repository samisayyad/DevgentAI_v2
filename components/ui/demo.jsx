"use client";

import TestimonialCard from "@/components/ui/multi-media-testimonial";

const testimonials = [
  {
    name: "Alice Johnson",
    profile: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
    title: "Improved Interview Workflow",
    designation: "Software Engineer",
    content:
      "Ruvy transformed the way I manage my interviews. Highly recommended for professionals looking to save time!",
  },
  {
    name: "Bob Smith",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    title: "Simplicity at Its Best",
    designation: "Product Manager",
    content:
      "The simplicity of this platform is unmatched. Perfect for small teams and startups.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Charlie Lee",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    title: "Creative and Efficient Platform",
    designation: "UX Designer",
    content: "",
    mediaUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Diana Prince",
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    title: "Flawless Scheduling Experience",
    designation: "Full Stack Developer",
    content:
      "The UI is sleek, intuitive, and makes scheduling interviews a breeze. 10/10 experience!",
  },
  {
    name: "Ethan Hunt",
    profile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80",
    title: "Streamlined Pipeline Management",
    designation: "DevOps Engineer",
    content:
      "Managing my pipelines has never been easier thanks to this platform. Excellent UX!",
  },
  {
    name: "Fiona Gallagher",
    profile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    title: "Smooth and Intuitive Interface",
    designation: "Frontend Developer",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "George Martin",
    profile: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&w=150&q=80",
    title: "Visually Stunning Design",
    designation: "Backend Developer",
    content: "",
    mediaUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hannah Lee",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    title: "Efficient Testing Workflow",
    designation: "QA Engineer",
    content:
      "Testing has become more efficient with the tools provided here. Very intuitive and well-designed.",
  },
  {
    name: "Ian Wright",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    title: "Time-Saving Integration",
    designation: "Data Scientist",
    content:
      "I can now schedule interviews without leaving my workspace. Saves so much time!",
  },
  {
    name: "Jane Doe",
    profile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
    title: "Clean Visual Presentation",
    designation: "AI Researcher",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kyle Brown",
    profile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80",
    title: "Smooth Playback Experience",
    designation: "UI Designer",
    content: "",
    mediaUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Laura Kim",
    profile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    title: "Simple Yet Powerful",
    designation: "Full Stack Developer",
    content:
      "The simplicity of this platform is unmatched. Perfect for small teams and startups.",
  },
  {
    name: "Michael Scott",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    title: "Organized Interview Management",
    designation: "Project Manager",
    content:
      "I can track and organize interviews effortlessly. Love the clean UI and responsiveness.",
  },
  {
    name: "Nina Patel",
    profile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
    title: "Elegant Visual Experience",
    designation: "Mobile Developer",
    content: "",
    mediaUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Oscar Wilde",
    profile: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&w=150&q=80",
    title: "Impressive User Flow",
    designation: "Content Strategist",
    content: "",
    mediaUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pam Beesly",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    title: "Showcasing Client Feedback",
    designation: "Graphic Designer",
    content:
      "Love the clean testimonial cards and how easy it is to showcase our client feedback.",
  },
  {
    name: "Quentin Tarantino",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    title: "Perfect for Creative Professionals",
    designation: "Video Editor",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rachel Green",
    profile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    title: "Enhanced Collaboration",
    designation: "Marketing Specialist",
    content: "",
    mediaUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Steve Rogers",
    profile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80",
    title: "Streamlined Recruitment Process",
    designation: "Team Lead",
    content:
      "This platform streamlines our recruitment process like never before. Highly efficient!",
  },
  {
    name: "Tina Fey",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    title: "Beautifully Designed Platform",
    designation: "Copywriter",
    content:
      "Beautifully designed, intuitive, and extremely user-friendly. Can't recommend enough!",
  },
];

export default function TestimonialsDemoPage() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-foreground">
          Our clients love working with us because we go beyond great design to
          deliver real results.
        </h2>

        {Array.isArray(testimonials) && testimonials.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 [column-fill:_balance]">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No testimonials yet.
          </p>
        )}
      </div>
    </section>
  );
}
