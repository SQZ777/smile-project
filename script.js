(() => {
  const calendar = document.getElementById('calendar');
  const monthLabel = document.getElementById('monthLabel');
  const prev = document.getElementById('prevMonth');
  const next = document.getElementById('nextMonth');

  if (!calendar || !monthLabel || !prev || !next) return;

  const eventDates = {
    '2026-04-26': '春日繪本野餐故事場',
    '2026-05-03': '睡前故事聲音工作坊'
  };

  let current = new Date(2026, 3, 1); // April 2026

  function render() {
    const y = current.getFullYear();
    const m = current.getMonth();
    monthLabel.textContent = `${y} 年 ${m + 1} 月`;
    calendar.innerHTML = '';

    const firstDay = new Date(y, m, 1).getDay();
    const lastDate = new Date(y, m + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      calendar.appendChild(document.createElement('div'));
    }

    for (let d = 1; d <= lastDate; d++) {
      const cell = document.createElement('div');
      const key = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      cell.textContent = d;
      if (eventDates[key]) {
        cell.classList.add('event');
        const note = document.createElement('small');
        note.textContent = ` ${eventDates[key]}`;
        cell.appendChild(document.createElement('br'));
        cell.appendChild(note);
      }
      calendar.appendChild(cell);
    }
  }

  prev.addEventListener('click', () => {
    current = new Date(current.getFullYear(), current.getMonth() - 1, 1);
    render();
  });

  next.addEventListener('click', () => {
    current = new Date(current.getFullYear(), current.getMonth() + 1, 1);
    render();
  });

  render();
})();
