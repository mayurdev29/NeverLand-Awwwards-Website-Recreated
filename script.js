var cursor=document.querySelector("#cursor");
window.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
})


function initialize() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    function files(index) {
        var data = `https://neverland.agency/assets/0001.ad04d6cb.webp
    https://neverland.agency/assets/0002.cfc021f0.webp
    https://neverland.agency/assets/0003.493bb9b2.webp
    https://neverland.agency/assets/0004.519dabfd.webp
    https://neverland.agency/assets/0005.60fe97e9.webp
    https://neverland.agency/assets/0006.d0feb167.webp
    https://neverland.agency/assets/0007.9171be3a.webp
    https://neverland.agency/assets/0008.f1361a1c.webp
    https://neverland.agency/assets/0009.b22e24fe.webp
    https://neverland.agency/assets/0010.0970b07e.webp
    https://neverland.agency/assets/0011.12bceab6.webp
    https://neverland.agency/assets/0012.5d808b1b.webp
    https://neverland.agency/assets/0013.4b1f4683.webp
    https://neverland.agency/assets/0014.56a08e21.webp
    https://neverland.agency/assets/0015.f1af5917.webp
    https://neverland.agency/assets/0016.0e732b26.webp
    https://neverland.agency/assets/0017.66c4accc.webp
    https://neverland.agency/assets/0018.068ec809.webp
    https://neverland.agency/assets/0019.d85ab0ad.webp
    https://neverland.agency/assets/0020.61e31687.webp
    https://neverland.agency/assets/0021.1932447e.webp
    https://neverland.agency/assets/0022.c0d1542f.webp
    https://neverland.agency/assets/0023.850339b4.webp
    https://neverland.agency/assets/0024.70195dfc.webp
    https://neverland.agency/assets/0025.be569fcc.webp
    https://neverland.agency/assets/0026.55b07224.webp
    https://neverland.agency/assets/0027.19042d23.webp
    https://neverland.agency/assets/0028.e7a75feb.webp
    https://neverland.agency/assets/0029.03014227.webp
    https://neverland.agency/assets/0030.545ed344.webp
    https://neverland.agency/assets/0031.d7eb4aa1.webp
    https://neverland.agency/assets/0032.e63436b2.webp
    https://neverland.agency/assets/0033.3558d158.webp
    https://neverland.agency/assets/0034.5b161b7d.webp
    https://neverland.agency/assets/0035.c2cce845.webp
    https://neverland.agency/assets/0036.2839a03b.webp
    https://neverland.agency/assets/0037.ff696000.webp
    https://neverland.agency/assets/0038.d41347be.webp
    https://neverland.agency/assets/0039.501d0f1c.webp
    https://neverland.agency/assets/0040.84da39e5.webp
    https://neverland.agency/assets/0041.c606f43d.webp
    https://neverland.agency/assets/0042.5e80f3fe.webp
    https://neverland.agency/assets/0043.6509169d.webp
    https://neverland.agency/assets/0044.ea7faa26.webp
    https://neverland.agency/assets/0045.faf589ba.webp
    https://neverland.agency/assets/0046.af9337e9.webp
    https://neverland.agency/assets/0047.1bdcf4de.webp
    https://neverland.agency/assets/0048.d54eb665.webp
    https://neverland.agency/assets/0049.96fed203.webp
    https://neverland.agency/assets/0050.4eafc916.webp
    https://neverland.agency/assets/0051.9965d190.webp
    https://neverland.agency/assets/0052.87b4fd27.webp
    https://neverland.agency/assets/0053.886f42f9.webp
    https://neverland.agency/assets/0054.9a9e4b33.webp
    https://neverland.agency/assets/0055.642be56b.webp
    https://neverland.agency/assets/0056.6488d122.webp
    https://neverland.agency/assets/0057.c67bd9b0.webp
    https://neverland.agency/assets/0058.32e45693.webp
    https://neverland.agency/assets/0059.b204e81b.webp
    https://neverland.agency/assets/0060.792cbb99.webp
    https://neverland.agency/assets/0061.48f9bc24.webp
    https://neverland.agency/assets/0062.5602428b.webp
    https://neverland.agency/assets/0063.cb5131ff.webp
    https://neverland.agency/assets/0064.c9fc4a20.webp
    https://neverland.agency/assets/0065.2fdaacfc.webp
    https://neverland.agency/assets/0066.efa90d23.webp
    https://neverland.agency/assets/0067.0d240c63.webp
    https://neverland.agency/assets/0068.c3ab0297.webp
    https://neverland.agency/assets/0069.686b653f.webp
    https://neverland.agency/assets/0070.c71b9ad7.webp
    https://neverland.agency/assets/0071.0550f569.webp
    https://neverland.agency/assets/0072.fc3fdd4b.webp
    https://neverland.agency/assets/0073.1c13b69f.webp
    https://neverland.agency/assets/0074.7665fbe9.webp
    https://neverland.agency/assets/0075.c03a7177.webp
    https://neverland.agency/assets/0076.0360f3c9.webp
    https://neverland.agency/assets/0077.d35de80b.webp
    https://neverland.agency/assets/0078.482a5002.webp
    https://neverland.agency/assets/0079.e454a32f.webp
    https://neverland.agency/assets/0080.d2257304.webp
    https://neverland.agency/assets/0081.563d2d75.webp
    https://neverland.agency/assets/0082.62d96550.webp
    https://neverland.agency/assets/0083.12f059e6.webp
    https://neverland.agency/assets/0084.3c1fa35d.webp
    https://neverland.agency/assets/0085.0bc3bad6.webp
    https://neverland.agency/assets/0086.41eca6da.webp
    https://neverland.agency/assets/0087.61c0397a.webp
    https://neverland.agency/assets/0088.244741b5.webp
    https://neverland.agency/assets/0089.9fd84ecc.webp
    https://neverland.agency/assets/0090.5b5dfe42.webp
    https://neverland.agency/assets/0091.380c6cee.webp
    https://neverland.agency/assets/0092.834627e8.webp
    https://neverland.agency/assets/0093.9ba91fc2.webp
    https://neverland.agency/assets/0094.473a7c92.webp
    https://neverland.agency/assets/0095.f8fe7382.webp
    https://neverland.agency/assets/0096.2bc22132.webp
    https://neverland.agency/assets/0097.b679e5f5.webp
    https://neverland.agency/assets/0098.f9fe1f14.webp
    https://neverland.agency/assets/0099.74c48688.webp
    https://neverland.agency/assets/0100.c97c2ef0.webp
    https://neverland.agency/assets/0101.81ebba0d.webp
    https://neverland.agency/assets/0102.765ee53a.webp
    https://neverland.agency/assets/0103.5e1beb56.webp
    https://neverland.agency/assets/0104.f3804fdf.webp
    https://neverland.agency/assets/0105.94964fc3.webp
    https://neverland.agency/assets/0106.fd552af7.webp
    https://neverland.agency/assets/0107.0a768725.webp
    https://neverland.agency/assets/0108.40ad8da8.webp
    https://neverland.agency/assets/0109.7c01a515.webp
    https://neverland.agency/assets/0110.eec16d2d.webp
    https://neverland.agency/assets/0111.39ccadc7.webp
    https://neverland.agency/assets/0112.3edab3c7.webp
    https://neverland.agency/assets/0113.51247bb9.webp
    https://neverland.agency/assets/0114.d3ee9f95.webp
    https://neverland.agency/assets/0115.30782272.webp
    https://neverland.agency/assets/0116.118b6af4.webp
    https://neverland.agency/assets/0117.844b33f5.webp
    https://neverland.agency/assets/0118.d0cc340d.webp
    https://neverland.agency/assets/0119.3449084a.webp
    https://neverland.agency/assets/0120.990c5b3b.webp
    https://neverland.agency/assets/0121.afe5a35c.webp
    https://neverland.agency/assets/0122.1eb1705b.webp
    https://neverland.agency/assets/0123.625ad83b.webp
    https://neverland.agency/assets/0124.230c2f2d.webp
    https://neverland.agency/assets/0125.c6c35744.webp
    https://neverland.agency/assets/0126.438dab1a.webp
    https://neverland.agency/assets/0127.d020d75c.webp
    https://neverland.agency/assets/0128.d97160e9.webp
    https://neverland.agency/assets/0129.ddb3d55e.webp
    https://neverland.agency/assets/0130.5a34c351.webp
    https://neverland.agency/assets/0131.2d2ff96b.webp
    https://neverland.agency/assets/0132.aaea4f7d.webp
    https://neverland.agency/assets/0133.b82664dc.webp
    https://neverland.agency/assets/0134.912d1fbe.webp
    https://neverland.agency/assets/0135.0dd5d6bb.webp
    https://neverland.agency/assets/0136.db711bfc.webp
    https://neverland.agency/assets/0137.1d3755b1.webp
    https://neverland.agency/assets/0138.154d7a39.webp
    https://neverland.agency/assets/0139.d3421241.webp
    https://neverland.agency/assets/0140.b4365085.webp
    https://neverland.agency/assets/0141.606a04fa.webp
    https://neverland.agency/assets/0142.51cb398e.webp
    https://neverland.agency/assets/0143.405c48d6.webp
    https://neverland.agency/assets/0144.f8f54931.webp
    https://neverland.agency/assets/0145.9b132333.webp
    https://neverland.agency/assets/0146.b3a2e732.webp
    https://neverland.agency/assets/0147.f9cf6ff9.webp
    https://neverland.agency/assets/0148.1250ab2d.webp
    https://neverland.agency/assets/0149.c88239d5.webp
    https://neverland.agency/assets/0150.093aba96.webp
    https://neverland.agency/assets/0151.cbfbbf59.webp
    https://neverland.agency/assets/0152.627a2249.webp
    https://neverland.agency/assets/0153.94f00001.webp
    https://neverland.agency/assets/0154.0cd59ea9.webp
    https://neverland.agency/assets/0155.c67f6e05.webp
    https://neverland.agency/assets/0156.3a8e0d03.webp
    https://neverland.agency/assets/0157.bc49bad5.webp
    https://neverland.agency/assets/0158.77d3104c.webp
    https://neverland.agency/assets/0159.07753411.webp
    https://neverland.agency/assets/0160.120e9e31.webp
    https://neverland.agency/assets/0161.f6536ad4.webp
    https://neverland.agency/assets/0162.cdd242cb.webp
    https://neverland.agency/assets/0163.d8fbf5b6.webp
    https://neverland.agency/assets/0164.26aaa32f.webp
    https://neverland.agency/assets/0165.c677c1a3.webp
    https://neverland.agency/assets/0166.bf854656.webp
    https://neverland.agency/assets/0167.f9469b38.webp
    https://neverland.agency/assets/0168.fec7024d.webp
    https://neverland.agency/assets/0169.919ec5f7.webp
    https://neverland.agency/assets/0170.7abfad2a.webp
    https://neverland.agency/assets/0171.44bc080b.webp
    https://neverland.agency/assets/0172.74351ab0.webp
    https://neverland.agency/assets/0173.f4578d66.webp
    https://neverland.agency/assets/0174.77242702.webp
    https://neverland.agency/assets/0175.a355406a.webp
    https://neverland.agency/assets/0176.1d5e5143.webp
    https://neverland.agency/assets/0177.282f3259.webp
    https://neverland.agency/assets/0178.2686b4b2.webp
    https://neverland.agency/assets/0179.b39712df.webp
    https://neverland.agency/assets/0180.baf992ce.webp`;
        return data.split("\n")[index];
    }

    const frameCount = 180;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger: "#home",
            start: "bottom bottom",
            // scroller:"#main",
            scrub: 0.5
        },
        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }


    gsap.to("#home canvas", {
        scale: 0.8,
        scrollTrigger: {
            // scroller:"#main",
            trigger: "#home",
            start: "bottom 20%",
            scrub: 0.8,
            // markers:true,
            // pin:true
        }
    })

    ScrollTrigger.create({
        // scroller:"#main",
        pin: true,
        trigger: "#home",
        start: "bottom 100%",
        // markers:true
    })


}
initialize();


