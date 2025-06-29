import React from 'react';
import { Quote, Heart } from 'lucide-react';

const Quotes = () => {
  const testimonials = [
    {
      quote: "حتى تقوليلي شنو قالو صحاباتك حول علاقتنا",
      author: "",
      relationship: "",
      color: "from-rose-400 to-pink-500"
    }
  ];

  return (
    <section id="quotes" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Words from the Heart
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            What friends and family say about Mariem and Moussab's beautiful love story.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`}></div>
                
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-rose-400 mb-4" />
                  <blockquote className="text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center`}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.relationship}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white p-12 rounded-3xl shadow-xl max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 text-rose-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-6">
              "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope."
            </blockquote>
            <p className="text-gray-600">— Maya Angelou</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;