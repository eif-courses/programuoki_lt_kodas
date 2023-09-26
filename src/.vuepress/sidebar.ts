import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/java/": [
        {
            text: "Programos konstrukcijos",
            icon: "arrow-down",
            collapsible: false,
            children: [
                "",
                "projektukurimoirankiai",
                "staticfinal" /* /foo/two.html */,
                "isimtys",
                "kolekcijos",
                "parametrizuoti",
                "anotacijosirjavadocs",
                "lambda",
                "regex",
                "kotlinjvm"
            ]
        },
        {
            text: "Karkasai",
            collapsible: false,
            icon: "arrow-down",
            children: [
                "junit",
                "gui",
                "spring",
                "restapi",
            ]
        },
        {
            text: "Projektavimo šablonai",
            collapsible: false,
            icon: "arrow-down",
            children: [
                "objektukurimo",
                "strukturinissablonas",
                "elgsenos"
            ]
        },
    ],
    "/testing/": [
        {
            text: "Automatiniai testai",
            icon: "arrow-down",
            collapsible: false,
            children: [
                "",
                "regressiontest",
                "junit",
                "irangosparuosimas",
            ]
        },
        {
            text: "Selenium įrankis",
            icon: "arrow-down",
            collapsible: false,
            children: [
                "seleniumwebdriver",
                "selokatoriai",
                "manipuliavimas",
                "stabdymas",
                "javascript",
                "pageloadingstart",
            ]
        },
        {
            text: "Pavyzdžiai",
            icon: "arrow-down",
            collapsible: false,
            children: [
                "pavyzdziai/login",
                "pavyzdziai/iframe",
                "pavyzdziai/bug",
                "pavyzdziai/seleniumide",
                "pavyzdziai/captchatestas",
                "pavyzdziai/dropdown",
            ]
        },


    ],
    "/go/": [
        {
            text: "Pagrindai",
            icon: "arrow-down",
            collapsible: false,
            children: [
                "",
                "tipai",
                "operatoriai",
                "salygos",
                "ciklai",
                "strukturos",
                "funkcijos",
                "webservisai",
            ]
        }],
    "/cpp/": [
        {
            text: "Programos konstrukcijos",
            icon: "arrow-down",
            collapsible: false,
            children: [
                "",
                "duomenutipai",
                "operatoriai",
                "salygos",
                "ciklosakiniai",
                "funkcijos",
                "klases",
            ]
        }],
});
