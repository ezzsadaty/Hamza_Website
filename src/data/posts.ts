export type PostCard = {
    title: string;
    href: string;
    kind: "article" | "video" | "pdf" | "image";
    date?: string;
    description?: string; // ✅ new field
};

export const latestPosts: PostCard[] = [
    {
        title: "  إدارة التغيير ",
        href: "/images/1757410590584.jpeg",
        kind: "article",
        date: "2025-09-01",
        description: "مع إطلاق رؤية السعودية وفي ظل التحولات والتغييرات الضخمة المرافقة لها في كافة القطاعات، ازدادت الحاجة لمعرفة منهجيات إدارة التغيير وآليته بصورة تساعدنا على تنفيذه على مستوى فريقنا أو منظمتنا أو قطاعنا. مرفق لكم تلخيص لأهم خمسة نماذج عالمية مرتبطة بإدارة التغيير.كرمًا كتابة كلمة مهتم عبر التعليقات أو الرسائل الخاصة، لإرسال الملف بدقة عالية."
    },
    // {
    //     title: "فيديو تعريفي قصير",
    //     href: "/videos/intro.mp4",
    //     kind: "video",
    //     date: "2025-08-28",
    //     description: "مقدمة قصيرة تعرّف بخدماتي وطريقتي في العمل."
    // },
    // {
    //     title: "مقال: لماذا أصنع محتوى؟",
    //     href: "/blog/why-i-create",
    //     kind: "article",
    //     date: "2025-08-15",
    //     description: "أفكاري حول صناعة المحتوى ودوره في تعزيز العلامة التجارية."
    // },
    {
        title: "ألبوم صور مختار",
        href: "/images/hamza.jpeg",
        kind: "image",
        date: "2025-08-10",
        description: "مجموعة صور مختارة من مشاريعي السابقة."
    },
];
