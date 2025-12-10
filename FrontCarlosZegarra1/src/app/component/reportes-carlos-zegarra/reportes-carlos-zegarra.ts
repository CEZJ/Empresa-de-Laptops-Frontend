import { AfterViewInit, Component, ChangeDetectorRef } from '@angular/core'; // <--- 1. IMPORTAR AQUÍ
import { MatTableModule } from '@angular/material/table';
import { IncidenteService } from '../../services/incidente-service';
import {
  ArcElement, BarController, BarElement, CategoryScale, Chart,
  Legend, LinearScale, PieController, Title, Tooltip
} from 'chart.js';

@Component({
  selector: 'app-reportes-carlos-zegarra',
  imports: [ MatTableModule ],
  templateUrl: './reportes-carlos-zegarra.html',
  styleUrl: './reportes-carlos-zegarra.css',
})
export class ReportesCarlosZegarra implements AfterViewInit {

  // 2. INYECTAR ChangeDetectorRef EN EL CONSTRUCTOR
  constructor(
    private cezjIncidenteService: IncidenteService,
    private cdr: ChangeDetectorRef
  ) { }

  public datos: { cezjNombreIncidente: string; cezjCantidadIncidentes: number }[] = [];
  public displayedColumns: string[] = ['nombre', 'cantidad'];

  ngAfterViewInit(): void {
    Chart.register(BarController, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title, PieController);

    this.cezjIncidenteService.listCount().subscribe(response => {
      this.datos = response;

      // 3. AGREGAR ESTA LÍNEA OBLIGATORIA
      // Esto le dice a Angular: "Oye, acabo de cambiar los datos, actualiza la tabla AHORA".
      this.cdr.detectChanges();

      console.log(this.datos);

      const labels = response.map(x => x.cezjNombreIncidente);
      const data = response.map(x => x.cezjCantidadIncidentes);

      setTimeout(() => {
        const ctx = document.getElementById('myChart') as HTMLCanvasElement;
        // Destruir gráfico previo si existe para evitar bugs visuales
        const existingChart = Chart.getChart(ctx);
        if (existingChart) existingChart.destroy();

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Incidentes',
              data: data,
              backgroundColor: ['red','blue','green','yellow','orange','purple']
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: true },
              title: { display: true, text: 'Cantidad de Incidentes por tipo' }
            }
          }
        });
      }, 100);
    });
  }
}
