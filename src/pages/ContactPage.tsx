import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-lg text-gray-600">
            Zapraszamy do kontaktu oraz odwiedzin w naszej siedzibie
          </p>
        </div>

        {/* CONTACT CARD */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="p-10 space-y-8">

              {/* ADRES */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Adres
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Centrum Kultury i Książki w Gościnie</strong>
                    <br />
                    ul. Matejki 2
                    <br />
                    78-120 Gościno
                    <br />
                    NIP 671 184 19 78
                  </p>
                </div>
              </div>

              {/* TELEFON */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Telefon
                  </h3>
                  <a
                    href="tel:+48602681300"
                    className="text-gray-700 hover:text-yellow-500 transition-colors"
                  >
                    +48 602 681 300
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:ckk@goscino.pl"
                    className="text-gray-700 hover:text-yellow-500 transition-colors"
                  >
                    ckk@goscino.pl
                  </a>
                </div>
              </div>

              {/* GODZINY */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Godziny otwarcia
                  </h3>
                  <div className="text-gray-700 space-y-1">
                    <p>Poniedziałek – Piątek: 10:00 – 20:00</p>
                    <p>Sobota – Niedziela: godziny wydarzeń specjalnych</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – MAP */}
            <div className="h-96 md:h-auto">
              <iframe
                src="https://www.google.com/maps?q=Centrum+Kultury+i+Ksi%C4%85%C5%BCki+w+Go%C5%9Bcinie,+Matejki+2,+Go%C5%9Bcinie&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja CKiK Gościno"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