// -------------------------------------------------------------------------------------------
// Overlay
function overlay() {
    var clutter;
    document.querySelectorAll("#overlay .split").forEach(function(splittext){
        clutter = "";
        splittext.textContent.split("").forEach(function(char){
            clutter += `<span>${char}</span>`;
        })
        splittext.innerHTML = clutter;
})

    gsap.to("#overlay #text span", {
        scrollTrigger: {
            trigger: "#overlay h1",
            start: "bottom 50%",
            scrub: 0.5,
            // markers: true
        },
        opacity: 0,
        stagger: 0.2,
        ease: Power3.easeInOUt
    })
    ScrollTrigger.create({
        trigger: "#overlay",
        start: "bottom 100%",
        pin: true,
        // markers:true
    })
}
overlay();

// for phone
function overlay1() {
    var clutter;
    document.querySelectorAll("#overlay1 .split").forEach(function(splittext){
        clutter = "";
        splittext.textContent.split("").forEach(function(char){
            clutter += `<span>${char}</span>`;
        })
        splittext.innerHTML = clutter;
})

    gsap.to("#overlay1 #text span", {
        scrollTrigger: {
            trigger: "#overlay1 h1",
            start: "bottom 25%",
            scrub: 0.5,
            // markers: true
        },
        opacity: 0,
        stagger: 0.2,
        ease: Power3.easeInOUt
    })
    ScrollTrigger.create({
        trigger: "#overlay1",
        start: "bottom 100%",
        pin: true,
        // markers:true
    })
}
overlay1();


