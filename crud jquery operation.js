<script type="text/javascript">
$(document).on('click','.add-info',function(){
// debugger
let data = $("form").serializeArray()
$('#info-table').append(
      '<tr class="row-cls">' +
          '<td class="first-cls democls">' + data[0].value + '</td><td class="scnd-cls democls">' + data[1].value + '</td><td class="third-cls democls">' + data[2].value + '</td><td class="fourth-cls democls">' + data[3].value + '</td><td><button type="button" class="remove_cls">Delete</button><button type="button" class="edit_cls">Edit</button></td></tr>'
      )

})

$(document).on('click','.remove_cls ',function(){
$('#info-table tr')[1].remove()
});


$(document).on('click','.edit_cls',function(){
// current_row_data = $(this).parent().parent('tr').text()
debugger
usrname = $("input[name=usrname]").val()
occupation = $("input[name=occupation]").val()
age = $("input[name=age]").val()
mbl = $("input[name=mbl]").val()
$('.u-cls').val(usrname);
$('.o-cls').val(occupation);
$('.a-cls').val(age);
$('.m-cls').val(mbl);
$("#EditModal").modal('toggle');
});

$(document).on('click','.edit-info',function(){
debugger
userval=$('.u-cls').val()
occuval = $('.o-cls').val();
ageval = $('.a-cls').val();
mblval = $('.m-cls').val();
$('#info-table tr .first-cls').html(userval)
$('#info-table tr .scnd-cls').html(occuval)
$('#info-table tr .third-cls').html(ageval)
$('#info-table tr .fourth-cls').html(mblval)
});

</script>
