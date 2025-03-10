import React from 'react';
import HazardHero from '../components/HazardHero';
import HazardBody from '../components/HazardBody';
import ShelterTimeline from '../components/Sheltering';


const Hazard = () => {
    return (
        <div>
        <HazardHero/>
        <HazardBody/>
        <ShelterTimeline/>
        </div>
    );
};

export default Hazard;
