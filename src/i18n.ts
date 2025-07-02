// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            title: "Portfolio",
            home: "Home",
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
          },
          hero: {
            button1: "View Experience",
            button2: "Get In Touch",
            intro: {
              greeting: "Hi, I'm",
              firstname: "Bovorn",
              lastname: "Dejsuwannachai",
            },
          },
          about: {
            title: "About Me",
            introduce:
              "Hello, my name is Bovorn Dejsuwannachai (Choon). I’m Frontend Developer crafting responsive, user-friendly.",
            paragraph1:
              "My current work revolves around Vue.js, Nuxt.js, and Vuetify, supported by tools like Docker, GitHub, and Postman. I’m passionate about writing clean code, optimizing performance through refactoring, and solving problems collaboratively with my team.",
            paragraph2:
              "As a Software Engineer at iNet (Internet Thailand Public Company Limited), I am responsible for developing websites and ensuring their optimal performance. Let’s build outstanding websites together!",
            button1: "View Projects",
            button2: "Download CV",
          },
          skills: {
            title: "My Skills & Technologies",
            subtitle:
              "My technical expertise across various domains of software development",
            tech: "Technologies",
            exp: "Years Experience",
            project: "Projects",
            learn: "Learning",
          },
          experience: {
            title1: "Work",
            title2: "Experience",
            subtitle:
              "Work experience with practical implementation of live projects.",
            exp1: {
              name: "PortFolio",
              role: "Frontend Developer",
              company: "Learn by Myself",
              period: "-",
              location: "Bangkok, Thailand",
              highlights: {
                hl1: "Developed websites for new frameworks and libraries",
                hl2: "Learning responsive design for mobile and desktop in new frameworks",
                hl3: "Change mindset and learn new things",
              },
              skills: {
                s1: "React",
                s2: "Next",
                s3: "Tailwind CSS",
                s4: "Radix UI",
                s5: "Github",
                s6: "Typescript",
              },
            },
            exp2: {
              name: "Software Engineer",
              role: "Frontend Developer",
              company: "Internet Thailand Co., Ltd.",
              period: "March 2025 – Current",
              location: "Bangkok, Thailand",
              highlights: {
                hl1: "Developed websites for multiple roles",
                hl2: "Impllemented responsive design for mobile and desktop",
                hl3: "Plan and manage work in a systematic way",
              },
              skills: {
                s1: "Vue",
                s2: "Nuxt",
                s3: "Vuetify",
                s4: "Github",
                s5: "Docker",
                s6: "Postman",
                s7: "Javascript",
              },
            },
            exp3: {
              name: "ProofEngThailand",
              role: "Frontend Developer",
              company: "Freelance",
              period: "March 2024 – March 2025",
              location: "Bangkok, Thailand",
              highlights: {
                hl1: "Developed websites for multiple roles",
                hl2: "Impllemented responsive design for mobile and desktop",
                hl3: "Plan and manage work in a systematic way",
              },
              skills: {
                s1: "Vue",
                s2: "Nuxt",
                s3: "Vuetify",
                s4: "Github",
                s5: "Docker",
                s6: "Postman",
                s7: "Javascript",
              },
            },
            exp4: {
              name: "ProofEng Solution",
              role: "Frontend Developer",
              company: "Freelance",
              period: "October 2024 – December 2024",
              location: "Nakhon Pathom, Thailand",
              highlights: {
                hl1: "Developed websites for users and administrators",
                hl2: "Impllemented responsive design for mobile and desktop",
                hl3: "Optimize code for performance and scalability and SEO",
              },
              skills: {
                s1: "Vue",
                s2: "Nuxt",
                s3: "Vuetify",
                s4: "Github",
                s5: "Docker",
                s6: "Postman",
                s7: "Javascript",
              },
            },
            exp5: {
              name: "LASDB",
              role: "Frontend Developer",
              company: "Kasetsart University Kamphaeng Saen Campus",
              period: "July 2024 – October 2024",
              location: "Nakhon Pathom, Thailand",
              highlights: {
                hl1: "Developed websites for users and administrators",
                hl2: "Impllemented responsive design for mobile and desktop",
                hl3: "Plan and manage work in a systematic way",
              },
              skills: {
                s1: "Vue",
                s2: "Nuxt",
                s3: "Vuetify",
                s4: "Github",
                s5: "Docker",
                s6: "Postman",
                s7: "Javascript",
              },
            },
            exp6: {
              name: "Internship",
              role: "Full-Stack Developer",
              company: "Internet Thailand Co., Ltd.",
              period: "April 2024 – June 2024",
              location: "Bangkok, Thailand",
              highlights: {
                hl1: "Completed a 2-month Internship as a Full-Stack Developer",
                hl2: "Gaining experience in frontend development",
                hl3: "Gaining experience in backend development",
              },
              skills: {
                s1: "Vue",
                s2: "Nuxt",
                s3: "Vuetify",
                s4: "Node.js",
                s5: "Express",
                s6: "MySQL",
                s7: "Javascript",
              },
            },
            exp7: {
              name: "PR-TCAS 67",
              role: "Infographic",
              company: "Kasetsart University Kamphaeng Saen Campus",
              period: "August 2023 – May 2024",
              location: "Nakhon Pathom, Thailand",
              highlights: {
                hl1: "Designing the TCAS 67 infographic for the university",
                hl2: "Develope skills in design , communication and teamwork",
                hl3: "Change requirements to infographics",
              },
              skills: {
                s1: "Canva",
              },
            },
          },
          projects: {
            title: "My Projects",
            subtitle:
              "Front-end projects that have been developed and implemented in real-world use, focusing on user-friendly interfaces and full responsiveness across all devices.",
            project: "PROJECT",
            button1: "Code",
            button2: "Website",
            projects: {
              project1: {
                title: "LASDB",
                description:
                  "Website compregensive academic management platform covering books, article, jounals, projects, patents, research and awards.",
                tech: {
                  t1: "Vue",
                  t2: "Nuxt",
                  t3: "Vuetify",
                  t4: "Github",
                  t5: "Docker",
                  t6: "Postman",
                  t7: "Javascript",
                },
              },
              project2: {
                title: "ProofEng Solution",
                description:
                  "Website English grammar checking and proofreading service.",
                tech: {
                  t1: "Vue",
                  t2: "Nuxt",
                  t3: "Vuetify",
                  t4: "Github",
                  t5: "Docker",
                  t6: "Postman",
                  t7: "Javascript",
                },
              },
              project3: {
                title: "ProofEngThailand",
                description:
                  "Website English grammar checking and proofreading service.",
                tech: {
                  t1: "Vue",
                  t2: "Nuxt",
                  t3: "Vuetify",
                  t4: "Github",
                  t5: "Docker",
                  t6: "Postman",
                  t7: "Javascript",
                },
              },
              project4: {
                title: "Clockin",
                description:
                  "Website for checkin-out working and manage human resource.",
                tech: {
                  t1: "Vue",
                  t2: "Nuxt",
                  t3: "Vuetify",
                  t4: "Github",
                  t5: "Docker",
                  t6: "Postman",
                  t7: "Javascript",
                },
              },
            },
          },
          contact: {
            title: "Get In Touch",
            subtitle:
              "Have a project in mind? Let's discuss how we can work together to bring your ideas to life.",
            form: {
              name: "Name",
              email: "Email",
              message: "Message",
              submit: "Send",
            },
            email: "Email",
            phone: "Phone",
            location: "Location",
          },
          validate: {
            name: "Please enter your name",
            email: "Please enter your email",
            emailInvalid: "Please enter a valid email",
            message: "Please enter your message",
          },
        },
      },
      th: {
        translation: {
          navbar: {
            title: "พอร์ตโฟลิโอ",
            home: "หน้าแรก",
            about: "เกี่ยวกับ",
            skills: "ทักษะ",
            experience: "ประสบการณ์",
            projects: "โปรเจกต์",
            contact: "ติดต่อเรา",
          },
          hero: {
            button1: "ดูประสบการณ์",
            button2: "ติดต่อเรา",
            intro: {
              greeting: "สวัสดีครับ ผม",
              firstname: "บวร",
              lastname: "เดชสุวรรณาชัย",
            },
          },
          about: {
            title: "เกี่ยวกับฉัน",
            introduce:
              "สวัสดีครับ ผมชื่อบวร เดชสุวรรณาชัย (ชุน) ผมเป็นนักพัฒนา Frontend ที่มุ่งเน้นการสร้างเว็บไซต์ที่ง่ายต่อการใช้งานและรองรับการใช้งานในทุกอุปกรณ์",
            paragraph1:
              "ปัจจุบันผมทำงานโดยใช้ Vue.js, Nuxt.js และ Vuetify เป็นหลัก พร้อมกับเครื่องมืออย่าง Docker, GitHub และ Postman และการมีการ Cleaning Code ปรับแต่งประสิทธิภาพ (Refactor) และการแก้ปัญหาร่วมกับทีม",
            paragraph2:
              "ในฐานะวิศวกรซอฟต์แวร์ที่บริษัท iNet (อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)) ผมรับผิดชอบด้านการพัฒนาเว็บไซต์และดูแลการทำงานของเว็บไซต์ให้มีประสิทธิภาพสูงสุด มาร่วมสร้างเว็บไซต์ที่ยอดเยี่ยมไปด้วยกันครับ!",
            button1: "ดูโปรเจกต์",
            button2: "ดาวน์โหลด CV",
          },
          skills: {
            title: "ทักษะและเทคโนโลยี",
            subtitle:
              "ผมมีความเชี่ยวชาญทางเทคนิคในหลากหลายด้านของการพัฒนาซอฟต์แวร์",
            tech: "เทคโนโลยี",
            exp: "ประสบการณ์ (ปี)",
            project: "โปรเจกต์",
            learn: "การเรียนรู้",
          },
          experience: {
            title1: "ประสบการณ์",
            title2: "การทำงาน",
            subtitle: "ประสบการณ์การทำงานและมีการนำเอาโปรเจกต์มาใช้จริง",
            exp1: {
              name: "PortFolio",
              role: "Frontend Developer",
              company: "เรียนรู้ด้วยตนเอง",
              period: "-",
              location: "กรุงเทพมหานคร, ประเทศไทย",
              highlights: {
                hl1: "พัฒนาเว็บไซต์สำหรับเฟรมเวิร์กและไลบรารีใหม่ๆ",
                hl2: "เรียนรู้การออกแบบที่ตอบสนองต่อมือถือและเดสก์ท็อปในเฟรมเวิร์กใหม่ๆ",
                hl3: "เปลี่ยนแนวคิดและเรียนรู้สิ่งใหม่ๆ",
              },
              skills: {
                s1: "React",
                s2: "Next",
                s3: "Tailwind CSS",
                s4: "Radix UI",
                s5: "Github",
                s6: "Typescript",
              },
            },
            exp2: {
              name: "Software Engineer",
              role: "Frontend Developer",
              company: "บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)",
              period: "มีนาคม 2025 – ปัจจุบัน",
              location: "กรุงเทพมหานคร, ประเทศไทย",
              highlights: {
                hl1: "พัฒนาเว็บไซต์สำหรับหลายบทบาท",
                hl2: "นำเสนอการออกแบบที่ตอบสนองต่อมือถือและเดสก์ท็อป",
                hl3: "วางแผนและจัดการงานอย่างเป็นระบบ",
              },
              skills: {
                s1: "Vue",
                s2: "Nuxt",
                s3: "Vuetify",
                s4: "Github",
                s5: "Docker",
                s6: "Postman",
                s7: "Javascript",
              },
            },
            exp3: {
              name: "ProofEngThailand",
              role: "Frontend Developer",
              company: "Freelance",
              period: "มีนาคม 2024 – มีนาคม 2025",
              location: "กรุงเทพมหานคร, ประเทศไทย",
              highlights: {
                hl1: "พัฒนาเว็บไซต์สำหรับหลายบทบาท",
                hl2: "นำเสนอการออกแบบที่ตอบสนองต่อมือถือและเดสก์ท็อป",
                hl3: "วางแผนและจัดการงานอย่างเป็นระบบ",
              },
              skills: {
                s1: "Vue",
                s2: "Nuxt",
                s3: "Vuetify",
                s4: "Github",
                s5: "Docker",
                s6: "Postman",
                s7: "Javascript",
              },
            },
            exp4: {
              name: "ProofEng Solution",
              role: "Frontend Developer",
              company: "Freelance",
              period: "ตุลาคม 2024 – ธันวาคม 2024",
              location: "นครปฐม, ประเทศไทย",
              highlights: {
                hl1: "พัฒนาเว็บไซต์สำหรับผู้ใช้และผู้ดูแลระบบ",
                hl2: "นำเสนอการออกแบบที่ตอบสนองต่อมือถือและเดสก์ท็อป",
                hl3: "ปรับแต่งโค้ดเพื่อประสิทธิภาพและความสามารถในการขยายตัวและ SEO",
              },
              skills: {
                s1: "Vue",
                s2: "Nuxt",
                s3: "Vuetify",
                s4: "Github",
                s5: "Docker",
                s6: "Postman",
                s7: "Javascript",
              },
            },
            exp5: {
              name: "LASDB",
              role: "Frontend Developer",
              company: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน",
              period: "กรกฎาคม 2024 – ตุลาคม 2024",
              location: "นครปฐม, ประเทศไทย",
              highlights: {
                hl1: "พัฒนาเว็บไซต์สำหรับผู้ใช้และผู้ดูแลระบบ",
                hl2: "นำเสนอการออกแบบที่ตอบสนองต่อมือถือและเดสก์ท็อป",
                hl3: "วางแผนและจัดการงานอย่างเป็นระบบ",
              },
              skills: {
                s1: "Vue",
                s2: "Nuxt",
                s3: "Vuetify",
                s4: "Github",
                s5: "Docker",
                s6: "Postman",
                s7: "Javascript",
              },
            },
            exp6: {
              name: "Internship",
              role: "Full-Stack Developer",
              company: "บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)",
              period: "เมษายน 2024 – มิถุนายน 2024",
              location: "กรุงเทพมหานคร, ประเทศไทย",
              highlights: {
                hl1: "สำเร็จการฝึกงาน 2 เดือนในฐานะ Full-Stack Developer",
                hl2: "ได้รับประสบการณ์ในการพัฒนา Frontend",
                hl3: "ได้รับประสบการณ์ในการพัฒนา Backend",
              },
              skills: {
                s1: "Vue",
                s2: "Nuxt",
                s3: "Vuetify",
                s4: "Node.js",
                s5: "Express",
                s6: "MySQL",
                s7: "Javascript",
              },
            },
            exp7: {
              name: "PR-TCAS 67",
              role: "Infographic",
              company: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน",
              period: "สิงหาคม 2023 – พฤษภาคม 2024",
              location: "นครปฐม, ประเทศไทย",
              highlights: {
                hl1: "ออกแบบอินโฟกราฟิก TCAS 67 สำหรับมหาวิทยาลัย",
                hl2: "พัฒนาทักษะในการออกแบบ การสื่อสาร และการทำงานเป็นทีม",
                hl3: "เปลี่ยนความต้องการเป็นอินโฟกราฟิก",
              },
              skills: {
                s1: "Canva",
              },
            },
          },
          projects: {
            title: "โปรเจกต์",
            subtitle:
              "โปรเจกต์ฝั่ง Frontend ที่มีการพัฒนาขึ้นและมีการนำมาใช้จริง โดยเน้นการใช้งานที่สะดวกและการรองรับการใช้งานในทุกอุปกรณ์",
            project: "โปรเจกต์",
            button1: "ดูโค๊ด",
            button2: "เว็บไซต์",
            projectsInfo: {
              project1: {
                title: "LASDB",
                description:
                  "แพลตฟอร์มการจัดการทางวิชาการที่ครอบคลุมหนังสือ บทความ วารสาร โครงการ สิทธิบัตร งานวิจัย และรางวัล",
                tech: {
                  t1: "Vue",
                  t2: "Nuxt",
                  t3: "Vuetify",
                  t4: "Github",
                  t5: "Docker",
                  t6: "Postman",
                  t7: "Javascript",
                },
              },
              project2: {
                title: "ProofEng Solution",
                description:
                  "เว็บไซต์บริการตรวจสอบไวยากรณ์ภาษาอังกฤษและการแก้ไขคำผิด",
                tech: {
                  t1: "Vue",
                  t2: "Nuxt",
                  t3: "Vuetify",
                  t4: "Github",
                  t5: "Docker",
                  t6: "Postman",
                  t7: "Javascript",
                },
              },
              project3: {
                title: "ProofEngThailand",
                description:
                  "เว็บไซต์บริการตรวจสอบไวยากรณ์ภาษาอังกฤษและการแก้ไขคำผิด",
                tech: {
                  t1: "Vue",
                  t2: "Nuxt",
                  t3: "Vuetify",
                  t4: "Github",
                  t5: "Docker",
                  t6: "Postman",
                  t7: "Javascript",
                },
              },
              project4: {
                title: "Clockin",
                description:
                  "เว็บไซต์สำหรับเช็คอิน-เช็คเอาท์การทำงานและจัดการทรัพยากรบุคคล",
                tech: {
                  t1: "Vue",
                  t2: "Nuxt",
                  t3: "Vuetify",
                  t4: "Github",
                  t5: "Docker",
                  t6: "Postman",
                  t7: "Javascript",
                },
              },
            },
          },
          contact: {
            title: "ติดต่อเรา",
            subtitle:
              "มีโปรเจกต์ในใจอยู่ใช่ไหม? มาพูดคุยกันว่าเราจะทำงานร่วมกันเพื่อทำให้ไอเดียของคุณเป็นจริงได้อย่างไร",
            form: {
              name: "ชื่อ",
              email: "อีเมล",
              message: "ข้อความ",
              submit: "ส่ง",
            },
            email: "อีเมล",
            phone: "โทรศัพท์",
            location: {
              locale: "ที่ตั้ง",
              address: "กรุงเทพมหานคร, ประเทศไทย",
            },
          },
          validate: {
            name: "กรุณากรอกชื่อ",
            email: "กรุณากรอกอีเมล",
            emailInvalid: "รูปแบบอีเมลไม่ถูกต้อง",
            message: "กรุณากรอกข้อความ",
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
