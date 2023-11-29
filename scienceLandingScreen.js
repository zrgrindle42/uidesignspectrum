window.onload=function () {
    document.getElementById('science_class').addEventListener('click', scienceTopics);

}

function statsTopics() {
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
