let searchcount = 0;
let searchnocount = 0;
const searchbar = document.getElementById("searchbar");
const searchresults = document.getElementById('searchresults');
const introtext = document.getElementById('introtext');

searchbar.addEventListener("submit", function(e) {
    e.preventDefault();
    searchresults.innerHTML = "";
    searchcount = 0;
    searchnocount = 0;
    let searchactual = document.getElementById("searchactual").value;
    if (searchactual.length < 4){
        introtext.innerHTML = "Query isn't long enough.";
    }
    if (searchactual.length < 4){
        return;
    }
    data = randomize(data);
    data.forEach(item => {
        let emotionclass = "";
        let leaningclass = "";
        let importantfind = "";
        const title = item["title"];
        const link = item["link"];
        let date = item["date"];
        date = date.split(" ");
        date = date[0];
        const newdate = new Date(date);
        let dateactual = newdate.toUTCString();
        dateactual = dateactual.split(" ");
        dateactual = `${dateactual[0]} ${dateactual[1]} ${dateactual[2]} ${dateactual[3]}`;
        const titlesentimentoverall = item["titlesentimentoverall"];
        const source = item["Source"];
        const topic = item["Topic"];
        const leaning = item["Leaning"];
        if (title.toLowerCase().includes(searchactual.toLowerCase())){
            searchcount++;
            if (searchcount > 10){
                return;
            }
            if (titlesentimentoverall.includes("Positive")){
                emotionclass = "positivebutton";
            } else if (titlesentimentoverall.includes("Negative")){
                emotionclass = "negativebutton";
            } else if (titlesentimentoverall.includes("Neutral")){
                emotionclass = "neutralbutton";
            }
            if (leaning.includes("Conservative")){
                leaningclass = "conservativeidmod";
            } else if (leaning.includes("Liberal")){
                leaningclass = "liberalidmod";
            } else if (leaning.includes("Neutral")){
                leaningclass = "neutralidmod";
            } else if (leaning.includes("Academic")){
                leaningclass = "unknownidmod";
            } else if (leaning.includes("Unknown")){
                leaningclass = "unknownidmod";
            }
            var outof = (searchnocount/62899)*100;
            searchresults.innerHTML += `<div class='newscardview'><div class="evaluation ${emotionclass}"><span id="evaluation${searchcount}">${titlesentimentoverall}</span></div><div class='post'><div class='post-head newscardtitle resizeallfeature'><span class="pubdate">${dateactual}</span><h2 class='resizeallfeature textoverpicture'>${title}</h2><a name="${source}" class="regular_btn2">${source}</a><a id="topic${searchcount}" class="regular_btn2 removeallfeature">${topic}</a><a id="leaning${searchcount}" class="regular_btn2 removeallfeature ${leaningclass}">${leaning}</a><a href='${link}' target='_blank' class='readmore_btn'>Read more</a>`;
            if (outof < 2.5){
                importantfind = "We were able to produce these results with less than 2.5% of our dataset. This search keyword is particularly important. Great find!";
            } else if (outof > 15 && outof < 90){
                importantfind = "This search keyword isn't mentioned a lot in our dataset.";
            } else if (outof > 90){
                importantfind = "This search keyword isn't mentioned a lot in our dataset but the rarity of this result leads us to believe you've stumbled onto something. We just can't tell you what.";
            }
            introtext.innerHTML = `Here's a random sample from your search.<br><br><div id="factsandfiguresnotice" class="factsandfiguresnotice">We found these results after going through ${searchnocount} of 62899 data points, which is ~${outof.toFixed(2)}% of all available data in our dataset. ${importantfind}</div>`;
        } else {
            searchnocount++;
        }
    });
})

