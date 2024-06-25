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
            text: "Innovative Solutions is a cutting-edge technology company that provides innovative solutions for businesses of all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our customized and effective technology solutions. With over a decade of experience, we have built a reputation for delivering high-quality services to our clients.",
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
          },
          team: {
            title: "Our Team",
            trader1: "Trader",
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
            text: "Innovative Solutions is a cutting-edge technology company that provides innovative solutions for businesses of all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our customized and effective technology solutions. With over a decade of experience, we have built a reputation for delivering high-quality services to our clients.",
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
          },
          team: {
            title: "Bizning Jamoa",
            trader1: "Katta Trader",
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
            text: "Innovative Solutions is a cutting-edge technology company that provides innovative solutions for businesses of all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our customized and effective technology solutions. With over a decade of experience, we have built a reputation for delivering high-quality services to our clients.",
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
          },
          team: {
            title: "Наша команда",
            trader1: "Tорговец",
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