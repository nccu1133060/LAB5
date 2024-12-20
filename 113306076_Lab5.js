document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mathGrade = parseFloat(document.getElementById('mathGrade').value);
    const englishGrade = parseFloat(document.getElementById('englishGrade').value);
    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    const tableBody = document.querySelector('#gradesTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;

    tableBody.appendChild(newRow);

    updateAverages();

    document.getElementById('gradeForm').reset();
});

function updateAverages() {
    const rows = document.querySelectorAll('#gradesTable tbody tr');

    let mathTotal = 0;
    let englishTotal = 0;
    let overallTotal = 0;
    let count = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        mathTotal += parseFloat(cells[0].textContent);
        englishTotal += parseFloat(cells[1].textContent);
        overallTotal += parseFloat(cells[2].textContent);
        count++;
    });

    const mathAverage = (mathTotal / count).toFixed(2);
    const englishAverage = (englishTotal / count).toFixed(2);
    const overallAverage = (overallTotal / count).toFixed(2);

    document.getElementById('mathAverage').textContent = `Math Avg: ${mathAverage}`;
    document.getElementById('englishAverage').textContent = `English Avg: ${englishAverage}`;
    document.getElementById('overallAverage').textContent = `Overall Avg: ${overallAverage}`;
}
