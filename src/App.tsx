import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "routeConstants";
import TransitionNav from "TransitionNav";
import "./App.css";

type TransitionType = "slide" | "fade-shrink" | "spin" | "shrink";

const transitionTypes = [
    { label: "Slide", value: "slide" },
    { label: "Fade shrink", value: "fade-shrink" },
    { label: "Spin", value: "spin" },
    { label: "Shrink", value: "shrink" },
];

function Example() {
    const [transitionType, setTransitionType] =
        useState<TransitionType>("fade-shrink");

    return (
        <>
            <div className="header">
                {routes.map((route) => (
                    <NavLink
                        key={route.path}
                        to={route.path}
                        className={({ isActive }) =>
                            clsx("link", { active: isActive })
                        }
                        end
                    >
                        {route.name}
                    </NavLink>
                ))}
                <div className="ml-auto flex gap-3">
                    <span>Select transition type: </span>
                    {transitionTypes.map((type) => (
                        <label className="cursor-pointer" key={type.value}>
                            <input
                                type="radio"
                                name="transition-type"
                                onChange={(event) => {
                                    setTransitionType(
                                        event.target.value as TransitionType
                                    );
                                }}
                                checked={transitionType === type.value}
                                value={type.value}
                            />{" "}
                            {type.label}
                        </label>
                    ))}
                </div>
            </div>
            <div className="container">
                <TransitionNav transitionClassName={transitionType} />
            </div>
        </>
    );
}

export default Example;
