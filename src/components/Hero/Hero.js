import React from 'react';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn}
 from "./HeroElements";

function Hero() {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>The Greatest Burger</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
