import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import navigations from './navigations.json';

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div>
            <div className="list-group">
                <Link to="/tuiter/home" className="list-group-item wd-navigation-item">
                    <i className="bi bi-twitter wd-color-tuit"></i></Link>
                <Link to="/" className="list-group-item wd-navigation-item">Labs</Link>
                {
                    navigations.map(navigation => {
                        return (
                            <Link to={`/tuiter/${navigation.path}`}
                                  className={`list-group-item wd-navigation-item ${active===`${navigation.path}`?'active':''}`}>
                                <i className={`${navigation.icon} ${active===`${navigation.path}`?'wd-bold-icon':''}`}></i>
                                <span className="ps-3 d-none d-xl-inline">{navigation.label}</span>
                            </Link>
                        );
                    })
                }
            </div>
            <Link to="/tuiter" className="d-grid mt-2 btn btn-primary rounded-pill wd-tuit-button">
                <span className="fw-bold">Tuit</span>
            </Link>
        </div>
    );
};

export default NavigationSidebar;