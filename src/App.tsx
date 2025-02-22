import ChoreCard from "./Chore/ChoreCard/ChoreCard";

function App() {
  const chore = {
    status: 5,
    estimation: '1h. 25m. 45sec.',
    duration: '2h. 25m. 45sec.',
    status_label: "Completed",
    options: {
      tags: [
        { title: "backend", color: "#FF1493", id: 1 },
        { title: "frontend", color: "#4682B4", id: 1 },
      ],
    },
  };

  const chore1 = {
    status: 5,
    estimation: '1h. 25m. 45sec.',
    duration: '2h. 25m. 45sec.',
    status_label: "Completed",
    options: {
      tags: [
        { title: "jelly beam", color: "#FF1493", id: 1 },
        { title: "fork", color: "#4682B4", id: 1 },
      ],
    },
  };

  const chore2 = {
    status: 2,
    estimation: '15m. 45sec.',
    duration: '3h. 25m. 45sec.',
    status_label: "In progress",
    options: {
      tags: [
        { title: "question", color: "#FF1693", id: 1 },
        { title: "need help", color: "#4382B4", id: 1 },
      ],
    },
  };

  return (
    <>
    <div className="flex gap-2 py-2 px-2">

      <ChoreCard chore={chore} />
      <ChoreCard chore={chore1} />
      <ChoreCard chore={chore2} />
    </div>
    </>
  );
}

export default App;
