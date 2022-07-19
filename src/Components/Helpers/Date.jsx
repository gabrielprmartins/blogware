import React from "react";
import Calendar from "../../Assets/Calendar";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const Date = ({ date, size }) => {
  const [realDate, setRealDate] = React.useState("");

  React.useEffect(() => {
    function formatDate() {
      const dateArray = date.split("-");
      const indexMonth = Number(dateArray[1].replace("0", ""));
      setRealDate(
        `${dateArray[2]} de ${months[indexMonth - 1]} de ${dateArray[0]}`
      );
    }
    formatDate();
  }, [date]);

  return (
    <span className="date">
      <Calendar size={size} /> {realDate}
    </span>
  );
};

export default Date;
