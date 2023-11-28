window.onload=function(){
    document.getElementById('stats_class').addEventListener('click', statsTopics);

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