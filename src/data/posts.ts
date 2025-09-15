export type Post = {
  id: number;
  title: string;
  kind: "article" | "image" | "video" | "pdf";
  description: string;
  date: string;
  mediaUrl?: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "إدارة التغيير",
    kind: "article",
    date: "2025-09-01",
    description:
      "مع إطلاق رؤية السعودية وفي ظل التحولات والتغييرات الضخمة المرافقة لها، ازدادت الحاجة لمعرفة منهجيات إدارة التغيير وآليته بصورة تساعدنا على تنفيذه على مستوى فريقنا أو منظمتنا. مرفق لكم تلخيص لأهم خمسة نماذج عالمية.",
    mediaUrl: "/pdfs/change-management.pdf",
  },
  {
    id: 2,
    title: "ألبوم صور مختار",
    kind: "image",
    date: "2025-08-10",
    description: "مجموعة صور مختارة من مشاريعي السابقة.",
    mediaUrl: "/images/hamza.jpeg",
  },
  {
    id: 3,
    title: "فيديو تعريفي قصير",
    kind: "video",
    date: "2025-08-05",
    description: "فيديو قصير يوضح الخدمات التي أقدمها.",
    mediaUrl: "/videos/intro.mp4",
  },
];
