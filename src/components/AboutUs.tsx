import React from 'react';
import { MapPin, Heart, Star } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Our Love Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-rose-600" />
                  <h3 className="text-2xl font-serif font-bold text-gray-800">How We Met</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  It was a rainy Tuesday evening at the cozy bookstore café on Maple Street. 
                  Emma was reading poetry in the corner, while James was searching for a travel guide. 
                  When he accidentally knocked over her coffee, what started as an embarrassing moment 
                  turned into hours of conversation about dreams, adventures, and favorite books.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-serif font-bold text-gray-800">First Date</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Three days later, James took Emma to the local art museum, followed by a picnic 
                  in Central Park. They spent the entire day talking, laughing, and discovering 
                  their shared love for vintage movies and late-night stargazing. 
                  By sunset, both knew this was something special.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-amber-600" />
                  <h3 className="text-2xl font-serif font-bold text-gray-800">The Proposal</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  On their fifth anniversary, James recreated their first date. After visiting 
                  the same museum and having a picnic in the same spot, he got down on one knee 
                  just as the sun was setting. With tears in her eyes and joy in her heart, 
                  Emma said yes to forever with her best friend.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-red-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Today</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Now, five and a half years later, Emma and James continue to write their 
                  love story together. From weekend adventures to quiet evenings at home, 
                  from supporting each other's dreams to planning their future, 
                  their love grows stronger every single day.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-pink-100 to-rose-100 p-12 rounded-3xl shadow-xl">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-4">
              "Every love story is beautiful, but ours is my favorite."
            </blockquote>
            <p className="text-gray-600">— Emma & James</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;