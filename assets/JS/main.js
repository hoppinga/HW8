window.onload = function() {
    document.getElementById("load-button").focus();
}

//only allows one button to be selected at a time (selected state moves)
var numberButtons = document.querySelectorAll("button");
let selectedButton;
numberButtons.forEach((mainButtons) => {
    mainButtons.addEventListener('click', () => {
    if (selectedButton) {
      selectedButton.style.removeProperty('color');
      selectedButton.style.removeProperty('border-color');
    }
    selectedButton = mainButtons;
    console.log("hello")
    mainButtons.style.color = '#149859';
    mainButtons.style.borderColor = '#149859';
  })
})

//BUTTON 1 CONTENT & IMAGE
let buttonOne = document.getElementById("load-button");
buttonOne.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    
    let content = document.getElementById("description-text");
    content.innerHTML = 
    "<h2 id=h2>GROUNDWORK</h2><p id=p-1>Af Klint was born in Stockholm in 1862 to a middle class family. She was the first \
    woman to attend the Royal Academy of Fine Arts in Stockholm, where she studied drawing and painting, and began creating \
    landscapes, portraits, and scientific illustrations. She also joined the Theosophical Society and developed a deepening \
    interest in spiritualism and spiritual movements, believing humans could communicate with other realms.</i>.</p>\
    <p id=p-2>Unlike most artists of her time, af Klint rarely exhibited her work and stipulated that her paintings not be \
    shown until 20 years after her death because she didn’t feel the public would understand them. Because of this, her work \
    was all but unseen until the 1980s. Once it was discovered, artists and historians were dumbfounded by the abstract, \
    futuristic, and imaginative qualities of her work that predated associated art movements. She became known as an artist \
    well ahead of her time.</p>\
    <p id=source>Source: <a href=https://www.guggenheim.org/exhibition/hilma-af-klint target=__blank>Solomon \
    R. Guggenheim Foundation</a></p>";
  
    let image = document.getElementById("images");
    image.innerHTML = 
    "<img src=assets/images/image-1.png alt=Hilma af Klint painting id=img><h3 id=image-caption>According to Moderna Museet \
    the photographer is unknown, Public domain, via Wikimedia Commons</h3>"

};


//BUTTON 2 CONTENT & IMAGE
let buttonTwo = document.getElementById("button-two");
buttonTwo.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    
    let content = document.getElementById("description-text");
    content.innerHTML = 
    "<h2 id=h2>BREAKING GROUND</h2><p id=p-1>In the 1890s, af Klint began meeting with four other women who also believed they \
    could access a higher level of consciousness, similar to a trance-like state, to communicate with spirits. At these meetings, af Klint \
    received messages from an otherworldy being that instructed her to create a temple accessed by a spiral path and to create paintings for \
    the temple which would be displayed on a circular path. In response, she created 193 works between 1906-1915 that were deeply inspired by \
    spirituality, religion, and the occult, which she referred to as <i>The Paintings for the Temple</i>.</p>\
    <p id=p-2>This is one of her earlier works from this period, in which we see an early exploration into nonobjective art and her signature \
    combination of writing, vibrant color, pattern, and symbols.</p>\
    <p id=source>Source: <a href=https://www.guggenheim.org/blogs/checklist/who-was-hilma-af-klint-at-the-guggenheim-paintings-by-an-artist-ahead-\
    of-her-time?gclid=Cj0KCQiA-rj9BRCAARIsANB_4ACVFb-eOaw5RD59P49gxAlXJEjRjNEdT7fkz0JRtqp0lw4TB5wQdR8aAgCqEALw_wcB&gclsrc=aw.ds target=__blank>Solomon \
    R. Guggenheim Foundation</a></p>";
  
    let image = document.getElementById("images");
    image.innerHTML = 
    "<img src=assets/images/image-2.png alt=Blue background and large white circle filled with multi-colored abstract shapes id=img><h3 id=image-caption>\
    “Group III, The WU/Rose Series, No. 5, Erosserien” (1907). Source: The Hilma af Klint Foundation</h3>"

};


