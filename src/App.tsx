import ChoreCard from "./Chore/ChoreCard/ChoreCard";
import ChoreTrello from "./Chore/Trello/ChoreTrello";
import ChoreTrelloColumn from "./Chore/Trello/ChoreTrelloColumn";
import TrelloPage from "./Chore/TrelloPage/TrelloPage";

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
    title: "Разработать новый функционал для панели администратора для панели администратора панели администратора для панели администратора панели администратора для панели администратора",
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

  const chore21 = {
    title: "Оптимизация производительности базы данных",
    status: 2,
    estimation_time: '18h. 00m. 00sec.',
    estimation: 64800,
    duration_time: '20h. 45m. 00sec.',
    duration: 47700,
    status_label: "In progress",
    options: {
        tags: [
            { title: "database", color: "#8B0000", id: 1 },
            { title: "optimization", color: "#FF4500", id: 2 }
        ],
    },
    created_by: "https://randomuser.me/api/portraits/men/107.jpg",
    responsible: "https://randomuser.me/api/portraits/women/108.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/109.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/women/110.jpg" }],
    accomplicies: [
        { avatar: "https://randomuser.me/api/portraits/men/111.jpg" },
        { avatar: "https://randomuser.me/api/portraits/women/112.jpg" }
    ],
    project: {
        id: 22,
        title: "Оптимизация инфраструктуры",
        logo: "https://via.placeholder.com/150?text=DB+Optim"
    },
};

const chore22 = {
    title: "Создание системы аналитики для маркетинга",
    status: 1,
    estimation_time: '40h. 00m. 00sec.',
    estimation: 144000,
    duration_time: '45h. 30m. 00sec.',
    duration: 123800,
    status_label: "Assigned",
    options: {
        tags: [
            { title: "analytics", color: "#6A5ACD", id: 1 },
            { title: "marketing", color: "#FF6347", id: 2 },
            { title: "dashboard", color: "#00CED1", id: 3 }
        ],
    },
    created_by: "https://randomuser.me/api/portraits/women/113.jpg",
    responsible: "https://randomuser.me/api/portraits/men/114.jpg",
    closed_by: "https://randomuser.me/api/portraits/women/115.jpg",
    auditors: [],
    accomplicies: [
        { avatar: "https://randomuser.me/api/portraits/men/116.jpg" },
        { avatar: "https://randomuser.me/api/portraits/women/117.jpg" }
    ],
    project: {
        id: 23,
        title: "Маркетинговая аналитика",
        logo: "https://via.placeholder.com/150?text=Marketing+AI"
    },
};

const chore23 = {
    title: "Разработка API для интеграции с CRM",
    status: 3,
    estimation_time: '15h. 30m. 00sec.',
    estimation: 55800,
    duration_time: '18h. 00m. 00sec.',
    duration: 20800,
    status_label: "In review",
    options: {
        tags: [
            { title: "API", color: "#800080", id: 1 },
            { title: "CRM", color: "#2E8B57", id: 2 }
        ],
    },
    created_by: "https://randomuser.me/api/portraits/men/118.jpg",
    responsible: "https://randomuser.me/api/portraits/women/119.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/120.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/women/121.jpg" }],
    accomplicies: [],
    project: {
        id: 24,
        title: "Интеграция с CRM",
        logo: "https://via.placeholder.com/150?text=CRM+API"
    },
};

const chore24 = {
    title: "Тестирование нового функционала поиска",
    status: 4,
    estimation_time: '8h. 00m. 00sec.',
    estimation: 28800,
    duration_time: '9h. 30m. 00sec.',
    duration: 3200,
    status_label: "Pending",
    options: {
        tags: [
            { title: "testing", color: "#FFD700", id: 1 },
            { title: "search", color: "#4682B4", id: 2 }
        ],
    },
    created_by: "https://randomuser.me/api/portraits/women/122.jpg",
    responsible: "https://randomuser.me/api/portraits/men/123.jpg",
    closed_by: "https://randomuser.me/api/portraits/women/124.jpg",
    auditors: [
        { avatar: "https://randomuser.me/api/portraits/men/125.jpg" },
        { avatar: "https://randomuser.me/api/portraits/women/126.jpg" }
    ],
    accomplicies: [],
    project: {
        id: 25,
        title: "Поисковая система",
        logo: "https://via.placeholder.com/150?text=Search+2023"
    },
};