//------------------------------------------------------------------------------------
// Loader

function loader(){
    document.addEventListener("readystatechange",function(){
        if(document.readyState==="complete"){
            document.querySelector("#loader").style.backgroundColor= "transparent";
            document.querySelector("#loader").style.height=0;
            document.querySelector("#loader .loader").style.scale=0;
        }
    })
}
loader();


// -----------------------------------------------------------------------------------------------
// ring
function ring(){
    gsap.to("#page1 img",{
        top:"-100%",
        scrollTrigger:{
            trigger:"#page1",
            start:"top 100%",
            end:"bottom 30%",
            scrub:2,
            // markers:true
        }
    })
}
ring();

// ------------------------------------------------------------------------------
// Nav Page
function navpage(){
    var flag=0;
    document.querySelector("#menu").addEventListener("click",function(){
        if(flag===0){
            document.querySelector("#navpage").style.height="100vh";
            document.querySelector("#menu #line1").style.transform=`rotate(-40deg) translateX(-8px)`;
            document.querySelector("#menu #line1").style.backgroundColor="black";
            document.querySelector("#menu #line2").style.transform=`rotate(40deg) translateX(-8px)`;
            document.querySelector("#menu #line2").style.backgroundColor="black";
            flag=1; 
            gsap.from("#navpage #top,#navpage #bottom",{
                y:-100,
                opacity:0,
                duration:3,
                // stagger:0.5,
            })   
        }
        else{
            document.querySelector("#navpage").style.height="0vh";
            document.querySelector("#menu #line1").style.transform=`rotate(0deg) translateX(0)`;
            document.querySelector("#menu #line1").style.backgroundColor="white";
            document.querySelector("#menu #line2").style.transform=`rotate(0deg) translateX(0)`;
            document.querySelector("#menu #line2").style.backgroundColor="white";
            flag=0;    
        }
    })
}
navpage();

