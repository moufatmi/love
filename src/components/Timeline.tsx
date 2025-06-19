import React from 'react';
import { Calendar, MapPin, Gift, BellRing as Ring, Camera, Plane } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      date: "June 14, 2019",
      title: "First Meeting",
      description: "Met at the bookstore café on a rainy evening",
      icon: Calendar,
      color: "from-rose-400 to-pink-500"
    },
    {
      date: "June 17, 2019",
      title: "First Date",
      description: "Art museum and picnic in Central Park",
      icon: MapPin,
      color: "from-purple-400 to-pink-500"
    },
    {
      date: "December 25, 2019",
      title: "First Christmas",
      description: "Spent the holidays together with both families",
      icon: Gift,
      color: "from-green-400 to-teal-500"
    },
    {
      date: "August 15, 2020",
      title: "Moved In Together",
      description: "Found our perfect little apartment downtown",
      icon: MapPin,
      color: "from-blue-400 to-purple-500"
    },
    {
      date: "September 12, 2021",
      title: "European Adventure",
      description: "Three weeks exploring Paris, Rome, and Barcelona",
      icon: Plane,
      color: "from-amber-400 to-orange-500"
    },
    {
      date: "March 8, 2023",
      title: "Adopted Luna",
      description: "Welcomed our golden retriever puppy to the family",
      icon: Camera,
      color: "from-yellow-400 to-amber-500"
    },
    {
      date: "June 14, 2024",
      title: "The Proposal",
      description: "James proposed at sunset in Central Park",
      icon: Ring,
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Our Journey Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Every moment has been a step towards forever. Here are the milestones that shaped our love story.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-300 to-purple-400 rounded-full"></div>
            
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative mb-12 last:mb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`flex items-center ${isEven ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                    <div className={`w-full md:w-5/12 ${isEven ? 'text-right' : 'text-left'}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <div className="space-y-3">
                          <div className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${milestone.color}`}>
                            {milestone.date}
                          </div>
                          <h3 className="text-xl font-serif font-bold text-gray-800">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;