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
            text: "Easy trade, Fast service"
          },
          hero: {
            title: "About Company",
            text: "The company called ———— was founded in — and it is a one-person company and works by delivering and providing products to people on the stock market. And in addition, he has been satisfying the needs of several people by participating in e-auction and auto license sales.",
            client: "Clients",
            service: "provided services",
          },
          about: {
            title: "Services we Provide",
            number: "autoNumber",
            trade: "Commodity Trade",
            auksion: "e-auksion",
            web: "Web Development",
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
            title: "Our Team",
            trader1: "Trader",
            vohid: "Void Tursunov is the head of the company. This company has been providing services to many clusters and companies from the stock exchange side for many years.",
            shoxrux: "Shokhrukh Rajabov has been doing a lot of work at the stock exchange for 3-4 years. And besides that, find a separate customer and serve their needs in an excellent way.",
            shohjahon: "Shahjahon Oktamov is a web developer and works on business systematization. And now he has just started his work. Can agree with entrepreneurs. To work with them",
            trader2: "Trader Helper",
            trader3: "Programmer",
          },
          location: {
            title: "Our Location",
            address: "Uzbekistan, Bukhara, Lattico",
          },
          call: {
            title: "Contact Us",
            name: "Full Name",
            serviceC: {
              service0: 'Choose Service',
              service1: "Commodity Trade",
              service2: "e-auksion",
              service3: "AutoNumber",
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
            text: "Oson savdo, Tezkor Xizmat"
          },
          hero: {
            title: "Kompaniya Haqida",
            text: "———— deb ataluvchi firma — yilda tashkil topgan bo`lib unda bir nefha firma va birja bozorida  bo`lgan mahsulotlarni odamlarga olib berish va ularni ta`minlash orqali ishlab kelmoqda. Va undan tashqari e-auksion va avtoraqam savdolarida qatnashib bir necha odamlarni ehtiyojini qondirib kelmoqda. ",
            client: "Klientlar",
            service: "Ko`rsartilgan xizmatlar",
          },
          about: {
            title: "Bizning xizmatlar",
            number: "AvtoRaqam",
            trade: "Birja Savdo",
            auksion: "e-auksion",
            web: "Web xizmatlari",
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
            title: "Bizning Jamoa",
            trader1: "Katta Trader",
            vohid: "Void Tursunov firma rahbari. Bu firma anca yıllarda davomida ko`plab klaster va firmalarga birja tomondan xizmat ko`rsatib kelmoqda. Va mijozlarni qiziqtira olgan.",
            shoxrux: "Shoxrux Rajabov 3, 4 yıldan beri birjada ancha ishlarni bajarib kelmoqda. Va undan tashqari o`zi alohida mijoz topib ularni ehtiyojini a`lo darajada qodirib xizmat ko`rsatkan.",
            shohjahon: "Shohjahon O`ktamov - web dasturchi va biznes bo`yicha tizimllashtirish bo`yicha ishlab kelmoqda. Va hozir o`z faoliyatini endgina boshladi. Tadbirkorlar bilan kelisha oladi.",
            trader2: "O`rtacha Trader",
            trader3: "Dasturchi",
          },
          location: {
            title: "Bizning Manzil",
            address: "Uzbekistan, Bukhara, Lattico",
          },
          call: {
            title: "Biz bilan bog`laning",
            name: "F.I.O",
            serviceC: {
              service0: 'Xizmat Turini tanglang',
              service1: "Birja Savdo",
              service2: "e-auksion",
              service3: "AvtoRaqam",
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
            text: "Легкая торговля, быстрое обслуживание"
          },
          hero: {
            title: "О компании",
            text: "Компания под названием ———— была основана в — и является компанией, состоящей из одного участника, и работает путем доставки и поставки продуктов людям на фондовом рынке. Кроме того, он удовлетворял потребности нескольких человек, участвуя в электронных аукционах и продаже автолицензий.",
            client: "Клиенты",
            service: "предоставляемые услуги",
          },
          about: {
            title: "Услуги, которые мы предоставляем",
            number: "номер машины",
            trade: "Торговля",
            auksion: "э-аукцион",
            web: "Разработка сайта",
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
            trader1: "Tорговец",
            vohid: "Вахид Турсунов — руководитель компании. Эта компания уже много лет оказывает услуги многим кластерам и компаниям со стороны фондовой биржи.",
            shoxrux: "Шохрух Раджабов уже 3-4 года много работает на бирже. А кроме этого найти отдельного заказчика и превосходно удовлетворить его потребности.",
            shohjahon: "Шахджахон Октамов — веб-разработчик, занимается систематизацией бизнеса. И сейчас он только начал свою работу. Могу договориться с предпринимателями.",
            trader2: "Tорговец помощник",
            trader3: "Программист",
          },
          location: {
            title: "Наше расположение",
            address: "Узбекистан, Бухара, Латтико",
          },
          call: {
            title: "Свяжитесь с нами",
            name: "ФИО",
            serviceC: {
              service0: 'выберите тип услуги',
              service1: "Торговля",
              service2: "Э-аукцион",
              service3: "Номер машины",
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