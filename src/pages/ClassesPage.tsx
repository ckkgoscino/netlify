import { useEffect, useState } from 'react';
import { supabase, RecurringClass } from '../lib/supabase';
import { Clock, User } from 'lucide-react';

export default function ClassesPage() {
  const [classes, setClasses] = useState<RecurringClass[]>([]);
  const [loading, setLoading] = useState(true);

  const daysOfWeek = [
    'Niedziela',
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
  ];

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const { data, error } = await supabase
        .from('recurring_classes')
        .select('*')
        .order('day_of_week', { ascending: true });

      if (error) throw error;
      setClasses(data || []);
    } catch (error) {
      console.error('Error fetching classes:', error);
    } finally {
      setLoading(false);
    }
  };

  const getClassesForDay = (day: number) => {
    return classes.filter((c) => c.day_of_week === day);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Ładowanie zajęć...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zajęcia Cykliczne
          </h1>
          <p className="text-xl text-gray-600">
            Harmonogram stałych zajęć w naszym ośrodku
          </p>
        </div>

        {classes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Brak zaplanowanych zajęć. Wróć wkrótce!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {daysOfWeek.slice(1).map((day, index) => {
              const dayIndex = index + 1;
              const dayClasses = getClassesForDay(dayIndex);

              if (dayClasses.length === 0) return null;

              return (
                <div key={dayIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-yellow-400 px-6 py-4">
                    <h2 className="text-2xl font-bold text-gray-900">{day}</h2>
                  </div>

                  <div className="p-6 space-y-4">
                    {dayClasses.map((classItem) => (
                      <div
                        key={classItem.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-lg overflow-hidden">
                              <img
                                src={classItem.image_url || 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=400'}
                                alt={classItem.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {classItem.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-3">
                              {classItem.description}
                            </p>

                            <div className="space-y-1">
                              <div className="flex items-center text-gray-600">
                                <Clock className="w-4 h-4 mr-2" />
                                <span className="text-sm font-medium">
                                  {classItem.time}
                                </span>
                              </div>

                              {classItem.instructor && (
                                <div className="flex items-center text-gray-600">
                                  <User className="w-4 h-4 mr-2" />
                                  <span className="text-sm">
                                    {classItem.instructor}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Informacje o zapisach
          </h3>
          <p className="text-gray-700">
            Aby zapisać się na zajęcia, skontaktuj się z nami telefonicznie lub osobiście
            w naszym ośrodku. Serdecznie zapraszamy!
          </p>
        </div>
      </div>
    </div>
  );
}
