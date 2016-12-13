/* eslint-disable */

function upVote(id) {
  $.ajax({
    url: '/post',
    type: 'PUT',
    dataType: 'json',
    data: {
      id: id,
    }
  }).then(function(res) {
    $('#' + id).html(res.votes);
  });
}

$(document).on('submit', '#addSteez', function(e) {
  e.preventDefault();

  $('#addPost').modal('hide');

  $.ajax({
    url: '/post',
    type: 'POST',
    dataType: 'html',
    data: {
      vid: $('#video').val(),
      tags: $('#tags').val()
    }
  }).then(function(res) {
    $('#video').val('');
    $('#tags').val('');
    $('.content').html(res);
  });
});
