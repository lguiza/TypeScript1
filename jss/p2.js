import { series } from "./data.js";
function cargarSeries(series) {
    var tbody = document.querySelector("#seriesTable tbody");
    if (tbody) {
        tbody.innerHTML = "";
        series.forEach(function (serie) {
            var row = "<tr>\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n      </tr>");
            tbody.innerHTML += row;
        });
    }
}
function mostrarPromedioTemporadas(series) {
    var divPromedio = document.getElementById("promedioTemporadas");
    if (divPromedio) {
        var totalTemporadas = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
        var promedio = totalTemporadas / series.length;
        divPromedio.innerHTML = "<strong>Promedio de temporadas:</strong> ".concat(promedio.toFixed(2));
    }
}
// Ejecuta las funciones cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    cargarSeries(series);
    mostrarPromedioTemporadas(series);
});
