import Platform
    from "./core/Platform";
import HomeFilter
    from "./core/services/home/HomeFilter";


(async function fetchHome() {
    const platform = new Platform('https://nextgentheadless.instaleap.io/api/v3', 'D1');

    const homeFilter = new HomeFilter()
        .byStore('11808')
        .byPlatform('WEB')
        .byScreenSize('large');


    const home = await platform.homeService.home(homeFilter);

})();

