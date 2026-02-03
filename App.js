import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {ClockController} from "./components/ClockController";

export default function App() {
    return (
        <>
            <ClockController />
            <StatusBar style="auto" />
        </>
    );
}
