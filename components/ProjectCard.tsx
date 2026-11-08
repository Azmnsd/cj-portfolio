import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <Image src={image} alt={title} width={400} height={250} className="object-cover w-full" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </a>
  );
}