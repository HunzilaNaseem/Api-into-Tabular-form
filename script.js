document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('searchButton').addEventListener('click', function() {
      var searchText = document.getElementById('searchInputTable').value.toLowerCase();
      searchTable(searchText);
    });
            
    function searchTable(searchText) {
      
      // var searchText = this.value.toLowerCase();
      console.log(searchText);
  
      var rows = document.querySelectorAll('#tabledata tbody tr');
  
      rows.forEach(function(row) {
        var cells = row.querySelectorAll('td');
        var found = false;
  
        cells.forEach(function(cell) {
          if (cell.textContent.toLowerCase().includes(searchText)) {
            found = true;
          }
        });
  
        if (found) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }
  });
  
  fetch('https://corsproxy.io/?http%3A%2F%2Ftest.techsy.pk%2FTemp%2Fgettestingdata')
    .then((data) => data.json())
    .then((objectData) => {
      console.log(objectData.Data);
      let myObjectData = objectData.Data;
      let tableData = "";
      myObjectData.forEach((values) => {
        tableData += `<tr>    
           <td>${values.id}</td>
           <td>${values.name}</td>
           <td>${values.Class}</td>
           <td>${values.admissiondts}</td>
           <td>${values.status}</td>
         </tr>`;
      });
      document.getElementById("table_body").innerHTML = tableData;
    })
    .catch((error) => {
      console.log(error);
    });
  
