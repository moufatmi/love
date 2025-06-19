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
                  وجدتها بين الأحجار كاللؤلؤ البرٌاق ، أرسلت لها رسالة فسألتني ، كيف حالك ، أجتها ' أنا  على قيد الحياة ' مازحا لأني رأيت الجملة على حسابها الشخصي ، إستوقفت لبرهة ، عادت بي ذاكرتي لليوم الذي قطعت فيه الدكتورة الحبل السري من علي ، و سألت نفسي حينها ، هل أنا على قيد على الحياة حقا؟ هل كنت ميتا طيلة 20 سنة من حياتي؟
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-serif font-bold text-gray-800">First Date</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  إلتقينا على ميعاد معلوم ، و كان أجمل لقاء لم و لن ينعم به أحد من قبلنا ولا من بعدنا ، النظرة الأولى نُقِشت بدم الغزال ، الكلمة الأولى كُتِبت بماء الذهب
                </p>
                <p className="text-gray-700 leading-relaxed">
                كانت أفضل 3 لقاءات لمدة 3 أيام ، تحسست جلدها الذي خلقه الله في أكمل صورة ، شممت ريحها الطيب كما ريح الجنة أو أشد ، و سمعت صوتها كما وحي الملائكة أو أحن
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
                  لم يتخيل أحدنا ( على الأقل هي هههه ) أن قدرنا وجب علينا أن نكمل الحياة معا ، ظننت أن الأمور كانت نزوة عابرة و صداقة محدودة سيطويها النسيان مع الوقت ، لكن كانت صدفة أننا عبرنا عن مشاعرنا ، هي أخبرتني بتردد أنه في قلبها شخص لكنها لا تريد أن تخبره بمشاعرها خوفا من شيء ما ، و أنا الغبي ظننت أنها تتكلم عن شخص اخر ولكن لم أختر أن أقوم بحظرها فأخبرتها أني في خدمتها لأساعدها حتى تبوح بمشاعرها لهذا الشخص ( في عقلي أنا مؤمن أنها تتكلم عن شخص اخر ، و قلبي أراد أن لا يحظرها في تلك اللحظة ) 
                  و المفاجئة أن الشخص كان هو أنا ، لم يكن في قلبها أي أحد ، كنت أنا فقط 
                </p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-red-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Today</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  لا أعلم كيف أن حياتي كانت بلا وجودها ، لا أتذكرها بالمرة ، و لا اظن أنه ستكون لي حياة من بعدها
                </p>
              </div>
            </div>
          </div>
          <div className="text-center bg-gradient-to-br from-pink-100 to-rose-100 p-12 rounded-3xl shadow-xl">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-4">
              "Every love story is beautiful, but ours is my favorite."
            </blockquote>
            <p className="text-gray-600">— Moussab</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;