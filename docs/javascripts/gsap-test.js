const character = document.querySelector(".hotpot-character");

if (character) {
    gsap.to(character, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}