gsap.to("#menu .line",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#home canvas",
        start:"bottom 10%",
        scrub:2,
        // markers:true
    },
})
gsap.to("#circle img",{
    filter:'invert(1%) contrast(50%)',
    scrollTrigger:{
        trigger:"#home canvas",
        start:"bottom 10%",
        scrub:2,
        // markers:true
    },
})




function page1() {
    var clutter;
    document.querySelectorAll(".p1h1").forEach(function(splittext){
        clutter = "";
        splittext.textContent.split("").forEach(function(char){
            clutter += `<span>${char}</span>`;
        })
        splittext.innerHTML = clutter;
})
    gsap.from("#page1 .p1h1 span", {
        scrollTrigger: {
            trigger: "#page1",
            start: "top bottom",
            end:"bottom bottom",
            scrub: 1,
            // markers: true
        },
        opacity: 0,
        stagger: 0.007,
        ease: "linear"
    })
    ScrollTrigger.create({
        trigger: "#page1",
        start: "bottom 100%",
        pin: true,
        // markers:true
    })
}
page1();




gsap.to("#page2 #right #box video",{
    scrollTrigger:{
        trigger:"#page2 #right",
        pin:true,
        // markers:true
    }
})



function page4(){
    var clutter="";
document.querySelector("#page4 h1").textContent.split("").forEach(function(char){
        clutter += `<span>${char}</span>`;
})
document.querySelector("#page4 h1").innerHTML = clutter;


gsap.from("#page4 h1 span", {
    scrollTrigger: {
        trigger: "#page4 h1",
        start: "top 70%",
        end:"top 30%",
        scrub: 0.5,
        // markers: true
    },
    opacity: 0,
    stagger: 0.2,
    ease: Power3.easeInOUt
})
ScrollTrigger.create({
    trigger: "#overlay",
    start: "bottom 100%",
    pin: true,
    // markers:true
})
}
page4();

function page5(){
    gsap.to("#page5",{
        scrollTrigger:{
            trigger:"#page5",
            pin:true,
            start:"top top",
            end:"bottom top",
            scrub:.5
        },
        scale:0.8
    })
}
page5();


