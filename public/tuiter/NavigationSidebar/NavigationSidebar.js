import navigations from "./navigations.js";

const NavigationSidebar = (currentPage) => {
    return(`
        <div class="list-group">
            <a class="list-group-item wd-navigation-item" href="/">
                <i class="fab fa-twitter"></i></a>
            ${
                navigations.map(navigation => {
                    return(`
                        <a href=${navigation.href} class="list-group-item wd-align-center wd-navigation-item
                            ${currentPage===navigation.label ? 'active' : ''}">
                            <i class="${navigation.icon} position-absolute"></i>
                            <span class="wd-navigation-text d-none d-xl-inline">${navigation.label}</span></a>
                    `)
                }).join('')
            }
        </div>
        <div class="d-grid mt-2">
            <a href="tuit.html" class="btn btn-primary btn-block rounded-pill">Tuit</a>
        </div>
    `);
}
export default NavigationSidebar;