// components/Testimonials.js
import Image from "next/image";
import "../styles/Testimonials.css"; // custom CSS we'll create

const testimonials = [
  {
    name: "Daniel Kim",
    role: "Project Manager",
    image: "/images/man1.jpeg",
    quote: "This organization transformed how we work.",
    message: "I'm grateful to be part of such a dynamic and visionary team.",
  },
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    image: "/images/woman1.jpeg",
    quote: "Amazing experience with supportive colleagues.",
    message: "Every day is an opportunity to grow and innovate.",
  },
  {
    name: "Amina Yusuf",
    role: "Marketing Specialist",
    image: "/images/man2.jpeg",
    quote: "I've grown so much professionally here.",
    message: "The leadership and learning opportunities are unmatched.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Customers Say.
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((person, index) => (
          <div key={index} className="flip-card">
            <div className="flip-inner">
              {/* Front Side */}
              <div className="flip-front bg-gray-100 text-center p-6 rounded-2xl shadow-xl">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>

              {/* Back Side */}
              <div className="flip-back bg-gray-800 text-white p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center">
                <p className="italic text-center mb-4">"{person.quote}"</p>
                <p className="text-sm text-center">{person.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
