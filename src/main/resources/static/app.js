const form = document.getElementById("application-form");
const companyInput = document.getElementById("company");
const positionInput = document.getElementById("position");
const statusInput = document.getElementById("status");

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

  console.log("Response status:", response.status);
});
