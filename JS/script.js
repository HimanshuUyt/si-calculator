function calculateSI() {
    let P = document.getElementById("principal").value;
    let R = document.getElementById("rate").value;
    let N = document.getElementById("time").value;

    let SI = (P * R * N) / 100;

    document.getElementById("result").innerText = "Simple Interest: " + SI;
}   