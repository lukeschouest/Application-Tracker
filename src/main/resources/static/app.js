const form = document.getElementById("application-form");
const companyInput = document.getElementById("company");
const positionInput = document.getElementById("position");
const statusInput = document.getElementById("status");
const applicationlist = document.getElementById("application-list");

form.addEventListener("submit", async (Event) => {
  Event.preventDefault();

  const application = {
    company: companyInput.value,
    position: positionInput.value,
    status: statusInput.value,
  };

  const json = JSON.stringify(application);

  const response = await fetch("/applications", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: json,
  });

  if (response.ok) {
    await loadApplications();
    form.reset();
  }
});

async function loadApplications() {
  const response = await fetch("/applications");

  const applications = await response.json();

  applicationlist.textContent = "";

  for (const application of applications) {
    const item = document.createElement("li");

    item.textContent =
      application.company +
      " - " +
      application.position +
      " - " +
      application.status;

    applicationlist.appendChild(item);
  }
}

loadApplications();
