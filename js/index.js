
$(".openNav").on('click', function () {

    $("#leftMenu").css('left', '0px')
    $(".openNav").css('left', '400px')
})

$(".closebtn").on('click', function () {
    $("#leftMenu").css('left', '-400px')
    $(".openNav").css('left', '100px')
})
$(".accordian h3").on('click', (e) => {
    $(e.target).next().slideToggle();
    $('.accordian div').not($(e.target).next()).slideUp();
})
let time = setInterval(() => {
    let now = new Date().getTime();
    let countDownDate = new Date("2024-07-23 23:00:00").getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance % (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000));
    displayCounterData(days,hours,minutes,seconds)
}, 1000)
function displayCounterData(days,hours,minutes,seconds) {
    let cartona = `
    
             <div class="col-md-6 col-lg-3">
                <div class="card p-4 bg-transparent border-white text-white">
                                  <div class="card-body text-center">
                                    <h3 class="card-title">${days}</h3>
                                  </div>
                                  

                </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card p-4 bg-transparent border-white text-white">  <div class="card-body text-center">
                <h3 class="card-title">${hours}</h3>
              </div>
              </div>
      </div> <div class="col-md-6 col-lg-3">
        <div class="card p-4 bg-transparent border-white text-white">  <div class="card-body text-center">
            <h3 class="card-title">${minutes}</h3>
          </div>
          </div>
  </div> <div class="col-md-6 col-lg-3">
    <div class="card p-4 bg-transparent border-white text-white">  <div class="card-body text-center">
        <h3 class="card-title">${seconds}</h3>
      </div>
      </div>
</div>
    
    
    
    
    
    
    `
    document.getElementById('counterData').innerHTML=cartona
}
var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});
