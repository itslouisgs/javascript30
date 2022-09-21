const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastSelected;

function handleCheck(e) {
  console.log(e)
  if (lastSelected && e.shiftKey) {
    this.checked = lastSelected.checked;
    
    let position =
      this.id > lastSelected.id
        ? { start: lastSelected.id, end: this.id }
        : { start: this.id, end: lastSelected.id };

    const checboxesToBeSelected = Array.from(checkboxes).slice(
      position.start + 1,
      position.end
    );

    checboxesToBeSelected.forEach(
      (checkbox) => (checkbox.checked = this.checked)
    );
  }

  lastSelected = this;
}

checkboxes.forEach((checkbox, i) => {
  checkbox.id = i;
  checkbox.addEventListener("click", handleCheck);
});
