$(document).ready(function(){
$('button#home-btn').click(function(e){
    e.preventDefault();
    $.ajax({
      url: '/api/creatures/all',
      method: 'GET',
      success: function(data){
        var contentSection = $('#content-section')
        contentSection.html('');
        data.forEach(function(creatures){
          contentSection.append(
            '<a href="/api/creature' + creature.id + '"class="show-link"><h2>' + creature.name + '</h2></a><p>' + creature.description + '</p>'
          );
        });
      },
      error: function(err){
        console.log(err);
      }
    });
  });

$('#content-section').on('click', 'a.show-link', function(e) {
    e.preventDefault();
    var aTag = $(this);

    $.ajax({
      url: aTag.attr('href'),
      method: 'GET',
      success: function(data){
        $('#content-section').html('<h2>' +create.name)+ '</h2><p>'+data.description + '</p>')
      },
      error: function(err){
        console.log(err);
      }
    })
  }
})
