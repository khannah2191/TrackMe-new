$("#navbar").load("navbar.html");
$("#footer").load("footer.html");
const API_URL = 'http://localhost:5000/api';
$.get(`${API_URL}/devices`)
.then(response => {
  response.forEach(device => {
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
); });
})
.catch(error => {
  console.error(`Error: ${error}`);
});

$.get(`${API_URL}/devices`)
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(`Error: ${error}`);
});

//const devices = [];
//devices.push({ user: "Mary", name: "Mary's iPhone" });
//devices.push({ user: "Alex", name: "Alex's Surface Pro" });
//devices.push({ user: "Mary", name: "Mary's MacBook" });

//Make a GET request to the mock API by adding the following line to app.js in your public folder, in place
//of the localStorage.getItem statement for devices. You can also remove the devices.forEach(...
//  block of code as we won't be using that anymore.

//const devices = JSON.parse(localStorage.getItem("devices")) || [];


//devices.forEach(function (device) {
//  $("#devices tbody").append(`
//    <tr>
//    <td>${device.user}</td>
//    <td>${device.name}</td>
//    </tr>`);
//});

// $("#add-device").on("click", function () {
//   const user = $("#user").val();
//   const name = $("#name").val();
//   devices.push({ user, name });
//   localStorage.setItem("devices", JSON.stringify(devices));
//   //location.href = "device-list.html";
//   location.href = "/";
// });
const response = $.get('http://localhost:3001/devices');
console.log(response);

$("#add-device").on("click", () => {
  const name = $("#name").val();
  const user = $("#user").val();
  const sensorData = [];
  
  const body = {
    name,
    user,
    sensorData,
  };
  
  $.post(`${API_URL}/devices`, body)
    .then((response) => {
      location.href = "/";
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
});


const MQTTAPI_URL = 'http://localhost:5001';

$("#send-command").on("click", function () {
  const command = $("#command").val();
  const deviceId = $("#deviceId").val();

  const body ={
    deviceId,
    command,
  };
  $.post(`${MQTTAPI_URL}/send-command`, body)
    .then((response) => {
      console.log(`HEllO SEND-COMMND SUCCESSFUL`);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });



  
});
