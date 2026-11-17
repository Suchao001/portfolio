export const TAGS = {
    ASTRO: {
        name: "Astro",
        class: "bg-[#7836cf]/20 text-[#bc95ff]",
        icon: "lucide:rocket",
    },
    REACT: {
        name: "React",
        class: "bg-[#23272f] text-[#58c4dc]",
        icon: "lucide:atom",
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: "lucide:wind",
    },
    NODE: {
        name: "Node.js",
        class: "bg-[#339933]/20 text-[#6cc24a]",
        icon: "lucide:server",
    },
    NEXT: {
        name: "Next.js",
        class: "bg-black text-white border border-white/20",
        icon: "lucide:triangle",
    },
    REACT_NATIVE: {
        name: "React Native",
        class: "bg-[#23272f] text-[#58c4dc]",
        icon: "lucide:smartphone",
    },
    EXPRESS: {
        name: "Express.js",
        class: "bg-[#333333] text-white border border-white/20",
        icon: "lucide:server",
    },
    TYPESCRIPT: {
        name: "TypeScript",
        class: "bg-[#3178C6]/20 text-[#3178C6]",
        icon: "lucide:file-code-2",
    },
    MYSQL: {
        name: "MySQL",
        class: "bg-[#00758F]/20 text-[#00758F]",
        icon: "lucide:database",
    },
    NUXT: {
        name: "Nuxt",
        class: "bg-[#00DC82]/20 text-[#00DC82]",
        icon: "lucide:triangle-right",
    },
    POSTGRESQL: {
        name: "PostgreSQL",
        class: "bg-[#336791]/20 text-[#336791]",
        icon: "lucide:database",
    },
    NEON: {
        name: "Neon DB",
        class: "bg-[#00E599]/20 text-[#00E599]",
        icon: "lucide:cloud",
    },
    VERCEL: {
        name: "Vercel",
        class: "bg-white text-black",
        icon: "lucide:triangle",
    },
    DOCKER: {
        name: "Docker",
        class: "bg-[#2496ED]/20 text-[#5cb3f5]",
        icon: "lucide:container",
    },
    CLOUDFLARE: {
        name: "Cloudflare R2",
        class: "bg-[#F6821F]/20 text-[#F6821F]",
        icon: "lucide:cloud",
    },
    GITHUB_ACTIONS: {
        name: "GitHub Actions",
        class: "bg-[#2088FF]/20 text-[#6cb4ff]",
        icon: "lucide:workflow",
    },
    DRIZZLE: {
        name: "Drizzle ORM",
        class: "bg-[#C5F74F]/15 text-[#C5F74F]",
        icon: "lucide:database",
    },
    JAVASCRIPT: {
        name: "JavaScript",
        class: "bg-[#F7DF1E]/20 text-[#F7DF1E]",
        icon: "lucide:file-code-2",
    },
    HTML: {
        name: "HTML5",
        class: "bg-[#E34F26]/20 text-[#E34F26]",
        icon: "lucide:layout-template",
    },
    CSS: {
        name: "CSS3",
        class: "bg-[#1572B6]/20 text-[#1572B6]",
        icon: "lucide:paint-bucket",
    },
};

export const PROJECTS = [
    {
        title: "KhuiAnime | พื้นที่คุยอนิเมะรายตอน ปลอดสปอยล์",
        description:
            "เว็บชุมชนให้คนดูอนิเมะมาคุยแยกตามเรื่องและตอน โดยซ่อนสปอยล์ตามความคืบหน้าที่ดูแล้ว พัฒนาและ deploy ขึ้น production เองทั้งระบบภายใน 7 วัน: Next.js + PostgreSQL, auth แยก User/Admin, หลังบ้าน, OG share card, เก็บรูปบน Cloudflare R2 ผ่าน CDN, รันบน VPS ด้วย Docker Compose + Caddy หลัง Cloudflare และมี CI (lint, typecheck, test, migration drift check) ก่อน deploy พัฒนาร่วมกับ AI (Claude Code) พร้อมกฎ design token และ ticket workflow ที่ตรวจโค้ดก่อน merge ทุกครั้ง",
        link: "/projects/khuianime",
        liveUrl: "https://khuianime.com",
        image: "/projects/khuianime/image.png",
        tags: [
            TAGS.NEXT,
            TAGS.TYPESCRIPT,
            TAGS.TAILWIND,
            TAGS.POSTGRESQL,
            TAGS.DRIZZLE,
            TAGS.CLOUDFLARE,
            TAGS.DOCKER,
            TAGS.GITHUB_ACTIONS,
        ],
    },
    {
        title: "Goodmeal | AI FoodMenu FoodPlan and Report",
        description:
            "พัฒนาระบบสร้างแผนมื้ออาหารและแนะนำอาหารส่วนบุคคลสำหรับผู้ใช้ พัฒนาฟังก์ชันให้ผู้ใช้สามารถเพิ่มมื้ออาหารและสร้างแผนการกินที่ปรับแต่งได้ในหลายรูปแบบ สร้างระบบบันทึกมื้ออาหารและฟีเจอร์รายงานผลเพื่อช่วยให้เข้าใจพฤติกรรมการกินของตนเอง",
        link: "/projects/goodmeal",
        github: "https://github.com/Suchao001/Goomeal",
        githubAdmin: "https://github.com/Suchao001/goodmeal-admin",
        image: "/projects/Goodmeal/image.png",
        tags: [
            TAGS.NEXT,
            TAGS.REACT_NATIVE,
            TAGS.EXPRESS,
            TAGS.TYPESCRIPT,
            TAGS.TAILWIND,
            TAGS.MYSQL,
        ],
    },
    {
        title: "Resort Booking Management System",
        description:
            "ระบบจัดการการจองห้องพักสำหรับรีสอร์ท มีระบบเพิ่มห้องพัก, บันทึกห้องพัก, การ Check-in, Check-out, จัดการการจอง, บันทึกรายรับ-รายจ่าย และระบบดูรายงานสรุปผล",
        link: "/projects/booking",
        image: "/projects/Booking/image.png",
        tags: [
            TAGS.NUXT, 
            TAGS.POSTGRESQL, 
            TAGS.NEON, 
            TAGS.VERCEL
        ],
    },
    {
        title: "Habit Task & Planner",
        description:
            "แอปพลิเคชันจัดการพฤติกรรมและเป้าหมายส่วนบุคคล พัฒนาด้วย ReactJs และ ExpressJs เพื่อช่วยผู้ใช้สร้างพฤติกรรมเชิงบวก มีฟีเจอร์แสดงความคืบหน้า ติดตามประวัติงานที่ทำสำเร็จ ตั้งเป้าหมายที่ปรับแต่งได้ และโปรไฟล์ผู้ใช้ หน้าปฏิทินแสดงกิจกรรมที่ต้องทำ พร้อมระบบค้นหาที่เข้าถึงได้รวดเร็ว รวมถึงมีระบบยืนยันตัวตนและ Admin Dashboard สำหรับจัดการผู้ใช้และตั้งค่าระบบ",
        link: "/projects/habit",
        github: "https://github.com/Suchao001/getup",
        githubAdmin: "https://github.com/Suchao001/getup_admin",
        image: "/projects/habit/image.png",
        tags: [
            TAGS.REACT,
            TAGS.EXPRESS,
            TAGS.JAVASCRIPT,
            TAGS.HTML,
            TAGS.CSS,
            TAGS.MYSQL,
        ],
    },
];
