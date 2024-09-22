// Mengambil elemen form
const staffForm = document.getElementById("staffForm");

// Menambahkan event listener pada submit form
staffForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Mengambil nilai dari setiap input form
  const name = document.getElementById("name").value;
  const address = document.getElementById("position").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // Menampilkan SweetAlert dengan informasi dari input form
  Swal.fire({
    title: "Staff Details",
    html: `
      <strong>Name:</strong> ${name} <br>
      <strong>Address:</strong> ${address} <br>
      <strong>Phone Number:</strong> ${phone} <br>
      <strong>Email:</strong> ${email}
    `,
    icon: "info",
    confirmButtonText: "OK",
  });

  // Mengosongkan form setelah submit
  staffForm.reset();
});
