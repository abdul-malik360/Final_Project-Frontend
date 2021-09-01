const weekend = document.getElementById('date');
weekend.addEventListener('input', function(noWeekend){
  let day = new Date(this.value).getUTCDay();
  if([6,0].includes(day)){
    noWeekend.preventDefault();
    this.value = '';
    alert('Cars are not booked on Weekends');
  }
});