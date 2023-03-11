import React, { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = (props) => {
    return (
        <div>
            <h2 className="text-2xl">About</h2>
            <ul>
                <li>Naan solradhayum seiven, solladhadhayum seiven</li>
                <li>Katham katham, Mudindhadhu mudinju pochu</li>
                <li>Maghizhchi</li>
                <li>
                    Rendu kaiyum rendu kaalum pona kooda pozhachukuvan sir.
                    Ketta paiyan sir avan
                </li>
                <li>Naan polladhavanukku polladhavan da</li>
                <li>Puli, paayum puli</li>
                <li>Avasara adi ranga</li>
                <li>Indha maanikkathuku munnadi nee oru kozhandha da</li>
                <li>Naan solradha seiyven. Seiradha dhan solluven</li>
                <li>Idhu Suriya sir. Orasadheenga</li>
            </ul>
        </div>
    );
};

export default About;
