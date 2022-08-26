import { useEffect, useState } from 'react';

function MyEvents({component, url,newkey}) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
   fetch(url)
    .then(response => response.json())
    .then((data) => {
      setEvents(data)
    })
  },[url]);

  if(!events.length) return null;

  return (
    <div style={{width: '70%',margin: "0 auto"}}>
       {events.map((event,index) => ( <div key={index}>{event.title}</div> ))}
    </div>
  );
}

export default MyEvents;
