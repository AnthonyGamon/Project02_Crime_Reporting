// const $ = window.$;

$(document).ready(() => {
  const userEmail = $('#email');
  const crimeTitle = $('#title');
  const crimeBody = $('.crimeBody');
  const crimeLocation = $('#latAndLon');

  let id = $(this).data('id');
  let crimeId;
  let updating = false;

  // Event listeners for posting, updating, and deleting crimes
  $(document).on('click', '#crimeSubmit', submitCrime);
  $(document).on('click', '.edit-btn', updateCrime);
  $(document).on('click', '.delete-btn', deleteCrime);

  getCrimes();

  // function to submit crime and take user to crime page
  function submitCrime(event) {
    event.preventDefault();
    // wont submit crime if inputs are empty
    if (
      !userEmail.val().trim() ||
      !crimeTitle.val().trim() ||
      !crimeBody.val().trim() ||
      !crimeLocation.val().trim()
    ) {
      return;
    }
    // if inputs are valid, sumbit crime and redirect user to crime page
    else {
      $.ajax({
        method: 'POST',
        url: '/api/crimes'
      }).then(getCrimes);
      window.location.href = '/crime';
    }
  }
  if (updating) {
    newCrime.id = crimeId;
    updateCrime(newCrime);
  }
  // function to get Crimes
  function getCrimes(data) {
    $.get('/api/crimes', () => {
      crimes = data;
    });
  }
  // function to update Crimes
  function updateCrime() {
    $.ajax({
      method: 'PUT',
      url: '/api/crime' + id,
      data: crimes
    });
  }
  // function to delete Crimes
  function deleteCrime(event) {
    event.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/api/crime' + id
    }).then(getCrimes);
  }
});
