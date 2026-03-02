// Table checkbox interactions
document.addEventListener('DOMContentLoaded', () => {
  const selectAll = document.getElementById('select-all');
  const rowCheckboxes = document.querySelectorAll('.data-table tbody .table-checkbox');

  if (selectAll) {
    // Select all / deselect all
    selectAll.addEventListener('change', () => {
      rowCheckboxes.forEach(cb => {
        cb.checked = selectAll.checked;
      });
    });

    // Update select-all state when individual checkboxes change
    rowCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const allChecked = Array.from(rowCheckboxes).every(c => c.checked);
        const someChecked = Array.from(rowCheckboxes).some(c => c.checked);
        selectAll.checked = allChecked;
        selectAll.indeterminate = someChecked && !allChecked;
      });
    });
  }
});
