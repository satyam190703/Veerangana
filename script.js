document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('loginBtn');
  const rideForm = document.getElementById('rideForm');
  const bookingForm = document.getElementById('bookingForm');
  const rideStatus = document.getElementById('rideStatus');
  const homePage = document.getElementById('home');
  const status = document.getElementById('status');
  const panicBtn = document.getElementById('panic');
  const panicHelp = document.getElementById('help');
  loginBtn.addEventListener('click', function() {
    // Simulate user authentication
    // Show ride booking form after successful login
    homePage.classList.add('hidden');
    rideForm.classList.remove('hidden');
  });

  bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const pickupLocation = document.getElementById('pickupLocation').value;
    const destination = document.getElementById('destination').value;
    // Send ride details to central authority (not implemented in prototype)
    console.log("Journey from "+pickupLocation+" to "+destination+" has been confirmed.");
    // Simulate ride status update
    rideForm.classList.add('hidden');
    rideStatus.classList.remove('hidden');
    status.innerHTML="Your ride is on the way. Please wait.<br>Estimated Time: 2hours 5 minutes.<br>Please stay safe and contact authorities if necessary.(Helpline No:.....)";
    panicBtn.addEventListener('click', function() {
      console.log("Ride id: ...... needs help(Emergency)");
      status.innerHTML="Tracking Your location. Sending community help and forces nearest to you.";
      panicHelp.classList.add('hidden');
      panicBtn.classList.add('hidden');
    });
    // Set timeout to simulate ride completion check
    setTimeout(function() {
      // If ride is not completed within estimated time, trigger security measures
      alert('Your ride is taking longer than expected. Please stay safe and contact authorities if necessary.(Helpline No:.....)');
    }, 15000); // 15 seconds (adjust time as needed)
  });
});
