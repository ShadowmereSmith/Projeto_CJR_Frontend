export function FormatarData(dataString: string): string {
  const date = new Date(dataString);

  const optionsData: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const optionsHora: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  const dataFormatada = date.toLocaleDateString('pt-BR', optionsData);
  const horaFormatada = date.toLocaleTimeString('pt-BR', optionsHora);

  return `${dataFormatada} ás ${horaFormatada}`;
}