// ServicesPage.tsx
import * as React from "react";

type Service = {
  id: number;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive, scalable, and user-friendly web applications using modern frameworks."
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile apps with seamless performance and intuitive design."
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing engaging interfaces and experiences that prioritize usability and aesthetics."
  }
];

const Services: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Our Services</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map((service) => (
          <li
            key={service.id}
           
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