// Продолжение аналогичным образом до chore50...

const chore50 = {
    title: "Миграция на Kubernetes",
    status: 5,
    estimation_time: '50h. 00m. 00sec.',
    estimation: 180000,
    duration_time: '55h. 30m. 00sec.',
    duration: 109800,
    status_label: "Completed",
    options: {
        tags: [
            { title: "devops", color: "#00BFFF", id: 1 },
            { title: "kubernetes", color: "#326CE5", id: 2 },
            { title: "migration", color: "#FF8C00", id: 3 }
        ],
    },
    created_by: "https://randomuser.me/api/portraits/men/199.jpg",
    responsible: "https://randomuser.me/api/portraits/women/200.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/201.jpg",
    auditors: [
        { avatar: "https://randomuser.me/api/portraits/women/202.jpg" },
        { avatar: "https://randomuser.me/api/portraits/men/203.jpg" }
    ],
    accomplicies: [
        { avatar: "https://randomuser.me/api/portraits/women/204.jpg" },
        { avatar: "https://randomuser.me/api/portraits/men/205.jpg" }
    ],
    project: {
        id: 51,
        title: "Миграция на Kubernetes",
        logo: "https://via.placeholder.com/150?text=K8s+Migration"
    },
};

const chore7 = {
  title: "Интеграция платежной системы Stripe",
  status: 2,
  estimation_time: '6h. 30m. 00sec.',
  estimation: 19800,
  duration_time: '8h. 15m. 20sec.',
  duration: 13520,
  status_label: "In progress",
  options: {
      tags: [
          { title: "payments", color: "#008000", id: 1 },
          { title: "security", color: "#FF0000", id: 2 },
          { title: "API", color: "#800080", id: 3 },
      ],
  },
  created_by: "https://randomuser.me/api/portraits/women/41.jpg",
  responsible: "https://randomuser.me/api/portraits/women/42.jpg",
  closed_by: "https://randomuser.me/api/portraits/women/43.jpg",
  auditors: [
      { avatar: "https://randomuser.me/api/portraits/men/44.jpg" },
      { avatar: "https://randomuser.me/api/portraits/women/45.jpg" }
  ],
  accomplicies: [{ avatar: "https://randomuser.me/api/portraits/men/46.jpg" }],
  project: {
      id: 8,
      title: "Интеграция платежных систем",
      logo: "https://via.placeholder.com/150?text=PaySys"
  },
};

const chore8 = {
  title: "Рефакторинг модуля аутентификации",
  status: 4,
  estimation_time: '12h. 00m. 00sec.',
  estimation: 36000,
  duration_time: '14h. 30m. 00sec.',
  duration: 20000,
  status_label: "Pending",
  options: {
      tags: [
          { title: "security", color: "#DC143C", id: 1 },
          { title: "refactor", color: "#4B0082", id: 2 }
      ],
  },
  created_by: "https://randomuser.me/api/portraits/men/47.jpg",
  responsible: "https://randomuser.me/api/portraits/men/48.jpg",
  closed_by: "https://randomuser.me/api/portraits/men/49.jpg",
  auditors: [{ avatar: "https://randomuser.me/api/portraits/women/50.jpg" }],
  accomplicies: [
      { avatar: "https://randomuser.me/api/portraits/men/51.jpg" },
      { avatar: "https://randomuser.me/api/portraits/women/52.jpg" }
  ],
  project: {
      id: 9,
      title: "Система безопасности",
      logo: "https://via.placeholder.com/150?text=SecurityPro"
  },
};

const chore9 = {
  title: "Дизайн мобильной версии лендинга",
  status: 3,
  estimation_time: '4h. 45m. 30sec.',
  estimation: 15330,
  duration_time: '6h. 10m. 15sec.',
  duration: 11815,
  status_label: "In review",
  options: {
      tags: [
          { title: "UI/UX", color: "#FF69B4", id: 1 },
          { title: "mobile", color: "#20B2AA", id: 2 }
      ],
  },
  created_by: "https://randomuser.me/api/portraits/women/53.jpg",
  responsible: "https://randomuser.me/api/portraits/women/54.jpg",
  closed_by: "https://randomuser.me/api/portraits/men/55.jpg",
  auditors: [{ avatar: "https://randomuser.me/api/portraits/men/56.jpg" }],
  accomplicies: [],
  project: {
      id: 10,
      title: "Лендинг продукта",
      logo: "https://via.placeholder.com/150?text=Landing+2023"
  },
};

