import React, { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
    return (
        <div>
            <h1 className="text-2xl">
                Mithya Vite TS, Tailwind, Easy-peasy, Sass boilerplate
            </h1>
            <a
                className="text-sapphire-100"
                href="https://github.com/mithya-team/vite-ts-template"
            >
                README
            </a>
        </div>
    );
};

export default Home;
