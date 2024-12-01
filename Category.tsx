import React from "react";
import Image from "next/image";

const Category: React.FC = () => {
  return (
    <section
      id="Category"
      className="w-full h-[1049px] font-roboto py-[112px] flex flex-col justify-center items-center"
    >
      {/* Section Header */}
      <div className="md:w-[768px] w-[410px] h-[109px] hidden md:flex flex-col gap-[24px] mx-auto">
        <h2 className="text-[48px] font-bold leading-[57.6px]">
          Explore Courses By Category
        </h2>
        <p className="text-[18px] leading-[27px]">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      {/* Responsive Header */}
      <div className="md:hidden w-[385px] h-[162px] flex flex-col gap-[24px] text-center">
        <h4 className="text-[32px] font-bold leading-[41.6px]">
          Explore Courses By Category
        </h4>
        <p className="text-[18px] leading-[27px]">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      {/* Courses Section */}
      <div className="w-full h-[636px] flex flex-col gap-[64px] mt-[80px] items-center">
        {/* Repeatable Course Card */}
        <div className="flex gap-[24px]">
          <CourseCard
            title="Design & Development"
            description="50+ Courses Available"
            imageSrc="/pentool.png"
            imageAlt="Design & Development"
          />
          <CourseCard
            title="Marketing"
            description="50+ Courses Available"
            imageSrc="/volume-high.png"
            imageAlt="Marketing"
          />
          <CourseCard
            title="Development"
            description="50+ Courses Available"
            imageSrc="/deve.png"
            imageAlt="Development"
          />
        </div>
        <div className="flex gap-[24px]">
          <CourseCard
            title="Communication"
            description="50+ Courses Available"
            imageSrc="/commu.png"
            imageAlt="Communication"
          />
          <CourseCard
            title="Digital Marketing"
            description="50+ Courses Available"
            imageSrc="/digital.png"
            imageAlt="Digital Marketing"
          />
          <CourseCard
            title="Self Development"
            description="50+ Courses Available"
            imageSrc="/arrow.png"
            imageAlt="Self Development"
          />
        </div>
        <div className="flex gap-[24px]">
          <CourseCard
            title="Business"
            description="50+ Courses Available"
            imageSrc="/briefcase.png"
            imageAlt="Business"
          />
          <CourseCard
            title="Finance"
            description="50+ Courses Available"
            imageSrc="/Vector.png"
            imageAlt="Finance"
          />
          <CourseCard
            title="Consulting"
            description="50+ Courses Available"
            imageSrc="/consulting.png"
            imageAlt="Consulting"
          />
        </div>
        {/* View All Button */}
        <button
          className="w-[152px] h-[40px] border border-black rounded-[5px]"
          aria-label="View all available courses"
        >
          View All Courses
        </button>
      </div>
    </section>
  );
};

interface CourseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, imageSrc, imageAlt }) => (
  <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]">
    <div className="w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
      <Image src={imageSrc} alt={imageAlt} width={32} height={32} />
    </div>
    <div>
      <p className="font-semibold text-[20px] leading-[30px]">{title}</p>
      <p className="text-[18px] leading-[27px]">{description}</p>
    </div>
  </div>
);

export default Category;
