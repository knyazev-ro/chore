import ChoreCard from "./Chore/ChoreCard/ChoreCard";
import ChoreTrello from "./Chore/Trello/ChoreTrello";
import ChoreTrelloColumn from "./Chore/Trello/ChoreTrelloColumn";
import TrelloPage from "./Chore/TrelloPage/TrelloPage";

function App() {

const chores = [
  {
    title: "Запуск рекламной кампании 'Black Friday Sale'",
    status: 2,
    estimation_time: '1h. 20m.',
    estimation: 4800,
    duration_time: '2h. 15m.',
    duration: 8100,
    status_label: "In progress",
    description: "Запланировать и запустить рекламную кампанию на всех платформах к 'Black Friday Sale'. Включает создание баннеров, настройку таргетинга и бюджетов.",
    options: {
      tags: [
        { title: "marketing", color: "#FF6347", id: 3 },
        { title: "urgent", color: "#FFD700", id: 4 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/women/10.jpg",
    responsible: "https://randomuser.me/api/portraits/men/22.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/23.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/24.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/women/25.jpg" }],
    project: {
      id: 1,
      title: "Маркетинг и продвижение",
      logo: "https://via.placeholder.com/150?text=Logo+1",
    },
  },
  {
    title: "Разработка новой функции чата",
    status: 1,
    estimation_time: '3h. 40m.',
    estimation: 13200,
    duration_time: '4h. 10m.',
    duration: 15000,
    status_label: "To do",
    description: "Разработать и внедрить новую функцию чата с поддержкой аудиосообщений.",
    options: {
      tags: [
        { title: "development", color: "#8A2BE2", id: 5 },
        { title: "feature", color: "#20B2AA", id: 6 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/26.jpg",
    responsible: "https://randomuser.me/api/portraits/women/27.jpg",
    closed_by: null,
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/28.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/women/29.jpg" }],
    project: {
      id: 2,
      title: "Мобильное приложение для чатов",
      logo: "https://via.placeholder.com/150?text=Logo+2",
    },
  },
  {
    title: "Оптимизация скорости загрузки сайта",
    status: 3,
    estimation_time: '2h. 30m.',
    estimation: 9000,
    duration_time: '2h. 10m.',
    duration: 7800,
    status_label: "Done",
    description: "Улучшить время загрузки главной страницы сайта до 2 секунд.",
    options: {
      tags: [
        { title: "optimization", color: "#32CD32", id: 7 },
        { title: "performance", color: "#4682B4", id: 8 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/women/30.jpg",
    responsible: "https://randomuser.me/api/portraits/men/31.jpg",
    closed_by: "https://randomuser.me/api/portraits/men/32.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/women/33.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/men/34.jpg" }],
    project: {
      id: 3,
      title: "Оптимизация сайта",
      logo: "https://via.placeholder.com/150?text=Logo+3",
    },
  },
  {
    title: "Подготовка отчета о продажах за квартал",
    status: 2,
    estimation_time: '4h. 0m.',
    estimation: 14400,
    duration_time: '3h. 50m.',
    duration: 13800,
    status_label: "In progress",
    description: "Собрать и проанализировать данные о продажах за последний квартал и подготовить презентацию для совещания.",
    options: {
      tags: [
        { title: "analytics", color: "#4169E1", id: 9 },
        { title: "report", color: "#8B4513", id: 10 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/35.jpg",
    responsible: "https://randomuser.me/api/portraits/women/36.jpg",
    closed_by: null,
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/37.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/women/38.jpg" }],
    project: {
      id: 4,
      title: "Анализ продаж",
      logo: "https://via.placeholder.com/150?text=Logo+4",
    },
  },
  {
    title: "Создание лендинга для нового продукта",
    status: 1,
    estimation_time: '6h. 15m.',
    estimation: 22500,
    duration_time: '0h. 0m.',
    duration: 0,
    status_label: "To do",
    description: "Разработать дизайн и верстку лендинга для продвижения нового продукта компании.",
    options: {
      tags: [
        { title: "design", color: "#FF4500", id: 11 },
        { title: "frontend", color: "#00BFFF", id: 12 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/women/39.jpg",
    responsible: "https://randomuser.me/api/portraits/men/40.jpg",
    closed_by: null,
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/41.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/women/42.jpg" }],
    project: {
      id: 5,
      title: "Разработка лендинга",
      logo: "https://via.placeholder.com/150?text=Logo+5",
    },
  },
  {
    title: "Тестирование новой системы оплаты",
    status: 1,
    estimation_time: '2h. 30m.',
    estimation: 9000,
    duration_time: '0h. 0m.',
    duration: 0,
    status_label: "To do",
    description: "Провести полное тестирование системы оплаты на предмет багов и уязвимостей. Включает проверку интеграции с платёжными шлюзами.",
    options: {
      tags: [
        { title: "testing", color: "#32CD32", id: 13 },
        { title: "payment", color: "#FF4500", id: 14 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/43.jpg",
    responsible: "https://randomuser.me/api/portraits/women/44.jpg",
    closed_by: null,
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/45.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/women/46.jpg" }],
    project: {
      id: 6,
      title: "Финансовые сервисы",
      logo: "https://via.placeholder.com/150?text=Logo+6",
    },
  },
  {
    title: "Подготовка технической документации",
    status: 2,
    estimation_time: '3h. 0m.',
    estimation: 10800,
    duration_time: '2h. 50m.',
    duration: 10200,
    status_label: "In progress",
    description: "Создание технической документации для нового API. Описание эндпоинтов, параметров и примеров запросов.",
    options: {
      tags: [
        { title: "documentation", color: "#FF1493", id: 15 },
        { title: "API", color: "#0000CD", id: 16 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/women/47.jpg",
    responsible: "https://randomuser.me/api/portraits/men/48.jpg",
    closed_by: null,
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/49.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/women/50.jpg" }],
    project: {
      id: 7,
      title: "Документация",
      logo: "https://via.placeholder.com/150?text=Logo+7",
    },
  },
  {
    title: "Создание рекламного видеоролика",
    status: 3,
    estimation_time: '5h. 0m.',
    estimation: 18000,
    duration_time: '4h. 45m.',
    duration: 17100,
    status_label: "Done",
    description: "Разработка сценария, съёмка и монтаж рекламного видеоролика для продвижения нового продукта.",
    options: {
      tags: [
        { title: "video", color: "#8B0000", id: 17 },
        { title: "advertising", color: "#FF8C00", id: 18 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/51.jpg",
    responsible: "https://randomuser.me/api/portraits/women/52.jpg",
    closed_by: "https://randomuser.me/api/portraits/women/53.jpg",
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/54.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/women/55.jpg" }],
    project: {
      id: 8,
      title: "Маркетинг",
      logo: "https://via.placeholder.com/150?text=Logo+8",
    },
  },
  {
    title: "Обновление системы безопасности",
    status: 2,
    estimation_time: '6h. 30m.',
    estimation: 23400,
    duration_time: '5h. 45m.',
    duration: 20700,
    status_label: "In progress",
    description: "Внедрение обновлений для системы безопасности, включая исправления уязвимостей и усиление защиты данных.",
    options: {
      tags: [
        { title: "security", color: "#2F4F4F", id: 19 },
        { title: "update", color: "#4682B4", id: 20 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/women/56.jpg",
    responsible: "https://randomuser.me/api/portraits/men/57.jpg",
    closed_by: null,
    auditors: [{ avatar: "https://randomuser.me/api/portraits/women/58.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/men/59.jpg" }],
    project: {
      id: 9,
      title: "Безопасность",
      logo: "https://via.placeholder.com/150?text=Logo+9",
    },
  },
  {
    title: "Обучение новых сотрудников",
    status: 1,
    estimation_time: '8h. 0m.',
    estimation: 28800,
    duration_time: '0h. 0m.',
    duration: 0,
    status_label: "To do",
    description: "Проведение вводного обучения для новых сотрудников по внутренним процессам и инструментам компании.",
    options: {
      tags: [
        { title: "HR", color: "#800080", id: 21 },
        { title: "training", color: "#00CED1", id: 22 },
      ],
    },
    created_by: "https://randomuser.me/api/portraits/men/60.jpg",
    responsible: "https://randomuser.me/api/portraits/women/61.jpg",
    closed_by: null,
    auditors: [{ avatar: "https://randomuser.me/api/portraits/men/62.jpg" }],
    accomplicies: [{ avatar: "https://randomuser.me/api/portraits/women/63.jpg" }],
    project: {
      id: 10,
      title: "Обучение персонала",
      logo: "https://via.placeholder.com/150?text=Logo+10",
    },
  },
];

// Функция для случайного выбора заданий
const getRandomChores = (count) => {
  const shuffled = chores.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};


const columns = [
  {
    title: "Важное",
    items: getRandomChores(3),
    bg_color: '#D1E8FF',
    title_color: '#1DA1F2',
  },
  {
    title: "Не очень важное",
    items: getRandomChores(2),
    bg_color: '#E2F1FA',
    title_color: '#657786',
  },
  {
    title: "В процессе",
    items: getRandomChores(5),
    bg_color: '#FFF1D4',
    title_color: '#FFAD1F',
  },
  {
    title: "Завершено",
    items: getRandomChores(3),
    bg_color: '#D9F0D7',
    title_color: '#17BF63',
  },
  {
    title: "Ожидание",
    items: getRandomChores(2),
    bg_color: '#FEE2D6',
    title_color: '#E0245E',
  },
  {
    title: "Срочно!",
    items: getRandomChores(2),
    bg_color: '#FFD1D1',
    title_color: '#E0245E',
  },
  {
    title: "Может подождать",
    items: getRandomChores(2),
    bg_color: '#D8E3E9',
    title_color: '#8899A6',
  },
  {
    title: "Архив",
    items: getRandomChores(2),
    bg_color: '#E9E9F3',
    title_color: '#AAB8C2',
  },
];


const project = {
  id: 1,
  title: "Проект Хамелеон",
  description: "Система управления задачами с адаптивным интерфейсом.",
  bg_color: '#4A90E2', // Глубокий синий
  bg_color_first: '#50E3C2', // Яркий бирюзовый
  bg_color_second: '#B8E986', // Нежный зеленый
  title_color: '#FFFFFF', // Чисто белый для контраста
  columns: columns,
  avatar: "https://img.freepik.com/free-vector/chameleon-logo-template_23-2148982814.jpg",
  creator: {
    name: "Алексей Новиков",
    role: "Product Owner",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  team: [
    { name: "Марина Смирнова", role: "Frontend Developer", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
    { name: "Иван Петров", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/men/29.jpg" },
    { name: "Ольга Козлова", role: "UI/UX Designer", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  ],
  start_date: "2024-01-15",
  deadline: "2024-12-31",
  status: "В разработке",
  progress: 57, // Процент выполнения
  priority: "Высокий",
  tags: [
    { title: "Trello", color: "#1DA1F2" },
    { title: "Management", color: "#50E3C2" },
    { title: "Productivity", color: "#B8E986" },
  ],
};


  return (
    <>
      <TrelloPage project={project}/>
    </>
  );
}

export default App;
