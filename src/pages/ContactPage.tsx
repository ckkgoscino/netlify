import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h1>
          <p className="text-xl text-gray-600">
            Skontaktuj się z nami lub odwiedź nas osobiście
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Dane kontaktowe
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Adres
                  </h3>
                  <p className="text-gray-600">
                    Centrum Kultury i Książki w Gościnie
                    <br />
                    ul. Przykładowa 123
                    <br />
                    72-005 Gościno
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-yellow-400 mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Telefon
                  </h3>
                  <p className="text-gray-600">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-yellow-400 mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600">kontakt@ckik-goscino.pl</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-400 mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Godziny otwarcia
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Poniedziałek - Piątek: 9:00 - 20:00</p>
                    <p>Sobota: 10:00 - 18:00</p>
                    <p>Niedziela: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Napisz do nas
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="jan.kowalski@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Temat
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Zapytanie o zajęcia"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Twoja wiadomość..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.4947458847443!2d15.695611!3d53.747222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDQ0JzUwLjAiTiAxNcKwNDEnNDQuMiJF!5e0!3m2!1spl!2spl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja CKiK Gościno"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