// Продолжение аналогичным образом до chore20...

const chore20 = {
  title: "Миграция на новую версию Django",
  status: 5,
  estimation_time: '24h. 00m. 00sec.',
  estimation: 86400,
  duration_time: '30h. 15m. 00sec.',
  duration: 76900,
  status_label: "Completed",
  options: {
      tags: [
          { title: "migration", color: "#FF8C00", id: 1 },
          { title: "backend", color: "#2E8B57", id: 2 },
          { title: "upgrade", color: "#9400D3", id: 3 }
      ],
  },
  created_by: "https://randomuser.me/api/portraits/men/99.jpg",
  responsible: "https://randomuser.me/api/portraits/women/100.jpg",
  closed_by: "https://randomuser.me/api/portraits/men/101.jpg",
  auditors: [
      { avatar: "https://randomuser.me/api/portraits/women/102.jpg" },
      { avatar: "https://randomuser.me/api/portraits/men/103.jpg" }
  ],
  accomplicies: [
      { avatar: "https://randomuser.me/api/portraits/women/104.jpg" },
      { avatar: "https://randomuser.me/api/portraits/men/105.jpg" },
      { avatar: "https://randomuser.me/api/portraits/women/106.jpg" }
  ],
  project: {
      id: 21,
      title: "Обновление backend-инфраструктуры",
      logo: "https://via.placeholder.com/150?text=Django4.0"
  },
};

const column = {
  title: "Важное",
  items: [chore, chore2, chore24],  // Ключевые задачи
  bg_color: '#D1E8FF',      // Мягкий светло-голубой
  title_color: '#1DA1F2',   // Ярко-синий (Twitter Blue)
};

const column1 = {
  title: "Не очень важное",
  items: [chore21, chore23],  // Необязательные задачи
  bg_color: '#E2F1FA',      // Мягкий голубовато-серый
  title_color: '#657786',   // Спокойный серо-синий
};

const column2 = {
  title: "В процессе",
  items: [chore2, chore20, chore22, chore20, chore22],  // Сейчас выполняются
  bg_color: '#FFF1D4',      // Теплый светло-желтый
  title_color: '#FFAD1F',   // Яркий жёлто-оранжевый
};

const column3 = {
  title: "Завершено",
  items: [chore1, chore24, chore21],  // Завершенные задачи
  bg_color: '#D9F0D7',      // Светлый зелёный с более нежным оттенком
  title_color: '#17BF63',   // Яркий зелёный
};

const column4 = {
  title: "Ожидание",
  items: [chore20, chore22],  // Ждут подтверждения или ревью
  bg_color: '#FEE2D6',      // Теплый персиковый
  title_color: '#E0245E',   // Яркий розово-красный
};

const column5 = {
  title: "Срочно!",
  items: [chore, chore23],  // Высокий приоритет
  bg_color: '#FFD1D1',      // Мягкий светло-розовый
  title_color: '#E0245E',   // Яркий розово-красный
};

const column6 = {
  title: "Может подождать",
  items: [chore1, chore2],  // Низкий приоритет
  bg_color: '#D8E3E9',      // Тонкий серо-голубой
  title_color: '#8899A6',   // Спокойный серый
};

const column7 = {
  title: "Архив",
  items: [chore22, chore24],  // Устаревшие задачи
  bg_color: '#E9E9F3',      // Мягкий светло-серый
  title_color: '#AAB8C2',   // Бледно-серый
};

const columns = [column, column1, column2, column3, column4, column5, column6, column7];

const project = {
  id: 1, 
  title: "Leonovo Trello",
  bg_color: '#1DA1F2',
  bg_color_first: '#E1E8ED',
  bg_color_second: '#657786',
  title_color: '#F5F8FA',
  columns: columns,
  avatar: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1740330839~exp=1740334439~hmac=b9694f5d1010c4b6d81b2c29bfb769a9589a050c5c6d781ddcab3c7933c190ee&w=900",
}

  return (
    <>
      <TrelloPage project={project}/>
    </>
  );
}

export default App;
