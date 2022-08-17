import React from "react";
import Suport from "components/content/Suport";
import Login from "components/content/Login";
import tw from "twin.macro";

const HeroRow = tw.div`flex flex-col lg:flex-row  items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap mt-0`;

const Tarkib = () =>{
    return(
    <HeroRow>
    <Login/>
    <Suport/>
    </HeroRow>
    );
}
export default Tarkib;