//BUTTON 3 CONTENT & IMAGE
let buttonThree = document.getElementById("button-three");
buttonThree.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    
    let content = document.getElementById("description-text");
    content.innerHTML = 
    "<h2 id=h2>GROWING UP</h2><p id=p-1>From October to December of 1907, af Klint painted a series of ten paintings called <i>The Ten Largest</i>, each \
    of which represents a stage of life. The series unfurls in gorgeous swatches of pastels contrasted with deeper, more saturated hues, \
    geometric forms, organic plant-like shapes, spirals, ribbon-like curls, and script. The name of the series is also fairly literal, as \
    the canvases are strikingly enormous, standing nearly 10 feet by 9 feet in size.</p>\
    <p id=p-2>The painting shown here is the third in the series, representing youth. In this early abstraction, af Klint begins \
    to develop her spritually-guided body of work through the use of spirals and snails mixed with more rigid geometric shapes such as concentric \
    circles.</p>\
    <p id=source>Source: <a href=https://www.nytimes.com/2018/10/11/arts/design/hilma-af-klint-review-guggenheim.html target=_blank>The New York Times</a></p>";
    
    let image = document.getElementById("images");
    image.innerHTML = 
    "<img src=assets/images/image-3.png alt=Orange background filled with multi-colored abstract shapes id=img><h3 id=image-caption>\
    “Group IV, The Ten Largest, No. 3, Youth” (1907). Source: Hilma af Klint, Public domain, via Wikimedia Commons</h3>"

};

//BUTTON 4 CONTENT & IMAGE
let buttonFour = document.getElementById("button-four");
buttonFour.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    
    let content = document.getElementById("description-text");
    content.innerHTML = 
    "<h2 id=h2>NEW DIRECTIONS</h2><p id=p-1>According to the Guggenheim, as the canvases for <i>The Paintings for the Temple</i> \
    slowly increased in size up until <i>The Ten Largest</i>, in her next series titled <i>The Seven-Pointed Star</i>, af Klint \
    returns to a smaller scale. In her notes on these works, she writes that spirits had communicated that every \
    seven days she should paint three groups of seven paintings, until she had completed three groups.</p>\
    <p id=p-2>In this painting, we see the way she pushes her shapes to the very edge of the space, \
    creating tension and interaction between the forms and the constraints of the canvas.</p>\
    <p id=source>Source: <a href=https://www.guggenheim.org/audio/track/group-v-the-seven-pointed-star-no-1-1908-by-\
    hilma-af-klint target=_blank>Solomon R. Guggenheim Foundation</a></p>";
    
    let image = document.getElementById("images");
    image.innerHTML = 
    "<img src=assets/images/image-4.png alt=Beige background with blue, yellow and orange lines and circles id=img><h3 id=image-caption>\
    “Group V, The Seven-Pointed Star, No. 2” (1908). Source: Hilma af Klint, CC BY-SA 4.0, via Wikimedia Commons</h3>"

};


//BUTTON 5 CONTENT
let buttonFive = document.getElementById("button-five");
buttonFive.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    
    let content = document.getElementById("description-text");
    content.innerHTML = 
    "<h2 id=h2>DIVIDED</h2><p id=p-1>In the 24 paintings that make up af Klint’s series <i>The Swan</i>, we see her continue to \
    develop the geometric forms and symbols present throughout her work. We also see her dive further into abstraction \
    throughout the series, as more representational paintings of swans develop into neat concentric circles of color as \
    shown here. Also present in this series is the idea of dichotomy and polarity, as two subjects become one. We see this \
    in black and white swans on opposite sides of a canvas, as well as in this painting, split into two halves by contrasting \
    circles that are mirrored and layered to create depth and meaning.</p>\
    <p id=source>Source: <a href=https://www.guggenheim.org/audio/track/group-ix-suw-the-swan-no-1-1915-by-hilma-af-klint \
    target=_blank>Solomon R. Guggenheim Foundation</a></p>";
    
    let image = document.getElementById("images");
    image.innerHTML = 
    "<img src=assets/images/image-5.png alt=Red background with bisected circle made up of smaller circles id=img><h3 id=image-caption>\
    “Group IX/SUW, The Swan, No.17” (1915). Source: Hilma af Klint, Public domain, via Wikimedia Commons</h3>"

};

