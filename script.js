function createTable() {
    //Write your code here
	const rn = prompt("Input number of rows");
            // Prompt the user for the number of columns
            const cn = prompt("Input number of columns");

            // Get the table element by its ID
            const table = document.getElementById("myTable");

            // Clear the existing table (if any)
            table.innerHTML = "";

            // Create the table rows and columns based on user input
            for (let i = 0; i < rn; i++) {
                // Create a new row
                const row = document.createElement("tr");

                for (let j = 0; j < cn; j++) {
                    // Create a new column (cell)
                    const cell = document.createElement("td");
                    // Set the text content of the cell
                    cell.textContent = `Row-${i} Column-${j}`;
                    // Append the cell to the row
                    row.appendChild(cell);
                }

                // Append the row to the table
                table.appendChild(row);
            }
  
}
