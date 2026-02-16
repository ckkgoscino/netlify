import { useEffect, useState } from 'react';
import { supabase, Event } from '../lib/supabase';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function NewsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const isPastEvent = (eventDate: string) => {
    return new Date(eventDate) < new Date();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Ładowanie wydarzeń...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Aktualności</h1>
          <p className="text-xl text-gray-600">
            Sprawdź nadchodzące wydarzenia w naszym ośrodku
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Brak zaplanowanych wydarzeń. Wróć wkrótce!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
              const isPast = isPastEvent(event.event_date);
              return (
                <div
                  key={event.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl ${
                    isPast ? 'opacity-60 grayscale' : ''
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image_url || 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800'}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    {isPast && (
                      <div className="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Zakończone
                      </div>
                    )}
                    {!isPast && (
                      <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        Nadchodzące
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {event.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{formatDate(event.event_date)}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{formatTime(event.event_date)}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">CKiK Gościno</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
