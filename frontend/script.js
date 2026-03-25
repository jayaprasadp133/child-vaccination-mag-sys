

const API_URL = "http://127.0.0.1:5001";


function registerChild(event) {

    event.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        parent_name: document.getElementById("parent").value,
        phone: document.getElementById("phone").value
    };

    fetch(`${API_URL}/register_child`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {

        alert(
            "✅ " + result.message +
            "\nRegister Number: " + result.register_number
        );

        document.getElementById("childForm").reset();
    })
    .catch(() => alert("Error registering child"));
}



function checkStatus() {

    const reg = document.getElementById("regNo").value;
    const resultDiv = document.getElementById("result");

    if (!reg) {
        alert("Enter Register Number");
        return;
    }

    fetch(`${API_URL}/child/${reg}`)
    .then(res => res.json())
    .then(data => {

        resultDiv.innerHTML = `
            <h3>${data.name}</h3>
            <p>DOB: ${data.dob}</p>
            <p>Parent: ${data.parent}</p>
            <p>Phone: ${data.phone}</p>
            <p>Vaccinated: ${data.vaccinated}</p>
            <p>Pending: ${data.pending}</p>
        `;
    })
    .catch(() => {
        resultDiv.innerHTML = "<p>Child not found</p>";
    });
}


function loadChildren() {

    const list = document.getElementById("childList");
    if (!list) return;

    fetch(`${API_URL}/children`)
    .then(res => res.json())
    .then(data => {

        list.innerHTML = "";

        data.forEach(child => {

            const div = document.createElement("div");
            div.className = "child-card";

            div.innerHTML = `
                <span onclick="viewChild(${child.id})" style="cursor:pointer;">
                    ${child.name}
                </span>

                <button onclick="deleteChild(${child.id})">
                    Delete
                </button>
            `;

            list.appendChild(div);
        });
    });
}



function deleteChild(id) {

    if (!confirm("Delete this child?")) return;

    fetch(`${API_URL}/delete_child/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        alert("Deleted successfully");
        loadChildren();
    });
}


function viewChild(id) {
    window.location = `child_details.html?id=${id}`;
}


function loadChildDetails() {

    const detailsDiv = document.getElementById("details");
    if (!detailsDiv) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    fetch(`${API_URL}/child_details/${id}`)
    .then(res => res.json())
    .then(data => {

        detailsDiv.innerHTML = `
            <p><b>Name:</b> ${data.name}</p>
            <p><b>Register No:</b> ${data.reg_no}</p>
            <p><b>DOB:</b> ${data.dob}</p>
            <p><b>Parent:</b> ${data.parent}</p>
            <p><b>Phone:</b> ${data.phone}</p>
            <p><b>Vaccinated:</b> ${data.vaccinated}</p>
            <p><b>Pending:</b> ${data.pending}</p>
        `;
    });
}



window.onload = function () {
    loadChildren();
    loadChildDetails();
};