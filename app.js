//Handler
function addContentClickHandler(e){
    e.preventDefault();

    var inputEl = $("#todoText");
    if(inputEl.val() != ''){
        addTodo(inputEl.val());
    }

    inputEl.val('');
}

function deleteContentClickHandler(e){
    e.preventDefault();

    $(this).parent().remove();
}

//Helper
function addTodo(todo){
    var todoContent = $("<div>",{'class':'col-md-12 todo-content align-items-center justify-content-between'})
        .append(
            $("<span>").html(todo)
        )
        .append(
            $("<button>", {'class':'btn btn-delete'})
                .on("click", deleteContentClickHandler)
                .append(
                    $("<i>",{'class':'bi bi-trash'})
                )
        )
    
    $(".todo-list").append(todoContent);
}

$("#addBtn").off("click")
    .on("click", addContentClickHandler);



