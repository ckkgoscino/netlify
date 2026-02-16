import { useEffect, useState } from 'react';
import { Users, Music, Heart, Calendar } from 'lucide-react';

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Music,
      title: 'Koncerty',
      description: 'Regularne występy artystów lokalnych i zaproszonych gości',
    },
    {
      icon: Users,
      title: 'Spotkania',
      description: 'Różnorodne wydarzenia społeczne i kulturalne',
    },
    {
      icon: Heart,
      title: 'Zajęcia',
      description: 'Joga, taniec, warsztaty artystyczne i wiele więcej',
    },
    {
      icon: Calendar,
      title: 'Cykliczne Aktywności',
      description: 'Stałe zajęcia w naszym ośrodku',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[600px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Centrum Kultury i Książki <br></br>w Gościnie
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Miejsce spotkań, przyjaźni i kultury dla wszystkich pokoleń
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Witamy w naszym ośrodku
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jesteśmy miejscem, gdzie kultura spotyka się z społecznością.
            Organizujemy koncerty, warsztaty, zajęcia sportowe i wiele innych wydarzeń
            dla osób w każdym wieku.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
