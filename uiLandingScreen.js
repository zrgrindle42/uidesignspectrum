window.onload=function () {
    document.getElementById('ui_class').addEventListener('click', uiTopics);

}

function statsTopics() {
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