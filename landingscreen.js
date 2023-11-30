window.onload=function(){
    document.getElementById('stats_class').addEventListener('click', statsTopics);
    document.getElementById('science_class').addEventListener('click', scienceTopics);
    document.getElementById('algebra_class').addEventListener('click', algebraTopics);
    document.getElementById('geography_class').addEventListener('click', geographyTopics);
    document.getElementById('design_class').addEventListener('click', uiTopics);
}

function statsTopics() {
    document.getElementById("course_1_item_1").textContent = 'Introduction';
    document.getElementById("course_1_item_2").textContent = 'Graphical Representation of Data';
    document.getElementById("course_1_item_3").textContent = 'Bivariate';
    document.getElementById("course_1_item_4").textContent = 'Probability';
    document.getElementById("course_1_item_5").textContent = 'Probability Distributions';
    document.getElementById("course_1_item_6").textContent = 'Sample Variability';
    document.getElementById("course_2_item_1").textContent = 'Inferential Statistice';
    document.getElementById("course_2_item_2").textContent = 'Inferences Involving One Population';
    document.getElementById("course_2_item_3").textContent = 'Inferences Involving Two Populations';
    document.getElementById("course_2_item_4").textContent = 'Analysis of Variance';
    document.getElementById("course_2_item_5").textContent = 'Analysis of Regression';
    document.getElementById("course_2_item_6").textContent = 'Nonparametric Statistics';
}

function scienceTopics() {
    document.getElementById("course_1_item_1").textContent = 'Introduction';
    document.getElementById("course_1_item_2").textContent = 'Biology';
    document.getElementById("course_1_item_3").textContent = 'Chemistry';
    document.getElementById("course_1_item_4").textContent = 'Physics';
    document.getElementById("course_1_item_5").textContent = 'Geology';
    document.getElementById("course_1_item_6").textContent = 'Astronomy';
    document.getElementById("course_2_item_1").textContent = 'Computer Science';
    document.getElementById("course_2_item_2").textContent = 'Genetics';
    document.getElementById("course_2_item_3").textContent = 'Thermodynamics';
    document.getElementById("course_2_item_4").textContent = 'Astrophysics';
    document.getElementById("course_2_item_5").textContent = 'Quantum Mechanics';
    document.getElementById("course_2_item_6").textContent = 'Meteorology';
}

function algebraTopics() {
    document.getElementById("course_1_item_1").textContent = 'Introduction';
    document.getElementById("course_1_item_2").textContent = 'Linear Equation';
    document.getElementById("course_1_item_3").textContent = 'Determinant';
    document.getElementById("course_1_item_4").textContent = 'Dot Product';
    document.getElementById("course_1_item_5").textContent = "Cramer's Rule";
    document.getElementById("course_1_item_6").textContent = 'Matrix';
    document.getElementById("course_2_item_1").textContent = 'Functional Analysis';
    document.getElementById("course_2_item_2").textContent = 'Geometry';
    document.getElementById("course_2_item_3").textContent = 'Diagonal Matrix';
    document.getElementById("course_2_item_4").textContent = 'Linear Map';
    document.getElementById("course_2_item_5").textContent = 'Vector';
    document.getElementById("course_2_item_6").textContent = 'Operation';
}

function geographyTopics() {
    document.getElementById("course_1_item_1").textContent = 'Introduction';
    document.getElementById("course_1_item_2").textContent = 'Physical Geography';
    document.getElementById("course_1_item_3").textContent = 'Human Geography';
    document.getElementById("course_1_item_4").textContent = 'Physics';
    document.getElementById("course_1_item_5").textContent = 'Geopolitics';
    document.getElementById("course_1_item_6").textContent = 'Economic Geography';
    document.getElementById("course_2_item_1").textContent = 'Cartography & Map Skills';
    document.getElementById("course_2_item_2").textContent = 'Environmental Geography';
    document.getElementById("course_2_item_3").textContent = 'Cultural Geography';
    document.getElementById("course_2_item_4").textContent = 'Regional Studies';
    document.getElementById("course_2_item_5").textContent = 'Geography of Health';
    document.getElementById("course_2_item_6").textContent = 'Tourism Geography';
}

function uiTopics() {
    document.getElementById("course_1_item_1").textContent = 'Interface Metaphor';
    document.getElementById("course_1_item_2").textContent = 'Interaction Types';
    document.getElementById("course_1_item_3").textContent = 'Conceptual Models';
    document.getElementById("course_1_item_4").textContent = 'Frameworks';
    document.getElementById("course_1_item_5").textContent = 'Design Concepts';
    document.getElementById("course_1_item_6").textContent = 'Paradigms';
    document.getElementById("course_2_item_1").textContent = 'Visions';
    document.getElementById("course_2_item_2").textContent = 'Theories';
    document.getElementById("course_2_item_3").textContent = 'Designer Model';
    document.getElementById("course_2_item_4").textContent = 'User Model';
    document.getElementById("course_2_item_5").textContent = 'Icons';
    document.getElementById("course_2_item_6").textContent = 'White Space';
}