/*
##COMMENT STARTS##
*Programmatic counting of dataset variable counts were removed to increase page-load speeds.
*The counts were hardcoded into their respective inputs.
*This code was left as a code comment for re-use in the future.

let septembercount = 0;
let octobercount = 0;
let novembercount = 0;
let decembercount = 0;
let januarycount = 0;
let februarycount = 0;
let marchcount = 0;
let aprilcount = 0;
let maycount = 0;
let junecount = 0;
let julycount = 0;
let augustcount = 0;

let septemberpositivecount = 0;
let septembernegativecount = 0;
let septemberneutralcount = 0;

let octoberpositivecount = 0;
let octobernegativecount = 0;
let octoberneutralcount = 0;

let novemberpositivecount = 0;
let novembernegativecount = 0;
let novemberneutralcount = 0;

let decemberpositivecount = 0;
let decembernegativecount = 0;
let decemberneutralcount = 0;

let januarypositivecount = 0;
let januarynegativecount = 0;
let januaryneutralcount = 0;

let februarypositivecount = 0;
let februarynegativecount = 0;
let februaryneutralcount = 0;

let marchpositivecount = 0;
let marchnegativecount = 0;
let marchneutralcount = 0;

let aprilpositivecount = 0;
let aprilnegativecount = 0;
let aprilneutralcount = 0;

let maypositivecount = 0;
let maynegativecount = 0;
let mayneutralcount = 0;

let junepositivecount = 0;
let junenegativecount = 0;
let juneneutralcount = 0;

let julypositivecount = 0;
let julynegativecount = 0;
let julyneutralcount = 0;

let augustpositivecount = 0;
let augustnegativecount = 0;
let augustneutralcount = 0;

let overallpositivecount = 0;
let overallnegativecount = 0;
let overallneutral = 0;

data.forEach(item => {
    const date = item["date"];
    const titlesentimentoverall = item["titlesentimentoverall"];
    const newdate = new Date(date);
    const month = newdate.getMonth();
    calculateMonthlyTotals(month, titlesentimentoverall);
});


var total = overallpositivecount+overallnegativecount+overallneutral;
var positive = (overallpositivecount/total)*100;
document.getElementById("positive").innerText = `${positive.toFixed(0)}%`;
var negative = (overallnegativecount/total)*100;
document.getElementById("negative").innerText = `${negative.toFixed(0)}%`;
var neutral = (overallneutral/total)*100;
document.getElementById("neutral").innerText = `${neutral.toFixed(0)}%`;

function calculateMonthlyTotals(month, titlesentimentoverall){
    if (month === 8){
        septembercount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            septemberpositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            septembernegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            septemberneutralcount++;
        }
    } else if (month === 9){
        octobercount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            octoberpositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            octobernegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            octoberneutralcount++;
        }
    } else if (month === 10){
        novembercount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            novemberpositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            novembernegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            novemberneutralcount++;
        }
    } else if (month === 11){
        decembercount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            decemberpositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            decembernegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            decemberneutralcount++;
        }
    } else if (month === 0){
        januarycount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            januarypositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            januarynegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            januaryneutralcount++;
        }
    } else if (month === 1){
        februarycount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            februarypositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            februarynegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            februaryneutralcount++;
        }
    } else if (month === 2){
        marchcount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            marchpositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            marchnegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            marchneutralcount++;
        }
    } else if (month === 3){
        aprilcount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            aprilpositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            aprilnegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            aprilneutralcount++;
        }
    } else if (month === 4){
        maycount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            maypositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            maynegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            mayneutralcount++;
        }
    } else if (month === 5){
        junecount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            junepositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            junenegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            juneneutralcount++;
        }
    } else if (month === 6){
        julycount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            julypositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            julynegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            julyneutralcount++;
        }
    } else if (month === 7){
        augustcount++;
        if (titlesentimentoverall.includes("Positive")){
            overallpositivecount++;
            augustpositivecount++;
        } else if (titlesentimentoverall.includes("Negative")){
            overallnegativecount++;
            augustnegativecount++;
        } else if (titlesentimentoverall.includes("Neutral")){
            overallneutral++;
            augustneutralcount++;
        }
    }
}

##COMMENT ENDS##
*/

//Polar chart - chart1
var chart1options = {
    colors: ['#3c9d4e', '#e4bf58', '#4174c9'],
    series: [22358, 28817, 11724],
    chart: {
        type: 'polarArea',
    },
    stroke: {
        colors: ['#fff']
    },
    fill: {
        opacity: 1
    },
    labels: ['Positive','Negative','Neutral'
    ],
    legend: {
        position: 'bottom',
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart1"), chart1options);
chart.render();

//Mixed chart - chart2
var chart2options = {
    colors: ['#000', '#e4bf58', '#3c9d4e', '#4174c9'],
    series: [{
        name: 'Total',
        type: 'area',
        data: [3123, 5946, 6015, 5786, 6249, 5019, 5436, 5733, 5615, 5172, 5547, 3258]
    }, {
        name: 'Negative',
        type: 'area',
        data: [1296, 2775, 2627, 2524, 2925, 2356, 2500, 2673, 2648, 2371, 2587, 1535]
    } , {
        name: 'Positive',
        type: 'area',
        data: [1230, 2181, 2312, 2111, 2198, 1727, 1855, 1980, 1942, 1825, 1888, 1109]
    } , {
        name: 'Neutral',
        type: 'area',
        data: [597, 990, 1076, 1151, 1126, 936, 1081, 1080, 1025, 976, 1072, 614]
    }],
    chart: {
        height: 350,
        type: 'line',
        stacked: false,
    },
    title: {text: `Headlines volatility`,align: 'left',margin: 10,offsetX: 0,offsetY: 0,floating: false,style: {fontSize: '16px',fontWeight: 'bold',fontFamily: 'Poppins',color:  '#000'}},
    stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },

    fill: {
        opacity: [1, 1, 1, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['09/01/2020', '10/01/2020', '11/01/2020', '12/01/2020', '01/01/2021', '02/01/2021', '03/01/2021',
        '04/01/2021', '05/01/2021', '06/01/2021', '07/01/2021', '08/01/2021'
    ],
    markers: {
        size: 0
    },
    xaxis: {
        title: {
            text: ' ',
        },
        type: 'datetime'
    },
    yaxis: {
        title: {
            text: 'Articles',
        },
        min: 0
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " articles";
                }
                return y;

            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart2"), chart2options);
chart.render();

window.onscroll = function() {scrollFunction()};
let mybutton = document.getElementById("clearfilter");

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "inline-block";
    } else {
        mybutton.style.display = "none";
    }
}

let clearall = document.getElementById("clearall");
clearall.addEventListener("click", function(evnt){
    searchresults.innerHTML = "";
    document.getElementById('introtext').innerText = "Make another search.";
    if (document.getElementById('factsandfiguresnotice') !== null){
        document.getElementById('factsandfiguresnotice').style.display = "none";
    }
    setTimeout(scrollTop, 200);
});

let clearall2 = document.getElementById("clearall2");
clearall2.addEventListener("click", function(evnt){
    searchresults.innerHTML = "";
    document.getElementById('introtext').innerText = "Make another search.";
    if (document.getElementById('factsandfiguresnotice') !== null){
        document.getElementById('factsandfiguresnotice').style.display = "none";
    }
    setTimeout(scrollTop, 200);
});

function scrollTop(){
    window.location.replace("#top");
}

function randomize(values) {
    let index = values.length,
        randomIndex;
    while (index != 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;
        [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }
    return values;
}