import { series } from "./data.js";
import { Serie } from "./Serie.js";

function cargarSeries(series: Serie[]): void {
  const tbody: HTMLElement | null = document.querySelector("#seriesTable tbody");
  if (tbody) {
    tbody.innerHTML = "";
    series.forEach((serie) => {
      let row: string = `<tr>
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  }
}

function mostrarPromedioTemporadas(series: Serie[]): void {
  const divPromedio: HTMLElement | null = document.getElementById("promedioTemporadas");
  if (divPromedio) {
    const totalTemporadas: number = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const promedio: number = totalTemporadas / series.length;
    divPromedio.innerHTML = `<strong>Promedio de temporadas:</strong> ${promedio.toFixed(2)}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarSeries(series);
  mostrarPromedioTemporadas(series);
});
