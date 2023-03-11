import React, { FC, useRef } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { routes } from "routeConstants";
import "./transitionNav.css";

interface TransitionNavProps {
    transitionClassName: string;
}

const TransitionNav: FC<TransitionNavProps> = ({ transitionClassName }) => {
    const location = useLocation();
    const { nodeRef } =
        routes.find((route) => route.path === location.pathname) ?? {};
    const currentOutlet = useOutlet();

    return (
        <SwitchTransition>
            <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={300}
                classNames={transitionClassName}
                unmountOnExit
            >
                {(state) => (
                    <div ref={nodeRef} className={transitionClassName}>
                        {currentOutlet}
                    </div>
                )}
            </CSSTransition>
        </SwitchTransition>
    );
};

export default TransitionNav;
