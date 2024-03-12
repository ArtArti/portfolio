import React, { useState, useEffect } from "react";
import AnimatedNumber from 'react-animated-number';

const achievementsList = [
  {
    metric: "Projects",
    value: "5",
    postfix: "+",
  },
  {
    metric: "IT Experience",
    value: "1",
  },
  {
    metric: "Total experience",
    value: "2",
  },
  {
    metric: "Experience(Edu + It) ",
    value: "4",
  },
];

const Count = () => {
  const [updatedAchievementsList, setUpdatedAchievementsList] = useState([]);

  useEffect(() => {
    function handleScroll() {
      setUpdatedAchievementsList(achievementsList);
    }

    // Attach scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {updatedAchievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className=" text-4xl font-bold flex flex-row">
              {achievement.prefix && `${achievement.prefix}`}
              <AnimatedNumber
                value={parseInt(achievement.value)}
                duration={1000}
                fontStyle={{ color: "white", fontSize: "4xl", fontWeight: "bold" }}
                // formatValue={(val) => `${val}${achievement.postfix || ''}`}
                
                style={{
                transition: '0.8s ease-out',
                fontSize: 48,
                transitionProperty:
                    'background-color, color, opacity',    
            }}
              />   
            </h2>
            <p className=" text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Count;
