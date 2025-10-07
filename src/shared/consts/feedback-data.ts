export type FeedbackDataType = {
  id: string;
  text: string;
  date: string;
  author: string;
  imgUrl: string;
};

export const FEEDBACK_DATA: FeedbackDataType[] = [
  {
    id: "feedback_id_1",
    text: "Делали тент на газель, все сделали на 100 баллов, даже со всеми моими косяками по каркасу, быстро, качественно, подсказали как в дальнейшем изготавливать каркас. Специалисты своего дела👍",
    date: "19 февраля 2025",
    author: "Артем И.",
    imgUrl: "/feedback/gazel.jpg",
  },
  {
    id: "feedback_id_2",
    text: "Заказал тент на прицеп - оперативно и не дорого сделали 👍!",
    date: "23 ноября 2024",
    author: "Максим",
    imgUrl: "/feedback/pricep-1.jpg",
  },
  {
    id: "feedback_id_3",
    text: "Отличная компания, ребята молодцы, проконсультировали, ответили на все вопросы, а самое главное для меня тент сделали быстро и качественно. Рекомендую!",
    date: "3 сентября 2024",
    author: "Никита",
    imgUrl: "/feedback/pricep-2.jpg",
  },
];
