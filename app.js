const { createContext, useContext, useEffect, useRef, useState } = React;
const { createRoot } = ReactDOM;
const projects = [
    { id: 'nocturne', name: 'NOCTURNE', category: 'Beauty / авторский концепт', url: 'https://6613868-droid.github.io/nocturne-demo/', image: './assets/project-nocturne.webp', alt: 'Линия NOCTURNE на мокром камне с цветами', headline: 'Ночной уход. Выразительная форма.', description: 'Концепт-витрина косметической линии: ночная палитра, цветочные образы и крупная редакционная типографика.', details: 'Продуктовая история / презентация линейки / ритуал ухода' },
    { id: 'roastroom', name: 'Roast Room', category: 'Кофейня / авторский концепт', url: 'https://6613868-droid.github.io/roastroom-demo/', image: './assets/project-roastroom.webp', alt: 'Кофе и выпечка из демо Roast Room', headline: 'Утро в тёплых тонах.', description: 'Авторский концепт сайта кофейни с меню, категориями и интерактивной корзиной. Терракота, солнечный жёлтый и предметная композиция.', details: 'Меню / корзина / история места' },
    { id: 'mysig', name: 'MYSIG', category: 'Lifestyle / авторский концепт', url: 'https://6613868-droid.github.io/mysig-demo/', image: './assets/project-mysig.webp', alt: 'Ароматная свеча MYSIG на подставке', headline: 'Тихие ритуалы дома.', description: 'Витрина свечей и диффузоров, вдохновлённая Балтикой. Мягкая палитра, свободная композиция и акцент на фактурах.', details: 'Коллекция / ароматы / мастерская' },
    { id: 'saint-flore', name: 'Saint Floré', category: 'Флористика / авторский концепт', url: 'https://6613868-droid.github.io/saint-flore/', image: './assets/project-saint-flore.webp', alt: 'Цветочная композиция Saint Floré с пионами', headline: 'Цветы с характером.', description: 'Авторский концепт сайта цветочного магазина: каталог букетов, фильтры, подбор по поводу и корзина в мягкой розовой палитре.', details: 'Каталог / подбор букета / корзина' },
    { id: 'kaliningrad', name: 'Калининград · гид', category: 'Путешествия / авторский концепт', url: 'https://6613868-droid.github.io/kaliningrad-demo/', image: './assets/project-kaliningrad.webp', alt: 'Кафедральный собор Калининграда вечером', headline: 'Город, который остаётся.', description: 'Редакционный путеводитель по городу и области: направления, карты, легенды и сценарии поездки на один день.', details: 'Маршруты / карты / городской сторителлинг' },
    { id: 'grooming', name: 'Красавчик', category: 'Сервис / авторский концепт', url: 'https://6613868-droid.github.io/floraverde-demo/', image: './assets/project-grooming.webp', alt: 'Грумер с собакой из демо студии Красавчик', headline: 'Забота в каждом движении.', description: 'Авторский концепт сайта студии груминга: услуги, цены, знакомство со студией и запись. Тёплая фотография и многослойный первый экран.', details: 'Услуги / прайс / запись' },
    { id: 'kotodomik', name: 'Котодомик', category: 'Приют / работающий сайт', url: 'https://kotodomik-msk.ru/', image: './assets/project-kotodomik.webp', alt: 'Два котика из приюта Котодомик спят обнявшись', headline: 'Сайт для помощи приюту. Разработан кодом и передан владелице.', description: 'Работающий сайт домашнего приюта в Москве: история, фотографии котиков, связь в Telegram и способы поддержать приют.', details: 'Разработка кодом / опубликован / используется приютом' }
];
const toolkit = [['01', 'Figma', 'Здесь собираю структуру и пробую визуальные решения до начала разработки.'], ['02', 'Tilda и код', 'Выбираю способ реализации под задачу: Tilda или HTML, CSS и JavaScript с помощью AI-инструментов.'], ['03', 'AI-инструменты', 'Использую для поиска идей и ускорения разработки. Отбор решений и проверка результата остаются за мной.']];
function AboutPage({ dark, portrait, scene, Waves }) {
    return React.createElement("article", { className: "author-page", "aria-labelledby": "author-title" },
        React.createElement("section", { id: "about-me", className: "author-intro wave-host" },
            React.createElement(Waves, null),
            React.createElement("div", { className: "author-intro-copy" },
                React.createElement("a", { className: "author-back", href: "#home" }, "\u2190 \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"),
                React.createElement("p", { className: "author-kicker" }, "\u0414\u0412\u0415 \u0421\u0422\u041E\u0420\u041E\u041D\u042B. \u041E\u0414\u0418\u041D \u0410\u0412\u0422\u041E\u0420"),
                React.createElement("h1", { id: "author-title", tabIndex: -1 }, dark ? React.createElement(React.Fragment, null,
                    "\u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043C\u0438\u0440\u0430",
                    React.createElement("br", null),
                    React.createElement("em", null, "\u0435\u0441\u0442\u044C \u0441\u0432\u043E\u0439 \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C.")) : React.createElement(React.Fragment, null,
                    "\u041F\u0440\u0438\u0432\u0435\u0442, \u044F \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430.",
                    React.createElement("br", null),
                    React.createElement("em", null, "\u0418 \u044F \u043B\u044E\u0431\u043B\u044E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C."))),
                React.createElement("p", { className: "author-lead" }, dark ? 'Мне нравится превращать воображаемое в настоящее' : 'От первой идеи до момента, когда сайт оживает в браузере'),
                React.createElement("p", { className: "author-body" }, dark ? 'Иногда всё начинается с цвета. Иногда — с фотографии, настроения или случайной идеи. Постепенно у неё появляются форма, характер и собственная история. А потом я открываю браузер и вижу перед собой целый мир, которого ещё вчера не существовало. Создаю сайты и ботов для бизнеса, соединяя выразительный образ с практической пользой' : 'Я веб-дизайнер. Создаю сайты для бизнеса, брендов и интересных идей, а также ботов, которые помогают в работе с клиентами. Мне нравится весь процесс: придумывать концепцию, искать визуальные решения, продумывать структуру и видеть, как отдельные детали превращаются в работающий сайт'),
                React.createElement("span", { className: "hand-note author-note" }, "\u041E\u0442 \u0437\u0430\u043C\u044B\u0441\u043B\u0430 \u2014 \u043A \u0436\u0438\u0432\u043E\u0439 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u2661")),
            React.createElement("figure", { className: dark ? "author-portrait author-portrait-right" : "author-portrait author-portrait-left" },
                React.createElement("img", { src: portrait, alt: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0425\u043C\u0435\u043B\u0451\u0432\u0430", width: "1120", height: "1400", fetchPriority: "high" }),
                React.createElement("figcaption", null, "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0425\u043C\u0435\u043B\u0451\u0432\u0430 \u00B7 \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440"))),
        React.createElement("section", { id: "author-inspiration", className: "author-inspiration wave-host" },
            React.createElement(Waves, null),
            React.createElement("figure", { className: dark ? "author-studio inspiration-half inspiration-half-dark" : "author-studio inspiration-half" },
                React.createElement("img", { src: scene, alt: "\u0422\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F: \u0441\u0432\u0435\u0442, \u0434\u0435\u0442\u0430\u043B\u0438 \u0438 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E", loading: "lazy", width: "1672", height: "941" })),
            React.createElement("div", { className: "author-inspiration-copy" },
                React.createElement("p", { className: "author-kicker" }, "01 / \u0412\u0414\u041E\u0425\u041D\u041E\u0412\u0415\u041D\u0418\u0415"),
                React.createElement("h2", null,
                    "\u0427\u0442\u043E \u043C\u0435\u043D\u044F",
                    React.createElement("br", null),
                    React.createElement("em", null, "\u0432\u0434\u043E\u0445\u043D\u043E\u0432\u043B\u044F\u0435\u0442")),
                React.createElement("p", null, "\u042F \u043B\u044E\u0431\u043B\u044E \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u2014 \u043A\u043E\u0433\u0434\u0430 \u0446\u0432\u0435\u0442, \u0441\u0432\u0435\u0442, \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u0438 \u0434\u0435\u0442\u0430\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C."),
                React.createElement("p", null, "\u041D\u0435\u043E\u0431\u044B\u0447\u043D\u0430\u044F \u0438\u0434\u0435\u044F \u043C\u043E\u0436\u0435\u0442 \u0441\u0442\u0430\u0442\u044C \u043D\u0430\u0447\u0430\u043B\u043E\u043C \u0446\u0435\u043B\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0442\u044C \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0431\u0440\u0430\u0437\u044B \u0438 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0438\u043C\u0435\u043D\u043D\u043E \u044D\u0442\u043E\u0439 \u0438\u0441\u0442\u043E\u0440\u0438\u0438."),
                React.createElement("p", null, "\u041D\u043E \u0437\u0430 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043E\u0439 \u0432\u0441\u0435\u0433\u0434\u0430 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0441\u043C\u044B\u0441\u043B: \u0434\u0435\u0442\u0430\u043B\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0442\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0443 \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C, \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C \u0438 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0443\u0436\u043D\u043E\u0435."),
                React.createElement("span", { className: "hand-note" }, "\u0417\u0430\u043C\u0435\u0447\u0430\u0442\u044C. \u041F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C. \u0421\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C."))),
        React.createElement("section", { id: "author-business", className: "author-section author-business wave-host" },
            React.createElement(Waves, null),
            React.createElement("div", { className: "author-section-heading" },
                React.createElement("div", null,
                    React.createElement("p", { className: "author-kicker" }, "\u0414\u0412\u0410 \u041D\u0410\u041F\u0420\u0410\u0412\u041B\u0415\u041D\u0418\u042F / \u041E\u0414\u0418\u041D \u041F\u041E\u0414\u0425\u041E\u0414"),
                    React.createElement("h2", null,
                        "\u0427\u0442\u043E \u044F \u043C\u043E\u0433\u0443 \u0441\u043E\u0437\u0434\u0430\u0442\u044C",
                        React.createElement("br", null),
                        React.createElement("em", null, "\u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430")))),
            React.createElement("div", { className: "author-business-grid" },
                React.createElement("article", null,
                    React.createElement("p", { className: "author-kicker" }, "01 / \u0421\u0410\u0419\u0422\u042B"),
                    React.createElement("h3", null, "\u0421\u0430\u0439\u0442\u044B \u0441 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043E\u043C"),
                    React.createElement("p", null, "\u0418\u0449\u0443 \u043E\u0431\u0440\u0430\u0437, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0432\u0430\u0448\u0435\u043C\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0443, \u0438 \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u044E \u0435\u0433\u043E \u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0439. \u0424\u043E\u0440\u043C\u0430\u0442\u044B, \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0438 \u044D\u0442\u0430\u043F\u044B \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u043E\u0439.")),
                React.createElement("article", null,
                    React.createElement("p", { className: "author-kicker" }, "02 / \u0411\u041E\u0422\u042B \u0414\u041B\u042F \u0411\u0418\u0417\u041D\u0415\u0421\u0410"),
                    React.createElement("h3", null, "\u0411\u043E\u0442\u044B \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F"),
                    React.createElement("p", null, "\u0421\u043E\u0437\u0434\u0430\u044E \u0431\u043E\u0442\u043E\u0432 \u0434\u043B\u044F Telegram \u0438 MAX \u2014 \u0441 \u044D\u0442\u0438\u043C\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u043C\u0438 \u0443 \u043C\u0435\u043D\u044F \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442. \u041F\u043E\u043C\u043E\u0433\u0430\u044E \u0443\u043F\u0440\u043E\u0449\u0430\u0442\u044C \u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u0441\u0431\u043E\u0440 \u0437\u0430\u044F\u0432\u043E\u043A, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435."),
                    React.createElement("p", { className: "author-business-note" }, "\u0424\u0443\u043D\u043A\u0446\u0438\u0438, \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u0435\u043C \u0434\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0431\u043E\u0442\u044B."))),
            React.createElement("div", { className: "author-business-actions" },
                React.createElement("a", { className: "solid-link", href: "#contact" },
                    "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 ",
                    React.createElement("span", { "aria-hidden": "true" }, "\u2197")),
                React.createElement("a", { className: "author-back", href: "#services" }, "\u0423\u0441\u043B\u0443\u0433\u0438 \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u2197"))),
        React.createElement("section", { id: "author-tools", className: "author-section wave-host" },
            React.createElement(Waves, null),
            React.createElement("div", { className: "author-section-heading" },
                React.createElement("div", null,
                    React.createElement("p", { className: "author-kicker" }, "02 / \u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422\u042B"),
                    React.createElement("h2", null,
                        "\u041C\u043E\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
                        React.createElement("br", null),
                        React.createElement("em", null, "\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"))),
                React.createElement("p", { className: "author-tools-note" },
                    "\u041F\u043E\u0434\u0431\u0438\u0440\u0430\u044E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443",
                    React.createElement("br", null),
                    "\u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u044E \u0437\u0430 \u0446\u0435\u043B\u043E\u0441\u0442\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430.")),
            React.createElement("ul", { className: "author-tools" }, toolkit.map(([number, title, text]) => React.createElement("li", { key: number },
                React.createElement("span", null, number),
                React.createElement("div", null,
                    React.createElement("h3", null, title),
                    React.createElement("p", null, text)))))),
        React.createElement("section", { id: "author-finale", className: "author-finale wave-host" },
            React.createElement(Waves, null),
            React.createElement("p", { className: "author-kicker" }, "\u0421\u041B\u0415\u0414\u0423\u042E\u0429\u0410\u042F \u0418\u0421\u0422\u041E\u0420\u0418\u042F \u2014 \u0412\u0410\u0428\u0410"),
            React.createElement("h2", null, dark ? React.createElement(React.Fragment, null,
                "\u0423 \u0432\u0430\u0448\u0435\u0439 \u0438\u0434\u0435\u0438 \u0442\u043E\u0436\u0435 \u043C\u043E\u0436\u0435\u0442",
                React.createElement("br", null),
                React.createElement("em", null, "\u043F\u043E\u044F\u0432\u0438\u0442\u044C\u0441\u044F \u0441\u0432\u043E\u0439 \u043C\u0438\u0440.")) : React.createElement(React.Fragment, null,
                "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C",
                React.createElement("br", null),
                React.createElement("em", null, "\u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0435?"))),
            React.createElement("p", null, dark ? 'Расскажите, что вы задумали. А я помогу найти для этого форму, настроение и характер' : 'Расскажите о своей идее. Возможно, именно с нашего разговора начнётся ваш будущий сайт'),
            React.createElement("a", { href: "#contact", className: "solid-link" },
                "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442 ",
                React.createElement("span", null, "\u2197")),
            React.createElement("a", { className: "author-back", href: "#home" }, "\u2190 \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")));
}
// Shared content for both worlds. Service prices and contact links approved by Alexandra.
const portfolio = {
    name: 'Александра Хмелёва',
    telegram: 'https://t.me/AlexandraHmeleva',
    email: 'sasha_hmeleva@bk.ru',
    instagram: 'https://www.instagram.com/khmeliova_sasha/',
    behance: 'https://www.behance.net/sasha_hmeleva',
    portrait: './assets/about-light-portrait.webp', // Portrait supplied and selected by Alexandra for Surface.
    formEndpoint: 'https://formsubmit.co/sasha_hmeleva@bk.ru', // Native POST. Owner must activate the recipient by email before launch.
};
const services = [
    { id: 'landing', title: 'Лендинг', price: 25000, priceConfirmed: true, description: 'Индивидуальный дизайн, адаптивная сборка, форма заявки', imagePosition: '72% center' },
    { id: 'website', title: 'Многостраничный сайт', price: 45000, priceConfirmed: true, description: 'Продуманная структура, дизайн и разработка согласованного объёма страниц', imagePosition: '26% center' },
    { id: 'redesign', title: 'Редизайн', price: 20000, priceConfirmed: true, description: 'Обновление визуала и удобства существующего сайта', imagePosition: '5% center' },
];
const workSteps = [
    ['Бриф', 'Обсуждаем задачу, аудиторию, ваши цели и референсы.'],
    ['Структура', 'Продумываем содержание, логику и путь посетителя.'],
    ['Дизайн', 'Находим визуальный язык и собираем макеты страниц.'],
    ['Сборка', 'Воплощаем дизайн, адаптируем сайт под разные экраны.'],
    ['Запуск', 'Проверяем страницы, формы и ссылки перед публикацией.'],
];
const faqItems = [
    ['Сколько времени занимает разработка сайта?', 'Срок зависит от количества страниц, готовности материалов и сложности функций. После знакомства с задачей мы согласуем этапы и календарь работы.'],
    ['Можно ли заказать только дизайн?', 'Да, можно обсудить отдельную разработку дизайна. Состав макетов и формат передачи материалов согласуем до начала работы.'],
    ['Что входит в стоимость?', 'Состав работ определяется задачей: структура, дизайн, адаптивная сборка и проверка сайта. Дополнительные функции и внешние сервисы обсуждаются отдельно.'],
    ['Будет ли сайт удобен на телефоне?', 'Мобильная версия продумывается вместе с десктопной. Перед запуском проверяются читаемость, навигация, формы и поведение элементов на разных экранах.'],
    ['Как согласовать условия работы?', 'До старта обсудим объём, сроки, стоимость и порядок согласований. Конкретные условия фиксируются для вашего проекта.'],
    ['Что делать, если нужна поддержка после запуска?', 'Расскажите, какие обновления планируются. Формат поддержки и объём дальнейшей работы можно согласовать отдельно.'],
];
const ART = { darkAuthor: './assets/about-dark-author-diptych.webp', lightAuthor: './assets/about-author-diptych.webp', inspiration: './assets/about-inspiration-diptych.webp', surface: './assets/surface-atelier.webp', atelier: './assets/atelier.webp', portal: './assets/other-portal.webp', aboutPortrait: './assets/about-dark-portrait.webp', aboutStudio: './assets/about-dark-studio.webp' };
// Change to 'green' to restore the previous slit and timing.
// The page-edge invitation uses the shared opening animation without a preflash.
const ENABLE_RIFT_PREFLASH = false;
const RIFT_STYLE = 'red';
const RIFT_PATH = 'M617 -5 L568 157 Q567 161 570 165 L574 172 Q576 175 573 180 L504 389 Q503 392 505 396 L508 403 Q509 406 507 410 L462 528 Q461 532 463 535 L467 542 Q469 545 466 550 L407 705';
const RealityContext = createContext({ reality: 'surface', busy: false, flashing: false, toggle: () => { }, finish: () => { } });
const useReality = () => useContext(RealityContext);
const navItems = [['#project', 'Проекты'], ['#services', 'Услуги'], ['#about-me', 'Обо мне'], ['#faq', 'FAQ'], ['#contact', 'Контакты']];
function SiteHeader() {
    const { reality, toggle, busy } = useReality();
    const [menuOpen, setMenuOpen] = useState(false);
    return React.createElement("header", { className: "site-header" },
        React.createElement("a", { className: "brand", href: "#home", onClick: () => setMenuOpen(false) },
            "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0425\u043C\u0435\u043B\u0451\u0432\u0430",
            React.createElement("span", null, "\u0412\u0415\u0411-\u0414\u0418\u0417\u0410\u0419\u041D\u0415\u0420")),
        React.createElement("button", { className: "menu-toggle", "aria-expanded": menuOpen, "aria-controls": "main-menu", onClick: () => setMenuOpen(!menuOpen) },
            menuOpen ? 'Закрыть' : 'Меню',
            " ",
            React.createElement("span", { "aria-hidden": "true" }, menuOpen ? '×' : '☰')),
        React.createElement("nav", { id: "main-menu", className: menuOpen ? 'is-open' : '', "aria-label": "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F", onKeyDown: e => { if (e.key === 'Escape')
                setMenuOpen(false); } }, navItems.map(([url, label]) => React.createElement("a", { key: url, href: url, onClick: () => setMenuOpen(false) }, label))),
        React.createElement("button", { className: "switch", onClick: toggle, disabled: busy, "aria-label": reality === 'surface' ? 'Перейти в Other Side' : 'Вернуться в Surface' },
            React.createElement("span", { className: reality === 'surface' ? 'selected' : '' }, "Surface"),
            React.createElement("i", { "aria-hidden": "true" }, "\u2194"),
            React.createElement("span", { className: reality === 'other' ? 'selected' : '' }, "Other Side")));
}
function Crack() { const { toggle, busy, flashing, reality } = useReality(); const [hot, setHot] = useState(false); useEffect(() => { setHot(false); }, [busy, reality]); return React.createElement(React.Fragment, null,
    React.createElement("div", { className: "space-boundary", "data-rift": RIFT_STYLE, "data-hot": hot && !busy, "data-flashing": flashing, "aria-hidden": "true" }, RIFT_STYLE === 'green' ? React.createElement(React.Fragment, null,
        React.createElement("div", { className: "boundary-depth" }),
        React.createElement("div", { className: "boundary-edge" })) : React.createElement("svg", { className: "red-rift", viewBox: "0 0 1000 700", preserveAspectRatio: "none" },
        React.createElement("path", { className: "rift-halo", d: RIFT_PATH }),
        React.createElement("path", { className: "rift-line", d: RIFT_PATH }),
        React.createElement("path", { className: "rift-inner", d: RIFT_PATH }))),
    React.createElement("button", { className: "crack-trigger", onClick: toggle, disabled: busy, onPointerEnter: () => setHot(true), onPointerLeave: () => setHot(false), onFocus: () => setHot(true), onBlur: () => setHot(false) },
        React.createElement("span", null,
            reality === 'surface' ? 'Открыть другую сторону' : 'Вернуться на поверхность',
            " ",
            React.createElement("b", null, "\u2197")))); }
function DarkAtmosphere({ staticLayer = false }) {
    const layer = useRef(null);
    const pearlId = React.useId();
    useEffect(() => {
        const el = layer.current;
        const hero = el?.parentElement;
        if (!el || !hero || staticLayer)
            return;
        const reduced = matchMedia('(prefers-reduced-motion: reduce)');
        const pointer = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 761px)');
        let visible = false, frame = 0, x = 0, y = 0;
        const reset = () => { cancelAnimationFrame(frame); frame = 0; x = 0; y = 0; el.style.setProperty('--depth-x', '0px'); el.style.setProperty('--depth-y', '0px'); el.style.setProperty('--depth-scroll', '0px'); };
        const update = () => {
            frame = 0;
            if (!visible || document.hidden || reduced.matches || !pointer.matches)
                return;
            el.style.setProperty('--depth-x', x + 'px');
            el.style.setProperty('--depth-y', y + 'px');
            el.style.setProperty('--depth-scroll', Math.min(22, Math.max(0, -hero.getBoundingClientRect().top) * .045) + 'px');
        };
        const schedule = () => { if (!frame && visible && !document.hidden && !reduced.matches && pointer.matches)
            frame = requestAnimationFrame(update); };
        const sync = () => { el.dataset.active = String(visible && !document.hidden && !reduced.matches); if (reduced.matches || document.hidden || !pointer.matches || !visible)
            reset();
        else
            schedule(); };
        const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); });
        observer.observe(hero);
        const move = (e) => { const rect = hero.getBoundingClientRect(); x = Math.max(-.5, Math.min(.5, (e.clientX - rect.left) / rect.width - .5)) * 16; y = Math.max(-.5, Math.min(.5, (e.clientY - rect.top) / rect.height - .5)) * 10; schedule(); };
        const leave = () => { x = 0; y = 0; schedule(); };
        hero.addEventListener('pointermove', move, { passive: true });
        hero.addEventListener('pointerleave', leave);
        window.addEventListener('scroll', schedule, { passive: true });
        reduced.addEventListener('change', sync);
        pointer.addEventListener('change', sync);
        document.addEventListener('visibilitychange', sync);
        return () => { reset(); observer.disconnect(); hero.removeEventListener('pointermove', move); hero.removeEventListener('pointerleave', leave); window.removeEventListener('scroll', schedule); reduced.removeEventListener('change', sync); pointer.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync); };
    }, [staticLayer]);
    return React.createElement("div", { ref: layer, className: "world-scene", "aria-hidden": "true" },
        React.createElement("div", { className: "world-distance" },
            React.createElement("div", { className: "world-aura" }),
            React.createElement("div", { className: "world-horizon" })),
        React.createElement("div", { className: "world-architecture" },
            React.createElement("div", { className: "portal-shadow" }),
            React.createElement("div", { className: "portal-frame portal-frame-back" }),
            React.createElement("div", { className: "portal-frame portal-frame-front" },
                React.createElement("div", { className: "portal-view" },
                    React.createElement("img", { className: "portal-landscape", src: ART.portal, alt: "", width: "1536", height: "1024", decoding: "async", draggable: "false" }),
                    React.createElement("div", { className: "portal-light" }))),
            React.createElement("div", { className: "portal-step step-back" }),
            React.createElement("div", { className: "portal-step step-front" })),
        React.createElement("div", { className: "world-still-life" },
            React.createElement("img", { src: ART.atelier, width: "1536", height: "1024", alt: "", decoding: "async", draggable: "false" })),
        React.createElement("div", { className: "world-silk" },
            React.createElement(AmbientWaves, { hero: true })));
}
function SideInvitation() {
    const { reality, toggle, busy } = useReality();
    const dark = reality === 'other';
    const id = React.useId().replace(/:/g, '');
    return React.createElement("button", { className: "side-invitation", onClick: toggle, disabled: busy, "aria-label": dark ? 'Вернуться к свету' : 'Заглянуть на тёмную сторону' },
        React.createElement("svg", { className: "side-peek", viewBox: "0 0 360 130", preserveAspectRatio: "none", "aria-hidden": "true" },
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: id + 'world', x1: "0", y1: "0", x2: "1", y2: "1" },
                    React.createElement("stop", { stopColor: dark ? '#fff5e4' : '#091426' }),
                    React.createElement("stop", { offset: ".6", stopColor: dark ? '#e6d4c1' : '#26374c' }),
                    React.createElement("stop", { offset: "1", stopColor: dark ? '#fff9ee' : '#716684' })),
                React.createElement("linearGradient", { id: id + 'edge', x1: "0", y1: "0", x2: "0", y2: "1" },
                    React.createElement("stop", { stopColor: dark ? '#304058' : '#fffdf8' }),
                    React.createElement("stop", { offset: "1", stopColor: dark ? '#0b1629' : '#d5c8b9' }))),
            React.createElement("path", { className: "peek-world", d: "M0 130 C62 127 55 37 133 24 C228 8 299 42 360 0 L360 130Z", fill: 'url(#' + id + 'world)' }),
            React.createElement("g", { className: "peek-waves", fill: "none" },
                React.createElement("path", { d: "M60 130 C165 46 242 145 360 65" }),
                React.createElement("path", { d: "M90 130 C205 75 258 155 360 94" }),
                React.createElement("path", { d: "M160 130 C245 81 307 79 360 39" })),
            React.createElement("path", { className: "peek-lip", d: "M0 130 C62 127 55 37 133 24 C228 8 299 42 360 0 C305 61 231 28 138 40 C70 51 78 134 0 130Z", fill: 'url(#' + id + 'edge)' })),
        React.createElement("span", { className: "side-invitation-copy" },
            React.createElement("span", { className: "side-invitation-note" }, dark ? 'Даже у самой тёмной истории есть свет' : 'У каждой истории есть другая сторона'),
            React.createElement("span", { className: "side-invitation-link" },
                dark ? 'Вернуться к свету' : 'Заглянуть на тёмную сторону',
                " ",
                React.createElement("span", { "aria-hidden": "true" }, "\u2197"))));
}
function Hero({ mode, decorative = false }) {
    return React.createElement("div", { className: `hero-composition ${mode}` },
        React.createElement("div", { className: "eyebrow" },
            React.createElement("span", null, "\u0410\u041B\u0415\u041A\u0421\u0410\u041D\u0414\u0420\u0410 \u0425\u041C\u0415\u041B\u0401\u0412\u0410"),
            React.createElement("span", null, mode === 'surface' ? '01 / THE SURFACE' : '02 / THE OTHER SIDE')),
        mode === 'surface' ? React.createElement(React.Fragment, null,
            React.createElement("div", { className: "surface-scene" },
                React.createElement("img", { src: ART.surface, alt: "", width: "1536", height: "1024" }),
                React.createElement("p", { className: "surface-signature" },
                    "\u0421\u0430\u0439\u0442\u044B,",
                    React.createElement("br", null),
                    "\u043A\u043E\u0442\u043E\u0440\u044B\u0435",
                    React.createElement("br", null),
                    "\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E\u0442\u0441\u044F ",
                    React.createElement("span", { "aria-label": "\u0441 \u043B\u044E\u0431\u043E\u0432\u044C\u044E" }, "\u2661"))),
            React.createElement("div", { className: "surface-editorial" },
                React.createElement("p", { className: "surface-kicker" }, "\u0421\u0410\u0419\u0422\u042B \u00B7 \u0411\u0420\u0415\u041D\u0414\u042B \u00B7 \u0418\u0414\u0415\u0418"),
                React.createElement("h1", { className: "surface-title" },
                    "\u041D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u0430\u0439\u0442\u044B.",
                    React.createElement("em", null, "\u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438.")),
                React.createElement("p", { className: "surface-intro" }, "\u0421\u043E\u0437\u0434\u0430\u044E \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u0441\u0430\u0439\u0442\u044B \u0438 \u0431\u043E\u0442\u043E\u0432 \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u2014 \u0447\u0442\u043E\u0431\u044B \u0432\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0431\u044B\u043B\u043E \u043F\u0440\u043E\u0449\u0435 \u0443\u0437\u043D\u0430\u0442\u044C \u043E \u0432\u0430\u0441, \u0437\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441 \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443."),
                !decorative && React.createElement("div", { className: "surface-actions" },
                    React.createElement("a", { href: "#project", className: "solid-link" },
                        "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u044B ",
                        React.createElement("span", null, "\u2192")),
                    React.createElement("a", { href: "#contact", className: "outline-link" }, "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0441\u0430\u0439\u0442")),
                React.createElement("p", { className: "surface-values" }, "\u042D\u0421\u0422\u0415\u0422\u0418\u041A\u0410 \u00B7 \u0421\u041C\u042B\u0421\u041B \u00B7 \u0422\u0415\u0425\u041D\u041E\u041B\u041E\u0413\u0418\u0418"))) : React.createElement(React.Fragment, null,
            React.createElement(DarkAtmosphere, { staticLayer: decorative }),
            React.createElement("p", { className: "portal-signature" },
                "\u0421\u0430\u0439\u0442\u044B,",
                React.createElement("br", null),
                "\u043A\u043E\u0442\u043E\u0440\u044B\u0435",
                React.createElement("br", null),
                "\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E\u0442\u0441\u044F ",
                React.createElement("span", { "aria-label": "\u0441 \u043B\u044E\u0431\u043E\u0432\u044C\u044E" }, "\u2661")),
            React.createElement("div", { className: "other-editorial" },
                React.createElement("p", { className: "other-kicker" }, "\u0421\u0410\u0419\u0422\u042B \u00B7 \u0411\u0420\u0415\u041D\u0414\u042B \u00B7 \u0418\u0414\u0415\u0418"),
                React.createElement("h1", { className: "other-story-title" },
                    "\u041D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u0430\u0439\u0442\u044B.",
                    React.createElement("em", null,
                        "\u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0435",
                        React.createElement("br", null),
                        "\u0438\u0441\u0442\u043E\u0440\u0438\u0438.")),
                React.createElement("p", { className: "other-specialty" },
                    "\u0412\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
                    React.createElement("br", null),
                    "\u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0445 \u0441\u0430\u0439\u0442\u043E\u0432"),
                React.createElement("p", { className: "other-description" }, "\u0421\u043E\u0437\u0434\u0430\u044E \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u0441\u0430\u0439\u0442\u044B \u0438 \u0431\u043E\u0442\u043E\u0432 \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u2014 \u0447\u0442\u043E\u0431\u044B \u0432\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0431\u044B\u043B\u043E \u043F\u0440\u043E\u0449\u0435 \u0443\u0437\u043D\u0430\u0442\u044C \u043E \u0432\u0430\u0441, \u0437\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441 \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443."),
                !decorative && React.createElement("div", { className: "other-actions" },
                    React.createElement("a", { className: "other-primary", href: "#project" },
                        "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u044B ",
                        React.createElement("span", null, "\u2197")),
                    React.createElement("a", { className: "other-secondary", href: "#contact" },
                        "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0441\u0430\u0439\u0442 ",
                        React.createElement("span", null, "\u2197"))),
                React.createElement("p", { className: "other-values" },
                    "\u042D\u0421\u0422\u0415\u0422\u0418\u041A\u0410 ",
                    React.createElement("span", null, "\u00B7"),
                    " \u0421\u0422\u0420\u0410\u0422\u0415\u0413\u0418\u042F ",
                    React.createElement("span", null, "\u00B7"),
                    " \u0414\u0415\u0422\u0410\u041B\u0418 ",
                    React.createElement("span", null, "\u00B7"),
                    " \u0420\u0415\u0417\u0423\u041B\u042C\u0422\u0410\u0422"))),
        !decorative && React.createElement(SideInvitation, null));
}
function ProjectImage({ project }) { const [failed, setFailed] = useState(false); return React.createElement("div", { className: `work-image ${project.id}` },
    failed ? React.createElement("div", { className: "image-fallback" },
        project.name,
        React.createElement("span", null, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0438\u0436\u0435 \u2197")) : React.createElement("img", { src: project.image, alt: project.alt, loading: "lazy", decoding: "async", onError: () => setFailed(true) }),
    React.createElement("span", { className: "image-caption" },
        project.name,
        " / ",
        project.id === 'kotodomik' ? 'РАБОТАЮЩИЙ САЙТ' : 'АВТОРСКИЙ КОНЦЕПТ')); }
// Circular, manually controlled showcase. No autoplay; mobile preserves vertical scrolling.
function ProjectShowcase({ active, setActive }) {
    const stage = useRef(null);
    const touch = useRef(null);
    const swiped = useRef(false);
    useEffect(() => { const container = stage.current; const card = container?.querySelector('.is-active'); if (!container || !card)
        return; const measure = () => { container.style.height = (card.offsetHeight + 95) + 'px'; }; const observer = new ResizeObserver(measure); observer.observe(card); measure(); return () => observer.disconnect(); }, [active]);
    const select = (index) => {
        const focused = document.activeElement;
        if (focused instanceof HTMLElement && stage.current?.contains(focused) && focused.closest('.showcase-card'))
            stage.current.focus({ preventScroll: true });
        setActive((index + projects.length) % projects.length);
    };
    useEffect(() => {
        const onHash = () => { const index = projects.findIndex(p => location.hash === '#work-' + p.id); if (index >= 0)
            setActive(index); };
        window.addEventListener('hashchange', onHash);
        return () => window.removeEventListener('hashchange', onHash);
    }, []);
    const key = (event) => {
        const next = event.key === 'ArrowRight' ? active + 1 : event.key === 'ArrowLeft' ? active - 1 : event.key === 'Home' ? 0 : event.key === 'End' ? projects.length - 1 : null;
        if (next !== null) {
            event.preventDefault();
            select(next);
        }
    };
    return React.createElement("section", { id: "project", className: "project-showcase wave-host", "aria-labelledby": "showcase-title", "aria-roledescription": "\u043A\u0430\u0440\u0443\u0441\u0435\u043B\u044C" },
        React.createElement(AmbientWaves, null),
        React.createElement("div", { className: "showcase-rule" },
            React.createElement("span", null, "\u0418\u0417\u0411\u0420\u0410\u041D\u041D\u042B\u0415 \u0420\u0410\u0411\u041E\u0422\u042B"),
            React.createElement("span", null, "\u041A\u041B\u0418\u0415\u041D\u0422\u0421\u041A\u0418\u0415 \u041F\u0420\u041E\u0415\u041A\u0422\u042B / \u0410\u0412\u0422\u041E\u0420\u0421\u041A\u0418\u0415 \u041A\u041E\u041D\u0426\u0415\u041F\u0422\u042B")),
        React.createElement("div", { className: "showcase-heading" },
            React.createElement("h2", { id: "showcase-title" },
                "\u0420\u0430\u0437\u043D\u044B\u0435 \u043C\u0438\u0440\u044B.",
                React.createElement("br", null),
                React.createElement("em", null, "\u041C\u043E\u0439 \u043F\u043E\u0447\u0435\u0440\u043A.")),
            React.createElement("p", { className: "hand-note showcase-signature" },
                "\u0421\u0430\u0439\u0442\u044B \u0441 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043E\u043C",
                React.createElement("br", null),
                "\u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u0438\u0434\u0435\u0438\u2026")),
        React.createElement("div", { className: "showcase-stage", ref: stage, tabIndex: 0, onKeyDown: key, "aria-label": "\u041F\u0440\u043E\u0435\u043A\u0442\u044B: \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0432\u043B\u0435\u0432\u043E \u0438 \u0432\u043F\u0440\u0430\u0432\u043E", onTouchStart: e => { swiped.current = false; touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }, onTouchCancel: () => { touch.current = null; }, onTouchEnd: e => { const start = touch.current; touch.current = null; if (!start)
                return; const dx = e.changedTouches[0].clientX - start.x; const dy = e.changedTouches[0].clientY - start.y; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
                swiped.current = true;
                select(active + (dx < 0 ? 1 : -1));
            } }, onClickCapture: e => { if (swiped.current) {
                e.preventDefault();
                e.stopPropagation();
                swiped.current = false;
            } } },
            React.createElement("div", { className: "showcase-halo", "aria-hidden": "true" }),
            projects.map((p, i) => {
                let distance = (i - active + projects.length) % projects.length;
                if (distance > projects.length / 2)
                    distance -= projects.length;
                const current = distance === 0;
                const hidden = Math.abs(distance) > 2;
                return React.createElement("article", { id: 'work-' + p.id, key: p.id, className: 'showcase-card' + (current ? ' is-active' : ''), "data-distance": distance, "aria-hidden": hidden || undefined, role: "group", "aria-roledescription": "\u0441\u043B\u0430\u0439\u0434", "aria-label": p.name + ' — ' + (i + 1) + ' из ' + projects.length, style: { '--card-offset': distance, '--card-depth': Math.abs(distance) } },
                    React.createElement("div", { "aria-hidden": !current },
                        React.createElement(ProjectImage, { project: p }),
                        React.createElement("div", { className: "showcase-copy" },
                            React.createElement("div", { className: "showcase-meta" },
                                React.createElement("span", null, p.category),
                                React.createElement("span", null,
                                    String(i + 1).padStart(2, '0'),
                                    " / ",
                                    String(projects.length).padStart(2, '0'))),
                            React.createElement("h3", null, p.name),
                            React.createElement("p", null, p.headline),
                            React.createElement("div", { className: "showcase-links" },
                                React.createElement("a", { href: '#case-' + p.id, tabIndex: current ? 0 : -1 },
                                    "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435 ",
                                    React.createElement("span", null, "\u2197")),
                                React.createElement("a", { href: p.url, target: "_blank", rel: "noopener noreferrer", tabIndex: current ? 0 : -1 },
                                    p.id === 'kotodomik' ? 'Открыть сайт' : 'Открыть демо',
                                    " ",
                                    React.createElement("span", null, "\u2197"),
                                    React.createElement("span", { className: "sr-only" },
                                        " \u2014 ",
                                        p.name,
                                        ", \u043D\u043E\u0432\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430"))))),
                    !current && !hidden && React.createElement("button", { className: "showcase-select", onClick: () => select(i), "aria-label": 'Выбрать проект ' + p.name },
                        React.createElement("span", null,
                            p.name,
                            React.createElement("b", { "aria-hidden": "true" }, "\u2197"))));
            })),
        React.createElement("div", { className: "showcase-controls" },
            React.createElement("button", { onClick: () => select(active - 1), "aria-label": "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442" }, "\u2190"),
            React.createElement("div", { className: "showcase-pagination", "aria-label": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442" }, projects.map((p, i) => React.createElement("button", { key: p.id, "aria-label": p.name, "aria-current": i === active ? 'true' : undefined, onClick: () => select(i) },
                React.createElement("span", null)))),
            React.createElement("button", { onClick: () => select(active + 1), "aria-label": "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442" }, "\u2192")),
        React.createElement("p", { className: "showcase-status", "aria-live": "polite", "aria-atomic": "true" },
            String(active + 1).padStart(2, '0'),
            " / ",
            String(projects.length).padStart(2, '0'),
            " ",
            React.createElement("span", null, "\u2014"),
            " ",
            projects[active].name),
        React.createElement("p", { className: "showcase-note" },
            "\u041A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u044B. \u0414\u0438\u0437\u0430\u0439\u043D \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043A\u043E\u0434\u043E\u043C. ",
            React.createElement("span", null, "\u041B\u0438\u0441\u0442\u0430\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0438\u0440.")));
}
function ProjectSection() {
    const { reality } = useReality();
    const [active, setActive] = useState(() => Math.max(0, projects.findIndex(p => location.hash === '#work-' + p.id)));
    if (reality === 'other')
        return React.createElement(ProjectShowcase, { active: active, setActive: setActive });
    return React.createElement("section", { id: "project", className: "surface-projects" },
        React.createElement("div", { className: "block-heading" },
            React.createElement("h2", null, "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
            React.createElement("p", { className: "hand-note" },
                "\u0421\u0430\u0439\u0442\u044B \u0441 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043E\u043C.",
                React.createElement("br", null),
                "\u0414\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 \u0438\u0441\u0442\u043E\u0440\u0438\u0439."),
            React.createElement("span", { className: "section-count" },
                "01 \u2014 ",
                String(projects.length).padStart(2, '0'))),
        React.createElement("div", { className: "surface-project-grid" }, projects.map((p, i) => React.createElement("article", { id: 'work-' + p.id, key: p.id },
            React.createElement("a", { className: "surface-project-cover", href: '#case-' + p.id, "aria-label": 'О проекте ' + p.name },
                React.createElement(ProjectImage, { project: p }),
                React.createElement("span", null, p.name)),
            React.createElement("p", { className: "surface-project-type" }, p.category),
            React.createElement("h3", null, p.name),
            React.createElement("p", { className: "surface-project-summary" }, p.headline),
            React.createElement("a", { className: "surface-project-open", href: '#case-' + p.id, "aria-label": 'О проекте ' + p.name }, "\u2197")))));
}
function Services() { const { reality } = useReality(); return React.createElement("section", { id: "services", className: "content-section services-section wave-host" },
    React.createElement(AmbientWaves, null),
    React.createElement("div", { className: "block-heading" },
        React.createElement("h2", null, "\u0423\u0441\u043B\u0443\u0433\u0438 \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"),
        React.createElement("p", { className: "hand-note" },
            "\u041F\u0440\u043E\u0434\u0443\u043C\u0430\u043D\u043E.",
            React.createElement("br", null),
            "\u041F\u043E\u043D\u044F\u0442\u043D\u043E. \u0421 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435\u043C \u043A \u0434\u0435\u0442\u0430\u043B\u044F\u043C."),
        React.createElement("p", { className: "section-description" },
            "\u041F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0434 \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0430\u0447\u0443 \u2014",
            React.createElement("br", null),
            "\u043E\u0442 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0434\u043E \u0446\u0435\u043B\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430.")),
    React.createElement("div", { className: "services-grid" }, services.map(service => React.createElement("article", { className: "service-card", key: service.id },
        React.createElement("img", { src: reality === 'other' ? ART.atelier : ART.surface, style: { objectPosition: service.imagePosition }, alt: "", loading: "lazy" }),
        React.createElement("div", null,
            React.createElement("h3", null, service.title),
            React.createElement("p", { className: "service-price" }, service.priceConfirmed && service.price !== null ? 'от ' + service.price.toLocaleString('ru-RU') + ' ₽' : 'Стоимость — после брифа'),
            React.createElement("p", null, service.description),
            React.createElement("a", { href: "#contact", onClick: () => window.dispatchEvent(new CustomEvent('choose-service', { detail: service.title })), "aria-label": 'Обсудить услугу: ' + service.title },
                "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C ",
                React.createElement("span", null, "\u2197")))))),
    React.createElement("p", { className: "price-note" }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0437\u0430\u0434\u0430\u0447, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u041F\u043E\u0441\u043B\u0435 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0433\u043E \u0431\u0440\u0438\u0444\u0430 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u044E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441 \u043E\u0431\u044A\u0451\u043C\u043E\u043C \u0440\u0430\u0431\u043E\u0442 \u0438 \u0441\u0440\u043E\u043A\u0430\u043C\u0438.")); }
function Process() { const section = useRef(null); const [entered, setEntered] = useState(false); useEffect(() => { if (!section.current)
    return; if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setEntered(true);
    return;
} const observer = new IntersectionObserver(entries => { if (entries[0].isIntersecting) {
    setEntered(true);
    observer.disconnect();
} }, { threshold: .12 }); observer.observe(section.current); return () => observer.disconnect(); }, []); return React.createElement("section", { ref: section, "data-entered": entered, id: "process", className: "content-section process-section wave-host" },
    React.createElement(AmbientWaves, null),
    React.createElement("div", { className: "block-heading" },
        React.createElement("h2", null, "\u041A\u0430\u043A \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u044E"),
        React.createElement("p", { className: "section-description" },
            "\u041F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441.",
            React.createElement("br", null),
            "\u041E\u0442 \u043F\u0435\u0440\u0432\u043E\u0439 \u0438\u0434\u0435\u0438 \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430.")),
    React.createElement("ol", { className: "process-grid" }, workSteps.map(([name, text], i) => React.createElement("li", { key: name },
        React.createElement("div", { className: "step-mark" },
            React.createElement("span", null,
                "0",
                i + 1),
            React.createElement("i", { "aria-hidden": "true" }, ['◌', '⊞', '✎', '▱', '↗'][i])),
        React.createElement("h3", null, name),
        React.createElement("p", null, text))))); }
function About() { const { reality } = useReality(); const portrait = reality === 'other' ? ART.aboutPortrait : portfolio.portrait; return React.createElement("section", { id: "about", className: "about-section wave-host" },
    React.createElement(AmbientWaves, null),
    React.createElement("div", { className: "portrait-place" }, portrait ? React.createElement("img", { src: portrait, alt: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0425\u043C\u0435\u043B\u0451\u0432\u0430", loading: "lazy", decoding: "async" }) : React.createElement(React.Fragment, null,
        React.createElement("span", { className: "portrait-monogram", "aria-hidden": "true" }, "\u0410\u0425"),
        React.createElement("p", null,
            "\u0417\u0434\u0435\u0441\u044C \u0431\u0443\u0434\u0435\u0442",
            React.createElement("br", null),
            "\u043C\u043E\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F"))),
    React.createElement("div", { className: "about-copy" },
        React.createElement("span", { className: "small-label" }, "\u0410\u0412\u0422\u041E\u0420 \u042D\u0422\u041E\u0413\u041E \u041F\u0420\u041E\u0421\u0422\u0420\u0410\u041D\u0421\u0422\u0412\u0410"),
        React.createElement("h2", null, "\u041E\u0431\u043E \u043C\u043D\u0435"),
        React.createElement("p", null, "\u041F\u0440\u0438\u0432\u0435\u0442! \u042F \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0425\u043C\u0435\u043B\u0451\u0432\u0430 \u2014 \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440. \u0421\u043E\u0437\u0434\u0430\u044E \u0441\u0430\u0439\u0442\u044B \u0441 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043E\u043C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435\u043C \u043A \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0443: \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0440\u0430\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u0440\u0430\u0437 \u0441\u043E\u0447\u0435\u0442\u0430\u043B\u0441\u044F \u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0439 \u0438 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E\u043C."),
        React.createElement("a", { href: "#about-me", className: "solid-link" },
            "\u0411\u043E\u043B\u044C\u0448\u0435 \u043E\u0431\u043E \u043C\u043D\u0435 ",
            React.createElement("span", null, "\u2192"))),
    React.createElement("div", { className: "about-art", "aria-hidden": "true" },
        React.createElement("img", { src: reality === 'other' ? ART.aboutStudio : ART.surface, alt: "", loading: "lazy" }),
        reality === 'surface' && React.createElement("div", null,
            "\u0425\u041E\u0420\u041E\u0428\u0418\u0415",
            React.createElement("br", null),
            "\u0421\u0410\u0419\u0422\u042B",
            React.createElement("br", null),
            "\u041D\u0410\u0427\u0418\u041D\u0410\u042E\u0422\u0421\u042F",
            React.createElement("br", null),
            "\u0421 \u0412\u0410\u0428\u0415\u0419 \u0418\u0414\u0415\u0418",
            React.createElement("span", null, "\u2661")))); }
function Faq() { return React.createElement("section", { id: "faq", className: "content-section faq-section wave-host" },
    React.createElement(AmbientWaves, null),
    React.createElement("div", { className: "block-heading" },
        React.createElement("h2", null, "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"),
        React.createElement("p", { className: "hand-note" }, "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043E \u0432\u0430\u0436\u043D\u043E\u043C.")),
    React.createElement("div", { className: "faq-grid" }, faqItems.map(([question, answer]) => React.createElement("details", { key: question },
        React.createElement("summary", null,
            question,
            React.createElement("span", { "aria-hidden": "true" }, "+")),
        React.createElement("p", null, answer))))); }
function ProjectCase({ project }) {
    const live = project.id === 'kotodomik';
    return React.createElement("article", { className: "case-page" },
        React.createElement("a", { className: "secondary-link", href: '#work-' + project.id }, "\u2190 \u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
        React.createElement("div", { className: "case-kicker" }, project.category),
        React.createElement("h1", { id: "case-title", tabIndex: -1 }, project.name),
        React.createElement("p", { className: "case-lead" }, project.description),
        React.createElement("div", { className: "case-facts" },
            React.createElement("div", null,
                React.createElement("span", null, "\u0410\u0412\u0422\u041E\u0420"),
                "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0425\u043C\u0435\u043B\u0451\u0432\u0430"),
            React.createElement("div", null,
                React.createElement("span", null, "\u0424\u041E\u0420\u041C\u0410\u0422"),
                live ? 'Реализованный заказ · разработка кодом' : 'Авторский концепт · дизайн и разработка'),
            React.createElement("div", null,
                React.createElement("span", null, "\u0421\u0422\u0410\u0422\u0423\u0421"),
                live ? 'Опубликован и используется приютом' : 'Доступен для просмотра')),
        React.createElement(ProjectImage, { project: project }),
        React.createElement("section", { className: "case-chapter" },
            React.createElement("span", null, "01 / \u041E \u041F\u0420\u041E\u0415\u041A\u0422\u0415"),
            React.createElement("div", null,
                React.createElement("h2", null, live ? 'Помочь тем, кто помогает котикам.' : project.headline),
                React.createElement("p", null, live ? 'Сайт создан для владелицы домашнего приюта «Котодомик» в Москве. Задача — рассказать о приюте и сделать способы помощи доступными в одном месте.' : 'Проект создан как самостоятельное предложение для бизнеса в этой сфере: показать, каким может быть его сайт. Я продумала идею, структуру и визуальный стиль и реализовала сайт кодом.'),
                live && React.createElement("p", null, "\u042F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0430 \u0441\u0430\u0439\u0442 \u043A\u043E\u0434\u043E\u043C \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u0430 \u0435\u0433\u043E \u0432\u043B\u0430\u0434\u0435\u043B\u0438\u0446\u0435. \u0421\u0435\u0439\u0447\u0430\u0441 \u043E\u043D \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u0438 \u0441\u043B\u0443\u0436\u0438\u0442 \u043F\u0440\u0438\u044E\u0442\u0443."))),
        React.createElement("section", { className: "case-chapter" },
            React.createElement("span", null, "02 / \u0421\u041E\u0414\u0415\u0420\u0416\u0410\u041D\u0418\u0415"),
            React.createElement("div", null,
                React.createElement("h2", null, live ? 'От знакомства — к помощи.' : 'Что можно посмотреть'),
                live ? React.createElement("ul", { className: "case-flow" },
                    React.createElement("li", null, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u0440\u0438\u044E\u0442\u0430 \u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u043A\u043E\u0442\u0438\u043A\u043E\u0432."),
                    React.createElement("li", null, "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 Telegram: \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438 \u043F\u043E\u0438\u0441\u043A \u0441\u0435\u043C\u044C\u0438."),
                    React.createElement("li", null, "\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043F\u0440\u0438\u044E\u0442: \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u0447\u0435\u0440\u0435\u0437 \u0421\u0411\u041F \u0438 QR-\u043A\u043E\u0434.")) : React.createElement("ul", { className: "case-flow" }, project.details.split(' / ').map(detail => React.createElement("li", { key: detail }, detail))),
                React.createElement("a", { className: "text-link", href: project.url, target: "_blank", rel: "noopener noreferrer" },
                    live ? 'Открыть работающий сайт' : 'Открыть демо',
                    " \u2197"),
                !live && React.createElement("p", { className: "case-note" }, "\u041F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u2014 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0430\u044F \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u043E\u0433\u043E \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0430."))),
        React.createElement("div", { className: "case-end" },
            React.createElement("a", { href: '#work-' + project.id }, "\u2190 \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C"),
            React.createElement("a", { href: "#contact" }, "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442 \u2197")));
}
function NocturneCase() { return React.createElement("article", { className: "case-page" },
    React.createElement("a", { className: "secondary-link", href: "#work-nocturne" }, "\u2190 \u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
    React.createElement("div", { className: "case-kicker" }, "01 / NOCTURNE / \u041A\u041E\u041D\u0426\u0415\u041F\u0422\u0423\u0410\u041B\u042C\u041D\u042B\u0419 \u041F\u0420\u041E\u0415\u041A\u0422"),
    React.createElement("h1", { id: "case-title", tabIndex: -1 },
        "\u041D\u043E\u0447\u044C \u043A\u0430\u043A",
        React.createElement("br", null),
        React.createElement("em", null, "\u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u044F\u0437\u044B\u043A.")),
    React.createElement("p", { className: "case-lead" }, "NOCTURNE \u2014 \u043A\u043E\u043D\u0446\u0435\u043F\u0442 \u0441\u0430\u0439\u0442\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043B\u0438\u043D\u0438\u0438 Night Bloom Biotech. \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u0446\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0435 \u043E\u0431\u0440\u0430\u0437\u044B \u0438 \u043D\u043E\u0447\u043D\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u0441\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u0435\u0434\u0438\u043D\u0443\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0443\u0445\u043E\u0434\u0430."),
    React.createElement("div", { className: "case-facts" },
        React.createElement("div", null,
            React.createElement("span", null, "\u041D\u0410\u041F\u0420\u0410\u0412\u041B\u0415\u041D\u0418\u0415"),
            "Beauty \u00B7 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430"),
        React.createElement("div", null,
            React.createElement("span", null, "\u0410\u0412\u0422\u041E\u0420"),
            "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0425\u043C\u0435\u043B\u0451\u0432\u0430"),
        React.createElement("div", null,
            React.createElement("span", null, "\u0424\u041E\u0420\u041C\u0410\u0422"),
            "\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u0446\u0435\u043F\u0442 \u00B7 \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430")),
    React.createElement(ProjectImage, { project: projects[0] }),
    React.createElement("section", { className: "case-chapter" },
        React.createElement("span", null, "01 / \u0417\u0410\u0414\u0410\u0427\u0410 \u041A\u041E\u041D\u0426\u0415\u041F\u0426\u0418\u0418"),
        React.createElement("div", null,
            React.createElement("h2", null,
                "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442.",
                React.createElement("br", null),
                "\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435."),
            React.createElement("p", null, "\u0412 \u0446\u0435\u043D\u0442\u0440\u0435 \u0441\u0430\u0439\u0442\u0430 \u2014 \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E \u0441 \u043B\u0438\u043D\u0435\u0439\u043A\u043E\u0439 \u043D\u043E\u0447\u043D\u043E\u0433\u043E \u0443\u0445\u043E\u0434\u0430: \u043E\u0442 \u043E\u0431\u0449\u0435\u0433\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0434\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438\u0445 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F. \u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u043E\u0434\u0430\u0447\u0430 \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0441 \u043D\u043E\u0447\u043D\u044B\u043C \u0446\u0432\u0435\u0442\u0435\u043D\u0438\u0435\u043C."),
            React.createElement("p", null, "\u042F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0434\u0443\u043C\u0430\u043B\u0430 \u0438\u0434\u0435\u044E, \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C NOCTURNE \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043B\u0430 \u0441\u0430\u0439\u0442 \u043A\u043E\u0434\u043E\u043C. \u041A\u043E\u043D\u0446\u0435\u043F\u0442 \u0441\u043E\u0437\u0434\u0430\u043D \u043A\u0430\u043A \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438."))),
    React.createElement("div", { className: "case-image-wide" },
        React.createElement("img", { src: "./assets/nocturne-detail.webp", loading: "lazy", decoding: "async", alt: "\u0421\u0438\u0440\u0435\u043D\u044C \u043D\u0430 \u0442\u0451\u043C\u043D\u043E\u043C \u0444\u043E\u043D\u0435 \u2014 \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0439 \u043E\u0431\u0440\u0430\u0437 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430 NOCTURNE" }),
        React.createElement("p", null, "\u0426\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u043E\u0431\u0440\u0430\u0437 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0434\u0435\u043C\u043E.")),
    React.createElement("section", { className: "case-chapter" },
        React.createElement("span", null, "02 / \u0412\u0418\u0417\u0423\u0410\u041B\u042C\u041D\u042B\u0415 \u0420\u0415\u0428\u0415\u041D\u0418\u042F"),
        React.createElement("div", null,
            React.createElement("h2", null,
                "\u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442 \u0432\u043C\u0435\u0441\u0442\u043E",
                React.createElement("br", null),
                "\u043B\u0438\u0448\u043D\u0435\u0433\u043E \u0434\u0435\u043A\u043E\u0440\u0430."),
            React.createElement("div", { className: "case-decisions" },
                React.createElement("div", null,
                    React.createElement("h3", null, "\u041D\u043E\u0447\u043D\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430"),
                    React.createElement("p", null, "\u041F\u043E\u0447\u0442\u0438 \u0447\u0451\u0440\u043D\u044B\u0439 \u0444\u043E\u043D \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438; \u0441\u0438\u0440\u0435\u043D\u0435\u0432\u044B\u0435 \u0430\u043A\u0446\u0435\u043D\u0442\u044B \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u044E\u0442 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441 \u0446\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u043C\u0438 \u043E\u0431\u0440\u0430\u0437\u0430\u043C\u0438.")),
                React.createElement("div", null,
                    React.createElement("h3", null, "\u0420\u0435\u0434\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430"),
                    React.createElement("p", null, "\u041A\u0440\u0443\u043F\u043D\u0430\u044F \u0430\u043D\u0442\u0438\u043A\u0432\u0430 \u0438 \u043A\u0443\u0440\u0441\u0438\u0432 \u0437\u0430\u0434\u0430\u044E\u0442 \u043C\u044F\u0433\u043A\u0438\u0439 \u0440\u0438\u0442\u043C. \u041D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u043E\u0442\u0434\u0435\u043B\u044F\u044E\u0442 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044E \u043E\u0442 \u044D\u043C\u043E\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430.")),
                React.createElement("div", null,
                    React.createElement("h3", null, "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F"),
                    React.createElement("p", null, "\u041A\u0440\u0443\u043F\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043B\u0438\u043D\u0435\u0439\u043A\u0438 \u0447\u0435\u0440\u0435\u0434\u0443\u044E\u0442\u0441\u044F \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F\u043C\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u0441\u043E\u0441\u0442\u0430\u0432\u0430 \u0438 \u0440\u0438\u0442\u0443\u0430\u043B\u0430, \u043C\u0435\u043D\u044F\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431 \u043F\u043E\u0432\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F."))))),
    React.createElement("section", { className: "case-chapter" },
        React.createElement("span", null, "03 / \u0421\u0422\u0420\u0423\u041A\u0422\u0423\u0420\u0410 \u0418 \u0414\u0415\u041C\u041E"),
        React.createElement("div", null,
            React.createElement("h2", null,
                "\u041E\u0442 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u044B",
                React.createElement("br", null),
                "\u043A \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u0443 \u0441 \u043B\u0438\u043D\u0435\u0439\u043A\u043E\u0439."),
            React.createElement("ol", { className: "case-flow" },
                React.createElement("li", null, "\u041F\u0435\u0440\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D: \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0438 \u0432\u0445\u043E\u0434 \u0432 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044E."),
                React.createElement("li", null, "\u041B\u0438\u043D\u0435\u0439\u043A\u0430: \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E \u0441 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u043C\u0438 \u0438 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u0430\u043C\u0438."),
                React.createElement("li", null, "\u0414\u0435\u0442\u0430\u043B\u0438: \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E, \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0438 \u0440\u0438\u0442\u0443\u0430\u043B."),
                React.createElement("li", null, "\u0424\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D: \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0430\u0431\u043E\u0440\u0430.")),
            React.createElement("a", { className: "text-link", href: projects[0].url, target: "_blank", rel: "noopener noreferrer" }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0436\u0438\u0432\u043E\u0435 \u0434\u0435\u043C\u043E \u2197"),
            React.createElement("p", { className: "case-note" }, "\u0414\u0435\u043C\u043E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443. \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0432\u043D\u0443\u0442\u0440\u0438 \u043D\u0435\u0433\u043E \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438 \u044D\u0442\u043E\u0433\u043E \u043A\u0435\u0439\u0441\u0430."))),
    React.createElement("div", { className: "case-end" },
        React.createElement("a", { href: "#work-nocturne" }, "\u2190 \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C"),
        React.createElement("a", { href: "https://t.me/AlexandraHmeleva", target: "_blank", rel: "noopener noreferrer" }, "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432\u0430\u0448 \u0441\u0430\u0439\u0442 \u2197"))); }
/** Shared edge ribbons: decorative, static, and independent of section height. */
function AmbientWaves({ hero = false }) {
    const svg = useRef(null);
    useEffect(() => {
        const el = svg.current;
        if (!el || hero)
            return;
        let visible = false;
        const sync = () => { el.dataset.active = String(visible && !document.hidden); };
        const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); });
        observer.observe(el);
        document.addEventListener('visibilitychange', sync);
        return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); };
    }, [hero]);
    const id = React.useId().replace(/:/g, '');
    const edges = [
        'M-90 -60 C240 70 -120 190 68 330 C155 390 218 430 172 510 C115 600 20 580 -60 650',
        'M1490 -60 C1200 70 1500 170 1360 285 C1260 365 1440 430 1490 620',
        'M-80 570 C110 430 225 468 400 555 C610 662 800 448 1050 535 C1240 604 1360 480 1520 540',
        'M-80 590 C250 622 300 430 535 530 C720 608 920 644 1130 548 C1280 480 1410 530 1510 615'
    ];
    return React.createElement("svg", { ref: svg, className: "ambient-waves", viewBox: "0 0 1440 600", preserveAspectRatio: "none", "aria-hidden": "true", focusable: "false" },
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: id + 'veil', x1: "0", y1: "0", x2: ".8", y2: "1" },
                React.createElement("stop", { stopColor: "#7794c9", stopOpacity: "0" }),
                React.createElement("stop", { offset: ".28", stopColor: "#8d9bcc", stopOpacity: ".04" }),
                React.createElement("stop", { offset: ".47", stopColor: "#a7a3d9", stopOpacity: ".24" }),
                React.createElement("stop", { offset: ".51", stopColor: "#e5c7e4", stopOpacity: ".36" }),
                React.createElement("stop", { offset: ".55", stopColor: "#847fab", stopOpacity: ".06" }),
                React.createElement("stop", { offset: ".82", stopColor: "#a27caa", stopOpacity: ".2" }),
                React.createElement("stop", { offset: "1", stopColor: "#b9a6d7", stopOpacity: "0" })),
            React.createElement("linearGradient", { id: id + 'edge' },
                React.createElement("stop", { stopColor: "#93add9", stopOpacity: ".05" }),
                React.createElement("stop", { offset: ".22", stopColor: "#aca3d6", stopOpacity: ".5" }),
                React.createElement("stop", { offset: ".39", stopColor: "#f5d0c9", stopOpacity: ".9" }),
                React.createElement("stop", { offset: ".46", stopColor: "#baa9d2", stopOpacity: ".3" }),
                React.createElement("stop", { offset: ".7", stopColor: "#9f9fd5", stopOpacity: ".12" }),
                React.createElement("stop", { offset: ".86", stopColor: "#e9bccf", stopOpacity: ".65" }),
                React.createElement("stop", { offset: "1", stopColor: "#91b5ce", stopOpacity: "0" })),
            React.createElement("radialGradient", { id: id + 'glint' },
                React.createElement("stop", { stopColor: "#fff0dc", stopOpacity: ".9" }),
                React.createElement("stop", { offset: ".08", stopColor: "#ffdcbe", stopOpacity: ".7" }),
                React.createElement("stop", { offset: ".25", stopColor: "#eeb7b8", stopOpacity: ".22" }),
                React.createElement("stop", { offset: "1", stopColor: "#d9a0c2", stopOpacity: "0" }))),
        React.createElement("g", { className: "hero-ribbon-depth", fill: 'url(#' + id + 'veil)', stroke: 'url(#' + id + 'edge)', strokeWidth: ".5" },
            React.createElement("path", { d: "M-80 505 C145 430 270 605 510 564 S955 465 1180 564 S1400 545 1500 490 C1260 650 1100 510 940 533 S620 657 420 590 S90 488 -80 580Z" }),
            React.createElement("path", { d: "M1460 -40 C1250 140 1430 240 1380 366 C1320 480 1460 505 1510 640 C1415 450 1230 465 1320 310 S1290 100 1460 -40Z" })),
        React.createElement("g", { fill: 'url(#' + id + 'veil)' },
            React.createElement("path", { d: edges[0] + ' C185 670 295 505 160 414 C-25 285 140 180 25 85 C-15 45 -30 0 -90 -60Z' }),
            React.createElement("path", { d: edges[1] + ' C1280 490 1305 405 1405 310 C1550 160 1310 95 1490 -60Z' }),
            React.createElement("path", { d: edges[2] + ' L1500 600 C1290 505 1230 670 1020 566 C800 475 640 700 380 585 C185 510 70 490 -80 635Z' }),
            React.createElement("path", { d: edges[3] + ' C1320 570 1235 525 1110 590 C870 705 690 650 515 558 C320 475 250 680 -80 620Z' })),
        React.createElement("g", { fill: "none", stroke: 'url(#' + id + 'edge)' }, edges.map((d, i) => React.createElement(React.Fragment, { key: i },
            React.createElement("path", { d: d, strokeWidth: "5", opacity: ".07", vectorEffect: "non-scaling-stroke" }),
            React.createElement("path", { d: d, strokeWidth: ".8", vectorEffect: "non-scaling-stroke" })))),
        React.createElement("g", { className: "wave-glints", fill: 'url(#' + id + 'glint)' },
            React.createElement("ellipse", { cx: "177", cy: "505", rx: "88", ry: "27", transform: "rotate(-28 177 505)" }),
            React.createElement("ellipse", { cx: "1060", cy: "539", rx: "100", ry: "22", transform: "rotate(9 1060 539)" })),
        React.createElement("g", { className: "hero-light-points" },
            React.createElement("g", { fill: 'url(#' + id + 'glint)' },
                React.createElement("ellipse", { cx: "177", cy: "505", rx: "130", ry: "55" }),
                React.createElement("ellipse", { cx: "1195", cy: "565", rx: "120", ry: "44" })),
            React.createElement("g", { fill: "#f2d3bb" }, [[160, 498, 1.2], [196, 513, .8], [218, 490, .7], [1152, 559, 1], [1196, 566, 1.5], [1234, 550, .7], [1382, 270, .9], [1397, 290, .6]].map(([x, y, r], i) => React.createElement("circle", { key: i, cx: x, cy: y, r: r })))));
}
function SocialIcon({ type }) {
    if (type === 'behance')
        return React.createElement("span", { className: "behance-mark", "aria-hidden": "true" }, "B\u0113");
    return React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false" }, type === 'telegram' ? React.createElement(React.Fragment, null,
        React.createElement("path", { d: "m21 3-4 18-6-5-4 3 1-6L3 11Z" }),
        React.createElement("path", { d: "m8 13 9-6-6 9" })) : type === 'email' ? React.createElement(React.Fragment, null,
        React.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
        React.createElement("path", { d: "m4 7 8 6 8-6" })) : React.createElement(React.Fragment, null,
        React.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
        React.createElement("circle", { cx: "12", cy: "12", r: "4" }),
        React.createElement("circle", { cx: "17.5", cy: "6.5", r: ".7", fill: "currentColor", stroke: "none" })));
}
function Contact() {
    const [form, setForm] = useState({ name: '', contact: '', message: '', service: '' });
    const [status, setStatus] = useState('idle');
    useEffect(() => { const select = (event) => { const value = event.detail; if (services.some(s => s.title === value)) {
        setForm(f => ({ ...f, service: value }));
        setStatus('idle');
    } }; window.addEventListener('choose-service', select); return () => window.removeEventListener('choose-service', select); }, []);
    const change = (event) => { event.target.setCustomValidity(''); const { name, value } = event.target; setForm(previous => ({ ...previous, [name]: value })); setStatus('idle'); };
    const submit = (event) => {
        const element = event.currentTarget;
        for (const field of ['name', 'contact', 'message']) {
            const input = element.elements.namedItem(field);
            if (!input.value.trim()) {
                event.preventDefault();
                input.setCustomValidity('Пожалуйста, заполните это поле.');
                input.reportValidity();
                return;
            }
        }
        const contact = element.elements.namedItem('contact');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact.trim()) && !/^@?[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(form.contact.trim()) && !/^https:\/\/t\.me\/[a-zA-Z][a-zA-Z0-9_]{4,31}\/?$/.test(form.contact.trim())) {
            event.preventDefault();
            contact.setCustomValidity('Введите email или Telegram, например @username.');
            contact.reportValidity();
            return;
        }
        // Let the browser submit to the provider. Only its response can confirm acceptance.
        setStatus('opened');
    };
    return React.createElement(React.Fragment, null,
        React.createElement("section", { id: "contact", className: "contact-section wave-host" },
            React.createElement(AmbientWaves, null),
            React.createElement("div", { className: "contact-intro" },
                React.createElement("h2", null,
                    "\u041E\u0431\u0441\u0443\u0434\u0438\u043C",
                    React.createElement("br", null),
                    React.createElement("em", null, "\u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442?")),
                React.createElement("p", null, "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0441\u0432\u043E\u0435\u0439 \u0438\u0434\u0435\u0435, \u0430 \u044F \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0443 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433. \u041D\u0430\u0447\u043D\u0451\u043C \u0441 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430 \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u0432\u0430\u0436\u043D\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u0430\u043C.")),
            portfolio.formEndpoint ? React.createElement("form", { action: portfolio.formEndpoint, method: "POST", target: "_blank", rel: "noopener noreferrer", onSubmit: submit, className: "inquiry-form" },
                React.createElement("input", { type: "hidden", name: "_url", value: window.location.origin + window.location.pathname + '#contact' }),
                React.createElement("input", { type: "hidden", name: "_subject", value: "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430 \u2014 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u044B \u0425\u043C\u0435\u043B\u0451\u0432\u043E\u0439" }),
                React.createElement("input", { type: "hidden", name: "_template", value: "table" }),
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact.trim()) && React.createElement("input", { type: "hidden", name: "email", value: form.contact.trim() }),
                React.createElement("input", { type: "text", name: "_honey", className: "form-honeypot", tabIndex: -1, autoComplete: "off", "aria-hidden": "true" }),
                React.createElement("div", { className: "form-row" },
                    React.createElement("label", null,
                        "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                        React.createElement("input", { name: "name", autoComplete: "name", value: form.name, onChange: change, required: true, maxLength: 100, placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F" })),
                    React.createElement("label", null,
                        "Email \u0438\u043B\u0438 Telegram",
                        React.createElement("input", { name: "contact", autoComplete: "email", value: form.contact, onChange: change, required: true, maxLength: 150, placeholder: "\u0414\u043B\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438" }))),
                React.createElement("label", { className: "service-select-label" },
                    "\u0424\u043E\u0440\u043C\u0430\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
                    React.createElement("select", { name: "service", value: form.service, onChange: change },
                        React.createElement("option", { value: "" }, "\u041F\u043E\u043A\u0430 \u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043B\u0441\u044F / \u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043B\u0430\u0441\u044C"),
                        services.map(s => React.createElement("option", { key: s.id }, s.title)),
                        React.createElement("option", null, "\u0411\u043E\u0442 \u0434\u043B\u044F Telegram \u0438\u043B\u0438 MAX"),
                        React.createElement("option", null, "\u0424\u043E\u0440\u043C\u044B \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435"))),
                React.createElement("label", null,
                    "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435",
                    React.createElement("textarea", { name: "message", value: form.message, onChange: change, required: true, maxLength: 4000, rows: 4, placeholder: "\u0418\u0434\u0435\u044F, \u0437\u0430\u0434\u0430\u0447\u0430, \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u2026" })),
                React.createElement("div", { className: "form-actions" },
                    React.createElement("button", { className: "solid-link", type: "submit" },
                        "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ",
                        React.createElement("span", { "aria-hidden": "true" }, "\u2197")),
                    React.createElement("p", null, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u043E\u0442\u043A\u0440\u043E\u044E\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435.")),
                React.createElement("p", { className: "form-delivery-note" },
                    "\u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 ",
                    React.createElement("a", { href: "https://formsubmit.co/", target: "_blank", rel: "noopener noreferrer" }, "FormSubmit"),
                    " \u043D\u0430 \u043C\u043E\u044E \u043F\u043E\u0447\u0442\u0443. \u041C\u043E\u0436\u043D\u043E \u0442\u0430\u043A\u0436\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0432 Telegram \u0438\u043B\u0438 \u043F\u043E email."),
                React.createElement("div", { className: "form-status", role: "status", "aria-live": "polite" }, status === 'opened' && 'Завершите отправку во вкладке FormSubmit и дождитесь подтверждения. Если вкладка не открылась или возникла ошибка, ваши данные сохранены здесь.')) : React.createElement("div", { className: "contact-start" },
                React.createElement("h3", null, "\u041D\u0430\u0447\u043D\u0451\u043C \u0441 \u0432\u0430\u0448\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0438"),
                React.createElement("p", null, "\u041D\u0443\u0436\u0435\u043D \u0441\u0430\u0439\u0442, \u0431\u043E\u0442 \u0434\u043B\u044F Telegram \u0438\u043B\u0438 MAX? \u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435, \u0447\u0435\u043C \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0432\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441 \u0438 \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C."),
                React.createElement("ul", null,
                    React.createElement("li", null, "\u041A\u0430\u043A\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u0434\u043E\u043B\u0436\u0435\u043D \u0440\u0435\u0448\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442"),
                    React.createElement("li", null, "\u0415\u0441\u0442\u044C \u043B\u0438 \u043F\u0440\u0438\u043C\u0435\u0440\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u0430\u043C \u043D\u0440\u0430\u0432\u044F\u0442\u0441\u044F"),
                    React.createElement("li", null, "\u041A\u0430\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438 \u0438 \u0431\u044E\u0434\u0436\u0435\u0442 \u0432\u044B \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0435")),
                React.createElement("p", null, "\u041C\u043E\u0436\u043D\u043E \u0431\u0435\u0437 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u2014 \u043D\u0430\u0447\u043D\u0451\u043C \u0441 \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F."),
                React.createElement("a", { className: "solid-link", href: portfolio.telegram, target: "_blank", rel: "noopener noreferrer" },
                    "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram ",
                    React.createElement("span", { "aria-hidden": "true" }, "\u2197"))),
            React.createElement("aside", { className: "direct-contact" },
                React.createElement("p", null, "\u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043C\u043D\u0435 \u0441\u0440\u0430\u0437\u0443:"),
                React.createElement("a", { href: portfolio.telegram, target: "_blank", rel: "noopener noreferrer" },
                    React.createElement("span", { className: "contact-symbol" },
                        React.createElement(SocialIcon, { type: "telegram" })),
                    React.createElement("span", null,
                        "Telegram",
                        React.createElement("small", null, "@AlexandraHmeleva"))),
                portfolio.email && React.createElement("a", { href: 'mailto:' + portfolio.email },
                    React.createElement("span", { className: "contact-symbol" },
                        React.createElement(SocialIcon, { type: "email" })),
                    React.createElement("span", null,
                        "Email",
                        React.createElement("small", null, portfolio.email))),
                React.createElement("p", { className: "hand-note contact-signature" },
                    "\u0411\u0443\u0434\u0443 \u0440\u0430\u0434\u0430",
                    React.createElement("br", null),
                    "\u0432\u0430\u0448\u0435\u043C\u0443 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044E ",
                    React.createElement("span", { "aria-label": "\u0441 \u043B\u044E\u0431\u043E\u0432\u044C\u044E" }, "\u2661")))),
        React.createElement("footer", { className: "site-footer" },
            React.createElement("a", { className: "footer-brand", href: "#home" },
                "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0425\u043C\u0435\u043B\u0451\u0432\u0430",
                React.createElement("span", null, "\u0412\u0415\u0411-\u0414\u0418\u0417\u0410\u0419\u041D\u0415\u0420")),
            React.createElement("nav", { "aria-label": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u043F\u043E\u0434\u0432\u0430\u043B\u0435" }, navItems.map(([href, label]) => React.createElement("a", { key: href, href: href }, label))),
            React.createElement("div", { className: "footer-socials", role: "group", "aria-label": "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438" }, [{ type: 'telegram', label: 'Telegram', url: portfolio.telegram }, { type: 'instagram', label: 'Instagram', url: portfolio.instagram }, { type: 'behance', label: 'Behance', url: portfolio.behance }].map(social => React.createElement("a", { key: social.type, href: social.url, target: "_blank", rel: "noopener noreferrer", "aria-label": social.label + ' — новая вкладка', title: social.label },
                React.createElement(SocialIcon, { type: social.type })))),
            React.createElement("span", null,
                "\u00A9 ",
                new Date().getFullYear(),
                " \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0425\u043C\u0435\u043B\u0451\u0432\u0430"),
            React.createElement("a", { href: "#home", "aria-label": "\u041D\u0430\u0432\u0435\u0440\u0445" }, "\u2191")));
}
function App() {
    const [page, setPage] = useState(() => location.hash === '#about-me' ? 'about' : projects.some(p => location.hash === '#case-' + p.id) ? location.hash.slice(1) : 'home');
    const currentProject = projects.find(p => page === 'case-' + p.id);
    const caseOpen = !!currentProject, aboutOpen = page === 'about';
    useEffect(() => { const onHash = () => { const hash = location.hash; if (hash === '#about-me')
        setPage('about');
    else if (projects.some(p => hash === '#case-' + p.id))
        setPage(hash.slice(1));
    else if (hash !== '#contact' && !hash.startsWith('#author-'))
        setPage('home'); }; window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []);
    useEffect(() => { document.title = aboutOpen ? 'Обо мне — Александра Хмелёва' : caseOpen ? currentProject.name + ' — проект Александры Хмелёвой' : 'Александра Хмелёва — THE OTHER SIDE'; requestAnimationFrame(() => { if (page !== 'home') {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.getElementById(aboutOpen ? 'author-title' : 'case-title')?.focus({ preventScroll: true });
    }
    else if (location.hash)
        document.getElementById(location.hash.slice(1))?.scrollIntoView(); }); }, [page]);
    const [reality, setReality] = useState('surface');
    const [outgoing, setOutgoing] = useState(null);
    const overlay = useRef(null);
    const animations = useRef([]);
    const toggleRef = useRef(null);
    const [announcement, setAnnouncement] = useState('');
    const sectionRestore = useRef(null);
    const [flashing, setFlashing] = useState(false);
    const pendingReality = useRef(null);
    const finish = () => { if (pendingReality.current) {
        setReality(pendingReality.current);
        setAnnouncement(pendingReality.current === 'other' ? 'Открыта реальность Other Side' : 'Открыта реальность Surface');
        pendingReality.current = null;
    } setFlashing(false); animations.current.forEach(a => a.cancel()); animations.current = []; setOutgoing(null); };
    const toggle = () => { if (outgoing || flashing || pendingReality.current)
        return; const next = reality === 'surface' ? 'other' : 'surface'; const anchored = document.getElementById(location.hash.slice(1)); const anchorVisible = anchored && anchored.getBoundingClientRect().top < window.innerHeight * .8 && anchored.getBoundingClientRect().bottom > 100; const reading = anchorVisible ? anchored : Array.from(document.querySelectorAll('#home,#project,#services,#process,#about,#faq,#contact,#about-me,#author-inspiration,#author-business,#author-journey,#author-tools,#author-finale')).find(el => el.getBoundingClientRect().top <= 160 && el.getBoundingClientRect().bottom > 160); const offHero = aboutOpen || (!!reading && reading.id !== 'home'); if (offHero && reading)
        sectionRestore.current = { id: reading.id, offset: aboutOpen ? -reading.getBoundingClientRect().top : Math.max(-120, Math.min(140, -reading.getBoundingClientRect().top)) }; const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches; if (ENABLE_RIFT_PREFLASH && !reduced && !caseOpen && !offHero && RIFT_STYLE === 'red') {
        pendingReality.current = next;
        setFlashing(true);
        return;
    } setReality(next); setAnnouncement(next === 'other' ? 'Открыта реальность Other Side' : 'Открыта реальность Surface'); if (!reduced && !caseOpen && !offHero)
        setOutgoing(reality); };
    useEffect(() => { if (!flashing)
        return; const timer = window.setTimeout(() => { const next = pendingReality.current; if (!next)
        return; pendingReality.current = null; setFlashing(false); setOutgoing(reality); setReality(next); setAnnouncement(next === 'other' ? 'Открыта реальность Other Side' : 'Открыта реальность Surface'); }, 180); const key = (e) => { if (e.key === 'Escape') {
        finish();
        toggleRef.current?.querySelector('button')?.focus();
    } }; const media = matchMedia('(prefers-reduced-motion: reduce)'); const reduced = () => { if (media.matches)
        finish(); }; window.addEventListener('keydown', key); media.addEventListener('change', reduced); return () => { clearTimeout(timer); window.removeEventListener('keydown', key); media.removeEventListener('change', reduced); }; }, [flashing]);
    useEffect(() => { document.documentElement.dataset.reality = reality; if (sectionRestore.current) {
        const restore = sectionRestore.current;
        sectionRestore.current = null;
        requestAnimationFrame(() => { const target = document.getElementById(restore.id); if (target)
            window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top + restore.offset, behavior: 'instant' }); });
    } }, [reality]);
    useEffect(() => { if (!outgoing || !overlay.current)
        return; const layers = overlay.current.querySelectorAll('.shard'); const duration = 1250; animations.current = Array.from(layers).map((el, i) => el.animate([{ transform: 'translateX(0) rotateY(0deg)', opacity: 1 }, { transform: `translateX(${i === 0 ? '-' : '+'}112%) rotateY(${i === 0 ? '-' : '+'}12deg)`, opacity: 0.2 }], { duration, easing: 'cubic-bezier(.65,0,.2,1)', fill: 'forwards' })); const timer = window.setTimeout(finish, duration); const onKey = (e) => { if (e.key === 'Escape') {
        finish();
        toggleRef.current?.querySelector('button')?.focus();
    } }; const media = matchMedia('(prefers-reduced-motion: reduce)'); const onReduced = () => { if (media.matches)
        finish(); }; media.addEventListener('change', onReduced); window.addEventListener('keydown', onKey); return () => { clearTimeout(timer); window.removeEventListener('keydown', onKey); media.removeEventListener('change', onReduced); animations.current.forEach(a => a.cancel()); }; }, [outgoing]);
    return React.createElement(RealityContext.Provider, { value: { reality, busy: !!outgoing || flashing, flashing, toggle, finish } },
        React.createElement("a", { className: "skip-link", href: "#project" }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0440\u043E\u0435\u043A\u0442\u0443"),
        React.createElement("div", { className: "header-wrap", ref: toggleRef },
            React.createElement(SiteHeader, null)),
        React.createElement("main", null, aboutOpen ? React.createElement(AboutPage, { dark: reality === 'other', portrait: reality === 'other' ? ART.darkAuthor : ART.lightAuthor, scene: ART.inspiration, Waves: AmbientWaves }) : caseOpen ? (currentProject.id === 'nocturne' ? React.createElement(NocturneCase, null) : React.createElement(ProjectCase, { project: currentProject })) : React.createElement(React.Fragment, null,
            React.createElement("section", { id: "home", className: `hero${outgoing ? ' is-revealing' : ''}` },
                React.createElement(Hero, { mode: reality }),
                outgoing && React.createElement("div", { className: "transition", ref: overlay, "aria-hidden": "true" }, [0, 1].map(i => React.createElement("div", { key: i, className: `shard shard-${i}` },
                    React.createElement(Hero, { mode: outgoing, decorative: true })))),
                (outgoing || flashing) && React.createElement("button", { className: "skip-animation", onClick: () => { finish(); toggleRef.current?.querySelector('button')?.focus(); } }, "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044E \u2197")),
            React.createElement(ProjectSection, null),
            React.createElement(Services, null),
            React.createElement(Process, null),
            React.createElement(About, null),
            React.createElement(Faq, null))),
        React.createElement(Contact, null),
        React.createElement("span", { className: "sr-only", role: "status" }, announcement));
}
createRoot(document.getElementById('root')).render(React.createElement(App, null));
