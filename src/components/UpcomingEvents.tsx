import React, { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

interface EventData {
  id: number;
  date: string;
  title: string;
  image: string;
  description: string;
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    import("../lib/upcomingEvents.json").then((data) => {
      setEvents(data.default || data);
    });
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">
          Próximos Eventos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Dialog
              key={event.id}
              open={open && selectedEvent?.id === event.id}
              onOpenChange={(o) => {
                setOpen(o);
                if (!o) setSelectedEvent(null);
              }}
            >
              <DialogTrigger asChild>
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    setSelectedEvent(event);
                    setOpen(true);
                  }}
                >
                  <div className="relative h-64">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">
                        {event.date}
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <button className="bg-yellow-400 text-black px-4 py-2 rounded text-sm font-bold hover:bg-yellow-500 transition-colors duration-200">
                        Saiba Mais
                      </button>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden">
                <div className="flex flex-col md:flex-row w-full h-full">
                  <div className="md:w-1/2 w-full bg-black flex items-center justify-center">
                    <img
                      src={selectedEvent?.image}
                      alt={selectedEvent?.title}
                      className="w-full h-full object-contain max-h-[80vh] bg-black"
                    />
                  </div>
                  <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-white min-h-[300px]">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {selectedEvent?.title}
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">
                      {selectedEvent?.date}
                    </div>
                    <p className="text-gray-700 mb-4">
                      {selectedEvent?.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
