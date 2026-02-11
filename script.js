let srNo = 1;
let totalMax = 0;
let totalObt = 0;

// ===================================== STUDENT FORM SUBMIT =================================================
document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("outName").innerText = document.getElementById("stdName").value;
    document.getElementById("outFName").innerText = document.getElementById("fName").value;
    document.getElementById("outRoll").innerText = document.getElementById("rollno").value;
    document.getElementById("outClass").innerText = document.getElementById("class").value;
    document.getElementById("outDob").innerText = document.getElementById("dob").value;


    $("#certificate").fadeIn();
});

// ===================================== SUBJECT FORM SUBMIT =================================================

document.getElementById("subjectForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let subName = document.getElementById("subName").value;
    let short = document.getElementById("shName").value;
    let max = Number(document.getElementById("maxMark").value);
    let obt = Number(document.getElementById("obtMark").value);

    // ===================================== CALCULATE PER SUBJECT GRADE =================================================

    let percent = (obt / max) * 100;
    let grade = "";

    if (percent >= 90) grade = "A+";
    else if (percent >= 80) grade = "A";
    else if (percent >= 70) grade = "B";
    else if (percent >= 60) grade = "C";
    else grade = "F";


    // ===================================== ADD RECORD IN ROW TABLE =================================================

    const table = document.querySelector("#resultTable tbody");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${srNo++}</td>
        <td class="left">${subName}</td>
        <td>${short}</td>
        <td>${max}</td>
        <td>${obt}</td>
        <td>${grade}</td>
      `;
    table.appendChild(row);

    // ===================================== OVERALL TOTAL=================================================

    totalMax += max;
    totalObt += obt;

    document.getElementById("totalMax").innerText = totalMax;
    document.getElementById("totalObt").innerText = totalObt;

    let finalPercent = (totalObt / totalMax) * 100;
    let finalGrade = "";

    if (finalPercent >= 90) finalGrade = "A+";
    else if (finalPercent >= 80) finalGrade = "A";
    else if (finalPercent >= 70) finalGrade = "B";
    else if (finalPercent >= 60) finalGrade = "C";
    else finalGrade = "F";

    document.getElementById("finalGrade").innerText = finalGrade;

    document.getElementById("subjectForm").reset();
});