//BUTTON 6 CONTENT & IMAGE
let buttonSix = document.getElementById("button-six");
buttonSix.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    
    let content = document.getElementById("description-text");
    content.innerHTML = 
    "<h2 id=h2>SKYWARD</h2><p id=p-1>In af Klint’s series <i>The Dove</i>, consisting of fourteen paintings, she continues to explore \
    dichotomies through separating the canvas into opposing yet connected pieces that create a sense of unity. In this painting, \
    the bottom part of the canvas rendered in darker greys and browns represents the earth and earthly beings, while the upper parts \
    flooded in light represent the sky and higher beings. The spiraling vertical line running through the middle of the canvas unites \
    each piece together through color and form.</p>\
    <p id=source>Source: <a href=https://www.guggenheim.org/audio/track/group-ix-uw-the-dove-no-3-1915-by-hilma-af-klint \
    target=_blank>Solomon R. Guggenheim Foundation</a></p>";
    
    let image = document.getElementById("images");
    image.innerHTML = 
    "<img src=assets/images/image-6.png alt=Abstract multi-colored painting id=img><h3 id=image-caption>\
    “Group IX/UW No. 25, The Dove, No. 1” (1915). Source: Rhododendrites, Public domain, via Wikimedia Commons</h3>"

};

//BUTTON 7 CONTENT & IMAGE
let buttonSeven = document.getElementById("button-seven");
buttonSeven.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    
    let content = document.getElementById("description-text");
    content.innerHTML = 
    "<h2 id=h2>CULMINATION</h2><p id=p-1>Af Klint’s last group of paintings for <i>The Paintings for the Temple</i> is titled Altarpieces. According \
    to Tracey Bashkoff, who curated the Solomon R. Guggenheim Museum’s 2018-2019 exhibit of her work, this series was influenced by “Theosophy’s \
    version of evolutionary theory, in which evolution occurs in two directions, elevating from the physical to the spiritual and descending from \
    the divine to the material world.”</p>\
    <p id=p-2>She also notes that af Klint imagined these paintings would be displayed in the center of the temple. Taken together with her previous \
    work, they represent an amalgamation of her exploration of spirituality and science.</p>\
    <p id=source>Source: <a href=https://www.guggenheim.org/audio/track/group-x-altarpieces-nos-1-3-1915-by-hilma-af-klint#_ednref1 \
    target=_blank>Solomon R. Guggenheim Foundation</a></p>";
    
    let image = document.getElementById("images");
    image.innerHTML = 
    "<img src=assets/images/image-7.png alt=Black background with rainbow triangle beneath sun-like shape id=img><h3 id=image-caption>\
    “Group X, Altarpiece, No.1” (1915). Source: Rhododendrites, Public domain, via Wikimedia Commons</h3>"

};

