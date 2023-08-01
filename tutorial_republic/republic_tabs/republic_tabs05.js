$(document).ready(function() {
    $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function(e) {
        var activeTab = $(e.target).text(); // Obtém o nome da aba ativa
        var previousTab = $(e.relatedTarget).text(); // Obtém o nome da aba previamente ativa
        $(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);
    });
});