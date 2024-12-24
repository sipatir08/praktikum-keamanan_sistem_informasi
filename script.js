document
  .getElementById("simulateBtn")
  .addEventListener("click", startSimulation);

function startSimulation() {
  // Simulasi deteksi ancaman
  document.getElementById("status").textContent = "Menganalisis Lalu Lintas...";
  document.getElementById("statusMessage").classList.remove("hidden");

  setTimeout(() => {
    // Simulasikan deteksi ancaman
    let threatDetected = Math.random() < 0.5; // Simulasi ancaman dengan probabilitas 50%

    if (threatDetected) {
      let threatType = getRandomThreat();  // Mendapatkan jenis ancaman
      document.getElementById("status").textContent = `Ancaman Terdeteksi: ${threatType}`;
      document.getElementById("threatType").textContent = threatType; // Menampilkan jenis ancaman
      document.getElementById("alertSection").classList.remove("hidden");
    } else {
      document.getElementById("status").textContent =
        "Tidak Ada Ancaman Teridentifikasi";
    }
  }, 2000); // Simulasikan waktu analisis 2 detik
}

function getRandomThreat() {
  // Daftar jenis ancaman yang mungkin terdeteksi
  const threats = ["Phishing", "Denial of Service (DoS)", "Manipulasi Data"];
  const randomIndex = Math.floor(Math.random() * threats.length);
  return threats[randomIndex];
}

document.getElementById("blockBtn").addEventListener("click", () => {
  alert("IP telah diblokir!");
  document.getElementById("alertSection").classList.add("hidden");
});

document.getElementById("alertSecurityBtn").addEventListener("click", () => {
  alert("Pemberitahuan telah dikirim ke tim keamanan!");
  document.getElementById("alertSection").classList.add("hidden");
});
