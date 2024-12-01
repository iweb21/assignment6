import React from 'react';

// CourseCard Component
interface CourseCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  rating: string;
  price: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  category,
  title,
  description,
  image,
  rating,
  price,
}) => {
  return (
    <div className="w-[405px] h-[534px] rounded-[5px] flex flex-col gap-[24px] ml-20 bg-[#F7F7F7]">
      <div className="w-[405px] h-[300px]">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="pl-[16px] w-full h-[210px] flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between">
            <p className="text-[14px] font-semibold">{category}</p>
            <div className="flex items-center">
              <img
                className="w-[20px] h-[20px]"
                src="Star 1.png"
                alt="star rating"
              />
              <p className="text-[14px] font-semibold">{rating}</p>
            </div>
          </div>
          <h5 className="text-[24px] font-bold">{title}</h5>
          <p className="text-[16px] leading-[24px]">{description}</p>
        </div>
        <div className="flex gap-[16px]">
          <button className="w-[117px] h-[40px] border border-black rounded-[5px]">
            Enroll Now
          </button>
          <button className="w-[77px] h-[40px]">${price}</button>
        </div>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  // Courses data
  const courses = [
    {
      category: 'Design',
      title: 'UX/UI Design 201',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      image: 'laptop.png',
      rating: '5.0',
      price: '400',
    },
    {
      category: 'Programming',
      title: 'Introduction to Python',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      image: 'prog.png',
      rating: '5.0',
      price: '400',
    },
    {
      category: 'Business',
      title: 'Data Analysis for Beginners',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      image: 'busines.png',
      rating: '5.0',
      price: '400',
    },
    {
      category: 'Art',
      title: 'Art Specialization',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      image: 'art.png',
      rating: '5.0',
      price: '400',
    },
    {
      category: 'Law',
      title: 'Rule of Law',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      image: 'law.png',
      rating: '5.0',
      price: '400',
    },
    {
      category: 'Tech',
      title: 'Advanced Technology',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      image: 'tech.png',
      rating: '5.0',
      price: '400',
    },
  ];

  return (
    <section
      id="Courses"
      className="w-[1280px] py-[112px] flex flex-col gap-[60px] items-center"
    >
      <header className="w-[768px] flex flex-col gap-[24px] mx-auto text-center">
        <h1 className="text-[56px] font-bold leading-[67.2px]">Courses</h1>
        <p className="text-[18px] leading-[27px]">Your Ultimate Guide to Learning</p>
      </header>
      {/* Tabs */}
      <div className="flex gap-[16px]">
        <button className="border-b border-black px-[16px]">Popular</button>
        <button className="px-[16px]">Recommended</button>
        <button className="px-[16px]">Best Price</button>
      </div>
      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[32px]">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <button className="w-[152px] h-[40px] border border-black rounded-[5px]">
        View All Courses
      </button>
    </section>
  );
};

export default Courses;









//w-405