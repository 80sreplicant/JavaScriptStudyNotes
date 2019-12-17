const wes = document.querySelector(`.wes`);

wes.addEventListener(`click`, function(event) {
  event.preventDefault();
  console.log(`You clicked it`);
  const shouldChangePage = confirm(`This webiste is malicious!, do you want to proceed?`);
  if(shouldChangePage) {
    window.location = event.currentTarget.href;
  }
  console.log(shouldChangePage);
  // Use preventDefault to stop what something does normally.
})

const signupFrom = document.querySelector(`[name="signup"]`);

signupFrom.addEventListener(`submit`, function(event) {
  console.log(event);
  event.preventDefault();
})

const imgClick = document.querySelector(`.random`);

imgClick.addEventListener(`click`, function(event) {
  console.log(`You clicked me!`);
  console.log(event);
})