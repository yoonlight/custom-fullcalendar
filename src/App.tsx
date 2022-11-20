import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./App.css";

function App() {
  const handleEventClick = (clickInfo: any) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const renderEventContent = (eventInfo: any) => {
    return (
      <>
        {/* <b>{eventInfo.timeText}</b> */}
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <FullCalendar
            headerToolbar={{ start: "", center: "", end: "" }}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale={"ko"}
            height={600}
            weekends={true}
            selectable={true}
            dayMaxEvents={true}
            selectMirror={true}
            eventClick={handleEventClick}
            eventContent={renderEventContent}
            events={[
              {
                title: "aou",
                start: "2022-11-20T03:00:00",
                end: "2022-11-20T06:00:00",
              },
              { title: "aou", date: "2022-11-20T00:00:00" },
              { title: "aou", date: "2022-11-20T00:00:00" },
              { title: "aou", date: "2022-11-20T00:00:00" },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
