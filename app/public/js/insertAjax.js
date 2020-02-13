// send a form and show its data!
// to have ...
// 2 APIs in one page - at the same time
// use Ajax - to send and receive data - behind the scene

$(function() {

// find1 ajax
  $.getJSON('api', updateFeedback)

// insert ajax 
$('#insertform').submit(function(e){
  e.preventDefault()

  $.post('api',{
    tourPrice: $('#tourPrice').val(),
    tourDescription: $('#tourDescription').val()
  }, updateFeedback)

})

// delete ajax
$('.feedback-messages').on('click',function(e){

  if(e.target.className == 'glyphicon glyphicon-remove'){
    $.ajax({
      url: 'api/' + e.target.id,
      type: 'DELETE',
      success: updateFeedback
    })
  }

})

// find2 ajax
  function updateFeedback(data) {
   var output = ''

   $.each(data,function(key, item) {
     output += '     <div class="feedback-item item-list media-list">';
     output += '       <div class="feedback-item media">';
     output += '<div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="'+ key
     +'" class="glyphicon glyphicon-remove"></span></button></div>';
     output += '         <div class="feedback-info media-body">';
     output += '           <div class="feedback-head">';
     output += '             <div class="feedback-title">' + item.title +
     '<small class="feedback-name label label-info">' + item.name + '</small></div>';
     output += '           </div>';
     output += '           <div class="feedback-messages">' + item.message + '</div>';
     output += '         </div>';
     output += '       </div>';
     output += '     </div>';
   })

   $('.feedback-messages').html(output)
  }


})
