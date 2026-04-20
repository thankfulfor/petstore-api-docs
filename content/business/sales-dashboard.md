# Дашборд продаж

Ниже пример простого дашборда с динамикой заказов.

<canvas id="salesChart" height="120"></canvas>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("salesChart");
  if (!canvas) return;

  new Chart(canvas, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Orders",
        data: [12, 19, 15, 26, 31, 28],
        borderColor: "#1e88e5",
        backgroundColor: "rgba(30, 136, 229, 0.15)",
        fill: true,
        tension: 0.35
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } }
    }
  });
});
</script>
