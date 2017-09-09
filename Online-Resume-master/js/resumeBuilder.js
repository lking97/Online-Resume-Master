var bio = {
    "name": "Lloyd King",
    "role": "Web Designer", //My biography
    "contacts": {
        "mobile": "707-631-9953",
        "email": "lking3497@gmail.com",
        "github": "lking97",
        "location": "Fairfield, CA",
    },
    "welcomeMsg": "Welcome All Kaioshins!!!! (Kaioshin is from an anime.) I am an aspiring to become a web designer. I have experience with multiple programming languages and I like to design web pages. I also love video games and anime!",
    "skills": [
        "HTML5", "CSS3", "JavaScript", "C++", "Visual Basic", "Photoshop", "Anime Connoisseur"
    ],
    "bioPic": "images/LloydKing.PNG",
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedBiopic);
$("#header").append(formattedMsg);

for (var i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkill);
}

var work = {
    "jobs": [{
            "employer": "Geek Squad", //work experience
            "title": "Consultation Agent",
            "dates": "March 26, 2017 - Present",
            "description": "A Geek Squad Consultation Agent is a brand ambassador for both the Geek Squad and Best Buy brands. As the solutions expert, the Consultation Agent manages the Geek Squad check-in and check-out experience for customers and helps them find the complete solution that works for them. They coach the sales team, building trust and explaining services and technology to help meet all customer needs. Their knowledge of services, technology and business group strategies in partnership with the sales team ensures no customer is ever left unserved or underserved."
        },
        {
            "employer": "In-N-Out Burger",
            "title": "Clean-Up Associate",
            "dates": "2016 - 2017",
            "description": "clean up entire In-N-Out resturaunt. Floors, stainless steel surfaces, and put away deliveryies."
        }
    ]
};

function displayWork() { "use strict";
    for (var job in work.jobs) { //create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

var education = {
    "schools": [{
        "name": "Solano Community College", //my education
        "city": "Fairfield, CA",
        "degree": "Associates",
        "majors": "Computer Engineering",
        "dates": "2015-2017",
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree Program",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://classroom.udacity.com/nanodegrees/nd001/"
    }]
};

education.display = function() { "use strict";
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);


            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var online in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

education.display();

var projects = {
    "projects": [{
        "title": "Portfolio Website",
        "dates": "2017",
        "description": "A responsive website showcasing knowledge and skill with html, css, and bootstrap.",
        "images": [
            "images/Responsive.PNG",
            "images/Responsive1.PNG"
        ]
    }]
};

projects.display = function() { "use strict";
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-enrty:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }


    }
};

projects.display();

var svg = d3.select("svg").on("touchmove mousemove", Moved),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var sites = d3.range(100)
    .map(function(d) { "use strict";
        return [Math.random() * width, Math.random() * height];
    });

var voronoi = d3.voronoi()
    .extent([
        [-1, -1],
        [width + 1, height + 1]
    ]);

var polygon = svg.append("g")
    .attr("class", "polygons")
    .selectAll("path")
    .data(voronoi.polygons(sites))
    .enter().append("path")
    .call(redrawPolygon);

var link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(voronoi.links(sites))
    .enter().append("line")
    .call(redrawLink);

var site = svg.append("g")
    .attr("class", "sites")
    .selectAll("circle")
    .data(sites)
    .enter().append("circle")
    .attr("r", 2.5)
    .call(redrawSite);

function Moved() { "use strict";
    sites[0] = d3.mouse(this);
    redraw();
}

function redraw() { "use strict";
    var diagram = voronoi(sites);
    polygon = polygon.data(diagram.polygons()).call(redrawPolygon);
    link = link.data(diagram.links()), link.exit().remove();
    link = link.enter().append("line").merge(link).call(redrawLink);
    site = site.data(sites).call(redrawSite);
}

function redrawPolygon(polygon) { "use strict";
    polygon
        .attr("d", function(d) {
            return d ? "M" + d.join("L") + "Z" : null;
        });
}

function redrawLink(link) { "use strict";
    link
        .attr("x1", function(d) {
            return d.source[0];
        })
        .attr("y1", function(d) {
            return d.source[1];
        })
        .attr("x2", function(d) {
            return d.target[0];
        })
        .attr("y2", function(d) {
            return d.target[1];
        });
}

function redrawSite(site) { "use strict";
    site
        .attr("cx", function(d) {
            return d[0];
        })
        .attr("cy", function(d) {
            return d[1];
        });
}
