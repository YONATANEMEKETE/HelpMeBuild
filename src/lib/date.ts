export function createdAt(date?: number): string {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const deadline = day + date!;

  return `${month} ${date ? deadline : day}, ${year}`;
}

export function formateDateForTasks(date: Date): string {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const currentDate = new Date(date);
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${month} ${day}, ${year}`;
}

export function formateDateForFeatures(date: Date): string {
  const now = new Date();
  const deadline = new Date(date);
  if (now.getMonth === deadline.getMonth) {
    if (now.getDate === deadline.getDate) {
      return 'Today';
    } else {
      return `${deadline.getDate() - now.getDate()} days left`;
    }
  } else {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const day = deadline.getDate();
    const month = months[deadline.getMonth()];
    const year = deadline.getFullYear();

    return `${month} ${day}, ${year} has been set`;
  }
}
