const form = document.getElementById("application-form");
const companyInput = document.getElementById("company");
const positionInput = document.getElementById("position");
const statusInput = document.getElementById("status");
const applicationlist = document.getElementById("application-list");
const message = document.getElementById("message");

form.addEventListener("submit", async (Event) => {
  Event.preventDefault();

  const application = {
    company: companyInput.value,
    position: positionInput.value,
    status: statusInput.value,
  };

  const json = JSON.stringify(application);

  try {
    const response = await fetch("/applications", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: json,
    });

    if (response.ok) {
      message.textContent = "Application saved successfully.";

      await loadApplications();
      form.reset();
    } else {
      message.textContent = "Couldn't save the application. Please try again.";
    }
  } catch (error) {
    message.textContent = "A connection or response error occurred.";

    console.error(error);
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
