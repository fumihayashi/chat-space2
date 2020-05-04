$(function(){ 
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="message">
          <div class="chat-main__messages--info">
            <div class="chat-main__messages--info-group-name">
              ${message.user_name}
            </div>
            <div class="chat-main__messages--info-date">
              ${message.created_at}
            </div>
          </div>
          <p class="chat-main__messages--date-message">
            ${message.content}
          </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="message">
          <div class="chat-main__messages--info">
            <div class="chat-main__messages--info-group-name">
              ${message.user_name}
            </div>
            <div class="chat-main__messages--info-date">
              ${message.created_at}
            </div>
          </div>
          <p class="chat-main__messages--date-message">
            ${message.content}
          </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  });
});