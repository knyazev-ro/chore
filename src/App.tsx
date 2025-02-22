import ChoreCard from "./Chore/ChoreCard/ChoreCard";

function App() {
  const chore = {
    title: "Исправить баг с оформлением бибок",
    status: 5,
    estimation_time: '1h. 25m. 45sec.',
    estimation: 23678,
    duration_time: '2h. 25m. 45sec.',
    duration: 10999,
    status_label: "Completed",
    options: {
      tags: [
        { title: "backend", color: "#FF1493", id: 1 },
        { title: "frontend", color: "#4682B4", id: 2 },
        { title: "kleno", color: "#1128A1", id: 3 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/1.jpg",
    responsible: "https://randomuser.me/api/portraits/men/2.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/3.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/4.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/men/5.jpg" }],
    project: {
      id: 1,
      title: "Разработка системы управления задачами",
      logo: "https://via.placeholder.com/150?text=Logo+1",
    },
  };

  const chore1 = {
    title: "Исправить баг с оформлением бибок",
    status: 6,
    estimation_time: '1h. 25m. 45sec.',
    estimation: 23678,
    duration_time: '2h. 25m. 45sec.',
    duration: 22999,
    status_label: "Cancelled",
    options: {
      tags: [
        { title: "jelly beam", color: "#FF1493", id: 1 },
        { title: "fork", color: "#4682B4", id: 2 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/7.jpg",
    responsible: "https://randomuser.me/api/portraits/men/8.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/9.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/10.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/men/11.jpg" }],
    project: {
      id: 2,
      title: "Ребрендинг сайта компании",
      logo: "https://via.placeholder.com/150?text=Logo+2",
    },
  };

  const chore2 = {
    title: "Выпустить новый альбом 'My beautiful dark twisted fantasy'",
    status: 2,
    estimation_time: '15m. 45sec.',
    estimation: 23678,
    duration_time: '3h. 25m. 45sec.',
    duration: 15999,
    status_label: "In progress",
    options: {
      tags: [
        { title: "question", color: "#FF1693", id: 1 },
        { title: "need help", color: "#4382B4", id: 2 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/13.jpg",
    responsible: "https://randomuser.me/api/portraits/men/14.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/15.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/16.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/men/17.jpg" }],
    project: {
      id: 3,
      title: "Мобильное приложение для заказов",
      logo: "https://via.placeholder.com/150?text=Logo+3",
    },
  };

  const chore3 = {
    title: "Починить баг в калькуляторе",
    status: 3,
    estimation_time: '30m. 10sec.',
    estimation: 5000,
    duration_time: '1h. 5m. 20sec.',
    duration: 3000,
    status_label: "In review",
    options: {
      tags: [
        { title: "design", color: "#32CD32", id: 1 },
        { title: "urgent", color: "#FF6347", id: 2 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/19.jpg",
    responsible: "https://randomuser.me/api/portraits/men/20.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/21.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/22.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/men/23.jpg" }],
    project: {
      id: 4,
      title: "Новый сайт для стартапа",
      logo: "https://via.placeholder.com/150?text=Logo+4",
    },
  };

  const chore4 = {
    title: "Провести тестирование приложения",
    status: 4,
    estimation_time: '5h. 15m. 30sec.',
    estimation: 12000,
    duration_time: '8h. 50m. 25sec.',
    duration: 11000,
    status_label: "Pending",
    options: {
      tags: [
        { title: "testing", color: "#FFD700", id: 1 },
        { title: "backend", color: "#4682B4", id: 2 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/25.jpg",
    responsible: "https://randomuser.me/api/portraits/men/26.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/27.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/28.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/men/29.jpg" }],
    project: {
      id: 5,
      title: "Обновление платформы для e-commerce",
      logo: "https://via.placeholder.com/150?text=Logo+5",
    },
  };

  const chore5 = {
    title: "Разработать новый функционал для панели администратора",
    status: 1,
    estimation_time: '10h. 30m. 25sec.',
    estimation: 23000,
    duration_time: '15h. 40m. 10sec.',
    duration: 18000,
    status_label: "Assigned",
    options: {
      tags: [
        { title: "admin", color: "#00BFFF", id: 1 },
        { title: "urgent", color: "#FF6347", id: 2 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/31.jpg",
    responsible: "https://randomuser.me/api/portraits/men/32.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/33.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/34.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/men/35.jpg" }],
    project: {
      id: 6,
      title: "Панель управления системой",
      logo: "https://via.placeholder.com/150?text=Logo+6",
    },
  };

  const chore6 = {
    title: "Обновить кодовую базу проекта",
    status: 2,
    estimation_time: '8h. 30m. 20sec.',
    estimation: 22000,
    duration_time: '9h. 20m. 10sec.',
    duration: 15000,
    status_label: "In progress",
    options: {
      tags: [
        { title: "refactor", color: "#8A2BE2", id: 1 },
        { title: "backend", color: "#32CD32", id: 2 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/36.jpg",
    responsible: "https://randomuser.me/api/portraits/men/37.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/38.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/39.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/men/40.jpg" }],
    project: {
      id: 7,
      title: "Модернизация корпоративного сайта",
      logo: "https://via.placeholder.com/150?text=Logo+7",
    },
  };

  return (
    <>
      <div className="flex gap-2 py-2 px-2 bg-indigo-200 flex-wrap">
        <ChoreCard chore={chore} />
        <ChoreCard chore={chore1} />
        <ChoreCard chore={chore2} />
        <ChoreCard chore={chore3} />
        <ChoreCard chore={chore4} />
        <ChoreCard chore={chore5} />
        <ChoreCard chore={chore6} />
      </div>
    </>
  );
}

export default App;
