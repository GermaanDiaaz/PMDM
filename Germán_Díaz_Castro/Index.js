$(document).ready(function () {
    var elementCount = $(this).attr("notaid");

    $(document).on("click", "#btn-add-element", function () {
        $("#elementModal").modal('show');
    });

    $(document).on("click", "#btn-element-save", function () {
        var color = $("#colorNota").val();
        var anchoNota = $("#anchoNota").val();
        var titulo = $("#element-title").val();

        var newElement = 
        `<div class="card ${anchoNota} p-0 m-0"  elementid="${elementCount}">
            <div class="card-body ${color}">
                <h4 class="card-title">${titulo}</h4>
                <div style="display: flex; justify-content: space-between;">
                    <button type="button" class="btn btn-danger w-25 mx-auto mb-2" style ="border: solid black 1px" id="btn-element-delete">Borrar</button>
                    <button type="button" class="btn btn-success w-25 mx-auto mb-2" style ="border: solid black 1px" id="btn-element-edit">Editar</button>
                </div>
                
            </div>
        </div>`;


        $("#form-elements").append(newElement);
        $("#elementModal").modal('hide');
    });

    $(document).on("click", "#btn-element-delete", function () {
        var id = $(this).attr("elementid");

        $("#" + id).remove();
        $(this).closest(".card").remove();

    });

    $(document).on("click", "#btn-element-edit", function () {
        $("#elementModal").modal('show');

        var color = $("#colorNota").val();
        var anchoNota = $("#anchoNota").val();
        var titulo = $("#element-title").val();

        $(this).closest("card-title").val(titulo);
    });
    
});
