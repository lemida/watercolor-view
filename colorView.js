import React from 'react';
import {Text, View} from "react-native";


/*
* Header: colorName - str
* manufacturer - str
* brand - str
* manufacturerID (FarbID des Herstellers): integer
* owned: bool (Yes/ No)
* ofInterest: bool or str (Yes/ No/ Maybe, option 'maybe' as optional state later on) -> optional, not critical
* pigment1-n: str -> up to three/ four? -> optional idea: signify through style that less pigments are better
* staining: icon (staining, half-staining, non-staining, unknown) -> optional, since not all manufacturers give info on this
* transparency (transparent, semi-transparent, semi-opaque, opaque, unknown)
* lightfastness: str (complicated, I follow manufacturer specification for now -> different methods, maybe add a comparative view later)
*
* optional trait: colorGroup (Red, Blue, Green, Yellow etc -> must follow manufacturer spec, since it is arbitrary, see e.g. turquoise)
* navigation ideas for later: previous, next, back to list buttons/ functionality
* */

const colorView = () => {
    return(

    )
};

export default colorView
