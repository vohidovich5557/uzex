import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            text: "Easy trade, Fast service",
            headerText: 'UzTradeLink',
          },
          hero: {
            title: "About Company",
            text: "UzTradeLink is a modern and innovative company specializing in working with exchanges and auctions in the Uzbek market. We collaborate with leading factories and manufacturers in Uzbekistan, assisting them in bringing their products to the market through exchanges. Additionally, we provide services to our clients for participating in auctions and trade negotiations.",
            client: "Clients",
            service: "provided services",
          },
          about: {
            title: "Services we Provide",
            number: "Autonumber",
            uzex: "UzEx Trade",
            ebirja: 'E-Birja Trade',
            auksion: "e-auksion",
          },
          clients: {
            title: "Our Clients",
            alt: "in this place logo of clients",
            client1: {
              title: "Bukhara AgroKlaster",
              desc: "BUKHORA AGROKLASTER limited liability company, the Civil Code of the Republic of Uzbekistan, the Law On protection of joint-stock companies and shareholders' rights and On limited liability and additional liability companies and the resolutions of the shareholders of Bukhoropakhtsanoat XB joint-stock company dated July 6 and July 11, 2019 organized in accordance with the decisions of the extraordinary general meeting. It was approved in a new revision by the decision of the extraordinary general meeting of the participants on December 14, 2019.",
              subtitle: "Provided services",
            }
          },
          team: {
            name1: 'Vokhid Tursunov',
            name2: 'Shokhrukh Rajabov',
            name3: 'Shohjahon Oktamov',
            title: "Our Team",
            trader1: "Broker",
            vohid: "Void Tursunov is the head of the company. This company has been providing services to many clusters and companies from the stock exchange side for many years.",
            shoxrux: "Shokhrukh Rajabov has been doing a lot of work at the stock exchange for 3-4 years. And besides that, find a separate customer and serve their needs in an excellent way.",
            shohjahon: "Shahjahon Oktamov is a web developer and works on business systematization. And now he has just started his work. Can agree with entrepreneurs. To work with them",
            trader2: "Trader",
            trader3: "Programmer",
          },
          location: {
            title: "Our Location",
            address: "Uzbekistan, Tashkent",
          },
          call: {
            title: "Contact Us",
            name: "Full Name",
            serviceC: {
              service0: 'Choose Service',
              service1: "UzEx Trade",
              service2: 'E-Birja Trade',
              service3: "e-auksion",
              service4: "Autonumber",
            },
            errors: {
              error1: "Please enter your name",
              error2: "Please Select a service",
              error3: "Please write a message",
              error4: "Please enter your phone number",
            },
            message: "Give us information why you need our service",
            phone: "Enter Phone Number",
            submit: "Submit", 
          }
        }
      },
      uz: {
        translation: {
          header: {
            text: "Oson savdo, Tezkor Xizmat",
            headerText: 'UzTradeLink',
          },
          hero: {
            title: "Kompaniya Haqida",
            text: "UzTradeLink — O‘zbekiston bozorida birjalar va auksionlar bilan ishlashga ixtisoslashgan zamonaviy va innovatsion kompaniya. Biz O‘zbekistonning yetakchi zavod va ishlab chiqaruvchilari bilan hamkorlik qilib, ularning mahsulotlarini birjalar orqali bozorga olib chiqishga ko‘maklashamiz. Shuningdek, mijozlarimiz uchun auksionlarda qatnashish va savdolashuv xizmatlarini ham taqdim etamiz.",
            client: "Klientlar",
            service: "Ko`rsartilgan xizmatlar",
          },
          about: {
            title: "Bizning xizmatlar",
            number: "Avtoraqam",
            uzex: "UzEx Savdo",
            ebirja: 'E-Birja Savdo',
            auksion: "e-auksion",
          },
          clients: {
            title: "Bizning Mijozlar",
            alt: "Bu joyda mijozlarning logosi",
            client1: {
              title: "Buxoro Agroklaster",
              desc: "“БУХОРО АГРОКЛАСТEР” масъулияти чекланган жамияти Ўзбекистон Республикасининг Фуқаролик кодекси, “Акциядорлик жамиятлари ва акциядорларнинг ҳуқуқларини ҳимоя қилиш тўғрисида”ги ва “Масъулияти чекланган ва қўшимча масъулиятли жамиятлар туғрисида”ги Қонуни ҳамда “Бухоропахтасаноат ХБ” акциядорлик жамияти акциядорларининг 2019 йил 06 июлдаги ва 11 июлдаги навбатдан ташқари умумий йиғилиш қарорларига мувофиқ ташкил этилган. Иштирокчиларнинг 2019 йил 14 декабрдаги навбатдан ташқари умумий йиғилиш қарори билан янги тахрирда тасдиқланган.",
              subtitle: "Ko`rsatilgan va ko`rsatilayotgan xizmatlar",
            }
          },
          team: {
            name1: 'Vohid Tursunov',
            name2: 'Shoxrux Rajabov',
            name3: 'Shohjahon O`ktamov',
            title: "Bizning Jamoa",
            trader1: "Broker",
            vohid: "Void Tursunov firma rahbari. Bu firma anca yıllarda davomida ko`plab klaster va firmalarga birja tomondan xizmat ko`rsatib kelmoqda. Va mijozlarni qiziqtira olgan.",
            shoxrux: "Shoxrux Rajabov 3, 4 yıldan beri birjada ancha ishlarni bajarib kelmoqda. Va undan tashqari o`zi alohida mijoz topib ularni ehtiyojini a`lo darajada qodirib xizmat ko`rsatkan.",
            shohjahon: "Shohjahon O`ktamov - web dasturchi va biznes bo`yicha tizimllashtirish bo`yicha ishlab kelmoqda. Va hozir o`z faoliyatini endgina boshladi. Tadbirkorlar bilan kelisha oladi.",
            trader2: "Trader",
            trader3: "Dasturchi",
          },
          location: {
            title: "Bizning Manzil",
            address: "Uzbekistan, Toshkent",
          },
          call: {
            title: "Biz bilan bog`laning",
            name: "F.I.O",
            serviceC: {
              service0: 'Xizmat Turini tanglang',
              service1: "UzEx Savdo",
              service2: 'E-Birja Savdo',
              service3: "e-auksion",
              service4: "Avtoraqam",
            },
            errors: {
              error1: "Ismingizni kiriting",
              error2: "Xizmat turini tanlang",
              error3: "Xabaringizni kiriting",
              error4: "Telefon raqamingizni kiriting",
            },
            message: "Tanlagan xizmat uchun qanday ma'lumot kerak",
            phone: "Telefon raqamingizni kiriting",
            submit: "Yuborish", 
          }
        }
      },
      ru: {
        translation: {
          header: {
            text: "Легкая торговля, быстрое обслуживание",
            headerText: 'UzTradeLink',
          },
          hero: {
            title: "О компании",
            text: "UzTradeLink — современная и инновационная компания, специализирующаяся на работе с биржами и аукционами на рынке Узбекистана. Мы сотрудничаем с ведущими заводами и производителями Узбекистана, помогая им выводить свою продукцию на рынок через биржи. Также мы предоставляем нашим клиентам услуги по участию в аукционах и торгах.",
            client: "Клиенты",
            service: "предоставляемые услуги",
          },
          about: {
            title: "Услуги, которые мы предоставляем",
            number: "номер машины",
            uzex: "УзЭкс Трейд",
            ebirja: 'Э-Биржa Трейд',
            auksion: "э-аукцион",
          },
          clients: {
            title: "Наши клиенты",
            alt: "В этом месте логотипы наших клиентов",
            client1: {
              title: "Бухарский агрокластер",
              desc: "Общество с ограниченной ответственностью «БУХОРА АГРОКЛАСТЕР», Гражданский кодекс Республики Узбекистан, Законы «О защите акционерных обществ и прав акционеров» и «Об обществах с ограниченной и дополнительной ответственностью» и решения акционеров « Акционерного общества «Бухоропахцаноат ХБ» от 6 и 11 июля 2019 года, организованного в соответствии с решениями внеочередного общего собрания акционеров. Он утвержден в новой редакции решением внеочередного общего собрания участников 14 декабря 2019 года.",
              subtitle: "Оказанные и предоставляемые услуги",
            }
          },
          team: {
            title: "Наша команда",
            name1: 'Вохид Турсунов',
            name2: 'Шохрух Раджабов',
            name3: 'Шахджахон Октамов',
            trader1: "Брокер",
            vohid: "Вахид Турсунов — руководитель компании. Эта компания уже много лет оказывает услуги многим кластерам и компаниям со стороны фондовой биржи.",
            shoxrux: "Шохрух Раджабов уже 3-4 года много работает на бирже. А кроме этого найти отдельного заказчика и превосходно удовлетворить его потребности.",
            shohjahon: "Шахджахон Октамов — веб-разработчик, занимается систематизацией бизнеса. И сейчас он только начал свою работу. Могу договориться с предпринимателями.",
            trader2: "торговец",
            trader3: "Программист",
          },
          location: {
            title: "Наше расположение",
            address: "Узбекистан, Ташкент",
          },
          call: {
            title: "Свяжитесь с нами",
            name: "ФИО",
            serviceC: {
              service0: 'выберите тип услуги',
              service1: "УзЭкс Трейд",
              service2: 'Э-Биржa Трейд',
              service3: "Э-аукцион",
              service4: "Номер машины",
            },
            errors: {
              error1: "Введите введите свое имя",
              error2: "Выберите тип услуги",
              error3: "Напишите сообщение",
              error4: "Введите введите свой номер телефона",
            },
            message: "Опишите причину, почему вы хотите получить этот сервис",
            phone: "Номер телефона",
            submit: "Отправить", 
          }
        }
      }
    }
  });

export default i18n;