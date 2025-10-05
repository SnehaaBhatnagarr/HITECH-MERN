function Clock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ms = now.getMilliseconds();

  document.getElementById("clock").textContent = h + ":" + m + ":" + s + ":" + ms;
}
setInterval(Clock, 1); 
Clock();

const display = document.getElementById("answer");
document.getElementById("buttons").addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    const val = e.target.textContent;
    if (val === "C") display.value = "";
    else if (val === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += val;
    }
  }
});

document.getElementById("addbtn").addEventListener("click", function add(){
    const input = document.getElementById("todo").value;
    if (input) {
        const li = document.createElement("li");
        li.textContent=input;
        document.getElementById("todolist").appendChild(li);
        document.getElementById("todo").value = "";
    }
});
