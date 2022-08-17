import React from "react";
import Master from "components/learn-tab/Master";
import PowerTab from "./PowerTab";

export default () =>{
    return(
        <>
        <Master id="win" com={<PowerTab/>} title="آموزش ویندوز" describe="10 ساعت اموزش" />
        <Master id="word" com={<PowerTab/>} title="آموزش ورد" describe="10 ساعت اموزش" />
        <Master id="power" com={<PowerTab/>} title="آموزش پاورپوینت" describe="10 ساعت اموزش" />
        <Master id="exel" com={<PowerTab/>} title="آموزش اکسل" describe="10 ساعت اموزش" />

        </>
    );
}