//BUTTON 8 CONTENT & IMAGE
let buttonEight = document.getElementById("button-eight");
buttonEight.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    
    let content = document.getElementById("description-text");
    content.innerHTML = 
    "<h2 id=h2>GROUNDED</h2><p id=p-1>Af Klint created <i>The Parsifal Series</i> in 1916, which consists of 144 works divided into several groups. \
    According to the Guggenheim, the name of the series may refer to an Arthurian legend in which a prince named Parsifal goes on a quest for \
    the Holy Grail; it may also be inspired by an opera about this story by Richard Wagner. </p>\
    <p id=p-2>In this series, Klint pares down the fantastical shapes and colors of her previous works to a series of simple hues rendered on \
    paper and intermixed with subtle words and symbols.</p>\
    <p id=source>Source: <a href=https://www.guggenheim.org/audio/track/the-parsifal-series-1916-by-hilma-af-klint \
    target=_blank>Solomon R. Guggenheim Foundation</a></p>";
    
    let image = document.getElementById("images");
    image.innerHTML = 
    "<img src=assets/images/image-8.png alt=Beige background with large brown rectangle filled with spiral id=img><h3 id=image-caption>\
    “Group I, The Parsifal Series, No.1” (1916). Source: Hilma af Klint, Public domain, via Wikimedia Commons</h3>"

};

//BUTTON 9 CONTENT & IMAGE
let buttonNine = document.getElementById("button-nine");
buttonNine.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    
    let content = document.getElementById("description-text");
    content.innerHTML = 
    "<h2 id=h2>SIMULTANEITY</h2><p id=p-1>According to the Hilma af Klint Foundation, in 1920, af Klint joined the Anthroposophical Society \
    founded by Rudolf Steiner, and began making trips to Dornach, Switzerland, the center of the movement. The group sought to reconcile science \
    and spirituality by rationalizing how the two could exist simultaneously, as spirituality mirroring scientific discovery and human existence.</p>\
    <p id=p-2>As af Klint continued to study religion and spirituality, this work may have been influenced by the yin and yang symbol found in Chinese \
    Buddhism. She also continues to divide her canvas into equal, opposing sections, perhaps representing how she viewed the relationship between science \
    and spirituality.</p>\
    <p id=source>Source: <a href=https://www.hilmaafklint.se/en/about-hilma-af-klint/ \
    target=_blank>Hilma af Klint Foundation</a></p>";
    
    let image = document.getElementById("images");
    image.innerHTML = 
    "<img src=assets/images/image-9.png alt=Beige background with bisected black and white circle id=img><h3 id=image-caption>\
    “Buddhas Standpoint in the Earthly Life, No. 3a” (1920). Source: Hilma af Klint, Public domain, via Wikimedia Commons</h3>"

};

//BUTTON 10 CONTENT & IMAGE
let buttonTen = document.getElementById("button-ten");
buttonTen.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    
    let content = document.getElementById("description-text");
    content.innerHTML = 
    "<h2 id=h2>RETURN TO NATURE</h2><p id=p-1>By 1922, as her relationship to the Anthroposophical Society deepened, she began paintings abstract \
    watercolors of a very different style than her previous geometric abstract work. The watercolors she produced during this period seem like a \
    continuation of <i>The Parsifal Series</i> and her early work painting representational botanicals and scenes from nature than her more abstract, \
    mystical work in <i>The Paintings for the Temple</i>. While she had long viewed herself and her artwork as a vehicle for the messages of higher \
    beings, in this painting she relinquishes some control of her paintbrush to allow watercolors to bleed organically into each other, taking \
    on a life of their own. In this way, she explores the confines and possibilities of the natural world.</p>\
    <p id=p-2>According to Tracey Bashkoff, curator at the Guggenheim, she continued to work with watercolors and develop this technique for \
    the rest of her life. Af Klint died in 1944, at the age of 81.</p>\
    <p id=source>Source: <a href=https://www.guggenheim.org/audio/track/on-the-viewing-of-flowers-and-trees-1922-by-hilma-af-klint \
    target=_blank>Solomon R. Guggenheim Foundation</a></p>";
    
    let image = document.getElementById("images");
    image.innerHTML = 
    "<img src=assets/images/image-10.png alt=Abstract red, blue and black watercolor id=img><h3 id=image-caption>\
    “On the Viewing of Flowers and Trees, Wheat and Wormwood” (1922). Source: Hilma af Klint, Public domain, via Wikimedia Commons</h3>"

};